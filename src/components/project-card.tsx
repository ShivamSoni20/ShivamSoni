"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={cn(
          "group relative flex flex-col overflow-hidden border h-full",
          "bg-card/60 backdrop-blur-md",
          "transition-all duration-500 ease-out-expo",
          "hover:shadow-glow hover:border-primary/50",
          className
        )}
      >
        <Link
          href={href || "#"}
          className="block cursor-pointer overflow-hidden"
        >
          <div className="relative overflow-hidden h-40">
            {video && (
              <motion.video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none w-full h-full object-cover object-top"
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            {image && (
              <motion.div
                className="w-full h-full"
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            )}
            {/* Gradient overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </Link>

        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
            <time className="font-sans text-xs text-muted-foreground">
              {dates}
            </time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <motion.div
              className="mt-2 flex flex-wrap gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {tags?.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Badge
                    className="px-1 py-0 text-[10px] hover:scale-105 transition-transform duration-200"
                    variant="secondary"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge
                    className="flex gap-2 px-2 py-1 text-[10px] hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow-sm"
                  >
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-lg"
          initial={{ opacity: 0 }}
          animate={
            isHovered
              ? {
                opacity: 1,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
              }
              : { opacity: 0 }
          }
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
}
