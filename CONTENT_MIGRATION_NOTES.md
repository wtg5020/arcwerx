# Content Migration Notes: Old Website to New Retro Kino Design

## Successfully Implemented ✅

The following content from the old ARCWERX website has been successfully integrated into the new retro kino (F-16 HUD) design:

### 1. **Corsair Ranch Section**
- Added comprehensive Corsair Ranch section with three pillars:
  - DevSecOps
  - User-Centric Design
  - Experimentation
- Styled in retro kino design with border accents and hover effects
- Link points to: `https://arcwerx.org/corsair-ranch`

### 2. **Connect Section**
- Added "Connect to an ecosystem" messaging
- Two contact options: Civilian and Government
- Placeholder links point to: `https://arcwerx.org/contact/civilian` and `https://arcwerx.org/contact/government`
- Styled as action buttons in HUD design

### 3. **Educate Section**
- Added educational messaging about building innovation culture
- Listed four key areas: Innovation Training, Technology Workshops, Leadership Development, Best Practice Sharing
- Link points to: `https://arcwerx.org/education`

### 4. **Accelerate Section**
- Two distinct options: "Submit an Idea" and "Manage a Project"
- VPN warning included for internal portals
- Links point to: `https://arcwerx.org/submit-idea` and `https://arcwerx.org/manage-project`

### 5. **Footer Quick Links**
- Added QUICKLINKS section with four partner organizations:
  - AFWERX
  - Corsair Ranch
  - SBIR STTR
  - NSIN
- Styled as grid layout with hover effects

### 6. **Domain Updates**
- Changed all references from `arcwerx.dso.mil` to `arcwerx.org`
- Updated footer communications channel display

### 7. **Tagline Integration**
- Added "WE HELP AIRMEN TURN IDEAS INTO REALITY" to footer ticker

---

## Cannot Be Implemented (Requires Backend/External Resources) ⚠️

The following features from the old website **cannot be fully implemented** without additional backend development or external resources:

### 1. **Google Forms Integration**
**Old Implementation:**
- Used embedded Google Forms (iframes) with dynamic switching between Civilian and Government forms
- Form URLs:
  - Civilian: `https://forms.gle/NyAcRSD12dowbWUv9`
  - Government: `https://forms.gle/egZBtaWfKznNKB8dA`

**Why Not Implemented:**
- Google Forms require active form URLs that may need to be recreated or updated
- Embedding iframes breaks the retro kino design aesthetic
- Interactive modal with form selection requires additional JavaScript state management

**Current Solution:**
- Created placeholder links to `https://arcwerx.org/contact/civilian` and `https://arcwerx.org/contact/government`
- These pages will need to be created with either:
  - New Google Forms
  - Custom contact forms (recommended for design consistency)
  - Typeform/other form service that can be styled to match the HUD aesthetic

**Implementation Required:**
1. Create contact form pages on arcwerx.org
2. Build custom forms OR embed styled third-party forms
3. Set up form submission handling (email notifications, database storage, etc.)

---

### 2. **Internal Portal Links (GAIN & VISION)**
**Old Implementation:**
- GAIN Portal: `https://gain.il4.afwerx.dso.mil/`
- VISION Portal: `https://vision.il4.afwerx.dso.mil/`
- Both required VPN access

**Why Not Implemented:**
- These `*.dso.mil` domains are being decommissioned (per your instructions)
- No replacement URLs have been provided

**Current Solution:**
- Created placeholder links to `https://arcwerx.org/submit-idea` and `https://arcwerx.org/manage-project`

**Implementation Required:**
1. Determine if GAIN and VISION functionality will be:
   - Rebuilt on arcwerx.org infrastructure
   - Replaced with alternative systems
   - Integrated into existing tools
2. Update links once new portals are available
3. Add authentication/VPN warning if still required

---

### 3. **ARC-EDU SharePoint Site**
**Old Implementation:**
- Link to: `https://usaf.dps.mil/teams/ARCWERXAccelerator/ARC-EDU`
- SharePoint site for education opportunities

**Why Not Implemented:**
- SharePoint URL may be changing or access may be restricted
- Uncertain if this resource is still active or being migrated

**Current Solution:**
- Created placeholder link to `https://arcwerx.org/education`

**Implementation Required:**
1. Determine if ARC-EDU content will be:
   - Migrated to arcwerx.org
   - Kept on SharePoint (update link if so)
   - Replaced with new education portal
2. Update link once decision is made

---

### 4. **Interactive Modal Popups (SweetAlert2)**
**Old Implementation:**
- Used SweetAlert2 library for modal popups with dropdowns
- Interactive selection between "Submit an Idea" and "Manage a Project"
- Dynamic iframe loading for contact forms

**Why Not Implemented:**
- SweetAlert2 modals don't fit the retro kino HUD aesthetic
- Current design philosophy favors in-page content over popups
- Modal overlays would conflict with the custom cursor and CRT effects

**Current Solution:**
- Created dedicated in-page sections for Connect, Educate, and Accelerate
- Direct links to dedicated pages instead of modal overlays

**Alternative Implementation (Optional):**
- Could create custom HUD-styled modals using CSS/JavaScript
- Would need to design "targeting system" style overlay dialogs
- Recommended: Keep current in-page design for better accessibility

