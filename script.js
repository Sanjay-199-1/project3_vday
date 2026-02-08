// Track user interaction for autoplay permission
let userHasInteracted = false;
let assetsLoaded = false;

// Enable autoplay after first user interaction
document.addEventListener('click', function enableAutoplayAfterInteraction() {
    userHasInteracted = true;
    document.removeEventListener('click', enableAutoplayAfterInteraction);
}, { once: true });

document.addEventListener('touchstart', function enableAutoplayAfterTouch() {
    userHasInteracted = true;
    document.removeEventListener('touchstart', enableAutoplayAfterTouch);
}, { once: true });

// ===== PASSWORD MANAGEMENT =====
// Different passwords for each section
const passwords = {
    april: '03/04/2023',
    meet: '08/10/2023',
    date: '28/01/2026'
};

// Hints shown in the password modal for each section
const passwordHints = {
    april: 'first special day',
    meet: 'first meet',
    date: 'Most recent special day'
};

// Track which section needs password
let currentCardSection = null;

// ===== MODAL FUNCTIONS =====
/**
 * Open password modal for a specific card
 * @param {string} section - The section identifier (april, meet, date)
 * @param {string} cardType - The card type for navigation
 */
function openCard(section, cardType) {
    currentCardSection = { section, cardType };
    openPasswordModal();
}

/**
 * Open the password modal
 */
function openPasswordModal() {
    const modal = document.getElementById('passwordModal');
    const input = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    
    modal.classList.remove('hidden');
    input.value = '';
    errorMessage.textContent = '';
    input.focus();
    // Show hint for the current section (if available)
    const hintEl = document.getElementById('passwordHint');
    if (hintEl && currentCardSection) {
        const hint = passwordHints[currentCardSection.section] || '';
        hintEl.textContent = hint ? `Hint: ${hint}` : '';
    }
    
    // Allow Enter key to submit password
    input.onkeypress = function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    };
}

/**
 * Close the password modal
 */
function closePasswordModal() {
    const modal = document.getElementById('passwordModal');
    modal.classList.add('hidden');
}

/**
 * Load images from data-src attributes
 * Only called after password verification
 */
function loadImages() {
    if (assetsLoaded) return; // Only load once
    
    // Load image elements
    const imageElements = document.querySelectorAll('img[data-src]');
    imageElements.forEach(img => {
        if (!img.src && img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
    
    assetsLoaded = true;
}

/**
 * Verify the entered password
 */
function checkPassword() {
    const input = document.getElementById('passwordInput');
    const password = input.value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (!currentCardSection) {
        errorMessage.textContent = 'Error: Invalid section';
        return;
    }
    
    const correctPassword = passwords[currentCardSection.section];
    
    if (password === correctPassword) {
        // Password correct - load images
        loadImages();
        // Navigate to the section
        closePasswordModal();
        navigateToPage(currentCardSection.cardType);
    } else {
        // Wrong password
        errorMessage.textContent = '❌ Wrong password! Try again.';
        input.value = '';
        input.focus();
    }
}

// ===== PAGE NAVIGATION =====
/**
 * Navigate between pages
 * @param {string} pageName - The page to navigate to
 */
function navigateToPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the selected page
    let pageId;
    switch(pageName) {
        case 'april':
            pageId = 'aprilPage';
            break;
        case 'meet':
            pageId = 'meetPage';
            break;
        case 'date':
            pageId = 'datePage';
            break;
        default:
            pageId = 'homePage';
    }
    
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        // Auto-play section audio when a content page becomes active
        stopAllAudio();
        if (pageName === 'april' || pageName === 'meet' || pageName === 'date') {
            playAudio(pageName);
        }
    }
}

/**
 * Go back to home page
 */
function goHome() {
    stopAllAudio();
    navigateToPage('home');
    // Reset Valentine response
    resetValentineResponse();
}

// ===== AUDIO MANAGEMENT =====
/**
 * Stop all audio elements except the one about to play
 */
function stopAllAudio(excludeId = null) {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        if (!excludeId || audio.id !== excludeId) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}

/**
 * Play audio for a specific section
 * @param {string} section - The section (april, meet, date)
 */
function playAudio(section) {
    const audioId = `audio-${section}`;
    const audio = document.getElementById(audioId);
    
    if (audio) {
        // Stop all OTHER audio except this one
        stopAllAudio(audioId);
        
        // Reset this audio to the beginning
        audio.currentTime = 0;
        audio.volume = 0.5; // Set volume to 50%
        
        // Play audio
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Audio playback error:', error.message);
            });
        }
    }
}

