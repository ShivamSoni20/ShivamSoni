"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group", className)}
    >
      <Link href={href || "#"} className="block">
        <motion.div
          className={cn(
            "relative overflow-hidden rounded-2xl bg-card",
            "border border-border/50",
            "transition-all duration-500 ease-out"
          )}
          whileHover={{ y: -4 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Image/Video Container */}
          <div className="relative overflow-hidden aspect-video bg-muted">
            {video && (
              <motion.video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none w-full h-full object-cover"
                animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            {image && !video && (
              <motion.div
                className="w-full h-full"
                animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            {/* Title and Date */}
            <div className="space-y-1">
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <time className="text-sm text-muted-foreground">{dates}</time>
            </div>

            {/* Description */}
            <Markdown className="prose prose-sm max-w-full text-muted-foreground dark:prose-invert line-clamp-3">
              {description}
            </Markdown>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.slice(0, 4).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
                {tags.length > 4 && (
                  <Badge
                    variant="secondary"
                    className="text-xs font-normal px-2.5 py-0.5 rounded-full"
                  >
                    +{tags.length - 4}
                  </Badge>
                )}
              </div>
            )}

            {/* Links */}
            {links && links.length > 0 && (
              <div className="flex items-center gap-4 pt-2 border-t border-border/50">
                {links.map((link, idx) => (
                  <Link
                    href={link.href}
                    key={idx}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.icon}
                    <span>{link.type}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Learn More CTA */}
            <motion.div
              className="flex items-center gap-1 text-sm font-medium text-primary pt-2"
              animate={isHovered ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Subtle shadow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            initial={false}
            animate={
              isHovered
                ? { boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.1)" }
                : { boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)" }
            }
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
