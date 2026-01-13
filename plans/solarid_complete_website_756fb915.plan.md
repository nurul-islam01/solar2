---
name: Solarid Complete Website
overview: Build a luxury solar website for Solarid Australia with 45+ routes matching the original site structure. Original European-style dark theme design with gold accents, image-heavy approach, using Next.js 16, GSAP, and Tailwind CSS.
todos:
  - id: phase1-setup
    content: Initialize Next.js 16 + Tailwind + GSAP, configure design tokens
    status: completed
  - id: phase2-layout
    content: Build Header, MegaMenu, Footer, page transition components
    status: completed
  - id: phase3-ui
    content: Create reusable UI components (Button, Card, Accordion, etc.)
    status: completed
  - id: phase4-home
    content: Implement Home page with all sections and animations
    status: completed
    dependencies:
      - phase2-layout
      - phase3-ui
  - id: phase5-products
    content: Build all 21 product routes (landing, categories, individual)
    status: completed
    dependencies:
      - phase3-ui
  - id: phase6-newrelease
    content: Create 5 New Release pages
    status: completed
    dependencies:
      - phase3-ui
  - id: phase7-business
    content: Build 6 Business/Scenarios pages
    status: completed
    dependencies:
      - phase3-ui
  - id: phase8-support
    content: Create 6 Support pages including FAQ
    status: completed
    dependencies:
      - phase3-ui
  - id: phase9-about
    content: Build 5 About pages with blog/news
    status: completed
    dependencies:
      - phase3-ui
  - id: phase10-contact
    content: Create Contact page with form and map
    status: completed
    dependencies:
      - phase3-ui
  - id: phase11-responsive
    content: Test and polish responsive design across breakpoints
    status: completed
  - id: phase12-optimize
    content: Optimize images, performance audit, final polish
    status: completed
---

# Solarid Australia - Complete Website Build

## Design System

| Element | Value |

|---------|-------|

| **Primary BG** | #0A0A0A (rich black) |

| **Secondary BG** | #151515 (dark charcoal) |

| **Accent** | #C9A962 (gold) |

| **Accent Hover** | #D4AF37 (bright gold) |

| **Text Primary** | #FAFAFA (off-white) |

| **Text Muted** | #888888 (gray) |

| **Headline Font** | Cormorant Garamond (serif) |

| **Body Font** | Outfit (sans-serif) |

---

## Complete Route Structure (45 Routes)

### Core Pages (3)

- `/` - Home
- `/contact` - Contact

### New Release (5)

- `/new-release` - Landing
- `/new-release/rv-solar-kits`
- `/new-release/balcony-solar-panels`
- `/new-release/off-grid-kits`
- `/new-release/marine-solution`

### Products (21)

- `/products` - Products landing

**Top Solar Panels (6)**

- `/products/top-solar-panel`
- `/products/anti-shading-solar-panel`
- `/products/topcon-solar-panel`
- `/products/400-watt-solar-panel`
- `/products/200-watt-solar-panel`
- `/products/bc-solar-panel`

**Flexible Panels (4)**

- `/products/flexible-solar-panels`
- `/products/pa621-series`
- `/products/pa219-series`
- `/products/tf-series`

**Rigid Panels (4)**

- `/products/rigid-solar-panels`
- `/products/sgm-series`
- `/products/dg-series`
- `/products/sgsp-series`

**Portable Panels (7)**

- `/products/portable-solar-panels`
- `/products/hi-power-series`
- `/products/bxf-plus-series`
- `/products/bxf-series`
- `/products/winner-bag-series`
- `/products/spc-series`
- `/products/sgf-series`

### Business (6)

- `/business` - Landing
- `/business/outdoor`
- `/business/rv`
- `/business/marine`
- `/business/balcony`
- `/business/partner`

### Support (6)

- `/support` - Landing
- `/support/product-test`
- `/support/warranty`
- `/support/certifications`
- `/support/custom-panel`
- `/support/faq`

### About (5)

- `/about` - Landing
- `/about/story`
- `/about/history`
- `/about/blog`
- `/about/news`

