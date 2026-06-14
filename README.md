# Responsive Portfolio Website

A modern, fully responsive personal portfolio website built with **HTML5**, **CSS3**, **JavaScript**, and **Bootstrap 5**.

## 🎯 Project Overview

This project showcases a professional portfolio website with a mobile-first design approach. It features:

- **Responsive Design**: Seamlessly adapts to all screen sizes (mobile, tablet, desktop)
- **Modern Technologies**: HTML5 semantic markup, CSS3 with Grid/Flexbox, Vanilla JavaScript
- **Bootstrap Framework**: Rapid development with Bootstrap 5 components
- **Interactive Features**: Smooth scrolling, form validation, scroll animations
- **Accessibility**: WCAG compliant with keyboard navigation and dark mode support
- **Performance Optimized**: Lazy loading, smooth animations with performance in mind

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main portfolio page (semantic HTML5)
├── css/
│   └── style.css             # Custom styles (mobile-first, Grid/Flexbox)
├── js/
│   └── script.js             # JavaScript interactivity
├── assets/                   # Images, icons, media files
└── README.md                 # Project documentation
```

## ✨ Features

### 1. **Navigation Bar**
- Sticky navigation with smooth scrolling
- Responsive mobile hamburger menu
- Active link highlighting on scroll
- Smooth hover effects

### 2. **Hero Section**
- Eye-catching gradient background with animated elements
- Call-to-action buttons
- Smooth animations on page load
- Responsive layout

### 3. **About Section**
- Personal introduction
- Skills showcase using CSS Grid
- Responsive skill tags with hover effects

### 4. **Projects Section**
- Project cards with descriptions
- Technology badges
- Gradient backgrounds
- Hover lift animations
- Fully responsive grid layout

### 5. **Certifications Section**
- Achievement cards
- Certificate details with icons
- Smooth hover animations
- Border accent styling

### 6. **Contact Section**
- Contact form with validation
- Success/error message alerts
- Social media links
- Email validation

### 7. **Footer**
- Copyright information
- Responsive footer layout
- Social media integration

### 8. **Interactive Features**
- **Smooth Scrolling**: All navigation uses smooth scroll behavior
- **Form Validation**: Real-time validation with user-friendly messages
- **Scroll Animations**: Elements animate in as they come into view
- **Mobile Menu**: Auto-closes when navigating
- **Scroll-to-Top Button**: Fixed button appears after scrolling
- **Keyboard Navigation**: Accessibility support with keyboard shortcuts
- **Dark Mode Support**: Automatic dark mode styling based on system preferences

## 🎨 Design Highlights

### Responsive Design
- **Mobile-First Approach**: Designed for mobile, enhanced for larger screens
- **CSS Grid & Flexbox**: Modern layout techniques for perfect responsiveness
- **Breakpoints**: Optimized for XS, SM, MD, LG, and XL screens

### Visual Effects
- Gradient overlays and animations
- Hover transitions and transforms
- Floating animations for visual interest
- Smooth color transitions

### Accessibility
- Semantic HTML5 markup
- ARIA labels and attributes
- Keyboard navigation support
- High contrast ratios
- Dark mode support (prefers-color-scheme)
- Print-friendly styles

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. **Clone or Download** the repository
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open in Browser**
   - Simply double-click `index.html` to open in your default browser
   - Or right-click → "Open with" → Choose your preferred browser

3. **Using a Local Server** (Recommended for development)
   - Python 3:
     ```bash
     python -m http.server 8000
     ```
   - Python 2:
     ```bash
     python -m SimpleHTTPServer 8000
     ```
   - Node.js (with http-server):
     ```bash
     npx http-server
     ```
   - Then visit `http://localhost:8000`

## 🛠️ Customization

### Updating Personal Information

1. **Edit `index.html`** to add your information:
   - Modify the hero section text
   - Add your project details
   - Update certification information
   - Change social media links

2. **Customize Colors** in `css/style.css`:
   ```css
   :root {
       --primary-color: #0d6efd;      /* Change primary color */
       --secondary-color: #6c757d;    /* Change secondary color */
       /* ... other colors ... */
   }
   ```

3. **Update Project Cards**:
   - Modify project titles, descriptions, and links
   - Change project images/icons
   - Add or remove project cards

4. **Add Social Links**:
   - Update social media URLs in the footer

### Adding New Sections

1. Add a new `<section>` in `index.html`
2. Give it an `id` for navigation
3. Add corresponding styles in `css/style.css`
4. Update the navbar with a link to the new section

### Adding Images

1. Place images in the `assets/` folder
2. Reference them in HTML:
   ```html
   <img src="assets/project-image.jpg" alt="Project description">
   ```

## 📱 Responsive Breakpoints

The website is optimized for the following breakpoints:

| Device Type | Width | Breakpoint |
|-------------|-------|-----------|
| Mobile | < 576px | XS |
| Mobile Landscape | 576px - 767px | SM |
| Tablet | 768px - 991px | MD |
| Desktop | 992px - 1199px | LG |
| Large Desktop | ≥ 1200px | XL |

## 🎯 Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

### Frontend
- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript**: ES6+ for interactivity and DOM manipulation
- **Bootstrap 5**: CSS framework for rapid development
- **Font Awesome**: Icon library for visual elements

### Features
- Responsive Web Design
- Progressive Enhancement
- Cross-browser compatibility
- Accessibility (WCAG AA)
- Performance optimization

## 📊 Performance Metrics

- **Lighthouse Score**: Aim for 90+
- **Page Load Time**: < 2 seconds
- **Mobile-Friendly**: Yes
- **SEO Optimized**: Basic SEO best practices implemented

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Mobile-first responsive design
- ✅ HTML5 semantic markup
- ✅ CSS3 Grid and Flexbox layouts
- ✅ Vanilla JavaScript (no frameworks)
- ✅ Bootstrap framework integration
- ✅ Form validation and handling
- ✅ Smooth animations and transitions
- ✅ Accessibility best practices
- ✅ Cross-browser compatibility
- ✅ SEO fundamentals

## 🐛 Troubleshooting

### Portfolio not displaying correctly?
- Ensure all files are in the correct folders
- Check browser console for errors (F12)
- Try a different browser
- Clear browser cache (Ctrl+Shift+Delete)

### Form not working?
- Currently uses local validation (simulated submission)
- To make it functional, integrate with a backend service (Formspree, emailjs, etc.)

### Responsive issues on specific device?
- Test using browser DevTools (F12 → Toggle device toolbar)
- Check the CSS media queries in `style.css`

## 📝 Future Enhancements

- [ ] Add backend form submission
- [ ] Implement blog section
- [ ] Add project filtering
- [ ] Integrate with CMS
- [ ] Add multilingual support
- [ ] Implement progressive web app (PWA) features
- [ ] Add service worker for offline support
- [ ] Implement advanced animations with ScrollTrigger

## 📞 Contact & Support

For questions or issues:
- Review this README
- Check browser console for errors
- Test across different browsers
- Validate HTML/CSS with W3C validators

## 📄 License

This project is open source and available under the MIT License. Feel free to use it as a template for your portfolio!

## 🙏 Credits

- **Bootstrap**: Twitter Bootstrap Team
- **Font Awesome**: Fonticons, Inc.
- **Icons**: Font Awesome Free Icons
- **Design Inspiration**: Modern web design best practices

---

**Created with ❤️ for developers and designers showcasing their work!**

**Last Updated**: May 2026
