// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"
// import { useEffect, useMemo, useState } from "react"

// type Choice = "CHINESE" | "NOT_CHINESE" | null

// type ConfettiItem = {
//   id: number
//   left: string
//   top: string
//   emoji: string
//   delay: number
//   duration: number
//   size: number
// }

// const EMOJIS = ["🧧", "🏮", "🧨", "💰", "✨", "🤣", "🍊", "🥟", "🎊", "🐉"]

// function DragonFly() {
//   const lanes = [12, 22, 34, 48, 60, 72, 82]

//   return (
//     <>
//       {Array.from({ length: 3 }).map((_, i) => {
//         const top = lanes[i % lanes.length]
//         const delay = i * 1.4

//         return (
//           <motion.div
//             key={i}
//             className="pointer-events-none absolute z-20"
//             style={{ top: `${top}%`, left: "-15%" }}
//             initial={{ x: 0, opacity: 0 }}
//             animate={{
//               x: ["0vw", "120vw"],
//               opacity: [0, 1, 1, 0],
//             }}
//             transition={{
//               duration: 7 + i * 1.2,
//               repeat: Infinity,
//               delay,
//               ease: "linear",
//             }}
//           >
//             <div className="relative flex items-center">
//               <motion.div
//                 className="absolute -left-20 flex gap-2 text-xl opacity-80"
//                 animate={{ opacity: [0.2, 0.9, 0.2], x: [0, -10, 0] }}
//                 transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 <span>🔥</span>
//                 <span>✨</span>
//                 <span>🧨</span>
//               </motion.div>

//               <motion.div
//                 className="text-6xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
//                 animate={{
//                   y: [0, -8, 0, 6, 0],
//                   rotate: [0, 4, -4, 3, 0],
//                 }}
//                 transition={{
//                   duration: 1.6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 🐉
//               </motion.div>
//             </div>
//           </motion.div>
//         )
//       })}
//     </>
//   )
// }

// export default function Page() {
//   const [choice, setChoice] = useState<Choice>(null)
//   const [confetti, setConfetti] = useState<ConfettiItem[]>([])

//   // Generate confetti only after choosing
//   useEffect(() => {
//     if (!choice) return
//     const items: ConfettiItem[] = Array.from({ length: 48 }).map((_, i) => ({
//       id: i,
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       emoji: EMOJIS[i % EMOJIS.length],
//       delay: Math.random() * 0.9,
//       duration: 2.1 + Math.random() * 2.1,
//       size: 22 + Math.floor(Math.random() * 18),
//     }))
//     setConfetti(items)
//   }, [choice])

//   const content = useMemo(() => {
//     if (choice === "CHINESE") {
//       return {
//         badge: "កូនចិន",
//         titleEN: "I’m Chinese 🧧",
//         titleKH: "កូនចិន ✅ 🧧",
//         lines: [
//           {
//             en: 'Click "KON CHEN"… let me see your Chinese face first 🤨',
//             kh: 'ចុច "កូនចិន" ហើយ… មើលមុខសិន! 🤨',
//           },
//           {
//             en: "Bro… you don’t look Chinese from ANY side 😭🤣",
//             kh: "មើលមុខហើយ… អត់ដឹងចិនខាងណាទេ​នេះ! 🤣😭",
//           },
//           {
//             en: "Anyway Gong Xi Fa Cai! Your Ang Pao is… loading forever 🐉💸",
//             kh: "Gong Xi Fa Cai! តែអាំងប៉ាវ… កំពុង Loading ជារៀងរហូត 🐉💸",
//           },
//         ],
//         imageSrc: "/kon.png",
//         imageAlt: "Funny Chinese New Year image",
//         fallbackEmoji: "🐉🧧🤣",
//       }
//     }

//     if (choice === "NOT_CHINESE") {
//       return {
//         badge: "កូនខ្មែរ",
//         titleEN: "Not Chinese 😌",
//         titleKH: "មិនមែនទេ ❌ 😌",
//         lines: [
//           {
//             en: "Ohhh not Chinese? Then wait for Khmer New Year 😌",
//             kh: "អូ… មិនមែនកូនចិនទេអ៉ី? ចឹងចាំចូលឆ្នាំខ្មែរ 😌",
//           },
//           {
//             en: "We’ll play: water splash 💦, powder attack 🌸, and disappear like ninja 🏃‍♂️🤣",
//             kh: "ចាំចូលឆ្នាំខ្មែរ… បាញ់ទឹក 💦 បាត់ម្សៅ 🌸 ហើយរត់បាត់ដូច Ninja 🏃‍♂️🤣",
//           },
//           {
//             en: "For now… no Ang Pao. Go eat oranges first 🍊😂",
//             kh: "តែឥឡូវ… អត់អាំងប៉ាវទេ! ទៅញ៉ាំក្រូចសិន 🍊😂",
//           },
//         ],
//         imageSrc: "/khmer.png",
//         imageAlt: "Funny Khmer New Year image",
//         fallbackEmoji: "💦🌸🤣",
//       }
//     }