---

### 5. **Image Assets**
**Old Implementation:**
- Hero laptop display image: `laptop_display.png` (2.7MB)
- ARC Accelerator logo: `arc_accelerator.svg`
- Corsair Ranch logos: `CorsairRanch_Color.png`, `CorsairRanch_Dark.png`
- Partner logos: AFWERX, NSIN, SBIR STTR icons
- Team member photos: 5 bio images (ltcol-jagow, maj-carbonell, etc.)

**Why Not Implemented:**
- Images were not actively used in the old website layout (found in assets but not rendered)
- Current retro kino design uses minimal imagery for authentic CRT terminal aesthetic
- Large images (especially 2.7MB laptop) would slow down load times

**Current Solution:**
- Pure text-based HUD interface with ASCII/Unicode decorators
- Lightweight SVG graphics for targeting reticles and UI elements

**Alternative Implementation (Optional):**
- Could add Corsair Ranch logo to its dedicated section
- Could implement team bio section with photos (styled as "personnel files")
- Could use laptop image as background (with green CRT filter overlay)
- All images are available in: `/home/user/arcwerx/arcwerx_website-master/src/images/`

**If You Want to Add Images:**
1. Copy desired images from old site to `/home/user/arcwerx/public/`
2. Reference in React components as `/image-name.png`
3. Apply CSS filters for CRT effect in dark mode (e.g., `filter: hue-rotate(120deg) brightness(1.2)`)

---

### 6. **Team/Bio Section**
**Old Implementation:**
- Had `BioCard.js` component for displaying team member bios
- Images present for 5 team members
- Component structure suggests bio pages were planned but not fully implemented

**Why Not Implemented:**
- No bio text content found in old codebase (only images)
- Unclear which team members are current
- Would require content writing and organization chart

**Current Solution:**
- Not included in current site

**Implementation Required:**
1. Gather current team member information:
   - Names and ranks
   - Roles/titles
   - Bios (2-3 sentences each)
   - Photos (use existing or new)
2. Create "PERSONNEL" section in HUD design
3. Style as "classified personnel files" with retro terminal aesthetic
4. Consider making it a separate page/route

---

## Minor Design Differences (Intentional) 🎨

These differences are **intentional design improvements** in the new retro kino theme:

### 1. **Navigation Structure**
- **Old:** Single scrolling page with button-triggered modals
- **New:** Sectioned content with navigation targeting system
- **Benefit:** Better accessibility, no modal blocking, clearer information hierarchy

### 2. **Footer Design**
- **Old:** Simple horizontal link list
- **New:** Comprehensive HUD footer with ticker, diagnostics, coordinates, quicklinks
- **Benefit:** More immersive, provides system status information, better organized

### 3. **Call-to-Action Style**
- **Old:** Colored buttons (blue, purple, orange)
- **New:** Bordered brackets with text labels, consistent HUD styling
- **Benefit:** Cohesive retro terminal aesthetic, better dark mode support

### 4. **Content Organization**
- **Old:** Two main card sections (ARCWERX and Corsair Ranch)
- **New:** Grid-based panel system with 8+ information sections
- **Benefit:** More content visible, better scannability, modular layout

---

## Recommendations for Next Steps 📋

### High Priority:
1. **Set up contact forms** at `/contact/civilian` and `/contact/government`
2. **Determine replacement URLs** for GAIN and VISION portals
3. **Update education link** to actual ARC-EDU resource or create local content
4. **Test all external links** (AFWERX, NSIN, SBIR STTR) to ensure they're current

### Medium Priority:
5. **Consider adding team bio section** if desired
6. **Decide on Corsair Ranch page structure** (will it be a separate site or integrated?)
7. **Set up proper routing** in React for the placeholder pages

### Low Priority (Nice to Have):
8. Add Corsair Ranch logo to its section
9. Create custom 404 page in HUD style
10. Add "mission briefing" page with more detailed ARCWERX history

---

## Technical Notes for Implementation 🔧

All placeholder links follow the pattern `https://arcwerx.org/[page-name]`. When implementing these pages, you'll need to:

1. **Add React Router** (currently not installed):
   ```bash
   npm install react-router-dom
   ```

2. **Update App.tsx** to use routing:
   ```tsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom'
   ```

3. **Create page components** for:
   - `/contact/civilian` - Contact form for civilians
   - `/contact/government` - Contact form for government personnel
   - `/education` - Education opportunities page
   - `/submit-idea` - Innovation submission portal
   - `/manage-project` - Project management portal
   - `/corsair-ranch` - Corsair Ranch detailed page

4. **Or configure as external pages** if building separate sites for some sections

---

## Summary

**What's Ready:**
- All static content from old site is present and styled
- Design is cohesive and maintains retro kino aesthetic
- Accessibility improved with semantic HTML and ARIA labels
- Domain references updated to arcwerx.org

**What Needs Work:**
- Backend functionality (forms, portals)
- Replacement URLs for decommissioned dso.mil sites
- Decision on content strategy for education and submission portals
- Optional: Image assets and team bio section

The new site successfully captures the spirit and content of the old site while presenting it in a more engaging, modern retro design. The main gaps are external dependencies that require infrastructure decisions rather than design/development work.