### Dynamic Routes

- `/about/blog/[slug]`
- `/about/news/[slug]`

---

## Implementation Phases

### Phase 1: Foundation

- Next.js 16 project setup with App Router
- Tailwind config with custom design tokens
- GSAP installation and scroll trigger setup
- Global styles, fonts, CSS variables

### Phase 2: Layout Components

- Header with transparent-to-solid scroll effect
- Mega menu navigation with product images
- Footer with newsletter and Australian contact
- Page transition wrapper

### Phase 3: Reusable Components

- Button (gold outline, solid variants)
- ProductCard (image-dominant, hover reveal)
- SectionHeading (serif + gold line)
- ImageReveal (GSAP gold overlay animation)
- Accordion (for FAQ)
- Counter (animated stats)

### Phase 4: Home Page (Premium Sections)

**Section 1: Cinematic Hero**

- Full-viewport video/image of Australian solar landscape at golden hour
- Parallax depth layers (mountains, panels, sky)
- Minimal text: "SOLARID" splits and animates in, tagline fades up
- Scroll indicator with animated gold line
- Mouse-follow subtle light effect

**Section 2: Philosophy Strip**

- Split screen (60/40)
- Left: Macro shot of solar cell texture with gold light reflections
- Right: Single powerful statement in large serif
- Gold horizontal line draws on scroll
- Text: "Precision. Performance. Power."

**Section 3: Product Categories**

- 4 large image cards in asymmetric grid
- Full-bleed images, category name reveals on hover with gold underline
- Cards stagger in from different directions
- Hover: 3D tilt effect, image zoom

**Section 4: Featured Products (Editorial Layout)**

- Asymmetric layout: 1 large (60%), 2 stacked small (40%)
- Product images with lifestyle context
- Gold "NEW" badges animate in
- Hover reveals product name with slide-up animation

**Section 5: Technology Showcase**

- Horizontal scroll section (pins on scroll)
- Large images showing anti-shading tech, cell technology
- Minimal captions with gold accents
- Progress indicator bar

**Section 6: Application Scenarios**

- Full-width image slider (RV, Marine, Balcony, Outdoor)
- Images crossfade with Ken Burns effect
- Scenario name in elegant serif, corner positioned
- Navigation dots with gold active state

**Section 7: Trust & Credentials**

- Dark section with gradient overlay
- Certification logos (TUV, CE, ISO) in gold monochrome
- Animated counters: "18+ Years", "2000+ Partners", "400+ Employees"
- Subtle grid pattern background

**Section 8: Latest Insights**

- 3 blog card preview with image focus
- Date in gold, title in serif
- Hover: image lifts, gold border appears
- "View All" link with animated arrow

**Section 9: CTA Banner**

- Full-width with dramatic solar panel close-up
- "Partner With Us" in large serif
- Gold CTA button with magnetic hover
- Subtle particle animation in background

### Phase 5: Product Pages (21 routes)

**Products Landing Page**

- Hero: Grid of 4 category images with reveal animation
- Hover: Gold overlay slides in with category name
- Sticky category filter bar with gold underline indicator
- Infinite scroll product grid with stagger animation

**Category Pages (Flexible/Rigid/Portable/Top)**

- Cinematic hero image of category in use
- Category name in massive serif typography
- Series grid with NEW/HOT/TOP gold badges
- Feature strip (horizontal scroll of benefits)
- Comparison table with gold headers (optional)

**Individual Product Pages**

- Hero gallery with thumbnail strip
- Main image: Gold corner brackets frame, zoom on click
- Thumbnail hover: Gold border highlight
- GSAP: Smooth crossfade between images

