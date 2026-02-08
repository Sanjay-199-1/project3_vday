# 🎨 Customization Examples

This file provides ready-to-use code snippets for common customizations.

---

## 🎵 Music Customization

### Using Royalty-Free Music Sites

**Pixabay Music:**
```html
<audio id="audio-april" src="https://cdn.pixabay.com/download/audio/..."></audio>
```

**YouTube Audio Library (Download & Host):**
```html
<audio id="audio-april" src="./assets/audio/romantic-song-1.mp3"></audio>
```

**Complete Audio Section Example:**
```html
<audio id="audio-april" src="./assets/audio/april-music.mp3" preload="none"></audio>
<audio id="audio-meet" src="./assets/audio/first-meet-music.mp3" preload="none"></audio>
<audio id="audio-date" src="./assets/audio/first-date-music.mp3" preload="none"></audio>
```

---

## 🖼️ Photo Gallery Customization

### Single Gallery Item Template
```html
<div class="gallery-item fade-in">
    <img src="./assets/images/memory1.jpg" alt="Special Memory">
    <p class="caption">Your custom caption here</p>
</div>
```

### Add More Gallery Items
Simply duplicate the gallery-item div and update:
```html
<!-- Add to any gallery section -->
<div class="gallery-item fade-in">
    <img src="./assets/images/your-photo.jpg" alt="Description">
    <p class="caption">Your caption text</p>
</div>
```

### Gallery Captions Ideas
- "Our first laugh together"
- "You made me smile like never before"
- "This is where it all started"
- "Forever starts now"
- "My favorite person"
- "Every moment with you is special"

---

## 🔐 Password Customization

### Change All Passwords
**In script.js, find and replace:**
```javascript
// Current passwords
const passwords = {
    april: 'april2023',
    meet: 'firstmeet',
    date: 'firstdate'
};

// Your custom passwords
const passwords = {
    april: 'yourbirthday',
    meet: 'dateofmeeting',
    date: 'dateofdate'
};
```

