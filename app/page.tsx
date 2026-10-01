import LandingPage from "@/components/landing/LandingPage";

export default function Home() {
  return <LandingPage />;
}

'use client'

import { useState } from 'react'
import { ArrowRight, BarChart3, CheckCircle2, ChevronDown, CircleDollarSign, Clock3, FileText, LogIn, Mail, Menu, MessageSquareText, Search, Sparkles, UsersRound, X } from 'lucide-react'

const asset = {
  logo: '/company_assets/cobalt-logo.png',
  logoWhite: '/company_assets/cobalt-logo-white.png',
  hero: '/canva_elements/CobaltA-transparent.png',
  building: '/canva_elements/Cobalt_BG_Background.png',
  contact: '/canva_elements/Contact_BG.png',
}

const services = [
  ['Pricing Research', 'Find the right price points and optimise your pricing strategy.', CircleDollarSign, '#1a48e8'],
  ['Product Research', 'Test and validate product concepts and features.', Search, '#ff8a3d'],
  ['Brand Research', 'Understand brand perception, positioning and brand health.', Sparkles, '#10cbb4'],
  ['Customer Research', 'Know your customers deeper and uncover unmet needs.', UsersRound, '#a32de8'],
  ['Market Research', 'Size opportunities and identify new growth areas.', BarChart3, '#1a48e8'],
  ['Experience Research', 'Measure and improve customer experience across touchpoints.', MessageSquareText, '#ff8a3d'],
] as const

const features = [
  ['Real Consumers', 'Access diverse, high-quality panels across 30+ markets.', UsersRound, '#1a48e8'],
  ['AI-Powered Analysis', 'Get instant summaries, key insights and recommendations.', Sparkles, '#10cbb4'],
  ['Flexible & Scalable', 'From single studies to continuous tracking.', BarChart3, '#1a48e8'],
  ['Pay-per-Study', 'No long-term contracts. Only pay for what you need.', CircleDollarSign, '#a32de8'],
] as const

const articles = [
  ['CONSUMER TRENDS', 'What today’s consumers really value in beverages', 'Jun 12, 2024'],
  ['INDUSTRY INSIGHTS', 'How AI is changing the future of research', 'Jun 5, 2024'],
  ['MARKET RESEARCH', '3 key trends shaping urban consumption', 'May 28, 2024'],
] as const

function Logo({ footer = false, className = '' }: { footer?: boolean; className?: string }) {
  if (footer) {
    return (
      <img
        src={asset.logoWhite}
        alt="Cobalt Analytix"
        className={`h-11 w-auto object-contain ${className}`}
      />
    )
  }
  return (
    <img
      src={asset.logo}
      alt="Cobalt Analytix"
      className={`h-15 w-auto object-contain ${className}`}
    />
  )
}

