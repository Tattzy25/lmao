# 🚨 SCOOVIO PROJECT RULES & GUIDELINES

## 📋 **CRITICAL DEVELOPMENT RULES**

### **🔴 ZERO FALLBACK POLICY**
- **PRODUCTION GRADE ONLY** - No shortcuts, no "quick fixes"
- Every component must have proper error handling
- All API calls must have try/catch with user-friendly error messages
- No broken states allowed in production

### **📁 FILE & FOLDER STRUCTURE RULES**

#### **Modular Architecture (MANDATORY)**
- **MAX 100 LINES PER FILE** - Split larger files immediately
- **ONE PURPOSE PER FILE** - Each file should do ONE thing well
- **SHORT DESCRIPTIVE NAMES** - File names match their exact purpose
- **NO NESTED FOLDERS >3 LEVELS** - Keep structure flat and accessible

#### **File Naming Convention**
```
✅ GOOD: SearchBar.tsx, UserProfile.tsx, EquipmentCard.tsx
❌ BAD: component1.tsx, utils.tsx, helpers.tsx
```

### **🎨 UI/UX STANDARDS**

#### **Mobile-First Design (MANDATORY)**
- **ELDERLY-FRIENDLY** - Large touch targets (min 44px)
- **HIGH CONTRAST** - Accessible color combinations
- **CLEAR NAVIGATION** - Simple, intuitive user flows
- **RESPONSIVE BREAKPOINTS** - Mobile → Tablet → Desktop

#### **Touch Target Requirements**
- **Minimum 44px x 44px** for all interactive elements
- **8px spacing** between touch targets
- **Large text** - minimum 16px font size
- **Clear visual feedback** on touch/hover

### **🏗️ ARCHITECTURE PRINCIPLES**

#### **Dashboard Layout Structure**
```
FIXED TOP HEADER (Never changes)
├─ Search Bar (Location + Dates)
├─ Ask Scoovio Button (Always visible)
└─ User Profile Menu

FIXED LEFT SIDEBAR (Role-based content)
├─ Navigation based on user role
├─ Clean, minimal design
└─ Collapsible on mobile

MAIN CONTENT AREA (Dynamic)
├─ Search Filters (Top of content)
├─ Equipment Grid (4-column responsive)
└─ No background pages/colors
```

#### **Component Hierarchy**
1. **Layout Components** - Header, Sidebar, Main wrapper
2. **Feature Components** - Search, Equipment, User management
3. **UI Components** - Buttons, Cards, Forms (Shadcn)
4. **Utility Components** - Error boundaries, Loading states

### **🔐 SECURITY & AUTHENTICATION**

#### **Role-Based Access Control**
```typescript
enum UserRole {
  ANONYMOUS = 'anonymous',    // Public pages only
  RENTER = 'renter',         // Equipment rental access (books)
  PARTNER = 'partner',       // Business management access (lists gear)
  REFERRER = 'referrer',     // Front desk/concierge/bell staff
  ADMIN = 'admin'            // Administrative access
}
```

#### **Permission Matrix**
- **Anonymous**: Homepage, Search (limited), Signup, Login
- **Renter**: Dashboard, Search, Profile, Trips, Inbox, Become Partner CTA
- **Partner**: Full dashboard + Business tools + Renter mode toggle
- **Admin**: Everything + administrative controls

### **📱 RESPONSIVE DESIGN RULES**

#### **Breakpoint Strategy**
```css
/* Mobile First */
.mobile { /* Default: 320px - 767px */ }
.tablet { /* 768px - 1023px */ }
.desktop { /* 1024px+ */ }
```

#### **Sidebar Behavior**
- **Mobile**: Collapsible hamburger menu
- **Tablet**: Fixed sidebar, reduced width
- **Desktop**: Full fixed sidebar

### **🛠️ TECHNICAL REQUIREMENTS**

#### **Required Dependencies**
```bash
# Core Framework
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS

# UI Components
- Shadcn/ui (Dashboard components)
- Lucide React (Icons)

# Backend Services
- Supabase (Database & Auth)
- Google Maps API (Location services)
- OpenAI API (Ask Scoovio AI)

# State Management
- React Context API
- Custom hooks for data fetching
```

#### **Environment Variables (REQUIRED)**
```bash
# .env.local file MUST exist
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
OPENAI_API_KEY=
NEXTAUTH_SECRET=
```

### **🚀 PERFORMANCE STANDARDS**

#### **Code Splitting Requirements**
- **Dynamic imports** for heavy components
- **Lazy loading** for equipment images
- **Pagination** for equipment listings
- **Optimistic updates** for real-time features

#### **Loading States**
- **Skeleton components** for all data loading
- **Progressive loading** for images
- **Error boundaries** around all async operations
- **Offline handling** for critical features

### **🔧 ERROR HANDLING STANDARDS**

#### **User-Facing Error Messages**
```typescript
// NEVER show technical errors to users
❌ "Database connection failed"
✅ "Please try again in a moment"

❌ "API timeout error"
✅ "Taking longer than expected. Please try again"

❌ "Validation failed on field X"
✅ "Please check your email format"
```

#### **Error Boundary Implementation**
- **Global error boundary** in layout
- **Feature-specific boundaries** for major sections
- **Graceful degradation** when components fail
- **Error reporting** to admin dashboard

### **📞 ASK SCOOVIO INTEGRATION**

#### **AI Assistant Requirements**
- **Floating widget** always accessible
- **Context-aware responses** based on user location
- **Multi-language support** ready
- **Escalation to human support** option
- **Integration with booking system**

### **🗺️ GOOGLE MAPS INTEGRATION**

#### **Map Features (REQUIRED)**
- **Equipment location markers**
- **Search radius visualization**
- **Real-time availability status**
- **Distance calculations**
- **Route planning integration**

### **💾 DATA MANAGEMENT**

#### **Supabase Integration**
- **Row Level Security** enabled
- **Real-time subscriptions** for messaging
- **Optimistic updates** for user actions
- **Data caching** for performance
- **Backup strategies** implemented

### **🧪 TESTING REQUIREMENTS**

#### **Testing Standards**
- **Unit tests** for utility functions
- **Integration tests** for API routes
- **E2E tests** for critical user flows
- **Accessibility testing** for elderly users
- **Mobile device testing** required

### **📈 MONITORING & ANALYTICS**

#### **Performance Monitoring**
- **Core Web Vitals** tracking
- **User interaction analytics**
- **Error rate monitoring**
- **API response time tracking**
- **Mobile performance metrics**

---

## 🚨 **EMERGENCY PROCEDURES**

### **If Project Crashes:**
1. **Stop all running processes**
2. **Check .env.local file exists**
3. **Run `npm install` to restore dependencies**
4. **Clear .next folder**: `rm -rf .next`
5. **Restart development server**: `npm run dev`

### **If Code Breaks:**
1. **Check recent git commits**
2. **Revert to last working state**
3. **Follow modular file structure rules**
4. **Test each component individually**

### **Before Major Changes:**
1. **Commit current working state**
2. **Create feature branch**
3. **Test on development server**
4. **Review against project rules**

---

## ✅ **DEVELOPMENT CHECKLIST**

Before committing any code, verify:
- [ ] File is under 100 lines
- [ ] Component has error boundary
- [ ] Mobile-responsive design tested
- [ ] Elderly-friendly touch targets
- [ ] TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Environment variables secured
- [ ] Performance optimized
- [ ] Accessibility standards met
- [ ] Documentation updated

---

**REMEMBER: This is a PRODUCTION-GRADE platform for elderly users. Every decision should prioritize accessibility, simplicity, and reliability.**
