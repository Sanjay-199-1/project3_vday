# 💝 Happy Valentine's Day Website

A beautiful, fully responsive Valentine's Day website with password-protected memories, romantic animations, and interactive features.

## 🌟 Features

### Homepage
- Beautiful gradient background with soft aesthetic theme
- Three interactive cards: "April 3", "First Meet", "First Date"
- Interactive Valentine's question with YES/NO buttons
- Floating heart animations
- Fully responsive design

### Password Protection
Each section has a unique password:
- **April 3**: `april2023`
- **First Meet**: `firstmeet`
- **First Date**: `firstdate`

### Content Pages
Each section includes:
- Date display
- Photo gallery with captions
- Romantic background music (autoplay)
- Love note (on First Date page)
- Music player controls

### Interactive Features
- **YES Button**: Shows animated response with floating hearts
- **NO Button**: Grows progressively, multiplies after 3 clicks, and moves randomly
- Audio management: Stops previous music when switching sections
- Smooth page transitions and animations

## 📁 Project Structure

```
vday/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── images/     (placeholder images are used)
    └── audio/      (placeholder audio is used)
```

## 🎨 Design Features

- **Color Scheme**: Pastel pink (#FFB6C1), lavender (#DDA0DD), beige (#F0E6D2)
- **Typography**: Google Fonts (Poppins, Playfair Display)
- **Animations**:
  - Fade-in transitions
  - Floating hearts
  - Card hover effects
  - Button scaling animations
  - Smooth page transitions

## 📱 Responsive Design

The website is fully responsive and works perfectly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Usage

1. Open `index.html` in a web browser
2. Click on any card to enter a password
3. After successful authentication, view the memories
4. Music will autoplay - use the music player to control it
5. Answer the Valentine's question at the bottom

## 🔐 Password Hints

To help remember passwords:
- April 3: Think of the month and year
- First Meet: Two words describing the event
- First Date: Two words describing what happened first

## 🎵 Audio

The website uses placeholder romantic music from SoundHelix. You can replace these URLs with your own audio files:
- Replace `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3` with your audio URL for April 3
- Replace `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3` with your audio URL for First Meet
- Replace `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3` with your audio URL for First Date

## 🖼️ Images

The website uses placeholder images from `via.placeholder.com`. To use custom images:

1. Add your images to the `assets/images/` folder
2. Update the image URLs in `index.html` from:
   ```html
   <img src="https://via.placeholder.com/300x400?text=Memory+1" alt="Memory 1">
   ```
   to:
   ```html
   <img src="./assets/images/memory1.jpg" alt="Memory 1">
   ```

## 🎯 Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #FFB6C1;      /* Soft pink */
    --secondary-color: #DDA0DD;    /* Lavender */
    --accent-color: #F0E6D2;       /* Beige */
    --text-dark: #5A4A42;          /* Dark text */
}
```

### Change Passwords
Edit `script.js`:
```javascript
const passwords = {
    april: 'your-password-here',
    meet: 'your-password-here',
    date: 'your-password-here'
};
```

### Update Content
- Edit the love note text in `index.html` (First Date section)
- Update photo captions
- Change dates to match your actual dates
- Modify card titles and descriptions

## 🛠️ Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips for Best Experience

1. Use high-quality images for the best visual impact
2. Select royalty-free romantic music for audio
3. Customize the love note with personal messages
4. Test on mobile devices to ensure responsiveness
5. Use short, memorable passwords for easy access

## 📝 Notes

- No external frameworks or libraries are used (pure HTML, CSS, JavaScript)
- The website is completely self-contained
- All animations use CSS keyframes and JavaScript
- Audio autoplay may be limited on some browsers due to browser policies (user interaction may be required to start audio on mobile)

## 💕 Made with Love

This Valentine's Day website is designed to celebrate special moments and create a beautiful digital memory for someone special.

Happy Valentine's Day! 💝