# Regaarder 3.0 Design System

This document outlines the professional design system implemented from Regaarder 3.0, ensuring consistency across the mobile-friendly Next.js application.

## Color Palette

### Primary Colors

- **Accent Orange**: `#f59e0b` (var(--accent))
- **Accent Yellow**: `#fbbf24` (var(--accent-yellow))
- **Accent Green**: `#10b981` (var(--accent-green))
- **Accent Purple**: `#a855f7` (var(--accent-purple))
- **Accent Red**: `#ef4444` (var(--accent-red))

### Neutral Colors

- **Background**: `#ffffff` (var(--background))
- **Foreground**: `#0f172a` (var(--foreground))
- **Secondary**: `#f1f5f9` (var(--secondary))
- **Muted**: `#94a3b8` (var(--muted))
- **Muted Foreground**: `#64748b` (var(--muted-foreground))
- **Border**: `#e2e8f0` (var(--border))

### Card Colors

- **Card Background**: `#ffffff` (var(--card))
- **Card Foreground**: `#0f172a` (var(--card-foreground))

## Typography

### Font Family

- **Primary Font**: Inter (var(--font-inter))
- **Fallback**: system-ui, sans-serif

### Font Sizes

- **xs**: 0.75rem (12px) - line-height: 1rem
- **sm**: 0.875rem (14px) - line-height: 1.25rem
- **base**: 1rem (16px) - line-height: 1.5rem
- **lg**: 1.125rem (18px) - line-height: 1.75rem
- **xl**: 1.25rem (20px) - line-height: 1.75rem
- **2xl**: 1.5rem (24px) - line-height: 2rem
- **3xl**: 1.875rem (30px) - line-height: 2.25rem

### Font Weights

- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Spacing System (8px Grid)

- **0**: 0px
- **1**: 8px
- **2**: 16px
- **3**: 24px
- **4**: 32px
- **5**: 40px
- **6**: 48px
- **8**: 64px
- **10**: 80px
- **12**: 96px
- **18**: 4.5rem (72px)

## Border Radius

- **sm**: 0.125rem (2px)
- **md**: 0.375rem (6px)
- **lg**: 0.5rem (8px)
- **xl**: 0.75rem (12px)
- **2xl**: 1rem (16px)
- **3xl**: 1.5rem (24px)
- **4xl**: 2rem (32px)
- **full**: 9999px (circle)

## Shadows

- **Card**: `0 2px 8px rgba(0, 0, 0, 0.05)`
- **Card Hover**: `0 4px 12px rgba(0, 0, 0, 0.1)`
- **Accent Shadow**: `0 4px 6px rgba(245, 158, 11, 0.2)`

## Component Patterns

### Header

- **Height**: Auto (py-3)
- **Background**: var(--background) with border-bottom
- **Time Badge**: Accent green background with white text, rounded-full
- **Notification Badge**: Accent orange with black text, positioned absolute
- **Icons**: Hover state with secondary background, rounded-lg

### Search Bar

- **Height**: 48px (h-12)
- **Background**: Secondary with border
- **Border Radius**: xl (12px)
- **Focus State**: Ring with accent color
- **Clear Button**: X icon with muted background on hover

### Tab Navigation (Pill Style)

- **Container**: Secondary background with backdrop-blur
- **Active Tab**: Accent background with black text and shadow
- **Inactive Tab**: Transparent with muted-foreground text
- **Hover State**: Muted background
- **Gradient Fades**: Left and right edges for scrollable overflow

### Video Card

- **Background**: Card background with border
- **Border Radius**: xl (12px)
- **Shadow**: Card shadow, hover to card-hover shadow
- **Thumbnail**: 16:9 aspect ratio with gradient overlay
- **Duration Badge**: Bottom-right, black/80 background with backdrop-blur
- **Requested Badge**: Top-right, accent background
- **Close Button**: Top-left, black/60 with backdrop-blur

### Bottom Navigation

- **Background**: Background with backdrop-blur-xl and border-top
- **Icons**: 20px (w-5 h-5)
- **Active State**: Accent color with scale-110 transform
- **Inactive State**: Muted-foreground with hover effects
- **Label**: xs size, font-medium (semibold when active)

## Animations

### Pulse Soft

```css
@keyframes pulse-soft {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
```

- **Duration**: 2s
- **Timing**: cubic-bezier(0.4, 0, 0.6, 1)
- **Iterations**: infinite

### Shimmer

```css
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
```

- **Duration**: 2s
- **Iterations**: infinite

## Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## Accessibility Features

### Focus States

- **Outline**: 2px solid accent color
- **Outline Offset**: 2px

### ARIA Labels

- All interactive elements include proper aria-labels
- Navigation items include aria-current for active state
- Buttons include aria-label for icon-only buttons

### Touch Targets

- Minimum size: 44x44px for all interactive elements
- Adequate spacing between touch targets

## Best Practices

### Mobile-First Design

- Design for mobile screens first
- Progressive enhancement for larger screens
- Touch-friendly interactive elements

### Performance

- Use backdrop-blur sparingly
- Optimize images with Next.js Image component
- Use CSS transforms for animations (GPU-accelerated)

### Consistency

- Use design tokens (CSS variables) consistently
- Follow the 8px spacing grid
- Maintain consistent border-radius across similar components

## Component Library Integration

### Framer Motion

- Used for smooth page transitions
- Fade-in animations on component mount
- Duration: 0.3s for most animations

### Lucide React Icons

- Consistent 20px (w-5 h-5) for navigation and UI icons
- 16px (w-4 h-4) for tab icons
- Semantic icon usage (Home, Bell, Settings, etc.)

## Implementation Examples

### Button Styles

```tsx
// Primary Button
<button className="px-4 py-2 bg-accent text-black font-medium rounded-lg shadow-lg hover:bg-accent/90 transition-all">
  Click Me
</button>

// Secondary Button
<button className="px-4 py-2 bg-secondary text-foreground font-medium rounded-lg hover:bg-muted transition-all">
  Click Me
</button>
```

### Card Container

```tsx
<div className="bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-shadow p-4">
  {/* Card Content */}
</div>
```

### Gradient Overlay

```tsx
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
```

---

**Version**: 1.0.0  
**Last Updated**: November 4, 2025  
**Based On**: Regaarder 3.0 Design System
