"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface CollapsibleProps {
  title: string
  year?: number
  description?: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function Collapsible({
  title,
  year,
  description,
  children,
  defaultOpen = false,
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            {year && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {year}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-muted-foreground text-left">
              {description}
            </p>
          )}
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-4 border-t">{children}</div>
        </div>
      </div>
    </div>
  )
}
