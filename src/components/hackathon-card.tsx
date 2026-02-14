"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer group relative overflow-hidden rounded-xl border bg-card hover:bg-muted/50 transition-colors"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Avatar className="size-10 border bg-muted">
            <AvatarImage src={image} alt={title} className="object-contain" />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="font-semibold text-base sm:text-lg leading-none group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
              <span>{dates}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="text-muted-foreground">
          {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t bg-muted/20">
              <p className="prose dark:prose-invert text-sm text-muted-foreground mb-4">
                {description}
              </p>
              {links && links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {links.map((link, idx) => (
                    <Link href={link.href} key={idx} onClick={(e) => e.stopPropagation()}>
                      <Badge variant="secondary" className="flex gap-2">
                        {link.icon}
                        {link.title}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
