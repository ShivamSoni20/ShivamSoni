"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="relative ml-10 py-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute -left-16 top-2 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Avatar className="border size-12 m-auto ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/50">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.div
        className="flex flex-1 flex-col justify-start gap-1 p-4 rounded-lg transition-all duration-300"
        animate={
          isHovered
            ? {
              backgroundColor: "rgba(139, 92, 246, 0.05)",
              borderColor: "rgba(139, 92, 246, 0.3)",
            }
            : {}
        }
        style={{
          border: "1px solid transparent",
        }}
      >
        {dates && (
          <time className="text-xs text-muted-foreground font-medium">
            {dates}
          </time>
        )}
        <h2 className="font-semibold leading-none group-hover:text-primary transition-colors duration-300">
          {title}
        </h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}

        {links && links.length > 0 && (
          <motion.div
            className="mt-2 flex flex-row flex-wrap items-start gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {links?.map((link, idx) => (
              <Link href={link.href} key={idx}>
                <Badge
                  title={link.title}
                  className="flex gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow-sm"
                >
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.li>
  );
}
