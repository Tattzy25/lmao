import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center p-2 rounded-lg hover:bg-accent transition-colors">
              <img 
                src="https://i.imgur.com/JQIz3Q6.png" 
                alt="Scoovio" 
                className="h-10 w-10 mr-3"
              />
              <div className="text-2xl md:text-3xl font-bold text-primary">Scoovio</div>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 py-6">
                  <Link href="/dashboard/search" className="text-lg font-medium">
                    🔍 Find Equipment
                  </Link>
                  <Link href="/become-host" className="text-lg font-medium">
                    🏢 Partner With Us
                  </Link>
                  <Link href="/how-it-works" className="text-lg font-medium">
                    ❓ How It Works
                  </Link>
                  <Link href="/support" className="text-lg font-medium">
                    💬 Get Help
                  </Link>
                  <Separator />
                  <Link href="/login" className="text-lg font-medium">
                    Sign In
                  </Link>
                  <Link href="/signup" className="text-lg font-medium">
                    Sign Up
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Navigation Menu - Desktop */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/dashboard/search" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    🔍 Find Equipment
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/become-host" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    🏢 Partner With Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ❓ How It Works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/support" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    💬 Get Help
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" legacyBehavior passHref>
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup" legacyBehavior passHref>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
