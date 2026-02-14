"use client";

import { AnimatedGradient } from "@/components/animated-gradient";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { RetroGrid } from "@/components/ui/retro-grid";
import { SectionDivider } from "@/components/section-divider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible } from "@/components/ui/collapsible";
import { DATA } from "@/data/resume";
import { useMagnetic } from "@/hooks/use-magnetic";
import { motion } from "framer-motion";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [magneticRef, magneticPosition] = useMagnetic(0.2);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 relative overflow-hidden">
      {/* Scroll Progress Bar from MagicUI */}
      <ScrollProgress className="top-0" />

      <section id="hero" className="relative w-full min-h-[60vh] flex items-center justify-center">
        {/* Retro Grid Background */}
        <RetroGrid className="z-0" lightLineColor="#e5e5e5" darkLineColor="#262626" />

        {/* Animated gradient partially visible */}
        <AnimatedGradient className="absolute inset-0 -z-10 opacity-30 blur-[100px]" />

        <div className="z-10 mx-auto w-full max-w-5xl space-y-8 p-6 text-center md:text-left">
          <div className="flex flex-col-reverse md:flex-row gap-8 justify-between items-center">
            <div className="flex-col flex flex-1 space-y-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-muted-foreground mx-auto md:mx-0"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <motion.div
                ref={magneticRef}
                style={{
                  x: magneticPosition.x,
                  y: magneticPosition.y,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 opacity-30 blur-xl animate-pulse-glow" />
                <Avatar className="size-32 md:size-40 border-4 border-background ring-4 ring-primary/20 shadow-2xl overflow-hidden bg-accent/50 backdrop-blur-sm hover:ring-primary/40 transition-all duration-300 hover:scale-105">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </motion.div>
            </BlurFade>
          </div>

          <div className="flex justify-center md:justify-start pt-8">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto w-full px-6 space-y-24 pb-24 z-10 relative">
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="bg-card/50 backdrop-blur-sm border rounded-3xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">About</h2>
              <Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert text-base leading-relaxed">
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </section>

        <section id="work">
          <div className="flex flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </BlurFade>
            <div className="grid gap-4">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="education">
          <div className="flex flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-2xl font-bold">Education</h2>
            </BlurFade>
            <div className="grid gap-4">
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ResumeCard
                    key={education.school}
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="flex flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-2xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-default"
                  >
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="space-y-12 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            {/* New Responsive Grid Layout for Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  {/* Using NeonGradientCard for a premium look on hover/focus could be an option, 
                      but let's wrap the ProjectCard or use it as a container. 
                      Since ProjectCard has its own style, let's keep it clean but allow it to fill height.
                  */}
                  <div className="h-full">
                    <ProjectCard
                      href={project.href}
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                      className="h-full flex flex-col"
                    />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Highlighted Project or Special Section using NeonGradientCard */}
        <section id="highlight" className="py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <NeonGradientCard className="items-center justify-center text-center p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-first to-neon-second mb-4">
                Building the Future of Web3
              </h3>
              <p className="text-muted-foreground mb-6">
                Constantly exploring new technologies like Monad, Solana, and AI Agents to build decentralized applications that solve real-world problems.
              </p>
              <Link href="#contact">
                <Button className="font-semibold">Let&apos;s Build Together</Button>
              </Link>
            </NeonGradientCard>
          </BlurFade>
        </section>

        <section id="open-source">
          <div className="space-y-12 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                    Open Source
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Open Source Contributions
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto">
                    Contributing to the open source community and collaborating with developers worldwide.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <div className="space-y-4">
                {DATA.openSourceContributions.map((contribution, id) => (
                  <BlurFade
                    key={contribution.title}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <Collapsible
                      title={contribution.title}
                      year={contribution.year}
                      description={contribution.description}
                      defaultOpen={true}
                    >
                      <div className="space-y-4 pt-4">
                        {contribution.contributions && (
                          <div className="bg-muted/30 p-4 rounded-xl border">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <span className="text-primary text-xl">★</span> Key Contributions
                            </h4>
                            <ul className="grid gap-3">
                              {contribution.contributions.map((item, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 bg-background/50 p-2 rounded-lg border border-transparent hover:border-border transition-colors">
                                  <span className="mt-1 text-primary">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {contribution.links && contribution.links.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {contribution.links.map((link, idx) => (
                              <Link href={link.href} key={idx} target="_blank">
                                <Badge variant="outline" className="flex gap-2 py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-all">
                                  {link.icon}
                                  {link.type}
                                </Badge>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </Collapsible>
                  </BlurFade>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="hackathons">
          <div className="space-y-12 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                    Hackathons
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto">
                    During my time in university, I attended{" "}
                    {DATA.hackathons.length}+ hackathons. It was eye-opening to see the endless possibilities
                    brought to life by a group of motivated and passionate individuals.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 17}>
              <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                {DATA.hackathons.map((project, id) => (
                  <HackathonCard
                    key={project.title + project.dates}
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                ))}
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Highlighted Project - Custom Design */}
        <section id="highlight" className="py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="relative group overflow-hidden rounded-2xl bg-[#0D0D0D] border border-white/5 p-8 max-w-2xl mx-auto text-center shadow-2xl">
              {/* Gradient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center justify-center gap-6">
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg font-mono leading-relaxed">
                  Constantly exploring new technologies like Monad, Solana, and AI Agents to build decentralized applications that solve real-world problems.
                </p>
                <Link href="#contact">
                  <Button className="font-bold text-base px-8 py-6 rounded-md bg-[#FF4F00] hover:bg-[#FF4F00]/90 text-white shadow-lg hover:shadow-orange-500/20 transition-all">
                    Let&apos;s Build Together
                  </Button>
                </Link>
              </div>
            </div>
          </BlurFade>
        </section>

        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.X.url}
                    className="text-primary hover:underline font-medium"
                  >
                    with a direct question on twitter
                  </Link>{" "}
                  and I&apos;ll respond whenever I can.
                </p>
                <div className="flex gap-4 justify-center mt-8 flex-col sm:flex-row items-center">
                  <Link href={`mailto:${DATA.contact.email}`}>
                    <Button size="lg" className="gap-2 rounded-full">
                      <span className="text-lg">✉️</span> Email Me
                    </Button>
                  </Link>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
                      Connect on LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </div>
    </main >
  );
}
