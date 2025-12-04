# WIL Pattern Library

A Universal Design for Learning (UDL) tool for Work Integrated Learning (WIL) assessment design. This tool helps students discover their professional identity and select assessment artefacts that match their working style.

## 👤 Author

**Elizabeth Georgiades**  
Innovation Studio Assessment Design

### About This Project
This tool was developed in 2025 to support identity-based assessment design in Work Integrated Learning contexts. The tool implements Universal Design for Learning (UDL) principles to provide multiple pathways for student engagement and expression.

### Citation
If you reference this tool, please cite:
> Georgiades, E. (2025). *WIL Pattern Library: An Identity-Based Assessment Design Tool*. Retrieved from [your-github-url]

### License
This work is licensed under a [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

© Elizabeth Georgiades 2025

---

## 🎯 Features

- **Identity Discovery**: 6 professional identity archetypes with strengths, challenges, and working preferences
- **Pattern Picker Quiz**: 2-step quiz to find personalized pattern recommendations
- **Pattern Library**: 10 assessment patterns with filtering by category and tags
- **Adobe Express Integration**: Each pattern links to remixable templates
- **Multiple Pathways**: UDL-aligned with 3 entry points (Quiz, Identities, Patterns)
- **100% Free**: No backend, no database, no hosting costs

## 📁 Project Structure

```
wil-pattern-library/
├── index.html              # Home page with 3 entry points
├── identities.html         # Identity card library
├── quiz.html              # 2-step Pattern Picker Quiz
├── results.html           # Quiz results with recommendations
├── patterns.html          # Full pattern library with filtering
├── css/
│   └── styles.css         # Complete styling
├── js/
│   └── data.js           # All content (edit this to update!)
└── README.md             # This file
```

## 🚀 Quick Start

### Option 1: Open Locally
1. Download all files
2. Open `index.html` in any web browser
3. Done! No server needed

### Option 2: Deploy to GitHub Pages (FREE)
1. Create a GitHub account (if you don't have one)
2. Create a new repository called `wil-pattern-library`
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select "Deploy from main branch"
6. Your site will be live at: `https://yourusername.github.io/wil-pattern-library`

### Option 3: Deploy to Netlify (FREE)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire folder
3. Done! Your site is live

## ✏️ How to Edit Content

All content is in **`js/data.js`** - you can edit this file with any text editor (even Notepad!).

### Adding a New Pattern

```javascript
{
  id: 'your-pattern-id',
  name: 'Pattern Name',
  category: 'Reflection',  // or Collaboration, Experience, etc.
  complexity: 'medium',    // low, medium, or high
  description: 'Short description for card',
  fullDescription: 'Longer description for modal',
  tags: ['tag1', 'tag2', 'tag3'],
  skills: ['Reflection & Self-Awareness'],
  identities: ['reflective-analyst', 'systems-thinker'],
  adobeExpressLink: 'https://express.adobe.com/...'  // Your template URL
}
```

Add this to the `patterns` array in `data.js`.

### Adding Adobe Express Template Links

1. Create your template in Adobe Express
2. Click "Share" → "Get Link"
3. Copy the URL
4. Paste it into the `adobeExpressLink` field in `data.js`

Example:
```javascript
adobeExpressLink: 'https://express.adobe.com/page/abc123'
```

### Editing Identity Descriptions

Find the identity in the `identities` array in `data.js` and edit:
- `narrative`: The main description
- `strengths`: List of key strengths
- `growthEdges`: List of challenges
- `preferredWays`: List of working preferences
- `recommendedPatterns`: Array of pattern IDs

## 🎨 Customization

### Changing Colors

Edit the color variables in `css/styles.css`:

```css
:root {
  --primary-color: #2563eb;  /* Main blue color */
  --reflection-color: #8b5cf6;  /* Category colors */
  --collaboration-color: #ec4899;
  /* etc. */
}
```

### Adding Your Institution Branding

1. Edit `<header>` in each HTML file to add your logo
2. Update the footer with your institution name
3. Change colors in `styles.css` to match your brand

## 📊 Pattern Categories

- **Reflection**: Personal journals, self-awareness
- **Collaboration**: Peer learning, group work
- **Experience**: Learning cycles, portfolios
- **Storytelling**: Interviews, narratives
- **Innovation**: Prototyping, experimentation
- **Analysis**: Critical thinking, problem-solving

## 🔧 Technical Details

### No Backend Required
- Pure HTML, CSS, and JavaScript
- All data stored in `data.js`
- Quiz results stored in browser session storage
- No database needed

### Browser Compatibility
- Works in all modern browsers
- Mobile-responsive design
- Accessibility features included

### File Sizes
- Total: ~150 KB
- Loads instantly
- Works offline after first visit

## 🎓 Pedagogical Framework

This tool implements Universal Design for Learning (UDL) principles:

**Multiple Means of Engagement:**
- Take quiz (guided discovery)
- Explore identities (self-discovery)
- Browse patterns (direct access)

**Multiple Means of Representation:**
- Text descriptions
- Visual categories and tags
- Complexity indicators
- Examples and models

**Multiple Means of Action & Expression:**
- 10 different artefact types
- Remixable templates
- Choice based on identity

## 📝 Innovation Studio Context

This tool is part of the assessment design for Innovation Studio 1 and 2. It supports:
- Identity formation
- Reflective practice
- Self-authored WIL experiences
- Student agency and choice

## 🆘 Support

### Common Issues

**Quiz doesn't show results:**
- Make sure you selected an identity AND 2-4 skills
- Check that JavaScript is enabled in your browser

**Patterns don't filter:**
- Clear your browser cache
- Make sure `data.js` is loaded (check browser console)

**Adobe Express links don't work:**
- Update the `adobeExpressLink` in `data.js`
- Replace `#` with your actual template URL

### Need Help?

1. Check the browser console for errors (F12)
2. Verify all files are in the correct folders
3. Make sure `data.js` is properly formatted JSON

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/).

**This means:**
- ✅ You can share and use this tool
- ✅ You must give credit to Elizabeth Georgiades
- ❌ You cannot use it for commercial purposes
- ❌ You cannot modify or create derivatives

For full license details, see the [LICENSE.md](LICENSE.md) file.

## 🎉 Credits

**Developed by Elizabeth Georgiades**  
Innovation Studio WIL Assessment Design Tool

Built with accessibility, usability, and student agency in mind.

© Elizabeth Georgiades 2025

---

## Quick Reference: Deploying to GitHub Pages

1. **Create GitHub Account**: github.com/signup
2. **Create New Repository**: Click "+" → "New repository"
3. **Upload Files**: Click "uploading an existing file"
4. **Enable Pages**: Settings → Pages → Deploy from main branch
5. **Visit Your Site**: `https://yourusername.github.io/wil-pattern-library`

That's it! Your site is live and free forever.

## Quick Reference: Editing Content

1. Open `js/data.js` in any text editor
2. Find the section you want to edit (identities or patterns)
3. Edit the text in quotes
4. Save the file
5. Upload to your host (or commit to GitHub)
6. Refresh your website

No coding knowledge needed! Just edit the text between quotes.
