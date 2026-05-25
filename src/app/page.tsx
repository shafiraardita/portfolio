import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">

      {/* Background Glow */}

      <div className="fixed inset-0 -z-10">

        <div className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-blue-500/10
        blur-[120px]
        rounded-full
        " />

        <div className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-purple-500/10
        blur-[120px]
        rounded-full
        " />

      </div>


      {/* NAVBAR */}

      <nav className="
      sticky
      top-0
      z-50
      bg-black/40
      backdrop-blur-xl
      border-b
      border-white/10
      ">

        <div className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-8
        py-5
        ">

          <h1 className="font-bold text-xl">
            Shafira.dev
          </h1>

          <div className="
          hidden
          md:flex
          gap-8
          text-sm
          ">

            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#certificate">Certificate</a>
            <a href="#project">Project</a>

          </div>

        </div>

      </nav>



      {/* HERO */}

      <section className="
      min-h-screen
      flex
      items-center
      px-8
      ">

        <div className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-16
        items-center
        ">

          <div>

            <p className="
            text-blue-400
            mb-4
            ">

              Frontend Developer • UI UX • Administration

            </p>

            <h1 className="
            text-6xl
            md:text-7xl
            font-bold
            mb-8
            leading-tight
            ">

              Shafira Putri Ardita

            </h1>

            <p className="
            text-gray-400
            leading-9
            max-w-xl
            mb-8
            ">

              Alumni Teknik Informatika dengan
              pengalaman frontend web development,
              administrasi, pengelolaan data,
              dashboard monitoring, UI UX Design,
              dan dokumentasi digital.

            </p>

            <div className="
            flex
            gap-4
            flex-wrap
            ">

              <a
                href="/cv/cv.pdf"
                className="
                bg-white
                text-black
                px-6
                py-3
                rounded-2xl
                flex
                items-center
                gap-2
                "
              >

                <FaDownload />

                CV

              </a>

              <a
                href="https://github.com/shafiraardita"
                target="_blank"
                className="
                border
                border-white/20
                p-4
                rounded-2xl
                "
              >

                <FaGithub />

              </a>

              <a
                href="https://www.linkedin.com/in/shafira-putri-ardita-s-t-b7396a29a/"
                target="_blank"
                className="
                border
                border-white/20
                p-4
                rounded-2xl
                "
              >

                <FaLinkedin />

              </a>

              <a
                href="https://instagram.com/shafiraardita_"
                target="_blank"
                className="
                border
                border-white/20
                p-4
                rounded-2xl
                "
              >

                <FaInstagram />

              </a>

            </div>

          </div>



          <div className="flex justify-center">

            <div className="
            bg-white/5
            backdrop-blur-xl
            p-6
            rounded-[40px]
            border
            border-white/10
            ">

              <Image
                src="/profile/profile.jpeg"
                alt="profile"
                width={320}
                height={320}
                className="
                rounded-3xl
                object-cover
                "
              />

            </div>

          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-4
      gap-6
      px-8
      pb-24
      ">

        {[
          ["2+", "Experience"],
          ["1", "Major Project"],
          ["2", "Certificates"],
          ["3+", "Organization"],
        ].map(([n, t]) => (

          <div
            key={t}
            className="
            bg-white/5
            rounded-3xl
            p-8
            border
            border-white/10
            "
          >

            <h2 className="text-4xl mb-2">
              {n}
            </h2>

            <p className="text-gray-400">
              {t}
            </p>

          </div>

        ))}

      </section>



      {/* ABOUT */}

      <section
        id="about"
        className="
        max-w-7xl
        mx-auto
        px-8
        py-24
        "
      >

        <h2 className="
        text-5xl
        font-bold
        mb-12
        ">

          About Me

        </h2>

        <div className="
        grid
        md:grid-cols-3
        gap-6
        ">

          <div className="bg-white/5 p-8 rounded-3xl">
            Frontend Development
          </div>

          <div className="bg-white/5 p-8 rounded-3xl">
            Administration
          </div>

          <div className="bg-white/5 p-8 rounded-3xl">
            UI UX Design
          </div>

        </div>

      </section>



      {/* EXPERIENCE */}

      <section
      id="experience"
      className="
      max-w-7xl
      mx-auto
      px-8
      py-24
      "
      >

      <h2 className="
      text-5xl
      font-bold
      mb-12
      ">

      Experience

      </h2>

      <div className="space-y-8">

      <div className="
      border-l-2
      border-blue-500
      pl-6
      ">

      <h3>

      2022–2025

      </h3>

      <p className="text-gray-400">

      Sekretaris Divisi Komunikasi dan Informasi —
      Himpunan Mahasiswa Teknik Informatika

      </p>

      </div>


      <div className="
      border-l-2
      border-blue-500
      pl-6
      ">

      <h3>

      2024

      </h3>

      <p className="text-gray-400">

      MSIB UI UX Designer —
      Kampus Merdeka

      </p>

      </div>


      <div className="
      border-l-2
      border-blue-500
      pl-6
      ">

      <h3>

      2024

      </h3>

      <p className="text-gray-400">

      Project Manager —
      Project Tugas Mata Kuliah

      </p>

      </div>


      <div className="
      border-l-2
      border-blue-500
      pl-6
      ">

      <h3>

      2022

      </h3>

      <p className="text-gray-400">

      Staff Arsip Administrasi —
      Bappedalitbang

      </p>

      </div>


      <div className="
      border-l-2
      border-blue-500
      pl-6
      ">

      <h3>

      2020

      </h3>

      <p className="text-gray-400">

      Customer Service —
      Ahass Catur Saka Mandiri

      </p>

      </div>

      </div>

      </section>

      {/* CERTIFICATE */}

      <section
        id="certificate"
        className="
        max-w-7xl
        mx-auto
        px-8
        py-24
        "
      >

        <h2 className="
        text-5xl
        font-bold
        mb-12
        ">

          Certificates

        </h2>

        <div className="
        grid
        md:grid-cols-2
        gap-8
        ">

          <div className="
          bg-white/5
          rounded-3xl
          p-8
          ">

            <embed
              src="/certificates/bappeda.pdf"
              width="100%"
              height="400"
            />
            <embed
              src="/certificates/kampusmerderka.pdf"
              width="100%"
              height="400"
            />

          </div>

        </div>

      </section>



      {/* PROJECT */}

      import ProjectGallery from "./components/ProjectGallery";


      {/* FOOTER */}

      <footer className="
      border-t
      border-white/10
      py-10
      text-center
      text-gray-500
      ">

        © 2026 Shafira Putri Ardita

      </footer>

    </main>
  );
}