"use client"

import * as React from "react"
import {
  Accessibility,
  Search,
  Home,
  User,
  Calendar,
  Heart,
  MessageCircle,
  Settings,
  HelpCircle,
  Package,
  TrendingUp,
  CreditCard,
  Shield,
  Star,
  FileText,
  Users,
  QrCode,
  Building,
  Zap,
} from "lucide-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavRoleBased } from "@/components/nav-role-based"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "John Doe",
    email: "john@scoovio.com",
    avatar: "/avatars/default.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Search Equipment",
      url: "/dashboard/search",
      icon: Search,
    },
  ],
  navRenter: [
    {
      title: "My Trips",
      icon: Calendar,
      items: [
        {
          title: "Booked",
          url: "/dashboard/renters/trips/booked",
        },
        {
          title: "History",
          url: "/dashboard/renters/trips/history",
        },
      ],
    },
    {
      title: "Favorites",
      url: "/dashboard/renters/favorites",
      icon: Heart,
    },
    {
      title: "Profile",
      url: "/dashboard/renters/profile",
      icon: User,
    },
    {
      title: "Messages",
      url: "/dashboard/renters/inbox/messages",
      icon: MessageCircle,
    },
  ],
  navPartner: [
    {
      title: "Equipment",
      icon: Package,
      items: [
        {
          title: "Listings",
          url: "/dashboard/partners/equipment/listings",
        },
        {
          title: "Claims",
          url: "/dashboard/partners/equipment/claims",
        },
        {
          title: "Settings",
          url: "/dashboard/partners/equipment/settings",
        },
      ],
    },
    {
      title: "My Trips",
      icon: Calendar,
      items: [
        {
          title: "Active",
          url: "/dashboard/partners/trips/booked",
        },
        {
          title: "History",
          url: "/dashboard/partners/trips/history",
        },
      ],
    },
    {
      title: "Business",
      icon: TrendingUp,
      items: [
        {
          title: "Earnings",
          url: "/dashboard/partners/business/earnings",
        },
        {
          title: "Performance",
          url: "/dashboard/partners/business/performance",
        },
        {
          title: "Ratings & Reviews",
          url: "/dashboard/partners/business/ratings",
        },
        {
          title: "Tax Information",
          url: "/dashboard/partners/business/tax",
        },
        {
          title: "Transactions",
          url: "/dashboard/partners/business/transactions",
        },
      ],
    },
    {
      title: "Referrals",
      icon: Users,
      items: [
        {
          title: "Overview",
          url: "/dashboard/partners/business/referrals/overview",
        },
        {
          title: "Rules",
          url: "/dashboard/partners/business/referrals/rules",
        },
        {
          title: "History",
          url: "/dashboard/partners/business/referrals/history",
        },
      ],
    },
    {
      title: "Marketing Assets",
      icon: QrCode,
      items: [
        {
          title: "Codes & Links",
          url: "/dashboard/partners/business/assets/codes",
        },
        {
          title: "QR Generator",
          url: "/dashboard/partners/business/assets/qr",
        },
        {
          title: "Hotel Placements",
          url: "/dashboard/partners/business/assets/hotels",
        },
      ],
    },
    {
      title: "Payouts",
      icon: CreditCard,
      items: [
        {
          title: "Pending",
          url: "/dashboard/partners/business/payouts/pending",
        },
        {
          title: "In Batch",
          url: "/dashboard/partners/business/payouts/batch",
        },
        {
          title: "Paid",
          url: "/dashboard/partners/business/payouts/paid",
        },
      ],
    },
    {
      title: "Verification",
      icon: Shield,
      items: [
        {
          title: "Background Checks",
          url: "/dashboard/partners/business/checks/pending",
        },
        {
          title: "Identity",
          url: "/dashboard/partners/business/verification/identity",
        },
        {
          title: "Driver's License",
          url: "/dashboard/partners/business/verification/license",
        },
        {
          title: "Insurance",
          url: "/dashboard/partners/business/verification/insurance",
        },
      ],
    },
    {
      title: "Profile",
      url: "/dashboard/partners/profile",
      icon: User,
    },
    {
      title: "Messages",
      url: "/dashboard/partners/inbox/messages",
      icon: MessageCircle,
    },
  ],
  navReferrer: [
    {
      title: "My Referrals",
      icon: Users,
      items: [
        {
          title: "Active Bookings",
          url: "/dashboard/referrers/referrals/bookings",
        },
        {
          title: "History",
          url: "/dashboard/referrers/referrals/history",
        },
      ],
    },
    {
      title: "Payouts",
      icon: CreditCard,
      items: [
        {
          title: "Pending",
          url: "/dashboard/referrers/payouts/pending",
        },
        {
          title: "In Batch",
          url: "/dashboard/referrers/payouts/batch",
        },
        {
          title: "Paid",
          url: "/dashboard/referrers/payouts/paid",
        },
      ],
    },
    {
      title: "Marketing Assets",
      url: "/dashboard/referrers/assets",
      icon: QrCode,
    },
    {
      title: "Settings",
      url: "/dashboard/referrers/settings",
      icon: Settings,
    },
    {
      title: "Messages",
      url: "/dashboard/referrers/inbox/messages",
      icon: MessageCircle,
    },
  ],
  navSecondary: [
    {
      title: "Ask Scoovio",
      icon: HelpCircle,
      items: [
        {
          title: "How It Works",
          url: "/dashboard/ask-scoovio/how-it-works",
        },
        {
          title: "Gift Cards",
          url: "/dashboard/ask-scoovio/gift-cards",
        },
        {
          title: "Support",
          url: "/dashboard/ask-scoovio/support",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // TODO: Get user role from authentication context
  const userRole = 'partner' as 'anonymous' | 'renter' | 'partner' | 'referrer' // This should come from auth context
  
  // Determine which navigation items to show based on user role
  const getRoleNavigation = () => {
    switch (userRole) {
      case 'renter':
        return { items: data.navRenter, title: "Renter Dashboard" }
      case 'partner':
        return { items: data.navPartner, title: "Partner Dashboard" }
      case 'referrer':
        return { items: data.navReferrer, title: "Referrer Dashboard" }
      default:
        return null
    }
  }

  const roleNavigation = getRoleNavigation()
  const secondaryItems = data.navSecondary.filter(item => 'url' in item) as Array<{title: string; url: string; icon: any}>

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <Accessibility className="h-5 w-5" />
                <span className="text-base font-semibold">Scoovio</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {roleNavigation && (
          <NavRoleBased items={roleNavigation.items} title={roleNavigation.title} />
        )}
        <NavSecondary 
          items={secondaryItems} 
          className="mt-auto" 
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
