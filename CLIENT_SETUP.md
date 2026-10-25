# SiteCraft Basic Portfolio — Client Setup Guide

This project is the SiteCraft Basic Portfolio master blueprint.

The design and code should remain consistent unless a client specifically requires a customization.

---

## 1. CLIENT INFORMATION CHECKLIST

Collect the following information from the client before starting:

### Personal Information

- Full name
- Professional title
- Location
- Email address
- Phone number
- WhatsApp number
- LinkedIn URL
- Instagram URL
- GitHub URL (if applicable)
- Professional tagline
- CV/resume

### About

- Short professional biography
- Career focus
- Main strengths
- Professional goals or interests

### Education

For each qualification:

- Degree / certificate
- Institution
- Start and completion years

### Experience

For each position:

- Job title
- Company
- Location
- Start and end dates
- Short description of responsibilities

### Skills

Collect skills under suitable categories:

- Industry / professional skills
- Technical skills
- General professional skills

### Projects

For each project:

- Project name
- Category
- Description
- Tools used
- Project image
- Project URL (if available)

### Certifications

For each certification:

- Certification name
- Organization
- Year obtained

---

# 2. CLIENT FILES

Create a folder for the client's assets.

Recommended structure:

client-assets/
├── profile/
│   └── client-profile.png
│
├── projects/
│   ├── project-01.png
│   ├── project-02.png
│   └── project-03.png
│
└── documents/
    └── client-cv.pdf

---

# 3. PROFILE PHOTO

Replace the sample Daniel profile image with the client's professional photograph.

Recommended:

- Clear professional photo
- Good lighting
- High resolution
- Preferably square or portrait orientation
- PNG or JPG

Do not change the image dimensions unnecessarily unless the design requires it.

---

# 4. PROJECT IMAGES

Replace the sample project images with the client's project images.

Recommended:

- Consistent dimensions
- Good quality
- Clear subject
- No unnecessary watermarks

The project images are stored in:

src/assets/

---

# 5. CV

Place the client's CV inside the project's public folder.

Example:

public/
└── client-cv.pdf

Then update the client's CV path in:

src/data/portfolioData.js

Example:

cv: "/client-cv.pdf",

If the client does not provide a CV, leave:

cv: "",

The Download CV button will remain hidden.

---

# 6. PORTFOLIO DATA

Most client customization happens inside:

src/data/portfolioData.js

Update:

- Personal information
- Contact information
- Social links
- About section
- Education
- Experience
- Skills
- Projects
- Certifications

Do not unnecessarily modify the components when only client information needs to change.

---

# 7. PROFILE IMAGE

The profile image is currently imported in:

src/App.jsx

Example:

import clientProfile from "./assets/client-profile.png";

Then:

<Hero
  personal={personal}
  profileImage={clientProfile}
  cv={personal.cv}
/>

Make sure the filename matches the actual file inside:

src/assets/

---

# 8. CLIENT SOCIAL MEDIA

Update the client's links inside:

src/data/portfolioData.js

Example:

linkedin: "https://www.linkedin.com/in/client",
instagram: "https://www.instagram.com/client",
github: "https://github.com/client",

WhatsApp should use the correct international phone number.

Example:

whatsapp: "https://wa.me/265888000000",

Do not include spaces or unnecessary symbols in the WhatsApp URL.

---

# 9. CLIENT CUSTOMIZATION RULE

The master SiteCraft blueprint must never be overwritten with a client's information.

For every new client:

1. Create a copy of the master project.
2. Rename the project for the client.
3. Replace the client's information.
4. Replace images and documents.
5. Test the website.
6. Build the production version.
7. Deploy the client's website separately.

Each client must have their own project/repository.

---

# 10. TESTING

Before delivering a client website, check:

### Desktop

- Navbar
- Hero
- About
- Experience
- Education
- Skills
- Projects
- Certifications
- Contact
- Footer

### Mobile

Check for:

- Horizontal scrolling
- Text overflow
- Image overflow
- Broken buttons
- Broken navigation
- Incorrect spacing
- Mobile menu problems

---

# 11. LINK TESTING

Test:

- Email
- Phone
- WhatsApp
- LinkedIn
- Instagram
- GitHub
- CV
- Project links
- Navigation links

Make sure external links open correctly.

---

# 12. DEVELOPMENT TEST

Run:

npm run dev

Open the local development URL provided by Vite.

Check the website before deployment.

---

# 13. PRODUCTION BUILD

Before deployment, run:

npm run build

If the build completes successfully, the project is ready for deployment.

If errors appear, fix them before publishing.

---

# 14. MASTER BLUEPRINT RULE

The Daniel Mwale portfolio is the SiteCraft Basic Portfolio demonstration.

Do not use it as the live website for a real client.

The master project should remain unchanged so it can be copied for future clients.

---

# 15. CLIENT MAINTENANCE

If a client requests changes after delivery:

1. Open that client's project.
2. Make the requested changes.
3. Test locally.
4. Run the production build.
5. Deploy the updated version.

Never make the change inside another client's project.

---

# 16. BASIC PORTFOLIO STRUCTURE

The standard Basic Portfolio includes:

1. Navigation
2. Hero section
3. About section
4. Experience
5. Education
6. Skills
7. Projects
8. Certifications
9. Contact
10. Footer

The structure may be customized when required, but the Basic package should remain simple and professional.

---

# 17. SITECRAFT DELIVERY CHECKLIST

Before sending the website to the client:

[ ] Client information added

[ ] Profile image replaced

[ ] Project images replaced

[ ] CV uploaded

[ ] Contact details checked

[ ] WhatsApp tested

[ ] Social links tested

[ ] Project links tested

[ ] Desktop tested

[ ] Mobile tested

[ ] npm run build successful

[ ] Domain connected

[ ] Website published

[ ] Final website tested after publishing

---

# SITECRAFT

Basic Portfolio Blueprint

Master template — do not overwrite.