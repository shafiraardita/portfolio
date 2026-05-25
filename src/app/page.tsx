import Image from "next/image";
import {
FaGithub,
FaLinkedin,
FaInstagram,
FaDownload
} from "react-icons/fa";

export default function Home() {

return (

<main className="bg-black text-white">

<div className="fixed inset-0 -z-10">

<div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"/>

<div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"/>

</div>

<section className="min-h-screen flex items-center justify-center px-8">

<div className="max-w-6xl grid md:grid-cols-2 gap-16 items-center">

<div>

<p className="text-blue-400 mb-4">

Frontend Developer • Administration

</p>

<h1 className="text-6xl font-bold mb-6">

Shafira Putri Ardita

</h1>

<p className="text-gray-400 leading-8 mb-8">

Mahasiswa Teknik Informatika
dengan pengalaman frontend,
UI UX, administrasi,
pengelolaan data,
dashboard monitoring
dan digital documentation.

</p>

<div className="flex gap-4 flex-wrap">

<a
href="/cv/cv.pdf"
download
className="bg-white text-black px-6 py-3 rounded-2xl flex gap-2"
>

<FaDownload/>

CV

</a>

<a
href="https://github.com/shafiraardita"
className="border px-6 py-3 rounded-2xl"
>

<FaGithub/>

</a>

<a
href="https://www.linkedin.com/in/shafira-putri-ardita-s-t-b7396a29a/"
className="border px-6 py-3 rounded-2xl"
>

<FaLinkedin/>

</a>

<a
href="https://instagram.com/shafiraardita_"
className="border px-6 py-3 rounded-2xl"
>

<FaInstagram/>

</a>

</div>

</div>

<div className="flex justify-center">

<Image
src="/profile/profile.jpeg"
alt="profile"
width={380}
height={380}
className="
rounded-full
border
border-white/20
object-cover
w-[380px]
h-[380px]
shadow-2xl
"
/>

</div>

</div>

</section>
<section className="py-32 px-8">

<h2 className="text-5xl font-bold text-center mb-10">

Curriculum Vitae

</h2>

<div className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-10 text-center">

<p className="text-gray-400 mb-8">

Download CV lengkap saya

</p>

<a
href="/cv/cv.pdf"
download
className="
bg-white
text-black
px-8
py-4
rounded-2xl
inline-block
"
>

Download CV

</a>

</div>

</section>
<section className="py-32 px-8">

<h2 className="text-5xl text-center mb-10">

Certificates

</h2>

<div className="max-w-5xl mx-auto">

<embed
src="/certificates/bappeda.pdf"
width="100%"
height="700"
/>

</div>

</section>
</main>

)

}