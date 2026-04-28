import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/352e707f-3637-400c-b77c-f0b5210dfdd3/bucket/0bc376ac-ae59-426f-a082-6193c06ac34a.jpg";
const IMG1 = "https://cdn.poehali.dev/projects/352e707f-3637-400c-b77c-f0b5210dfdd3/files/272e4d89-ddb0-49c3-afce-57593f400917.jpg";
const IMG2 = "https://cdn.poehali.dev/projects/352e707f-3637-400c-b77c-f0b5210dfdd3/files/7098dc80-94ba-46d3-a41d-b046884fabea.jpg";
const IMG3 = "https://cdn.poehali.dev/projects/352e707f-3637-400c-b77c-f0b5210dfdd3/files/9c620954-a251-4118-9fc8-34b4315c8345.jpg";

const RED = "#E8200B";
const RED_DARK = "#C41A08";
const WHITE = "#FFFFFF";
const BLACK = "#0A0A0A";

const SLIDES = [
  { id: 0, type: "title", label: "Титул" },
  { id: 1, type: "content", label: "Контент" },
  { id: 2, type: "gallery", label: "Галерея" },
  { id: 3, type: "final", label: "Финал" },
];

/* ─── SVG-паттерны (имитация фирстиля с узорчатыми буквами) ─── */
const PatternDefs = () => (
  <defs>
    <pattern id="p-triangles" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
      <polygon points="6,0 12,12 0,12" fill="none" stroke={WHITE} strokeWidth="0.8" />
    </pattern>
    <pattern id="p-hex" x="0" y="0" width="14" height="16" patternUnits="userSpaceOnUse">
      <polygon points="7,1 13,4.5 13,11.5 7,15 1,11.5 1,4.5" fill="none" stroke={WHITE} strokeWidth="0.8" />
    </pattern>
    <pattern id="p-circles" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="8" r="6" fill="none" stroke={WHITE} strokeWidth="0.8" />
      <circle cx="8" cy="8" r="3" fill="none" stroke={WHITE} strokeWidth="0.8" />
    </pattern>
    <pattern id="p-lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <line x1="0" y1="10" x2="10" y2="0" stroke={WHITE} strokeWidth="0.8" />
      <line x1="-2" y1="2" x2="2" y2="-2" stroke={WHITE} strokeWidth="0.8" />
      <line x1="8" y1="12" x2="12" y2="8" stroke={WHITE} strokeWidth="0.8" />
    </pattern>
    <pattern id="p-stars" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
      <text x="2" y="11" fontSize="10" fill="none" stroke={WHITE} strokeWidth="0.4">★</text>
    </pattern>
    <pattern id="p-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <line x1="5" y1="0" x2="5" y2="10" stroke={WHITE} strokeWidth="0.7" />
      <line x1="0" y1="5" x2="10" y2="5" stroke={WHITE} strokeWidth="0.7" />
    </pattern>
  </defs>
);