function Button({ children, href = '#contact', variant = 'orange', inactive = false, showArrow = true }: {
  children: React.ReactNode; href?: string; variant?: 'orange' | 'blue' | 'outline'; inactive?: boolean; showArrow?: boolean
}) {
  const style = variant === 'orange' ? 'bg-[#ff8a3d] text-[#ffffff] hover:bg-[#ff7a22]' : variant === 'blue' ? 'bg-[#1a48e8] text-[#ffffff] hover:bg-[#153ac2]' : 'border border-[#000e41] bg-[#ffffff] text-[#000e41] hover:bg-[#000e41]/5'
  return <a href={inactive ? undefined : href} aria-disabled={inactive || undefined} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-all hover:-translate-y-0.5 ${style} ${inactive ? 'cursor-default' : ''}`}>{children}{showArrow && <ArrowRight size={16} />}</a>
}

function Heading({ children, copy, light = false }: { children: React.ReactNode; copy?: string; light?: boolean }) {
  return <div className="max-w-2xl"><h2 className={`text-4xl font-extrabold leading-[.99] tracking-[-.055em] sm:text-5xl ${light ? 'text-[#ffffff]' : 'text-[#000e41]'}`}>{children}</h2>{copy && <p className={`mt-5 max-w-xl text-base leading-relaxed ${light ? 'text-[#ffffff]/80' : 'text-[#000e41]/70'}`}>{copy}</p>}</div>
}

export default function Page() {
  const [menu, setMenu] = useState(false)
  const links = [['#how', 'How it works'], ['#features', 'Features'], ['#solutions', 'Industries'], ['#insights', 'Insights'], ['#about', 'About Us']]

  return <main className="min-h-screen overflow-hidden bg-[#f2f9fe] text-[#000e41]">
    <header className="sticky top-0 z-50 border-b border-[#1a48e8]/10 bg-[#f2f9fe]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="Cobalt Analytix home" className="flex items-center lg:w-1/4">
          <Logo />
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-7 whitespace-nowrap text-sm font-bold lg:flex">
          {links.map(([href, label]) => <a href={href} key={href} className="transition-colors hover:text-[#1a48e8]">{label}</a>)}
        </nav>
        <div className="hidden items-center justify-end gap-3 lg:flex lg:w-1/4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-[#000e41] bg-white px-4 py-2.5 text-sm font-bold text-[#000e41] transition-all hover:bg-[#000e41]/5 hover:-translate-y-0.5"
          >
            <LogIn size={1} />
            <span>Client Portal</span>
            <ArrowRight size={14} />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff8a3d] px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-[#ff8a3d]/25 transition-all hover:bg-[#ff7a22] hover:-translate-y-0.5"
          >
            <span>Contact us</span>
            <ArrowRight size={14} />
          </a>
        </div>
        <button aria-label="Toggle navigation" className="ml-auto grid h-10 w-10 place-items-center lg:hidden" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      </div>
      {menu && (
        <nav className="grid gap-4 border-t border-[#1a48e8]/10 bg-[#f2f9fe] px-5 py-5 font-bold lg:hidden">
          {links.map(([href, label]) => <a key={href} onClick={() => setMenu(false)} href={href} className="text-[#000e41] hover:text-[#1a48e8]">{label}</a>)}
          <div className="mt-2 flex flex-col gap-2">
            <a
              onClick={() => setMenu(false)}
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#000e41] bg-white px-4 py-2.5 text-sm font-bold text-[#000e41]"
            >
              <LogIn size={15} /> Client Portal <ArrowRight size={14} />
            </a>
            <a
              onClick={() => setMenu(false)}
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff8a3d] px-5 py-2.5 text-sm font-bold text-white"
            >
              Contact us <ArrowRight size={14} />
            </a>
          </div>
        </nav>
      )}
    </header>

    <section id="top" className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-20 pt-12 lg:grid-cols-[1.02fr_1.18fr] lg:px-8 lg:pb-28 lg:pt-16">
      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-x-5 text-sm font-extrabold uppercase tracking-[0.14em] text-[#1a48e8] whitespace-nowrap">
          <span>• Market Research</span>
          <span>• Consumer Insights</span>
          <span>• Strategic Intelligence</span>
        </div>
        <h2 className="max-w-xl text-3xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-[3.45rem]">
          Consumer insight,<br />
          <span className="text-[#1a48e8]">before the week is out.</span>
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#000e41]/75">
          Run surveys, analyze responses, and get clear, actionable decisions in days, not weeks. Powered by real consumers and AI-driven analysis.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ff8a3d] px-7 text-base font-bold text-white shadow-md shadow-[#ff8a3d]/25 transition-transform hover:-translate-y-0.5 hover:bg-[#ff7a22]"
          >
            Talk to Our Experts
            <ArrowRight size={18} />
          </a>
          <a
            href="#how"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#000e41] bg-white px-6 text-base font-bold text-[#000e41] transition-transform hover:-translate-y-0.5 hover:bg-[#000e41]/5"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#1a48e8] pl-0.5 text-white">
              <ArrowRight size={14} />
            </span>
            See How It Works
          </a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-3xl lg:translate-x-6 xl:translate-x-10">
        <img src={asset.hero} alt="Cobalt analytics dashboard" className="w-full lg:scale-120" />
      </div>
    </section>

    <section className="bg-[#091d37] px-5 py-16 text-[#ffffff] lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr]"><div><Heading light copy="Traditional research is slow, expensive and complex. By the time you get results, the market has already moved.">Market research still<br />moves at the <span className="text-[#1a48e8]">speed of 2005.</span></Heading><div className="mt-8"><Button href="#how">There’s a better way</Button></div></div><div className="grid gap-3 sm:grid-cols-2">{[[Clock3, 'Long Timelines', 'Weeks or months to get results.'], [CircleDollarSign, 'High Costs', 'Expensive, complex studies.'], [FileText, 'Overwhelming Reports', 'Hundreds of pages, hard to parse.'], [CheckCircle2, 'Limited Flexibility', 'Traditional research isn’t built for today’s fast-moving businesses.']].map(([Icon, title, copy]) => { const Symbol = Icon as typeof Clock3; return <article key={title as string} className="rounded-2xl border border-[#1a48e8]/30 bg-[#ffffff]/[.035] p-6"><Symbol size={32} strokeWidth={1.5} className="mb-5" /><h3 className="font-extrabold">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-[#ffffff]/75">{copy as string}</p></article> })}</div></div></section>

    <section id="how" className="px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[.36fr_.64fr] lg:items-center"><Heading copy="Our process is collaborative, rigorous and driven by real business outcomes.">A simpler way to get<br />the answers <span className="text-[#1a48e8]">you need.</span></Heading><div className="grid gap-5 sm:grid-cols-4">{[[Search, '1. Understand', 'We dive deep into your business questions.'], [CircleDollarSign, '2. Research', 'We design and execute robust research using real consumers.'], [BarChart3, '3. Analyze', 'We turn data into clear, meaningful insights.'], [CheckCircle2, '4. Act', 'We help you apply insights to make confident decisions.']].map(([Icon, title, copy], i) => { const Symbol = Icon as typeof Search; return <article key={title as string} className="relative text-center"><div className="process-icon mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#1a48e8] text-[#ffffff] ring-8 ring-[#1a48e8]/10"><Symbol size={29} /></div>{i < 3 && <div className="absolute left-[calc(50%+50px)] right-[-38px] top-8 hidden border-t border-dotted border-[#1a48e8]/50 sm:block" />}<h3 className="text-sm font-extrabold">{title as string}</h3><p className="mt-2 text-xs leading-relaxed text-[#000e41]/70">{copy as string}</p></article> })}</div></div></div></section>

    <section id="solutions" className="relative overflow-hidden px-5 pb-16 lg:px-8 lg:pb-24"><div className="solution-dots" aria-hidden="true" /><img src={asset.building} aria-hidden="true" className="pointer-events-none absolute bottom-0 right-[-15%] z-0 h-full max-h-[31rem] w-[58%] object-cover object-right opacity-80" /><div className="relative z-10 mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-5"><Heading copy="From pricing to product, brand to customer experience - we help you uncover insights across the entire business.">Solutions for every<br /><span className="text-[#1a48e8]">business question.</span></Heading><a href="/contact" className="pb-1 text-sm font-bold text-[#ff8a3d]">Explore all solutions <ArrowRight className="inline" size={16} /></a></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{services.map(([title, copy, Icon, color]) => <article key={title} className="rounded-xl bg-[#ffffff] p-5"><div className="mb-5 grid h-11 w-11 place-items-center rounded-full" style={{ backgroundColor: `${color}1a`, color }}><Icon size={22} /></div><h3 className="text-sm font-extrabold">{title}</h3><p className="mt-3 text-xs leading-relaxed text-[#000e41]/75">{copy}</p></article>)}</div></div></section>

    <section id="features" className="border-y border-[#1a48e8]/10 px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-5"><Heading>Research built<br />for <span className="text-[#1a48e8]">today’s businesses.</span></Heading><a href="#contact" className="pb-1 text-sm font-bold text-[#ff8a3d]">See all features <ArrowRight className="inline" size={16} /></a></div><div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{features.map(([title, copy, Icon, color]) => <article key={title} className="flex gap-4 rounded-xl bg-[#ffffff] p-5"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-full" style={{ backgroundColor: `${color}1a`, color }}><Icon size={22} /></div><div><h3 className="text-sm font-extrabold">{title}</h3><p className="mt-2 text-xs leading-relaxed text-[#000e41]/70">{copy}</p></div></article>)}</div></div></section>

    <section id="insights" className="px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[.35fr_.65fr]"><div><Heading copy="Trends, research findings and expert perspectives to help you stay ahead.">Perspective<br />to <span className="text-[#1a48e8]">fuel progress.</span></Heading><a href="#contact" className="mt-8 inline-block text-sm font-bold text-[#ff8a3d]">Explore all insights <ArrowRight className="inline" size={16} /></a></div><div className="grid gap-4 sm:grid-cols-3">{articles.map(([category, title, date]) => <article key={title} className="rounded-xl bg-[#ffffff] p-7"><p className="text-xs font-extrabold tracking-[.1em] text-[#1a48e8]">{category}</p><h3 className="mt-7 text-2xl font-extrabold leading-tight tracking-[-.035em]">{title}</h3><p className="mt-11 text-sm text-[#000e41]/60">{date} <span className="mx-1">•</span>5 min read</p></article>)}</div></div></section>

    <footer id="about" className="bg-[#091d37] px-5 pb-7 pt-14 text-[#ffffff] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr]">
        <div>
          <Logo footer />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#ffffff]/60">
            We help businesses understand their customers through research that is faster, simpler and built for real-world impact.
          </p>
          <div className="mt-5 flex gap-3">
            {['in', 'X', 'ig'].map(item => <span key={item} className="grid h-8 w-8 place-items-center rounded-full border border-[#ffffff]/25 text-xs">{item}</span>)}
          </div>
        </div>
        {[['Product', 'How it works', 'Features', 'Sample Study', 'Pricing'], ['Company', 'About Us', 'Careers', 'Contact Us', 'Privacy Policy'], ['Resources', 'Insights', 'Case Studies', 'FAQ', 'Help Center']].map(([heading, ...links]) => (
          <div key={heading}>
            <h3 className="text-sm font-extrabold">{heading}</h3>
            <div className="mt-4 grid gap-3 text-sm text-[#ffffff]/60">
              {links.map(link => <a href={link === 'Contact Us' ? '/contact' : '#'} key={link} className="hover:text-white transition-colors">{link}</a>)}
            </div>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-extrabold">Subscribe to our newsletter</h3>
          <div className="mt-4 flex overflow-hidden rounded-md bg-[#ffffff]">
            <input aria-label="Email for newsletter" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-[#000e41] outline-none" placeholder="Enter your email" />
            <button aria-label="Subscribe" className="bg-[#1a48e8] px-4"><ChevronDown className="rotate-[-90deg]" size={18} /></button>
          </div>
          <p className="mt-3 text-xs text-[#ffffff]/60">Get the latest research insights and updates.</p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-[#ffffff]/15 pt-6 text-right text-xs text-[#ffffff]/45">
        © 2026 Cobalt Analytix. All rights reserved.
      </div>
    </footer>
  </main>
}

