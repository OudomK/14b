// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"

// export default function Page() {
//   return (
//     <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-red-800 to-amber-900">

//       {/* Soft glowing overlay */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,150,0.25),transparent_70%)]"></div>

//       {/* Floating flowers */}
//       <motion.div
//         className="absolute top-10 left-10 text-5xl"
//         animate={{ y: [0, -20, 0] }}
//         transition={{ duration: 4, repeat: Infinity }}
//       >
//         🌸
//       </motion.div>

//       <motion.div
//         className="absolute bottom-20 right-20 text-6xl"
//         animate={{ y: [0, -30, 0] }}
//         transition={{ duration: 5, repeat: Infinity }}
//       >
//         🌹
//       </motion.div>

//       {/* Main Card */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="relative bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-rose-300 shadow-2xl text-center"
//       >

//         {/* Glowing animated photo */}
//         <motion.div
//           animate={{ boxShadow: ["0 0 20px #facc15", "0 0 40px #f472b6", "0 0 20px #facc15"] }}
//           transition={{ duration: 3, repeat: Infinity }}
//           className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400"
//         >
//           <Image
//             src="/noch.png"
//             alt="Special"
//             fill
//             className="object-cover"
//           />
//         </motion.div>

//         <h1 className="mt-8 text-4xl md:text-5xl font-bold text-yellow-300">
//           Happy Valentine's Day 💖
//         </h1>

//         <p className="mt-4 text-rose-200 text-lg italic">
//           February 14th — A Magical Day of Love
//         </p>

//         <p className="mt-6 max-w-md mx-auto text-rose-100">
//           Like flowers bloom in spring,
//           my heart blooms every time I see you.
//           You are my sunshine, my peace, my forever.
//         </p>

//       </motion.div>

//       {/* Extra floating petals */}
//       <motion.div
//         className="absolute top-1/3 left-1/4 text-4xl"
//         animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }}
//         transition={{ duration: 6, repeat: Infinity }}
//       >
//         🌺
//       </motion.div>

//     </main>
//   )
// }






"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Page() {
  const [showCard, setShowCard] = useState(false)
  const [noPos, setNoPos] = useState({ top: "50%", left: "60%" })

  // When No button hovered, move it randomly
  const handleNoHover = () => {
    const top = Math.random() * 80 + 10 + "%"
    const left = Math.random() * 80 + 10 + "%"
    setNoPos({ top, left })
  }

  if (showCard) {
    // Valentine card screen
    return (
      <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-blue-400 text-white overflow-hidden">
        {/* Floating hearts and flowers */}
        {Array.from({ length: 25 }).map((_, i) => {
          const emojis = ["🌸", "🌼", "💖", "💙"]
          return (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
                color: emojis[i % emojis.length] === "💙" ? "#3B82F6" : undefined,
              }}
              animate={{
                y: [0, -180 - Math.random() * 100, 0],
                x: [0, Math.random() * 60 - 30, 0],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {emojis[i % emojis.length]}
            </motion.div>
          )
        })}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-rose-300 shadow-2xl text-center max-w-lg"
        >
          {/* Flower trip photo */}
          {/* <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative w-72 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-blue-400 mb-6"
          >
            <Image
              src="/flower1.png" // <-- your flower photo
              alt="Flower Trip"
              fill
              className="object-cover"
            />
          </motion.div> */}

          {/* Flower trip photo as a circle */}
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.2 }}
  className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-400 mb-6"
>
  <Image
    src="/noch.png" // <-- your flower photo
    alt="Flower Trip"
    fill
    className="object-cover"
  />
</motion.div>


          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300"
          >
            Happy Valentine's Day 💖
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-lg text-rose-100 italic"
          >
            Thank you for being amazing! Let’s grow together and make every moment beautiful. 🌸
          </motion.p>
        </motion.div>
      </main>
    )
  }

  // First ask screen
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-900 via-red-800 to-amber-900 text-white overflow-hidden">

      {/* Your photo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 mb-6"
      >
        <Image
          src="/image.png" // <-- your photo
          alt="Me"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Question */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300"
      >
        Do you love me? 💖
      </motion.h1>

      {/* Buttons */}
      <div className="relative w-full flex justify-center gap-6 mt-4">
        {/* Yes button */}
        <button
          onClick={() => setShowCard(true)}
          className="px-6 py-3 bg-pink-500 hover:bg-pink-400 rounded-full shadow-lg font-semibold transition"
        >
          Yes ❤️
        </button>

        {/* No button that moves */}
        <motion.button
          style={{ position: "absolute", top: noPos.top, left: noPos.left }}
          onMouseEnter={handleNoHover}
          className="px-6 py-3 bg-red-500 hover:bg-red-400 rounded-full shadow-lg font-semibold transition"
        >
          No 💔
        </motion.button>
      </div>
    </main>
  )
}