/**
 * Toggle audio playback
 * @param {string} audioId - The audio element ID
 */
function toggleAudio(audioId) {
    const audio = document.getElementById(audioId);
    
    if (audio) {
        if (audio.paused) {
            // Stop all other audio
            stopAllAudio();
            // Play this audio
            audio.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        } else {
            audio.pause();
        }
    }
}

// ===== VALENTINE QUESTION LOGIC =====
let yesButtonScale = 1;
let noButtonClickCount = 0;

/**
 * Handle YES button click
 */
function onYesClick() {
    const responseSection = document.getElementById('responseSection');
    const responseText = document.getElementById('responseText');
    const valentineButtons = document.querySelector('.valentine-buttons');
    
    // Hide buttons
    valentineButtons.style.display = 'none';
    
    // Show response
    responseSection.classList.remove('hidden');
    responseText.textContent = 'Awwww!!! I love youuuu babee ❤️😍';
    
    // Trigger animations
    triggeryesAnimation();
    
    // Play celebration song
    stopAllAudio();
    playAudio('yes');
}


/**
 * Handle NO button click
 */
function onNoClick() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    noButtonClickCount++;
    
    // Move NO button to random position
    moveNoButtonRandomly();
    
    // Grow YES button
    yesButtonScale += 0.2;
    yesBtn.style.transform = `scale(${yesButtonScale})`;
    
    // Change NO button text based on click count and cycle messages
    const messages = [
        'please dont click me 😥',
        'he loves you so much 😭',
        'You are his everything 😫',
        'Please click yesss 😭'
    ];
    const idx = (noButtonClickCount - 1) % messages.length;
    noBtn.textContent = messages[idx];
    
    // After completing the sequence, reset counter so messages repeat
    if (noButtonClickCount >= messages.length) {
        noButtonClickCount = 0;
    }
}

/**
 * Move NO button to random position
 */
function moveNoButtonRandomly() {
    const noBtn = document.getElementById('noBtn');
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noBtn.style.transition = 'all 0.3s ease';
}

/**
 * Clone YES button
 */
function cloneYesButton() {
    const valentineButtons = document.querySelector('.valentine-buttons');
    const yesBtn = document.getElementById('yesBtn');
    
    // Create a clone of YES button
    const clone = yesBtn.cloneNode(true);
    clone.style.position = 'relative';
    clone.onclick = onYesClick;
    
    valentineButtons.appendChild(clone);
}

/**
 * Trigger YES animation
 */
function triggeryesAnimation() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.animation = 'floatHeart 3s ease-in infinite';
    });
}

/**
 * Reset Valentine response
 */
function resetValentineResponse() {
    const responseSection = document.getElementById('responseSection');
    const valentineButtons = document.querySelector('.valentine-buttons');
    
    responseSection.classList.add('hidden');
    valentineButtons.style.display = 'flex';
    
    // Reset buttons
    document.getElementById('yesBtn').style.transform = 'scale(1)';
    document.getElementById('noBtn').style.transform = 'translate(0, 0)';
    
    // Remove cloned buttons
    const allYesButtons = document.querySelectorAll('#yesBtn');
    if (allYesButtons.length > 1) {
        for (let i = 1; i < allYesButtons.length; i++) {
            allYesButtons[i].remove();
        }
    }
    
    yesButtonScale = 1;
    noButtonClickCount = 0;
}

// ===== LOVE NOTE FUNCTIONS =====
/**
 * Show love note modal
 */
function showLoveNote() {
    const modal = document.getElementById('loveNoteModal');
    modal.classList.remove('hidden');
}

/**
 * Close love note modal
 */
function closeLoveNote() {
    const modal = document.getElementById('loveNoteModal');
    modal.classList.add('hidden');
}

// ===== INITIALIZATION =====
/**
 * Initialize the application
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Valentine\'s Day Website Loaded! ❤️');
    
    // Show home page by default
    navigateToPage('home');
    
    // Close modal if clicked outside
    const modal = document.getElementById('passwordModal');
    const loveNoteModal = document.getElementById('loveNoteModal');
    window.onclick = function(event) {
        if (event.target === modal) {
            closePasswordModal();
        }
        if (event.target === loveNoteModal) {
            closeLoveNote();
        }
    };
});

// ===== DEBUGGING / HELPER FUNCTIONS =====
/**
 * Show correct passwords (for development/testing)
 */
function showPasswords() {
    console.log('Password for April 3:', passwords.april);
    console.log('Password for First Meet:', passwords.meet);
    console.log('Password for First Date:', passwords.date);
}