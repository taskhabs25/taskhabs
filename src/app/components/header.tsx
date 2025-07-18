"use client"

import { useState, MouseEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, DownloadCloud } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Logo } from "@/app/components/logo"

// TODO: real store links
const APP_STORE_URL = "#appstore"
const PLAY_STORE_URL = "#playstore"

const HOME_ANCHORS = [
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "testimonials", label: "Reviews" },
  { id: "faq", label: "FAQs" },
]

const ROUTE_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/reviews", label: "Reviews" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const onHome = pathname === "/"

  const close = () => setOpen(false)

  const openStore = (url: string) => {
    if (typeof window !== "undefined" && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  function scrollToId(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      history.replaceState(null, "", `/#${id}`)
    }
  }

  function handleAnchorClick(
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string
  ) {
    e.preventDefault()
    close()
    if (onHome) {
      scrollToId(id)
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <header className="header-surface text-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-2 shrink-0" onClick={close}>
          <Logo className="h-8 w-auto" />
          <Image
            src="/images/mascot.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 hidden sm:block transition-transform group-hover:scale-110 animate-owl-bob"
            priority
          />
          <span className="font-bold tracking-tight text-lg leading-none hidden sm:inline-block">
            TaskHabs
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {onHome ? (
            HOME_ANCHORS.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className="header-nav-link"
                onClick={(e) => handleAnchorClick(e, item.id)}
              >
                {item.label}
              </a>
            ))
          ) : (
            <Link href="/" className="header-nav-link" onClick={close}>
              Home
            </Link>
          )}

          {ROUTE_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="header-nav-link"
              onClick={close}
            >
              {item.label}
            </Link>
          ))}

          {/* Always show Download */}
          <Button
            className="header-download-btn"
            onClick={() => openStore(APP_STORE_URL)}
          >
            <DownloadCloud className="w-4 h-4 mr-2" />
            Download
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-playful))]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-6 pt-4 bg-header-surface/95 backdrop-blur-md">
          <nav className="flex flex-col gap-4 text-base">
            {onHome ? (
              HOME_ANCHORS.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  className="header-nav-link-mobile"
                  onClick={(e) => handleAnchorClick(e, item.id)}
                >
                  {item.label}
                </a>
              ))
            ) : (
              <Link href="/" className="header-nav-link-mobile" onClick={close}>
                Home
              </Link>
            )}

            {ROUTE_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header-nav-link-mobile"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}

            {/* Always show Download */}
            <div className="mt-4">
              <Button
                className="header-download-btn w-full"
                onClick={() => {
                  close()
                  openStore(APP_STORE_URL)
                }}
              >
                Download App
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
