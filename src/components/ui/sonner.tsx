"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#FFF8DC] group-[.toaster]:text-[#B8860B] group-[.toaster]:border-[#FFD700] group-[.toaster]:shadow-lg", // light warm background + dark gold text + gold border
          description: "group-[.toast]:text-[#FFD700]/90", // muted gold text
          actionButton:
            "group-[.toast]:bg-[#FFD700] group-[.toast]:text-[#1A1A1A]", // gold button with dark text
          cancelButton:
            "group-[.toast]:bg-[#B8860B] group-[.toast]:text-[#FFF8DC]", // darker gold cancel with light text
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

