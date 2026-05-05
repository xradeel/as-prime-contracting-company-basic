# AS Prime Contracting Company - Professional Website

A responsive, modern 5-page website for AS Prime Contracting Company, a premier development company transforming Saudi Arabia's urban landscape.

## 📁 File Structure

```
AS Prime Contracting Company website/
├── assets/images/asprimecontracting-logo.jpg  # Company logo image
├── index.html          # Home page with hero section and featured projects
├── about.html          # About Us page featuring leadership
├── services.html       # Services page (Development, Urban Planning, Construction)
├── projects.html       # Portfolio/Projects showcase with filtering
├── contact.html        # Contact form and office location
├── style.css           # Main stylesheet with responsive design
├── script.js           # JavaScript for interactivity and validation
├── BRAND_GUIDE.md      # Branding guidelines and logo usage
└── README.md           # This file
```

## 🎨 Design Features

### Brand Colors
- **Primary Gold**: #B8860B
- **Dark Grey**: #333333
- **White**: #FFFFFF

### Key Design Elements
- **Responsive Bootstrap 5 Navbar** - Sticky navigation with smooth scrolling
- **Wavy SVG Dividers** - Curved architectural-style section separators
- **Gold Gradient Buttons** - Call-to-action buttons with hover effects
- **Service Cards** - Interactive hover animations
- **Project Filtering** - Filter projects by category (All, Residential, Commercial, Infrastructure)
- **Mobile Optimized** - Fully responsive for all device sizes

## 📄 Page Descriptions

### 1. **index.html** (Home)
- Hero section with call-to-action buttons
- Services overview with 3 feature cards
- Featured projects section
- CTA section for project inquiries
- Consistent footer with contact info

### 2. **about.html** (About Us)
- Company story and mission
- GM Shakil Mujibur leadership profile
- Core values section
- Partner CTA

### 3. **services.html** (Services)
- Detailed service descriptions:
  - Real Estate Development
  - Urban Planning & Masterplanning
  - Construction Management
- Service process (6-step workflow)
- Comprehensive service features

### 4. **projects.html** (Portfolio)
- Project filter buttons (All, Residential, Commercial, Infrastructure)
- 6 featured projects with category tags
- Project statistics (50+ Projects, 15+ Years, 100% Satisfaction)
- Project inquiry CTA

### 5. **contact.html** (Contact)
- Contact form with validation
- Office location in Jeddah
- Business hours
- Social media links
- Embedded Google Maps
- Form alert system for success/error messages

## 🎯 Features

### Responsive Design
- Mobile-first approach
- Tablet optimization (768px breakpoint)
- Desktop optimization (992px+ breakpoint)
- All images and content scale properly

### JavaScript Functionality
- **Form Validation** - Email, phone, and message validation
- **Smooth Scrolling** - Navigation links scroll smoothly
- **Navbar Scroll Effect** - Navbar styling changes on scroll
- **Animation on Scroll** - Elements fade in as users scroll
- **Mobile Menu** - Collapses on link click
- **Project Filtering** - Filter portfolio by category

### Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Focus visible styles for keyboard navigation
- Form validation feedback

## 🚀 Getting Started

1. **Open any HTML file** in a modern web browser
2. **No build process required** - Pure HTML5, CSS3, and vanilla JavaScript
3. **All dependencies** are loaded from CDN:
   - Bootstrap 5.3.0
   - Font Awesome 6.4.0

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Customization

### Colors
Edit the CSS custom properties in `style.css`:
```css
:root {
    --primary-gold: #B8860B;
    --dark-grey: #333333;
    --light-bg: #f8f9fa;
    --white: #ffffff;
}
```

### Contact Information
Update the following in all HTML files:
- Address: Al-Thaghr District, Jeddah, Saudi Arabia
- Phone: +966 509987947
- Email: shakilnaftakhdarcompany@gmail.com

### Company Name
Search and replace "AS Prime Contracting" with your company name

## 📧 Contact Form Setup

The contact form includes client-side validation. To make it functional:

1. Use a form backend service (FormSubmit, Netlify Forms, etc.)
2. Update the form's `action` attribute
3. Or implement a backend API endpoint

Current validation includes:
- Name (minimum 2 characters)
- Email (valid format)
- Phone (7-15 digits)
- Message (minimum 10 characters)

## 🎓 Code Quality

- **Clean, commented code** - Easy to understand and modify
- **Bootstrap utilities** - Minimal custom CSS
- **DRY principles** - Reusable components and classes
- **Semantic HTML** - Proper heading hierarchy and structure

## 📄 License

Professional website template for AS Prime Contracting Company.

## 🤝 Support

For questions or customization needs, refer to:
- Bootstrap Documentation: https://getbootstrap.com/docs/5.3/
- Font Awesome Icons: https://fontawesome.com/icons
- MDN Web Docs: https://developer.mozilla.org/

---

**Version**: 1.0
**Last Updated**: April 2024
**Built with**: HTML5, CSS3, Bootstrap 5, JavaScript