//     return null
//   }, [choice])

//   // RESULT SCREEN
//   if (choice && content) {
//     return (
//       <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-red-950 via-red-900 to-red-950 text-white overflow-hidden">
//         <DragonFly />

//         {/* Confetti */}
//         {confetti.map((c) => (
//           <motion.div
//             key={c.id}
//             className="absolute select-none"
//             style={{
//               left: c.left,
//               top: c.top,
//               fontSize: c.size,
//             }}
//             initial={{ opacity: 0, y: 18, rotate: 0, scale: 0.9 }}
//             animate={{
//               opacity: [0, 1, 1, 0.95],
//               y: [18, -130, 18],
//               rotate: [0, 360, 0],
//               scale: [0.9, 1.15, 1],
//             }}
//             transition={{
//               duration: c.duration,
//               repeat: Infinity,
//               delay: c.delay,
//               ease: "easeInOut",
//             }}
//           >
//             {c.emoji}
//           </motion.div>
//         ))}

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8, y: 18 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 180, damping: 16 }}
//           className="relative z-10 w-[92%] max-w-xl rounded-3xl border-4 border-yellow-400 bg-white/10 backdrop-blur-md p-7 md:p-9 shadow-2xl"
//         >
//           <div className="flex items-center justify-between gap-3">
//             <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-yellow-400 text-red-950 font-extrabold text-sm">
//               {content.badge}
//             </div>
//             <button
//               onClick={() => {
//                 setChoice(null)
//                 setConfetti([])
//               }}
//               className="px-4 py-1 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 transition text-sm font-bold"
//             >
//               Back
//             </button>
//           </div>

//           <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-yellow-300">
//             {content.titleEN}
//           </h1>
//           <h2 className="mt-1 text-lg md:text-xl font-bold text-yellow-100/95">
//             {content.titleKH}
//           </h2>

//           {/* Image */}
//           <div className="mt-6 rounded-2xl overflow-hidden border border-white/15 bg-black/20">
//             <div className="relative w-full aspect-[16/9]">
//               <Image
//                 src={content.imageSrc}
//                 alt={content.imageAlt}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           <div className="mt-3 text-center text-3xl md:text-4xl">{content.fallbackEmoji}</div>

//           {/* Story text */}
//           <div className="mt-6 space-y-4">
//             {content.lines.map((l, idx) => (
//               <div
//                 key={idx}
//                 className="rounded-2xl bg-black/20 border border-white/10 p-4"
//               >
//                 <p className="text-white font-semibold">{l.en}</p>
//                 <p className="mt-1 text-yellow-100/90 font-semibold">{l.kh}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 flex flex-wrap gap-3 justify-center">
//             <button
//               onClick={() => window.location.reload()}
//               className="px-6 py-2 bg-yellow-400 text-red-950 font-extrabold rounded-full hover:bg-yellow-300 transition"
//             >
//               Prank Again 😈
//             </button>

//             <button
//               onClick={() => {
//                 navigator.clipboard?.writeText(
//                   `${content.titleEN}\n${content.titleKH}\n\n` +
//                     content.lines.map((l) => `• ${l.en}\n• ${l.kh}`).join("\n\n")
//                 )
//               }}
//               className="px-6 py-2 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/15 transition"
//             >
//               Copy Text 📋
//             </button>
//           </div>

//           <p className="mt-5 text-center text-xs text-white/60">Anyway this is for funny ✨</p>
//         </motion.div>

//         <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.22),transparent_60%)]" />
//       </main>
//     )
//   }

//   // START SCREEN
//   return (
//     <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-white overflow-hidden">
//       <DragonFly />

//       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

//       <motion.div
//         className="absolute -top-6 left-6 text-5xl"
//         animate={{ y: [0, 12, 0] }}
//         transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
//       >
//         🏮
//       </motion.div>
//       <motion.div
//         className="absolute -top-8 right-8 text-5xl"
//         animate={{ y: [0, 14, 0] }}
//         transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
//       >
//         🏮
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 14 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.35 }}
//         className="text-center px-6"
//       >
//         {/* <div className="text-sm uppercase tracking-widest text-yellow-200">Fun Prank Story 🧧</div> */}
//         <h1 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
//           <span className="text-yellow-300">Are you Chinese?</span> 🧧
//         </h1>
//         <p className="mt-2 text-yellow-100/90 text-lg font-bold">តើអ្នកជាកូនចិនមែនទេ? 🧧</p>
//       </motion.div>

//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 150, damping: 14 }}
//         className="relative w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 mt-7 mb-8 bg-yellow-100 overflow-hidden shadow-xl"
//       >
//         <Image src="/dom.png" alt="Me" fill className="object-cover" />
//       </motion.div>

//       <div className="flex flex-col md:flex-row gap-4 items-center justify-center px-6 w-full max-w-xl">
//         <button
//           onClick={() => setChoice("CHINESE")}
//           className="w-full md:w-auto px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-red-950 font-extrabold rounded-full shadow-lg transform hover:scale-105 transition"
//         >
//           កូនចិន ✅ (Yes)
//         </button>

