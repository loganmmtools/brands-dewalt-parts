'use client'

import { useMemo, useState } from 'react'
import { ChevronDown, ChevronRight, Menu, Search, ShoppingCart, Star, Wrench } from 'lucide-react'

const categories = [
  { name: 'Miter Saw Parts', image: '/miter-saw.jpg' },
  { name: 'Pressure Washer Parts', image: '/pressure-washer.jpg' },
  { name: 'Table Saw Parts', image: '/table-saw.jpg' },
  { name: 'Planer Parts', image: '/planer.jpg' },
  { name: 'Nailer Parts', image: '/nailer.jpg' },
  { name: 'Grinder Parts', image: '/grinder.jpg' },
]

const tools = ['Adhesive Dispenser', 'Band Saw', 'Chop Saw', 'Circular Saw', 'Concrete Vibrator', 'Cut-Out Tool', 'Cutter Saw', 'Generator', 'Impact Wrench', 'Hammer Drill', 'Jig Saw', 'Drill Press', 'Heat Gun', 'Oscillating Tool', 'Router', 'Sander', 'Reciprocating Saw', 'Stapler']

const navItems = ['Power Tools', 'Tool Parts', 'Tools', 'Machinery', 'Bits Blades & Tooling', 'Accessories', 'Amana Tool', 'Brands']

const faqs = [
  ['Are your DeWalt parts genuine OEM replacement parts?', 'Yes. We sell genuine manufacturer replacement parts sourced for DeWalt tools rather than aftermarket equivalents, so you can order with confidence that the part is made for the tool.'],
  ['How do I find the correct replacement part for my DeWalt tool?', 'Start with the Product Type, select your tool Model, open the parts Diagram, and then choose the Part you need from the exploded view and parts list.'],
  ['Where can I find the model number on my DeWalt tool?', 'The model number is typically printed on the tool nameplate, identification label, or housing. If you need help, use our How to Find My Model/Part Number resource for guidance.'],
  ['Why do I need my DeWalt model number or type number?', 'Tools that look nearly identical can use different components. Your model and type number identify the correct schematic and help us match you to the right replacement part.'],
  ['How can I tell if a DeWalt part will fit my tool?', 'Match the part number through your tool model’s parts diagram and parts list instead of relying only on the part’s appearance.'],
  ['Can I find discontinued or older DeWalt tool parts?', 'We support many older DeWalt models. Availability can vary for discontinued parts, but our catalog may show current availability, approved substitutions, or related options when they exist.'],
  ["What if I don’t know the DeWalt part number I need?", 'Find your Product Type and Model, open the exploded diagram, and use the numbered callouts alongside the parts list to identify the part number.'],
  ['Does M&M Tool Parts repair DeWalt tools?', 'Yes. M&M Tool Parts is an authorized DeWalt repair center. Contact our customer service team for repair options and next steps.'],
]

function BrandMark() {
  return <div className="flex items-center gap-2"><div className="grid h-10 w-10 place-items-center rounded-full border-4 border-foreground text-xl font-black">✦</div><div className="leading-none"><div className="text-[20px] font-black tracking-tight">mm<span className="text-primary">Tool</span>Parts</div><div className="text-[7px] font-bold text-muted-foreground">The Right Parts. Great Service. Every Time.</div></div></div>
}

function DeWaltLogo({ className = '' }: { className?: string }) {
  return <img src="/dewalt-logo.svg" alt="DeWalt" className={className} />
}

function ToolCard({ name, image }: { name: string; image: string }) {
  return <a href="#directory" className="group flex min-h-40 flex-col items-center justify-between border border-border bg-card px-3 py-4 text-center transition hover:-translate-y-1 hover:border-primary hover:shadow-md"><div className="grid h-24 w-full place-items-center"><img src={image} alt={name.replace(' Parts', '')} className="h-24 w-full object-contain transition group-hover:scale-105" /></div><span className="text-sm font-bold leading-tight">{name}</span></a>
}

