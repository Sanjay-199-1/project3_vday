# 🚀 Quick GitHub Pages Setup

Follow these steps to deploy your Valentine's website:

## 1️⃣ Clone & Setup (First Time Only)

```bash
# Clone the repository
git clone https://github.com/Sanjay-199-1/project3_vday.git
cd project3_vday

# Or if creating new:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Sanjay-199-1/project3_vday.git
git branch -M main
```

## 2️⃣ Make Changes Locally

Edit:
- `index.html` - Content & structure
- `style.css` - Design & colors  
- `script.js` - Passwords, hints, logic

## 3️⃣ Commit & Push to GitHub

```bash
git add .
git commit -m "Update website"
git push origin main
```

## 4️⃣ Enable GitHub Pages (One-Time Setup)

1. Go to: https://github.com/Sanjay-199-1/project3_vday/settings/pages
2. Under **Source**, select **Deploy from a branch**
3. Choose: **main** branch, **/ (root)** folder
4. Click **Save** ✅

## 5️⃣ Done! 🎉

Your site goes live at: **https://sanjay-199-1.github.io/project3_vday/**

**Note:** First deployment takes 1-2 minutes. Refresh after 2 min to see it live.

---

## 🔄 Update Workflow (Future Changes)

```bash
# Make changes to files
# Then commit and push:

git add .
git commit -m "Your message here"
git push origin main
```

GitHub Pages updates automatically ~30 seconds after each push!

---

📚 See [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md) for full guide.