### Password Ideas
- Dates: `03041999` or `03-04-1999`
- Names: `yourname+hername`
- Special: `ilove<name>`
- Coordinates: `40.71N74.01W` (Your special location)
- Binary: `<3` (that's a heart!)

---

## 💌 Love Note Customization

### Default Love Note Location
**In index.html**, find the First Date page section:

```html
<div class="love-note fade-in">
    <h3>💌 A Love Note</h3>
    <p>
        From the moment we met, I knew my life was going to change forever...
    </p>
</div>
```

### Example Love Notes

**Romantic:**
```html
<div class="love-note fade-in">
    <h3>💌 A Love Note for You</h3>
    <p>
        My dearest,
        <br><br>
        Every moment with you feels like a dream I never want to wake from.
        Your smile brightens my darkest days, and your laugh is my favorite song.
        I fall more in love with you every single day.
        <br><br>
        Thank you for being my greatest adventure.
        <br><br>
        Forever yours,
        <br>
        [Your Name] ❤️
    </p>
</div>
```

**Playful:**
```html
<div class="love-note fade-in">
    <h3>💌 Love Letter from Me to You</h3>
    <p>
        Hey beautiful,
        <br><br>
        I just wanted to say that you're the best decision I never planned to make.
        You make my heart go bippity-boppity-boo every time I see you.
        <br><br>
        Thanks for being my favorite human.
        <br><br>
        All my love,
        <br>
        [Your Name] 💕
    </p>
</div>
```

---

## 🎨 Color Customization

### Edit in style.css

**Current Theme (Pastel):**
```css
:root {
    --primary-color: #FFB6C1;    /* Soft Pink */
    --secondary-color: #DDA0DD;  /* Lavender */
    --accent-color: #F0E6D2;     /* Beige */
    --text-dark: #5A4A42;        /* Warm Brown */
    --text-light: #8B7B7B;       /* Light Brown */
    --white: #FFFFFF;
}
```

**Dark Red Theme:**
```css
:root {
    --primary-color: #C71585;    /* Medium Violet Red */
    --secondary-color: #8B0000;  /* Dark Red */
    --accent-color: #FFE4E1;     /* Misty Rose */
    --text-dark: #2F0000;        /* Very Dark Red */
    --text-light: #704444;       /* Taupe */
    --white: #FFFFFF;
}
```

**Gold Theme:**
```css
:root {
    --primary-color: #FFD700;    /* Gold */
    --secondary-color: #FFA500;  /* Orange */
    --accent-color: #FFFACD;     /* Lemon Chiffon */
    --text-dark: #8B6914;        /* Dark Gold */
    --text-light: #DAA520;       /* Goldenrod */
    --white: #FFFFFF;
}
```

**Purple Dream Theme:**
```css
:root {
    --primary-color: #9370DB;    /* Medium Purple */
    --secondary-color: #8A2BE2;  /* Blue Violet */
    --accent-color: #E6D2FF;     /* Lavender Mist */
    --text-dark: #4B0082;        /* Indigo */
    --text-light: #8B7BA8;       /* Light Purple */
    --white: #FFFFFF;
}
```

---

## 🎬 Animation Customization

### Speed Up Animations
**In style.css:**
```css
/* Make animations faster (was 0.6s) */
.page {
    animation: fadeInPage 0.3s ease-in-out;  /* Faster */
}

/* Floating hearts animation (was 3s) */
.heart {
    animation: floatHeart 1.5s ease-in infinite;  /* Faster */
}
```

### Slow Down Animations
```css
/* Make animations slower */
.page {
    animation: fadeInPage 1.2s ease-in-out;  /* Slower */
}

.heart {
    animation: floatHeart 5s ease-in infinite;  /* Slower */
}
```

### Change Animation Easing
```css
/* Linear animations (no easing) */
.card:hover {
    transition: all 0.3s linear;  /* Changed from 'ease' */
}

/* Bounce effect */
.btn:hover {
    animation: bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Add custom bounce animation */
@keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}
```

---

## 📱 Layout Customization

### Add More Cards
**In index.html**, duplicate a card in the `cards-container`:

```html
<div class="cards-container">
    <!-- Existing cards... -->
    
    <!-- New card -->
    <div class="card fade-in" onclick="openCard('newsection', 'newpage')">
        <div class="card-content">
            <div class="card-icon">💝</div>
            <h3>Our Song</h3>
            <p>A melody of memories</p>
        </div>
    </div>
</div>
```

### Then in script.js, add password:
```javascript
const passwords = {
    april: 'april2023',
    meet: 'firstmeet',
    date: 'firstdate',
    newpage: 'yourpassword'  // Add this
};
```

---

## 📋 Valentine Question Customization

### Change the Question
**In index.html:**
```html
<!-- Current -->
<h2 class="valentine-question">Will you be my Valentine? 💖</h2>

<!-- Change to -->
<h2 class="valentine-question">Do you love me? 💕</h2>
<h2 class="valentine-question">Want to spend forever with me? 💖</h2>
<h2 class="valentine-question">Be mine? 💝</h2>
```

### Change YES Button Response
**In script.js, find and update:**
```javascript
function onYesClick() {
    // ...
    responseText.textContent = 'Awwww!!! I love youuuu babee ❤️😍';
    // Change to:
    responseText.textContent = 'You just made me the happiest person! 💕😍';
    // Or:
    responseText.textContent = 'Forever with you sounds perfect! 💖✨';
}
```

---

## 🎯 Card Styling Customization

### Change Card Background
**In style.css:**
```css
.card {
    /* Current */
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 230, 210, 0.3));
    
    /* Solid color */
    background: #FFFFFF;
    
    /* Different gradient */
    background: linear-gradient(135deg, #FFB6C1, #DDA0DD);
    
    /* With border highlight */
    background: rgba(255, 255, 255, 0.8);
    border: 3px solid #FFB6C1;
}
```

### Add Card Icons
```html
<!-- Change these in your cards -->
<div class="card-icon">📅</div>  <!-- April 3 -->
<div class="card-icon">👫</div>  <!-- First Meet -->
<div class="card-icon">💕</div>  <!-- First Date -->

<!-- Or use these alternatives -->
<div class="card-icon">🗓️</div>  <!-- Calendar -->
<div class="card-icon">💑</div>  <!-- Couple -->
<div class="card-icon">❤️</div>  <!-- Heart -->
<div class="card-icon">💞</div>  <!-- Revolving hearts -->
<div class="card-icon">🥰</div>  <!-- Smiling heart eyes -->
<div class="card-icon">🌹</div>  <!-- Rose -->
<div class="card-icon">💐</div>  <!-- Bouquet -->
<div class="card-icon">✨</div>  <!-- Sparkles -->
```

---

## 🔔 Advanced: Add Email Notification

### Before love note, add:
```javascript
// Add this function in script.js
function sendLoveMessage(email, message) {
    // Note: This requires a backend service
    console.log('Would send to:', email);
    console.log('Message:', message);
}
```

---

## 💾 Save Your Customizations

After making changes:
1. Test in browser (F5 to refresh)
2. Check console for errors (F12 → Console)
3. Save all files
4. Test on mobile (if possible)

---

## 🐛 Quick Troubleshooting

**Pages not switching?**
- Check browser console (F12)
- Verify function names match in onclick handlers

**Music not playing?**
- Check file paths are correct
- Verify audio files exist
- Test audio file directly in browser

**Styles not updating?**
- Hard refresh page (Ctrl+Shift+R or Cmd+Shift+R)
- Check CSS file was saved
- Verify syntax in style.css

**Password not working?**
- Check spelling in passwords object
- Verify string quotes are correct
- Test with `showPasswords()` in console

---

## 🎉 Have Fun Customizing!

These snippets should cover most customization needs. Feel free to mix and match, combine ideas, and create your perfect Valentine's website!

Need help? Check the main README.md or PROJECT_SUMMARY.md files for more information.