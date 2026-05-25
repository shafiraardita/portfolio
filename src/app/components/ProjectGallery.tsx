"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
"/projects/halamanawal.png",
"/projects/halamanberandaadmin.png",
"/projects/halamanmonitoring.png",
"/projects/halamanevaluasi.png",
"/projects/halamanlaporanmasuk.png",
"/projects/halamanmasuk.png",
"/projects/detailtitiklaporan.png",
"/projects/detaillaporanmasuk.png"
];

export default function ProjectGallery() {

const [selected,setSelected] =
useState<number | null>(null);

return (

<>

<div className="
grid
md:grid-cols-2
gap-8
">

{images.map((img,index)=>(

<div
key={index}
onClick={()=>setSelected(index)}
className="
cursor-pointer
bg-white/5
rounded-3xl
overflow-hidden
border
border-white/10
hover:scale-[1.02]
transition
"
>

<Image
src={img}
alt=""
width={1000}
height={700}
className="
w-full
h-[280px]
object-cover
"
/>

</div>

))}

</div>


{selected !== null && (

<div className="
fixed
inset-0
bg-black/90
z-[999]
flex
items-center
justify-center
p-8
">

<button
onClick={()=>setSelected(null)}
className="
absolute
top-10
right-10
text-4xl
"
>

×

</button>


<button
onClick={()=>setSelected(
selected === 0
? images.length-1
: selected-1
)}
className="
absolute
left-10
text-5xl
"
>

‹

</button>


<Image
src={images[selected]}
alt=""
width={1400}
height={900}
className="
max-h-[85vh]
rounded-3xl
object-contain
"
/>


<button
onClick={()=>setSelected(
selected === images.length-1
? 0
: selected+1
)}
className="
absolute
right-10
text-5xl
"
>

›

</button>

</div>

)}

</>

)

}