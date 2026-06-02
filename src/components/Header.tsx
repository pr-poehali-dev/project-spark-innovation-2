interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-sm uppercase tracking-widest font-bold neon-red">VapeLink</div>
        <nav className="flex gap-8">
          <a
            href="#catalog"
            className="text-white/80 hover:neon-white transition-colors duration-300 uppercase text-sm tracking-widest"
          >
            Каталог
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:neon-white transition-colors duration-300 uppercase text-sm tracking-widest"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}