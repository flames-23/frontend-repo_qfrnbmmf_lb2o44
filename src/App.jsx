import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="scroll-smooth">
      {/* HERO */}
      <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Gradient overlays for readability; keep pointer events off so Spline stays interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 pt-28 sm:pt-36 lg:pt-44">
          <p className="text-sm uppercase tracking-wider text-gray-600">Hi, I’m</p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Meet Padmani.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
            A multidisciplinary designer focused on crafting clean, modern and meaningful digital experiences. I design intuitive interfaces,
            build visually appealing brand identities, and create experiences that connect people with products.
          </p>
          <button
            onClick={() => handleScroll('projects')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/20"
          >
            <span>→ View My Work</span>
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
        <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
          I’m Meet Padmani, a passionate UI/UX & visual designer who loves turning ideas into beautiful, functional digital products.
          My goal is simple: create experiences that feel effortless and leave a lasting impression.
        </p>
        <p className="mt-4 max-w-4xl text-gray-700 leading-relaxed">
          Over the years, I’ve worked on various design projects including websites, apps, branding, and prototypes. I enjoy solving design problems,
          simplifying complexity, and making interfaces that users love to use.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Currently</p>
            <p className="mt-1 font-semibold text-gray-900">Designing modern experiences for brands & individuals.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Focus Areas</p>
            <p className="mt-1 font-semibold text-gray-900">UI/UX Design • Product Design • Branding • Visual Design</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What I Do</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'UI/UX Design', desc: 'Designing user-friendly and clean interfaces for websites and mobile apps.' },
              { title: 'Brand Identity', desc: 'Creating logos, color palettes, and visual styles that define a brand’s personality.' },
              { title: 'Website Design', desc: 'Modern, responsive, and visually appealing website layouts built with clarity and purpose.' },
              { title: 'Prototyping', desc: 'Interactive prototypes to bring concepts to life and test ideas quickly.' },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Work</h2>
        <p className="mt-4 max-w-3xl text-gray-700">
          Here are a few selected projects that reflect my approach towards creativity, problem-solving, and clean design.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Project 1 — UI/UX Case Study',
              desc: 'A complete redesign of a mobile app to improve user flow and visual clarity.',
            },
            {
              title: 'Project 2 — Branding & Identity',
              desc: 'A modern identity for a startup looking to make a bold digital presence.',
            },
            {
              title: 'Project 3 — Website Design',
              desc: 'A responsive and elegant website created to help a brand showcase its products/services effectively.',
            },
          ].map((p) => (
            <div key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-40 w-full bg-gradient-to-br from-gray-200 to-gray-100" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">(You can replace these with your actual project names.)</p>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Design Approach</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: 'Understand the Problem', desc: 'Learn about the project, audience, and goals.' },
              { title: 'Research & Exploration', desc: 'Study competitors, users, and design patterns.' },
              { title: 'Wireframe & Prototype', desc: 'Create structure and early interactive models.' },
              { title: 'Final UI Design', desc: 'Clean, modern visual design with attention to detail.' },
              { title: 'Deliver & Support', desc: 'Provide assets, guidelines, and ongoing support.' },
            ].map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-gray-400">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Let’s Work Together</h2>
        <p className="mt-4 max-w-3xl text-gray-700">
          Have a project in mind? Or just want to say hello? I’m always open to new opportunities and collaborations.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('contact')
            }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black"
          >
            → Contact me
          </a>
          <div className="text-gray-700">
            Email: <span className="font-semibold">your email here</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-gray-600">
          <span>© 2025 Meet Padmani — Portfolio & Design Showcase</span>
          <nav className="hidden gap-4 sm:flex">
            <button onClick={() => handleScroll('about')} className="hover:text-gray-900">About</button>
            <button onClick={() => handleScroll('services')} className="hover:text-gray-900">Services</button>
            <button onClick={() => handleScroll('projects')} className="hover:text-gray-900">Projects</button>
            <button onClick={() => handleScroll('process')} className="hover:text-gray-900">Process</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-gray-900">Contact</button>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
