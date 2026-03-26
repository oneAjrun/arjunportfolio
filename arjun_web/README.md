# Portfolio Website — Setup Guide

## Folder Structure

```
portfolio/
├── index.html          ← Home page
├── about.html          ← About page
├── research.html       ← Research page
├── projects.html       ← Projects page
├── contact.html        ← Contact page
│
├── css/
│   ├── style.css       ← Global styles (nav, footer, buttons, etc.)
│   ├── home.css        ← Home page styles
│   ├── about.css       ← About page styles
│   ├── research.css    ← Research page styles
│   ├── projects.css    ← Projects page styles
│   └── contact.css     ← Contact page styles
│
├── js/
│   ├── main.js         ← Navbar, scroll reveal, mobile menu
│   └── projects.js     ← Project filter buttons
│
└── images/             ← Create this folder and add your images
    ├── hero-bg.jpg     ← Landing page background image
    ├── about-photo.jpg ← Your photo on the About page
    └── project1.jpg    ← Project images (optional)
```

---

## Quick Setup in VS Code

1. **Open the folder** in VS Code: `File → Open Folder → select portfolio/`
2. **Install Live Server extension** (by Ritwick Dey) for live preview
3. Right-click `index.html` → **Open with Live Server**

---

## What to Update

### All Pages — Search for and replace:
| Placeholder        | Replace with                      |
|--------------------|-----------------------------------|
| `YourName`         | Your real name                    |
| `youremail@example.com` | Your email address           |
| `yourprofile`      | Your LinkedIn profile slug        |
| `yourusername`     | Your GitHub username              |
| `Your City, Country` | Your location                  |
| `Researcher · Developer · Creator` | Your tagline      |

### Home Page (index.html)
- Update the hero title, role, and button text
- Replace `images/hero-bg.jpg` with your background image
- Fill in the "What I Do" cards
- Add 2 featured projects

### About Page (about.html)
- Replace `images/about-photo.jpg` with your photo
- Write your bio in the two paragraph blocks
- Update skills in all 4 columns
- Fill in your education/experience timeline
- Change interests icons (FontAwesome icons: https://fontawesome.com/icons)

### Research Page (research.html)
- Update research areas with your actual topics
- Add your publications (copy the `.pub-item` block for each paper)
- Fill in collaborations/affiliations

### Projects Page (projects.html)
- Copy a `.project-card` block for each project
- Update `data-category` attribute: `web`, `research`, `tool` (or add new ones)
- Replace placeholder image divs with real `<img>` tags
- Update GitHub and Live links

### Contact Page (contact.html)
- Update all contact details
- For a working form, connect to Formspree (free):
  1. Go to https://formspree.io and create a free account
  2. Get your form endpoint URL
  3. Replace `action="#"` in the `<form>` with your Formspree URL
  4. Change `method="POST"` (already set)

---

## Adding Your Images

1. Create an `images/` folder inside `portfolio/`
2. Add your background photo as `hero-bg.jpg`
3. Add your portrait as `about-photo.jpg`
4. For project images, update the placeholder `<div>` in projects.html:

```html
<!-- BEFORE (placeholder) -->
<div class="project-img-placeholder">
  <span>Project Image</span>
</div>

<!-- AFTER (real image) -->
<div class="project-img-placeholder">
  <img src="images/project1.jpg" alt="Project Name" style="width:100%;height:100%;object-fit:cover;">
</div>
```

---

## Colour Customization

Open `css/style.css` and change the CSS variables at the top:

```css
:root {
  --color-accent: #c9a96e;   /* Gold — change this to your brand color */
  --color-bg: #0f0f0f;       /* Dark background */
  --color-text: #e8e3dc;     /* Main text */
}
```

---

## Deploying (Free Options)

- **GitHub Pages**: Push to a repo → Settings → Pages → Deploy from branch
- **Netlify**: Drag & drop your folder at netlify.com/drop
- **Vercel**: Connect your GitHub repo at vercel.com

---

Happy building! 🚀
