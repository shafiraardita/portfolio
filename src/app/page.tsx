export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center max-w-3xl">

          <p className="text-blue-400 mb-3">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mb-5">
            Shafira Ardita
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Web Developer • UI Designer • Building modern websites
            with Next.js and Tailwind CSS
          </p>

          <div className="flex gap-4 justify-center flex-wrap">

            <a
              href="#about"
              className="bg-white text-black px-6 py-3 rounded-xl"
            >
              About Me
            </a>

            <a
              href="#project"
              className="border border-white px-6 py-3 rounded-xl"
            >
              Projects
            </a>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-8 max-w-5xl mx-auto"
      >

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-400 leading-8">
          Saya adalah developer yang fokus pada
          pengembangan website modern,
          UI/UX, dan teknologi frontend.
          Saya senang membangun aplikasi yang cepat,
          responsive, dan mudah digunakan.
        </p>

      </section>


      {/* SKILLS */}
      <section className="py-24 px-8 max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="border p-5 rounded-xl">
            HTML
          </div>

          <div className="border p-5 rounded-xl">
            CSS
          </div>

          <div className="border p-5 rounded-xl">
            JavaScript
          </div>

          <div className="border p-5 rounded-xl">
            Next.js
          </div>

          <div className="border p-5 rounded-xl">
            React
          </div>

          <div className="border p-5 rounded-xl">
            Tailwind
          </div>

        </div>

      </section>


      {/* PROJECT */}
      <section
        id="project"
        className="py-24 px-8 max-w-5xl mx-auto"
      >

        <h2 className="text-4xl font-bold mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h3>

            <p className="text-gray-400">
              Website portfolio menggunakan
              Next.js + Tailwind.
            </p>

          </div>

          <div className="border rounded-2xl p-6">

            <h3 className="text-2xl font-bold mb-3">
              Dashboard App
            </h3>

            <p className="text-gray-400">
              Sistem dashboard modern
              responsive.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="py-24 text-center">

        <h2 className="text-4xl font-bold mb-5">
          Contact
        </h2>

        <p className="text-gray-400">
          emailkamu@example.com
        </p>

      </section>

    </main>
  );
}