- Specs panel: Dark card (#151515) with gold borders
- Key specs in 2-column grid
- Download datasheet button (gold outline)
- Certifications row with icons

- Features section: Alternating image/text blocks
- Images have parallax scroll effect
- Text reveals line by line
- Gold bullet points for lists

- Applications gallery: Where product is used
- Clickable lifestyle images
- Hover: location name slides up

- Related products: Horizontal scroll
- Minimal cards, image dominant
- "View All" with animated arrow

### Phase 6: Other Sections (Premium Design)

**New Release Pages (5)**

- Hero: Cinematic lifestyle image (RV on outback road, yacht at sea, etc.)
- Kit components displayed as floating product arrangement
- "What's Included" section with numbered items
- Installation gallery with before/after slider
- Gold "Order Now" CTA with hover animation

**Business/Scenarios Pages (6)**

- Landing: Full-viewport 4-quadrant grid of scenarios
- Each quadrant is clickable image with scenario name
- Hover: Image zooms, gold vignette appears
- Individual pages: Immersive hero, problem/solution format
- Recommended products carousel
- Partner testimonial with large quote marks in gold

**Support Pages (6)**

- Hub: 5 elegant cards with gold icons
- Hover: Icon animates, card lifts
- FAQ: Accordion with smooth GSAP expand
- Gold + icon on closed, rotates on open
- Search bar with gold focus state
- Warranty: Visual timeline of coverage periods
- Product cards showing warranty by category
- Certifications: Full-width grid of certification logos
- Click to view certificate in modal with zoom
- Custom Panel: Step-by-step process visualization
- Numbered steps with connecting gold line
- Inquiry form styled as premium configurator

**About Pages (5)**

- Story: Narrative scroll experience
- Large images pin and unpin as you scroll
- Text blocks fade in between images
- Gold timeline markers on the side
- History: Horizontal timeline (scroll-controlled)
- Year markers with gold circles
- Images and milestones animate in sequence
- Blog/News: Masonry or grid layout
- Featured post hero-sized
- Cards: Image 70%, minimal text
- Hover: Read time appears, gold arrow
- Individual Post: Clean reading experience
- Large hero image with parallax
- Drop cap in gold serif
- Pull quotes with gold left border
- Related posts at bottom

**Contact Page**

- Hero: Dramatic Australian landscape
- Split layout: Form left, info right
- Form: Dark inputs with floating labels
- Gold focus animation (border draws around)
- Success: Checkmark animation
- Map: Mapbox dark theme
- Custom gold marker with pulse animation
- Contact cards: Email, Phone, Address
- Gold icons, minimal elegant typography

### Phase 7: Polish

- Responsive testing (mobile, tablet, desktop)
- GSAP animations fine-tuning
- Image optimization
- Performance audit

---

## Premium Animation System (GSAP)

### Page Load Animations

- **Preloader**: Elegant gold line drawing Solarid logo, morphs into full logo reveal
- **Hero Entrance**: Staggered reveal - background image scales from 1.1 to 1.0, text splits and fades up character-by-character
- **Navigation**: Slides down with opacity fade (0.6s ease-out)

### Scroll-Triggered Animations

- **Text Reveal**: Words/lines clip-path reveal from bottom, staggered 0.08s delay
- **Image Reveal**: Gold overlay slides diagonally (top-left to bottom-right), revealing image beneath
- **Section Fade**: Elements fade up 60px with 0.8s duration on viewport entry
- **Parallax Layers**: Background images move at 0.3x scroll speed, foreground at 1x
- **Counter Animation**: Numbers count up with easing when stats section enters viewport
- **Horizontal Scroll**: Product carousels pin and scroll horizontally on scroll

### Hover Interactions

- **Magnetic Cursor**: Custom cursor (gold dot + ring) with magnetic pull toward buttons/links
- **Button Hover**: Background fills from center outward, text color inverts
- **Card Hover**: Image scales 1.05x, gold border fades in, content slides up 10px
- **Link Hover**: Gold underline draws from left to right (0.3s)
- **Menu Item Hover**: Text shifts right 8px, gold arrow appears

### Micro-Interactions

- **Input Focus**: Gold border animates clockwise around input
- **Accordion Expand**: Smooth height animation with content fade-in
- **Gallery Thumbnail**: Active state with gold corner brackets
- **Loading States**: Pulsing gold shimmer effect
- **Success States**: Checkmark draws with gold stroke

### Page Transitions

- **Exit**: Current page fades out while sliding up 30px (0.4s)
- **Enter**: New page fades in while sliding up from 30px below (0.5s)
- **Progress Bar**: Gold line at top shows page load progress

### Special Effects

- **Hero Video/Image**: Ken Burns effect (slow zoom + pan)
- **Product Showcase**: 3D tilt on mouse move (subtle, 5deg max)
- **Scroll Progress**: Thin gold line at top of viewport
- **Smooth Scroll**: Lenis smooth scroll for buttery scrolling
- **Cursor Trail**: Subtle gold particle trail on rapid mouse movement

---

## Premium Design Elements

### Typography Hierarchy

```
Hero Headline:     Cormorant Garamond, 80-120px, 600 weight, -0.02em tracking
Section Title:     Cormorant Garamond, 48-64px, 500 weight
Subsection:        Outfit, 24-32px, 500 weight, uppercase, 0.1em tracking
Body Large:        Outfit, 18-20px, 400 weight, 1.7 line-height
Body:              Outfit, 16px, 400 weight, 1.6 line-height
Caption:           Outfit, 14px, 400 weight, uppercase, 0.05em tracking
```

### Spacing System

```
Section Padding:   120px-180px vertical (desktop), 80px (mobile)
Container Max:     1440px with 80px side padding
Grid Gap:          40px (desktop), 24px (mobile)
Card Padding:      32px-48px
```

### Visual Treatments

- **Glass Morphism**: Subtle frosted glass on overlays (backdrop-blur: 20px)
- **Gold Gradients**: Linear gradients from #C9A962 to #D4AF37 for CTAs
- **Image Overlays**: Dark gradient overlays (rgba(10,10,10,0.4) to transparent)
- **Borders**: 1px gold borders with 0.3 opacity, full opacity on hover
- **Shadows**: Subtle gold glow on active elements (0 0 40px rgba(201,169,98,0.2))
- **Grain Texture**: Subtle noise overlay on hero sections for depth

### Component Styling

**Buttons**

- Primary: Gold background, black text, hover darkens
- Secondary: Transparent with gold border, gold text, hover fills gold
- Icon Button: Circle with gold border, icon centered

**Cards**

- Dark background (#151515)
- 1px gold border (0.2 opacity)
- Image takes 70% of card height
- Content area with generous padding
- Hover: border opacity increases, subtle lift shadow

**Navigation**

- Fixed position, transparent initially
- Scroll: Background fades to #0A0A0A with 0.95 opacity
- Logo: Gold wordmark, minimal
- Menu items: Outfit uppercase, 14px, 0.1em tracking
- CTA Button: Gold outline, right aligned

**Mega Menu**

- Full width dropdown
- Dark background with subtle gold grid lines
- Product images with hover zoom
- Category organized with gold dividers

---

## Key Design Differentiators from Original

| Original Site | Solarid Design |

|---------------|----------------|

| Light background | Dark theme (#0A0A0A) |

| Blue/green accents | Gold/bronze accents |

| Text-heavy sections | Image-dominant, minimal text |

| Standard grid layouts | Asymmetric, editorial layouts |

| Basic hover effects | GSAP magnetic cursor, reveal animations |

| Standard navigation | Mega menu with product imagery |

| Generic styling | Luxury European aesthetic |

| Static feel | Cinematic scroll experience |

| Basic transitions | Smooth page transitions with GSAP |

| No preloader | Premium animated logo preloader |

---

## File Structure

```
/app
  layout.tsx
  page.tsx
  /new-release/...
  /products/...
  /business/...
  /support/...
  /about/...
  /contact/page.tsx
/components
  /layout (Header, Footer, MegaMenu)
  /ui (Button, Card, Accordion, Input)
  /sections (Hero, ProductGrid, Features)
  /animations (ScrollReveal, Parallax, ImageReveal)
/lib
  /data (products.ts, content.ts)
  /gsap (animations.ts)
  /utils (helpers)
/public
  /images (placeholder structure)
/styles
  globals.css
```