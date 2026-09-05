import { quickLinks, sitemapLinks, socialLinks } from "@/data/data";
import { Mail, Phone } from "lucide-react";
import Animated from "./animated";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="relative mt-44 overflow-hidden px-6">
      <div className="mx-auto max-w-7xl">
        {/* Row */}
        <div className="flex flex-wrap justify-between gap-6 pb-8">
          {/* Column 1 - Brand & Socials */}
          <div className="flex flex-col items-start text-left">
            <Animated>
              <Logo />
            </Animated>
            <Animated delay={0.2}>
              <p className="text-muted-foreground mt-3 max-w-81.25 text-sm/5.5">
                Serving freshly prepared dishes with authentic flavors, premium
                ingredients and exceptional hospitality every day.
              </p>
            </Animated>

            <div className="mt-6 flex items-center gap-1.5">
              {socialLinks.map((social, index) => (
                <Animated key={social.name} delay={index * 0.05}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.href}
                    className="border-border text-foreground grid size-7.5 place-content-center rounded-full border"
                  >
                    {social.icon}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <p className="mb-5 font-medium">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* Column 3 - Get in Touch */}
          <div>
            <p className="mb-5 font-medium">Get in Touch</p>
            <div className="space-y-2">
              <Animated>
                <a
                  href={"mailto:khoaho120703@gmail.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary flex items-center gap-1"
                >
                  <Mail size={16} className="shrink-0" /> khoaho120703@gmail.com
                </a>
              </Animated>

              <Animated delay={0.2}>
                <a
                  href="tel:987-654-3210"
                  className="text-muted-foreground hover:text-primary flex items-center gap-1"
                >
                  <Phone size={16} className="shrink-0" /> +84 987 654 3210
                </a>
              </Animated>
            </div>
          </div>

          {/* Column 4 - Sitemap */}
          <div>
            <p className="mb-5 font-medium">Sitemap</p>
            <div className="flex flex-col gap-2.5">
              {sitemapLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-muted-foreground border-border flex flex-col gap-2 border-t py-4.5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Retro Premium Restaurant. All
            Rights Reserved
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://github.com/KhoaHo1207"
              className="hover:text-primary underline-offset-2 hover:underline"
            >
              Thomas Ho
            </a>
          </p>
        </div>
      </div>

      {/* Watermark Logo Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-1 text-center select-none">
        <span className="font-urbanist text-muted-foreground/5 hidden text-[180px] font-semibold tracking-wide md:inline lg:text-[300px]">
          Retro
        </span>
      </div>
    </footer>
  );
}
