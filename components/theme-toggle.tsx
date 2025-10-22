"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"
export interface checkProps {
  path: string,
  isScrolled: boolean
}
export function ThemeToggle({isScrolled , path}: checkProps) {
  const { setTheme } = useTheme()
  const t = useTranslations("theme")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Sun className={` ${isScrolled || path !== "/" ? " dark:!text-white" : "!text-black"} h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`} />
          <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${isScrolled || path !== "/"  ? " dark:!text-white" : "!text-black"} `} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>{t("light")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>{t("dark")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>{t("system")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
