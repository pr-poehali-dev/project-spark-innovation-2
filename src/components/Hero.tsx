import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-[#0d0d0d]"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/c46659b3-b3a5-4969-995e-06035aba3757/files/4917c0c5-b70a-44ac-9055-93325cc1e16f.jpg"
          alt="VapeLink premium devices"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4 text-red-500" style={{textShadow: '0 0 10px #ff1a1a'}}>Премиум электронные сигареты</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 neon-white">
          VAPELINK
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 mb-8 text-white/80">
          Изысканный вкус и безупречное качество — для тех, кто выбирает лучшее
        </p>
        <button className="neon-btn-red px-8 py-3 uppercase tracking-widest text-sm cursor-pointer">
          Смотреть каталог
        </button>
      </div>
    </div>
  );
}