function FAQSection() {
  return <section className="mt-12 border-t border-border pt-10" aria-labelledby="faq-heading"><h2 id="faq-heading" className="text-2xl font-black md:text-3xl">DeWalt Parts FAQs</h2><div className="mt-5 divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-black marker:hidden"><span>{question}</span><ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" aria-hidden="true" /></summary><p className="max-w-4xl pb-5 pr-8 text-base leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></section>
}

export default function Page() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const filteredTools = useMemo(() => tools.filter((tool) => tool.toLowerCase().includes(query.toLowerCase())), [query])

  return <main className="min-h-screen bg-background text-foreground">
    <div className="bg-charcoal px-4 py-2 text-[11px] font-bold tracking-wide text-white"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4"><div className="flex items-center gap-2"><Star className="h-4 w-4 fill-primary text-primary" /> Trustpilot <span className="text-primary">4.5</span> ★</div><div className="hidden items-center gap-4 md:flex"><span>TOLL FREE: 1-801-485-8200</span><span className="text-white/40">|</span><span>WELCOME!</span><span className="text-white/40">|</span><span>TRACK ORDER</span><span className="text-white/40">|</span><span>SIGN IN OR CREATE AN ACCOUNT</span></div><button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Menu className="h-5 w-5" /></button></div></div>
    <header className="border-b border-black/10 bg-primary"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4"><BrandMark /><div className="hidden flex-1 items-center justify-end gap-5 md:flex"><label className="flex h-10 w-full max-w-xl items-center bg-white px-3 text-muted-foreground"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by Model, Tool or Part number (e.g. 6472028, N515802, 0601024034)" className="min-w-0 flex-1 bg-transparent text-sm outline-none" /><Search className="h-5 w-5" /></label><ShoppingCart className="h-7 w-7" /></div><div className="md:hidden"><ShoppingCart className="h-6 w-6" /></div></div></header>
    <nav className={`bg-charcoal text-white ${menuOpen ? 'block' : 'hidden'} md:block`}><div className="mx-auto flex max-w-7xl flex-col md:flex-row md:items-center md:justify-between">{navItems.map((item) => <a key={item} href="#directory" className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wide hover:bg-white/10 md:border-0 md:px-3"><span>{item}</span><ChevronDown className="h-3 w-3 md:ml-2" /></a>)}</div></nav>
    <div className="mx-auto max-w-7xl px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Home <ChevronRight className="mx-1 inline h-3 w-3" /> Tool Parts <ChevronRight className="mx-1 inline h-3 w-3" /> DeWalt Parts</div>
    <section className="border-y border-border bg-white"><div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-4 py-14 text-center md:flex-row md:text-left"><div className="bg-primary px-5 py-3"><DeWaltLogo className="h-auto w-64 md:w-80" /></div><h1 className="max-w-xl text-2xl font-black leading-tight md:text-3xl">As an authorized repair center and OEM parts dealer, we source our parts directly from DeWalt to bring you the highest quality replacement parts at the lowest prices.</h1></div></section>
    <section className="bg-charcoal text-white"><div className="mx-auto grid max-w-7xl grid-cols-1 text-center font-black md:grid-cols-3"><div className="border-b border-white/20 px-4 py-4 md:border-r md:border-b-0">10,000+ 5-Star Reviews</div><div className="border-b border-white/20 px-4 py-4 md:border-r md:border-b-0">OEM Parts Guarantee</div><div className="px-4 py-4">Authorized Parts Dealer</div></div></section>
    <div className="bg-primary px-4 py-8 text-center"><h2 className="text-4xl font-black md:text-5xl">DeWalt Tool Repair Parts</h2></div>
    <section className="mx-auto max-w-7xl px-4 py-10"><h2 className="mb-4 text-xl font-black">Popular DeWalt Tools</h2><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{categories.map((category) => <ToolCard key={category.name} {...category} />)}</div></section>
    <section id="directory" className="mx-auto max-w-7xl px-4 pb-12"><div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center"><h2 className="text-xl font-black">All DeWalt Tools</h2><label className="flex w-full max-w-lg items-center rounded border border-foreground bg-white px-3 py-3"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search 84 DeWalt Product Types (Miter Saw, Hammer Drill, etc...)" className="min-w-0 flex-1 text-sm outline-none" /><Search className="h-5 w-5" /></label></div><div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">{filteredTools.map((tool) => <a key={tool} href="#footer" className="text-lg text-link underline decoration-1 underline-offset-2 hover:text-primary">DeWalt {tool} Parts</a>)}</div>{filteredTools.length === 0 && <p className="mt-5 text-muted-foreground">No tool types match your search.</p>}</section>
    <a href="#directory" className="flex items-center justify-center gap-5 bg-primary px-4 py-6 text-center text-2xl font-black underline underline-offset-4"><Wrench className="h-12 w-12" />How Do I Find My Model/Part Number?</a>
    <section className="mx-auto max-w-7xl px-4 py-12"><h2 className="text-xl font-black">Genuine DeWalt Replacement Parts</h2><p className="mx-auto mt-5 max-w-5xl text-lg leading-relaxed">Shop OEM DeWalt replacement parts for drills, saws, sanders, routers, planers and more. M&amp;M Tool Parts is an authorized DeWalt parts dealer and repair center, supplying genuine replacement parts, parts breakdowns, repair articles and great service for thousands of DeWalt tool models.</p><FAQSection /><div className="mt-10 grid grid-cols-1 gap-8 text-center sm:grid-cols-3"><div><div className="text-4xl text-[#00a878]">★★★★★</div><p className="mt-3 font-black">10,000+ 5 Star Reviews<br />on Trustpilot</p></div><div><img src="/oem-parts-badge.png" alt="100% quality genuine parts guarantee" className="mx-auto h-24 w-40 object-contain" /><p className="mt-3 font-black">OEM Parts<br />Guarantee</p></div><div><DeWaltLogo className="mx-auto h-auto w-40" /><p className="mt-3 font-black">Authorized Parts<br />Dealer</p></div></div></section>
    <footer id="footer" className="border-t-4 border-primary bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-8 text-sm md:grid-cols-5"><div><h3 className="mb-4 font-black uppercase text-primary">Categories</h3><p>Manufacturers<br />Tool Parts<br />Tools<br />Machinery<br />Accessories</p></div><div><h3 className="mb-4 font-black uppercase text-primary">Parts for Tools</h3><p>Bosch Parts<br />DeWalt Parts<br />Festool Parts<br />Jet Parts<br />Makita Parts<br />Milwaukee Parts</p></div><div><h3 className="mb-4 font-black uppercase text-primary">Resources</h3><p>About Us<br />Blog<br />Videos<br />DIY Repair Help</p></div><div><h3 className="mb-4 font-black uppercase text-primary">Customer Service</h3><p>My Account<br />Order Status<br />Shipping &amp; Returns<br />Privacy Policy<br />Terms &amp; Conditions<br />Contact Us<br />FAQ</p></div><div><h3 className="mb-4 font-black uppercase text-primary">Let&apos;s Stay In Touch!</h3><div className="flex gap-3 font-black text-primary"><span>f</span><span>𝕏</span><span>in</span><span>◎</span><span>▶</span></div><div className="mt-4 flex"><input aria-label="Email address" placeholder="Enter your email address" className="min-w-0 border px-2 py-2 text-xs" /><button className="bg-primary px-3 text-xs font-bold">Sign Up</button></div></div></div><div className="bg-charcoal px-4 py-3 text-center text-xs text-white">© Copyright 2026. MMToolParts.com All Rights Reserved.</div></footer>
  </main>
}
