# 🚀 Quick Start Guide

## Getting Started

### Step 1: Open the Website
Simply open `index.html` in any modern web browser:
- Double-click `index.html`
- Or right-click → Open with → Your favorite browser

### Step 2: Navigate the Homepage
You'll see:
1. **Title**: "Happy Valentine's Day ❤️"
2. **Three Cards**: Click any card to unlock it
3. **Valentine Question**: Answer at the bottom

### Step 3: Unlock Each Section

#### April 3 Card
- Password: `april2023`
- View: Photo gallery with 3 beautiful memories
- Music: Autoplay romantic background music

#### First Meet Card
- Password: `firstmeet`
- View: Photo gallery with captions (4 photos)
- Music: Different romantic background music

#### First Date Card
- Password: `firstdate`
- View: Photo gallery (3 photos) + Love note
- Music: Another romantic background music

### Step 4: Enjoy the Features

✨ **Interactive Elements:**
- 🎵 Play/Pause music on each page
- ← Go back to homepage
- 💖 Answer the Valentine's question
- 🚫 Closing button on password prompt (×)

---

## 🎮 Playing with YES/NO Buttons

### Click YES
- See the romantic response message
- Watch floating hearts animate
- Experience scale + fade effects

### Click NO
- The YES button will grow bigger
- Try clicking NO again
- After 3 clicks, YES button multiplies!
- NO button will dodge your clicks (move randomly)

---

## 🎨 Visual Features

### Animations
- ✨ Fade-in effects on load
- 🫧 Floating hearts
- 💗 Card hover effects with scale
- 📱 Smooth transitions between pages

### Colors (Aesthetic Palette)
- 🌸 Soft Pink (#FFB6C1)
- 💜 Lavender (#DDA0DD)
- 🏵️ Beige (#F0E6D2)
- 🤎 Dark Warm Brown (#5A4A42)

---

## 📱 Mobile Friendly

The website is fully responsive:
- **Desktop**: Full layout with 3-column cards
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Single column layout, optimized touch targets

---

## 🔧 Customization Tips

### Add Your Own Photos
1. Save your photos to `assets/images/` folder
2. Open `index.html` in a text editor
3. Replace placeholder image URLs:
   ```html
   From: src="https://via.placeholder.com/300x400?text=Memory+1"
   To:   src="./assets/images/your-photo.jpg"
   ```

### Add Your Own Music
1. Save your audio files to `assets/audio/` folder
2. Or find royalty-free romantic music online
3. Update audio URLs in `index.html`:
   ```html
   <audio id="audio-april" src="./assets/audio/april-song.mp3"></audio>
   ```

### Change Passwords
1. Open `script.js` in a text editor
2. Find the `passwords` object (near the top)
3. Update with your own passwords:
   ```javascript
   const passwords = {
       april: 'your-new-password',
       meet: 'another-password',
       date: 'third-password'
   };
   ```

### Edit Content
- **Love Note**: Edit in `index.html` (First Date section)
- **Photo Captions**: Edit in `index.html` (gallery sections)
- **Dates**: Update the date displays in each section

---

## 📋 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main structure and content |
| `style.css` | All styling and animations |
| `script.js` | Interactive functionality |
| `README.md` | Full documentation |
| `assets/images/` | Store your photos here |
| `assets/audio/` | Store your music here |

---

## ⚡ Browser Support

✅ Works on:
- Chrome/Edge (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & Mobile)
- Opera

⚠️ Note: Audio autoplay may require user interaction on some mobile browsers

---

## 🎁 Pro Tips

1. **Test on Mobile**: Use your phone's browser to see the responsive design
2. **Customize Passwords**: Use dates or meaningful numbers
3. **Add Personal Photos**: Replace placeholders for maximum impact
4. **Update the Love Note**: Make it personal and heartfelt
5. **Use Quality Music**: Find royalty-free romantic music (Pixabay, Incompetech)

---

## 🆘 Troubleshooting

### Music not playing?
- Check if audio files are accessible
- Some browsers require user interaction before autoplay
- Try clicking the music player button manually

### Images not loading?
- Check if image paths are correct
- Ensure files are in `assets/images/` folder
- Verify file names match exactly (case-sensitive)

### Page not responding?
- Check browser console for errors (F12 → Console)
- Ensure `script.js` is loading correctly
- Try refreshing the page

### Password not working?
- Check if you typed it correctly (case-sensitive)
- Default passwords are: `april2023`, `firstmeet`, `firstdate`
- You can check console with: `showPasswords()`

---

## 💬 Need Help?

All files are well-commented. Open any file in a text editor to:
- Read inline comments explaining the code
- Understand what each section does
- Make your own customizations

---

## 🎉 You're All Set!

The website is ready to use and customize. Have fun creating your Valentine's Day website! 💝

For more details, see the main README.md file.