/* ─── Декоративный логотип-SVG "ЛЕТО В МОСКВЕ" ─── */
const LvmLogo = ({ size = 1, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 520 140"
    className={className}
    style={{ width: `${520 * size}px`, height: `${140 * size}px`, maxWidth: "100%" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <PatternDefs />
    <text x="8" y="118" fontFamily="Oswald, sans-serif" fontWeight="800" fontSize="115" letterSpacing="2" fill={`url(#p-triangles)`}>ЛЕТО</text>
    <text x="8" y="118" fontFamily="Oswald, sans-serif" fontWeight="800" fontSize="115" letterSpacing="2" fill="none" stroke={WHITE} strokeWidth="0.3" opacity="0.4">ЛЕТО</text>
    {/* маленький текст "В МОСКВЕ" */}
  </svg>
);

/* ─── Блок с паттерным заголовком ─── */
const PatternTitle = ({
  text,
  fontSize = 90,
  patternId = "p-triangles",
  width = 600,
  height = 110,
}: {
  text: string;
  fontSize?: number;
  patternId?: string;
  width?: number;
  height?: number;
}) => (
  <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto", maxWidth: width }} xmlns="http://www.w3.org/2000/svg">
    <PatternDefs />
    <text
      x="50%"
      y="85%"
      textAnchor="middle"
      fontFamily="Oswald, sans-serif"
      fontWeight="800"
      fontSize={fontSize}
      letterSpacing="3"
      fill={`url(#${patternId})`}
    >
      {text}
    </text>
    <text
      x="50%"
      y="85%"
      textAnchor="middle"
      fontFamily="Oswald, sans-serif"
      fontWeight="800"
      fontSize={fontSize}
      letterSpacing="3"
      fill="none"
      stroke={WHITE}
      strokeWidth="0.5"
      opacity="0.3"
    >
      {text}
    </text>
  </svg>
);

/* ════════════════════════════════════════
   СЛАЙД 1 — ТИТУЛЬНЫЙ
════════════════════════════════════════ */
function TitleSlide({ key: _k }: { key?: number }) {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center" style={{ background: RED }}>
      {/* текстура — мелкая сетка поверх красного */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bg-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <line x1="30" y1="0" x2="0" y2="30" stroke={WHITE} strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-grid)" />
      </svg>

      {/* угловые акценты */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-white/30" />
      <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-white/30" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-white/30" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-white/30" />

      {/* год-акцент */}
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-white/40" />
          <span className="font-oswald text-white/60 text-sm tracking-[0.4em] uppercase">Лето в Москве</span>
          <div className="w-12 h-px bg-white/40" />
        </div>
      </div>

      {/* главный лого-образ из файла */}
      <div className="relative z-10 w-full px-12 flex flex-col items-center animate-fade-in" style={{ opacity: 0, animationDelay: "0.1s" }}>
        <img
          src={LOGO_URL}
          alt="Лето в Москве"
          className="w-full max-w-2xl object-contain"
          style={{ imageRendering: "crisp-edges" }}
        />
      </div>

      {/* подзаголовок */}
      <div className="relative z-10 mt-6 text-center animate-fade-in" style={{ opacity: 0, animationDelay: "0.35s" }}>
        <p className="font-oswald text-white/80 text-xl tracking-[0.25em] uppercase">Подзаголовок · Дата · Место</p>
      </div>

      {/* нижняя полоса */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20" />
      <div className="absolute bottom-3 left-0 right-0 flex justify-center">
        <span className="font-golos text-white/30 text-xs tracking-widest">01 / 04</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   СЛАЙД 2 — КОНТЕНТ
════════════════════════════════════════ */
function ContentSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden flex" style={{ background: WHITE }}>
      {/* красная левая колонка */}
      <div className="relative w-[42%] flex flex-col justify-between overflow-hidden" style={{ background: RED }}>
        {/* фоновая текстура */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
          <defs>
            <pattern id="lv-tri" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,0 20,20 0,20" fill="none" stroke={WHITE} strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lv-tri)" />
        </svg>

        {/* шапка */}
        <div className="relative z-10 p-8 animate-fade-in" style={{ opacity: 0, animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-lvm-red font-oswald font-black text-xs leading-none">Л</span>
            </div>
            <span className="font-oswald text-white text-xs tracking-[0.3em] uppercase opacity-80">Лето в Москве</span>
          </div>

          {/* паттерный заголовок раздела */}
          <div className="mb-4" style={{ marginLeft: "-8px" }}>
            <svg viewBox="0 0 280 80" style={{ width: "100%", maxWidth: 280, height: "auto" }}>
              <PatternDefs />
              <text x="4" y="68" fontFamily="Oswald,sans-serif" fontWeight="800" fontSize="72" fill="url(#p-lines)">
                ТЕМА
              </text>
              <text x="4" y="68" fontFamily="Oswald,sans-serif" fontWeight="800" fontSize="72" fill="none" stroke={WHITE} strokeWidth="0.5" opacity="0.25">
                ТЕМА
              </text>
            </svg>
          </div>
          <p className="font-golos text-white/70 text-sm leading-relaxed">
            Краткое описание раздела. Здесь можно разместить ключевую мысль или тезис.
          </p>
        </div>

        {/* большой номер */}
        <div className="relative z-10 pb-4 pl-6 animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
          <span className="font-oswald font-black text-white/10 select-none" style={{ fontSize: "9rem", lineHeight: 1 }}>02</span>
        </div>

        {/* белая вертикальная полоска-разделитель */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20" />
      </div>

      {/* правая контентная зона */}
      <div className="flex-1 flex flex-col justify-between p-8 gap-5">
        {/* фото */}
        <div className="relative rounded-2xl overflow-hidden flex-1 animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s", minHeight: 0 }}>
          <img src={IMG2} alt="" className="w-full h-full object-cover" />
          {/* красный оверлей снизу */}
          <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: `linear-gradient(to top, ${RED}CC, transparent)` }} />
          <div className="absolute bottom-3 left-4">
            <span className="font-oswald text-white text-sm tracking-wider uppercase">Подпись к фото</span>
          </div>
          {/* паттерный угловой акцент */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <svg viewBox="0 0 64 64" className="w-full h-full opacity-80">
              <rect width="64" height="64" fill={RED} />
              <PatternDefs />
              <rect width="64" height="64" fill="url(#p-circles)" />
            </svg>
          </div>
        </div>

        {/* карточки-факты */}
        <div className="grid grid-cols-3 gap-3 animate-fade-in" style={{ opacity: 0, animationDelay: "0.45s" }}>
          {[
            { num: "01", label: "Ключевой факт", val: "Значение" },
            { num: "02", label: "Показатель", val: "Значение" },
            { num: "03", label: "Аудитория", val: "Значение" },
          ].map((item, i) => (
            <div key={i} className="relative rounded-xl p-4 overflow-hidden border-2" style={{ borderColor: `${RED}22`, background: `${RED}06` }}>
              <div className="absolute top-2 right-3 font-oswald font-black text-xs" style={{ color: `${RED}30` }}>{item.num}</div>
              <div className="w-6 h-1 rounded-full mb-3" style={{ background: RED }} />
              <p className="font-golos text-gray-400 text-xs mb-1">{item.label}</p>
              <p className="font-oswald font-bold text-base" style={{ color: BLACK }}>{item.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   СЛАЙД 3 — ГАЛЕРЕЯ
════════════════════════════════════════ */
function GallerySlide() {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col" style={{ background: BLACK }}>
      {/* шапка */}
      <div className="relative z-10 flex items-center justify-between px-10 pt-7 pb-3 animate-fade-in flex-shrink-0" style={{ opacity: 0, animationDelay: "0.1s" }}>
        <div className="flex items-center gap-4">
          {/* мини-лого паттерный */}
          <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0" style={{ background: RED }}>
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <PatternDefs />
              <text x="3" y="30" fontFamily="Oswald,sans-serif" fontWeight="900" fontSize="28" fill="url(#p-hex)">Л</text>
            </svg>
          </div>
          <div>
            <p className="font-oswald font-bold text-white text-xl tracking-widest uppercase">ФОТОГАЛЕРЕЯ</p>
            <p className="font-golos text-white/30 text-xs tracking-widest uppercase">Лето в Москве</p>
          </div>
        </div>
        <span className="font-oswald text-white/15 font-black text-5xl select-none">03</span>
      </div>

      {/* красная разделительная линия */}
      <div className="flex-shrink-0 mx-10 h-px" style={{ background: RED }} />

      {/* сетка фото */}
      <div className="relative z-10 flex-1 grid grid-cols-3 gap-3 p-10 pt-4 animate-fade-in" style={{ opacity: 0, animationDelay: "0.2s", minHeight: 0 }}>
        {/* большое фото слева */}
        <div className="col-span-2 relative rounded-xl overflow-hidden group cursor-pointer" style={{ minHeight: 0 }}>
          <img src={IMG1} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          {/* красный hover-оверлей */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `${RED}55` }} />
          <div className="absolute bottom-4 left-4">
            <div className="px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: RED }}>
              <span className="font-oswald text-white text-xs tracking-wider uppercase">Фото 1</span>
            </div>
          </div>
          {/* угол с паттерном при ховере */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon name="Expand" size={14} className="text-white" />
          </div>
        </div>

        {/* 2 фото справа */}
        <div className="flex flex-col gap-3" style={{ minHeight: 0 }}>
          {[IMG2, IMG3].map((src, i) => (
            <div key={i} className="relative flex-1 rounded-xl overflow-hidden group cursor-pointer" style={{ minHeight: 0 }}>
              <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `${RED}55` }} />
              <div className="absolute bottom-2 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-2 py-0.5 rounded-sm" style={{ background: RED }}>
                  <span className="font-oswald text-white text-xs uppercase">Фото {i + 2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 плейсхолдера */}
        {[1, 2, 3].map(i => (
          <div key={i} className="relative rounded-xl overflow-hidden group cursor-pointer" style={{ minHeight: 0 }}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 border-2 rounded-xl" style={{ borderColor: `${RED}40`, background: `${RED}08` }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${RED}20` }}>
                <Icon name="ImagePlus" size={18} style={{ color: `${RED}80` }} />
              </div>
              <span className="font-golos text-xs" style={{ color: `${WHITE}30` }}>Добавить фото</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   СЛАЙД 4 — ФИНАЛЬНЫЙ
════════════════════════════════════════ */
function FinalSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center" style={{ background: RED }}>
      {/* фоновая текстура */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <pattern id="fin-bg" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="12" fill="none" stroke={WHITE} strokeWidth="0.5" />
            <circle cx="15" cy="15" r="6" fill="none" stroke={WHITE} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fin-bg)" />
      </svg>

      {/* угловые акценты */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-white/25" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-white/25" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-white/25" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-white/25" />

      {/* логотип из картинки */}
      <div className="relative z-10 w-full max-w-2xl px-10 animate-fade-in" style={{ opacity: 0, animationDelay: "0.1s" }}>
        <img src={LOGO_URL} alt="Лето в Москве" className="w-full object-contain" />
      </div>

      {/* тезис */}
      <div className="relative z-10 mt-4 text-center px-12 animate-slide-up" style={{ opacity: 0, animationDelay: "0.25s" }}>
        <p className="font-golos text-white/80 text-base leading-relaxed max-w-lg mx-auto mb-8">
          Ключевые итоги и призыв к действию. Опишите, что вы предлагаете аудитории сделать прямо сейчас.
        </p>
      </div>

      {/* кнопки */}
      <div className="relative z-10 flex gap-4 animate-fade-in" style={{ opacity: 0, animationDelay: "0.4s" }}>
        <button
          className="font-oswald font-bold text-sm tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-300 hover:scale-105"
          style={{ background: WHITE, color: RED }}
        >
          ГЛАВНОЕ ДЕЙСТВИЕ
        </button>
        <button
          className="font-oswald font-bold text-sm tracking-[0.2em] uppercase px-8 py-3.5 border-2 border-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
          style={{ color: WHITE }}
        >
          ВТОРОЕ ДЕЙСТВИЕ
        </button>
      </div>

      {/* контакты */}
      <div className="relative z-10 mt-8 flex gap-6 animate-fade-in" style={{ opacity: 0, animationDelay: "0.55s" }}>
        {[
          { icon: "Globe", label: "сайт.ру" },
          { icon: "Mail", label: "почта@пример.ру" },
          { icon: "Phone", label: "+7 (000) 000-00-00" },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <Icon name={c.icon as "Globe"} size={13} className="text-white/60" />
            <span className="font-golos text-white/60 text-xs">{c.label}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-8 z-10">
        <span className="font-golos text-white/25 text-xs tracking-widest">04 / 04</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   ГЛАВНЫЙ КОМПОНЕНТ
════════════════════════════════════════ */
export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number) => {
    if (idx === current || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 280);
  };

  const goNext = () => { if (current < SLIDES.length - 1) goTo(current + 1); };
  const goPrev = () => { if (current > 0) goTo(current - 1); };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating]);

  const renderSlide = () => {
    switch (current) {
      case 0: return <TitleSlide key={current} />;
      case 1: return <ContentSlide />;
      case 2: return <GallerySlide />;
      case 3: return <FinalSlide />;
      default: return <TitleSlide />;
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center p-6 font-golos"
      style={{ background: "#111" }}
    >
      {/* шапка редактора */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* мини-лого с паттерном */}
          <div className="w-9 h-9 rounded-md overflow-hidden flex-shrink-0" style={{ background: RED }}>
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <PatternDefs />
              <text x="2" y="28" fontFamily="Oswald,sans-serif" fontWeight="900" fontSize="30" fill="url(#p-triangles)">Л</text>
            </svg>
          </div>
          <div>
            <p className="font-oswald text-white font-semibold text-sm tracking-wide">Лето в Москве</p>
            <p className="text-gray-500 text-xs">Шаблон презентации</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-xs">
          <Icon name="Keyboard" size={12} />
          <span>← → клавиатура</span>
        </div>
      </div>

      {/* контейнер слайда 16:9 */}
      <div className="w-full max-w-5xl relative" style={{ aspectRatio: "16/9" }}>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(0.975) translateY(8px)" : "scale(1) translateY(0)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
            boxShadow: `0 0 0 3px ${RED}40, 0 30px 80px rgba(0,0,0,0.8)`,
          }}
        >
          {renderSlide()}
        </div>
      </div>

      {/* навигация */}
      <div className="w-full max-w-5xl flex items-center justify-between mt-5">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-oswald tracking-wider uppercase transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
          style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: `1px solid rgba(255,255,255,0.08)` }}
        >
          <Icon name="ChevronLeft" size={15} />
          Назад
        </button>

        {/* прогресс-точки */}
        <div className="flex items-center gap-3">
          {SLIDES.map((s, i) => (
            <button key={s.id} onClick={() => goTo(i)} className="flex items-center gap-2 group">
              <div
                className="rounded-none transition-all duration-300"
                style={{
                  width: i === current ? 36 : 8,
                  height: 4,
                  background: i === current ? RED : "rgba(255,255,255,0.2)",
                }}
              />
              {i === current && (
                <span className="font-oswald text-xs tracking-widest uppercase" style={{ color: RED }}>
                  {s.label}
                </span>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={current === SLIDES.length - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-oswald tracking-wider uppercase transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
          style={{ background: `${RED}22`, color: RED, border: `1px solid ${RED}50` }}
        >
          Далее
          <Icon name="ChevronRight" size={15} />
        </button>
      </div>

      <p className="mt-3 text-xs text-center" style={{ color: "rgba(255,255,255,0.2)" }}>
        4 слайда · Лето в Москве 2025
      </p>
    </div>
  );
}
