export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      </div>

      {/* NAVBAR */}

      <nav className="sticky top-0 backdrop-blur-md bg-black/30 border-b border-white/10 z-50">

        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="font-bold text-xl">
            Shafira.dev
          </h1>

          <div className="flex gap-6 text-sm">

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>

          </div>

        </div>

      </nav>


      {/* HERO */}

      <section className="min-h-screen flex items-center justify-center px-8">

        <div className="text-center max-w-4xl">

          <div className="w-40 h-40 rounded-full border mx-auto mb-8 bg-zinc-800" />

          <p className="text-blue-400 mb-3">
            Frontend Developer
          </p>

          <h1 className="text-7xl font-bold mb-6">

            Shafira
            <span className="text-blue-400">
              {" "}Ardita
            </span>

          </h1>

          <p className="text-gray-400 text-xl leading-9 mb-10">

            Building modern websites using
            Next.js, React, Tailwind CSS
            and interactive UI experiences.

          </p>

          <div className="flex justify-center gap-5 flex-wrap">

            <a
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-2xl"
            >
              View Projects
            </a>

            <a
              href="https://github.com/shafiraardita"
              className="border border-white/30 px-8 py-3 rounded-2xl"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="py-32 px-8 max-w-6xl mx-auto"
      >

        <h2 className="text-5xl font-bold mb-10">

          About Me

        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

          <p className="text-gray-300 text-lg leading-9">

            Saya adalah developer yang fokus
            membangun aplikasi web modern,
            responsive dan user friendly.
            Saya tertarik pada frontend,
            UI/UX, performa aplikasi dan
            deployment cloud.

          </p>

        </div>

      </section>


      {/* SKILLS */}

      <section
        id="skills"
        className="py-24 px-8 max-w-6xl mx-auto"
      >

        <h2 className="text-5xl font-bold mb-10">

          Skills

        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind",
            "Git",
            "GitHub",
            "Vercel"

          ].map((skill) => (

            <div
              key={skill}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
            >

              {skill}

            </div>

          ))}

        </div>

      </section>


      {/* PROJECT */}

      <section
        id="projects"
        className="py-24 px-8 max-w-6xl mx-auto"
      >

        <h2 className="text-5xl font-bold mb-10">

          Featured Projects

        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">

            <div className="h-52 bg-zinc-800 rounded-2xl mb-6" />

            <h3 className="text-2xl font-bold mb-4">

              Portfolio Website

            </h3>

            <p className="text-gray-400">

              Personal portfolio using
              Next.js and Tailwind CSS.

            </p>

          </div>


          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">

            <div className="h-52 bg-zinc-800 rounded-2xl mb-6" />

            <h3 className="text-2xl font-bold mb-4">

              Dashboard App

            </h3>

            <p className="text-gray-400">

              Responsive dashboard UI.

            </p>

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}

      <section className="py-24 px-8 max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-10">

          Journey

        </h2>

        <div className="space-y-8">

          <div className="border-l-2 pl-6">

            2024 — Start learning HTML CSS

          </div>

          <div className="border-l-2 pl-6">

            2025 — React Development

          </div>

          <div className="border-l-2 pl-6">

            2026 — Next.js + Deployment

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="py-32 text-center px-8"
      >

        <h2 className="text-5xl font-bold mb-8">

          Let's Work Together

        </h2>

        <p className="text-gray-400 mb-8">

          shafiraardita0@gmail.com

        </p>

        <a
          href="mailto:shafiraardita0@gmail.com"
          className="bg-white text-black px-8 py-4 rounded-2xl"
        >

          Contact Me

        </a>

      </section>


      {/* FOOTER */}

      <footer className="py-10 text-center text-gray-500">

        © 2026 Shafira Putri Ardita

      </footer>

    </main>
  );
}