//         <button
//           onClick={() => setChoice("NOT_CHINESE")}
//           className="w-full md:w-auto px-8 py-3 bg-white/10 border border-white/20 hover:bg-white/15 text-white font-extrabold rounded-full shadow-lg transform hover:scale-105 transition"
//         >
//           មិនមែនទេ ❌ (No)
//         </button>
//       </div>

//       <p className="mt-8 text-xs text-white/65 px-6 text-center max-w-md">
//         ឆ្លើយមើលថា កូនចិន​ ក៏​ កូនខ្មែរ👾
//       </p>
//     </main>
//   )
// }




"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

type Choice = "CHINESE" | "NOT_CHINESE" | null

type ConfettiItem = {
  id: number
  left: string
  top: string
  emoji: string
  delay: number
  duration: number
  size: number
}

const EMOJIS = ["🧧", "🏮", "🧨", "💰", "✨", "🤣", "🍊", "🥟", "🎊"]

function DragonFly() {
  const lanes = [12, 22, 34, 48, 60, 72]

  return (
    <>
      {lanes.map((top, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-20 text-5xl"
          style={{ top: `${top}%`, left: "-10%" }}
          animate={{ x: ["0vw", "120vw"] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        >
          🐉
        </motion.div>
      ))}
    </>
  )
}

export default function Page() {
  const [choice, setChoice] = useState<Choice>(null)
  const [confetti, setConfetti] = useState<ConfettiItem[]>([])

  useEffect(() => {
    if (!choice) return
    const items = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      emoji: EMOJIS[i % EMOJIS.length],
      delay: Math.random(),
      duration: 2 + Math.random() * 2,
      size: 20 + Math.random() * 20,
    }))
    setConfetti(items)
  }, [choice])

  const content = useMemo(() => {
    if (choice === "CHINESE") {
      return {
        badge: "កូនចិន",
        titleEN: "I’m Chinese 🧧",
        titleKH: "មើលមុខកូនចិន ចិនខាងណានុង? មុខដូចប្រកួយ",
        imageSrc: "/fun.png",
      }
    }

    if (choice === "NOT_CHINESE") {
      return {
        badge: "កូនខ្មែរ",
        titleEN: "I'm Khmer",
        titleKH: "ត្រូវហើយត្រៀមចិត្តបាញ់ទឹក + បាត់ម្សៅ🤣",
        imageSrc: "/khmer.png",
      }
    }

    return null
  }, [choice])

  // RESULT SCREEN
  if (choice && content) {
    return (
      <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-red-950 via-red-900 to-red-950 text-white overflow-hidden">

        <DragonFly />

        {confetti.map((c) => (
          <motion.div
            key={c.id}
            className="absolute"
            style={{ left: c.left, top: c.top, fontSize: c.size }}
            animate={{ y: [0, -120, 0], rotate: 360 }}
            transition={{ duration: c.duration, repeat: Infinity, delay: c.delay }}
          >
            {c.emoji}
          </motion.div>
        ))}

        <div className="relative z-10 w-[92%] max-w-xl rounded-3xl border-4 border-yellow-400 bg-white/10 backdrop-blur-md p-7 shadow-2xl">

          <div className="flex justify-between items-center">
            <span className="bg-yellow-400 text-red-900 px-4 py-1 rounded-full font-bold text-sm">
              {content.badge}
            </span>

            <button
              onClick={() => setChoice(null)}
              className="bg-white/10 px-4 py-1 rounded-full text-sm"
            >
              Back
            </button>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-yellow-300">{content.titleEN}</h1>
          <h2 className="text-lg text-yellow-100">{content.titleKH}</h2>

          {/* ✅ PERFECT FIT IMAGE */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-white/15 bg-black/40">
            <div className="relative w-full aspect-[16/9] flex items-center justify-center">
              <Image
                src={content.imageSrc}
                alt="result"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>

        </div>
      </main>
    )
  }

  // START SCREEN
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-white overflow-hidden">

      <DragonFly />

      <h1 className="text-3xl md:text-4xl font-bold text-yellow-300">
        Are you Chinese? 🧧
      </h1>
      <p className="mt-2 text-lg font-bold text-yellow-100">
        តើអ្នកជាកូនចិនមែនទេ?
      </p>

      <div className="relative w-36 h-36 rounded-full border-4 border-yellow-400 mt-7 overflow-hidden">
        <Image src="/dom.png" alt="me" fill className="object-cover" />
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setChoice("CHINESE")}
          className="px-8 py-3 bg-yellow-400 text-red-900 rounded-full font-bold"
        >
          កូនចិន ✅
        </button>

        <button
          onClick={() => setChoice("NOT_CHINESE")}
          className="px-8 py-3 bg-white/10 border border-white/20 rounded-full font-bold"
        >
          មិនមែនទេ ❌
        </button>
      </div>

      <p className="mt-6 text-xs text-white/70">
        ឆ្លើយមើលថា កូនចិន ក៏ កូនខ្មែរ 👾
      </p>

    </main>
  )
}

