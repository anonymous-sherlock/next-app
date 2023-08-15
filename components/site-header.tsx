import Link from "next/link"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/theme-toggle"

import { Button } from "./ui/button"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full shadow-md	">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Link href={"/login"}>
              <Button variant={"outline"}>Login </Button>
            </Link>
            <Link href={"/register"}>
              <Button variant="default">Register </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
