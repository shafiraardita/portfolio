import Image from "next/image";
import {
FaGithub,
FaLinkedin,
FaInstagram,
FaDownload
} from "react-icons/fa";

export default function Home() {

return (

<main className="bg-[#050505] text-white">

{/* background */}

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
"/>

<div className="
absolute
bottom-0
right-0
w-[500px]
h-[500px]
bg-purple-500/10
blur-[120px]
rounded-full
"/>

</div>


{/* navbar */}

<nav className="
sticky
top-0
z-50
backdrop-blur-xl
bg-black/30
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

<h1 className="font-bold">

Shafira.dev

</h1>

<div className="flex gap-6">

<a href="#about">About</a>
<a href="#experience">Experience</a>
<a href="#project">Project</a>
<a href="#contact">Contact</a>

</div>

</div>

</nav>


{/* hero */}

<section
className="
min-h-screen
flex
items-center
px-8
"
>

<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-16
items-center
">

<div>

<p className="text-blue-400 mb-4">

Frontend Developer • UI UX • Administration

</p>

<h1 className="
text-7xl
font-bold
mb-8
">

Shafira Putri Ardita

</h1>

<p className="
text-gray-400
leading-9
mb-8
">

Mahasiswa Teknik Informatika
dengan pengalaman frontend,
administrasi,
pengelolaan data,
dashboard monitoring,
serta UI UX Design.

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
gap-2
"
>

<FaDownload/>

CV

</a>

<a
href="https://github.com/shafiraardita"
target="_blank"
className="
border
px-5
py-3
rounded-2xl
"
>

<FaGithub/>

</a>

<a
href="https://www.linkedin.com/in/shafira-putri-ardita-s-t-b7396a29a/"
target="_blank"
className="
border
px-5
py-3
rounded-2xl
"
>

<FaLinkedin/>

</a>

<a
href="https://instagram.com/shafiraardita_"
target="_blank"
className="
border
px-5
py-3
rounded-2xl
"
>

<FaInstagram/>

</a>

</div>

</div>


<div className="flex justify-center">

<div className="
bg-white/5
p-6
rounded-[40px]
backdrop-blur-xl
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


{/* about */}

<section
id="about"
className="
max-w-7xl
mx-auto
px-8
py-24
"
>

<div className="
grid
md:grid-cols-3
gap-6
">

<div className="
bg-white/5
p-8
rounded-3xl
">

<h3 className="mb-3">

Frontend

</h3>

<p className="text-gray-400">

HTML
CSS
JavaScript
Dashboard

</p>

</div>

<div className="
bg-white/5
p-8
rounded-3xl
">

<h3 className="mb-3">

Administration

</h3>

<p className="text-gray-400">

Arsip
Input Data
Dokumen

</p>

</div>

<div className="
bg-white/5
p-8
rounded-3xl
">

<h3 className="mb-3">

UI UX

</h3>

<p className="text-gray-400">

Wireframe
Prototype
Research

</p>

</div>

</div>

</section>


{/* experience */}

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
bg-white/5
p-8
rounded-3xl
">

2022–2025

Sekretaris Divisi Komunikasi dan Informasi

HMTI

</div>

<div className="
bg-white/5
p-8
rounded-3xl
">

2024

MSIB UI UX Designer

</div>

<div className="
bg-white/5
p-8
rounded-3xl
">

2022

Staff Arsip Administrasi
Bappedalitbang

</div>

</div>

</section>

</main>

)

}