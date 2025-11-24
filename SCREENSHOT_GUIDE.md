# Screenshot Display Options Guide

This guide outlines several effective ways to showcase Puck Wizard screenshots on your landing page.

## 🎨 Option 1: Carousel Gallery (Recommended)
**Component:** `Screenshots.tsx`

**Best For:** Showing multiple screenshots in a clean, scrollable format

**Features:**
- Carousel/slider with navigation arrows
- Click to enlarge (lightbox modal)
- Responsive grid layout
- Hover effects with zoom
- Captions for each screenshot

**Usage:**
```tsx
import { Screenshots } from "@/components/Screenshots";

// Add to Index.tsx after Features section
<Screenshots />
```

**Screenshot Requirements:**
- Aspect ratio: 16:9 (or consistent across all)
- Recommended size: 1920x1080px or 1280x720px
- Format: PNG or JPG
- Place screenshots in `/public/screenshots/` folder

## 🎯 Option 2: Before/After Comparison
**Component:** `AppShowcase.tsx`

**Best For:** Demonstrating the value proposition visually

**Features:**
- Interactive slider to compare before/after
- Drag to reveal the difference
- Great for showing the extension's impact

**Usage:**
```tsx
import { AppShowcase } from "@/components/AppShowcase";

// Add to Index.tsx after Features section
<AppShowcase />
```

**Screenshot Requirements:**
- Two images: one "before" (without extension) and one "after" (with extension)
- Same dimensions and framing
- Same browser viewport size
- Capture the same page section

## 📱 Option 3: Hero Section Mockup
**Best For:** Immediate visual impact on landing

**Implementation:**
Add a screenshot mockup to the Hero component showing the extension in action.

**Example Enhancement:**
```tsx
// In Hero.tsx, add after the CTA buttons:
<div className="mt-16 max-w-5xl mx-auto">
  <div className="relative rounded-lg border-4 border-border shadow-2xl overflow-hidden">
    <img 
      src="/screenshots/hero-mockup.png" 
      alt="Puck Wizard in action"
      className="w-full h-auto"
    />
  </div>
</div>
```

## 🎴 Option 4: Feature Cards with Screenshots
**Best For:** Contextual screenshots tied to specific features

**Implementation:**
Enhance the existing Features component to include screenshots:

```tsx
const features = [
  {
    icon: LineChart,
    title: "Live Line Combinations",
    description: "...",
    screenshot: "/screenshots/line-combinations.png", // Add this
  },
  // ... other features
];
```

## 📊 Option 5: Tabbed Screenshots
**Best For:** Organizing screenshots by category (Free vs Premium features)

**Implementation:**
Use the Tabs component to show different screenshot sets:
- Tab 1: Free Features Screenshots
- Tab 2: Premium Features Screenshots
- Tab 3: Different Sites (Fantrax, Yahoo, ESPN)

## 🖼️ Screenshot Best Practices

### What to Capture:
1. **Line Combinations Display**
   - Show badges next to player names
   - Include F1, F2, D1, PP1 labels clearly visible
   - Capture on a real Fantrax page

2. **Player Status Indicators**
   - Show OUT badges for injured/scratched players
   - Demonstrate the color coding

3. **Power Play Units**
   - Show PP1 and PP2 badges
   - Include multiple players in view

4. **Premium Features** (if applicable)
   - Back-to-back indicators
   - Enhanced tooltips
   - Advanced analytics

5. **Different Page Types**
   - Player list view
   - Roster view
   - Transaction page
   - Matchup page

### Technical Requirements:
- **Resolution:** Minimum 1920x1080px (Full HD)
- **Format:** PNG (for transparency) or JPG (for smaller file size)
- **File Size:** Optimize to <500KB per image
- **Naming:** Use descriptive names like `fantrax-line-combinations.png`
- **Location:** Place in `/public/screenshots/` directory

### Screenshot Tips:
1. **Use Real Data:** Capture actual NHL players and teams
2. **Clean UI:** Hide browser extensions, bookmarks, etc.
3. **Consistent Styling:** Use the same browser theme/zoom level
4. **Highlight Key Elements:** Use subtle arrows or highlights if needed
5. **Mobile Responsive:** Consider mobile screenshots too

## 🚀 Quick Start

1. **Take Screenshots:**
   - Install the extension
   - Navigate to Fantrax
   - Capture various views showing the extension

2. **Add Screenshots to Project:**
   ```bash
   mkdir -p public/screenshots
   # Copy your screenshots here
   ```

3. **Update Component:**
   - Open `Screenshots.tsx`
   - Replace `/placeholder.svg` with your actual screenshot paths
   - Update titles and descriptions

4. **Add to Page:**
   ```tsx
   // In src/pages/Index.tsx
   import { Screenshots } from "@/components/Screenshots";
   
   // Add after Features section
   <Screenshots />
   ```

## 📍 Recommended Placement

**Best locations for screenshots:**
1. **After Hero** - First impression
2. **After Features** - Visual proof of features
3. **Before Pricing** - Show value before asking for payment
4. **In CTA Section** - Reinforce value proposition

## 🎬 Animation Ideas

Consider adding:
- Fade-in animations as user scrolls
- Parallax effects for hero screenshots
- Hover zoom effects
- Slide-in animations for carousel items

## 💡 Pro Tips

1. **A/B Test:** Try different screenshot placements
2. **Mobile First:** Ensure screenshots look good on mobile
3. **Loading States:** Add skeleton loaders while images load
4. **Lazy Loading:** Use React lazy loading for performance
5. **Alt Text:** Always include descriptive alt text for accessibility

