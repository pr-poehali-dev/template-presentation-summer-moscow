import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const IMG1 = "https://cdn.poehali.dev/projects/352e707f-3637-400c-b77c-f0b5210dfdd3/files/272e4d89-ddb0-49c3-afce-57593f400917.jpg";
const IMG2 = "https://cdn.poehali.dev/projects/352e707f-3637-400c-b77c-f0b5210dfdd3/files/7098dc80-94ba-46d3-a41d-b046884fabea.jpg";
const IMG3 = "https://cdn.poehali.dev/projects/352e707f-3637-400c-b77c-f0b5210dfdd3/files/9c620954-a251-4118-9fc8-34b4315c8345.jpg";

const SLIDES = [
  { id: 0, type: "title" },
  { id: 1, type: "content" },
  { id: 2, type: "gallery" },
  { id: 3, type: "final" },
];

const SLIDE_LABELS = ["Титул", "Контент", "Галерея", "Финал"];

function TitleSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-summer-deep flex flex-col items-center justify-center">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(255,184,0,0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 20%, rgba(255,107,53,0.3) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 60% 70%, rgba(0,198,255,0.15) 0%, transparent 50%)"
      }} />

      <div className="absolute w-[700px] h-[700px] rounded-full border border-summer-sun/10 animate-spin-slow" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-summer-orange/15" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(45deg)", animation: "spin-slow 14s linear infinite reverse" }} />

      <div className="absolute top-16 right-24 w-32 h-32 rounded-full bg-summer-sun/20 blur-3xl animate-pulse-glow animate-float" />
      <div className="absolute bottom-24 left-16 w-48 h-48 rounded-full bg-summer-orange/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-summer-sky/20 blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="absolute top-12 left-16 flex gap-3">
        {[0, 1, 2].map(i => (
          <div key={i} className="w-2 h-2 rounded-full bg-summer-sun/60" />
        ))}
      </div>
      <div className="absolute bottom-12 right-16 text-summer-sun/30 font-oswald text-6xl font-bold select-none">☀</div>

      <div className="relative z-10 mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <div className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-summer-sun/40 bg-summer-sun/10 backdrop-blur-sm">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-summer-sun to-summer-orange flex items-center justify-center text-white text-sm font-bold font-oswald">Л</div>
          <span className="text-summer-sun font-golos font-semibold text-sm tracking-widest uppercase">Лето в Москве</span>
        </div>
      </div>

      <div className="relative z-10 text-center px-8 animate-fade-in" style={{ animationDelay: "0.25s", opacity: 0 }}>
        <h1 className="font-oswald font-bold text-white leading-none mb-4" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          НАЗВАНИЕ<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FFB800 0%, #FF6B35 50%, #FF4E6A 100%)" }}>
            ПРОЕКТА
          </span>
        </h1>
        <p className="font-golos text-white/50 text-lg tracking-widest uppercase mb-10">Подзаголовок или дата мероприятия</p>
        <div className="h-px w-32 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #FFB800, transparent)" }} />
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <span className="font-golos text-white/25 text-xs tracking-widest uppercase">01 / Титульный слайд</span>
      </div>
    </div>
  );
}

function ContentSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden flex" style={{ background: "#F9F5EE" }}>
      <div className="relative w-2/5 flex flex-col justify-between p-10 overflow-hidden" style={{ background: "linear-gradient(160deg, #1A1A2E 0%, #2d1f5e 100%)" }}>
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-summer-sun/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-summer-orange/15 blur-2xl" />

        <div className="flex items-center gap-3 animate-fade-in" style={{ opacity: 0, animationDelay: "0.1s" }}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-summer-sun to-summer-orange flex items-center justify-center text-white font-bold font-oswald text-lg">Л</div>
          <div>
            <p className="font-oswald font-semibold text-white text-sm tracking-wider">ЛЕТО В МОСКВЕ</p>
            <p className="font-golos text-white/40 text-xs">Слайд с контентом</p>
          </div>
        </div>

        <div className="animate-slide-in" style={{ opacity: 0, animationDelay: "0.2s" }}>
          <div className="w-10 h-1 rounded-full bg-summer-sun mb-6" />
          <h2 className="font-oswald font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            ЗАГОЛОВОК<br />
            <span className="text-summer-sun">РАЗДЕЛА</span>
          </h2>
          <p className="font-golos text-white/60 text-sm leading-relaxed">
            Краткое описание раздела или ключевая мысль, которую хотите донести до аудитории.
          </p>
        </div>

        <div className="font-oswald text-white/10 font-bold select-none" style={{ fontSize: "7rem", lineHeight: 1, marginBottom: "-1rem" }}>02</div>
      </div>

      <div className="flex-1 flex flex-col justify-center p-12 gap-8">
        <div className="animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
          <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ height: "220px" }}>
            <img src={IMG2} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,26,46,0.3) 0%, transparent 50%)" }} />
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
              <span className="font-golos text-white text-xs font-semibold">Подпись к фото</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ opacity: 0, animationDelay: "0.45s" }}>
          {[
            { icon: "Star", label: "Ключевой факт", val: "Значение" },
            { icon: "TrendingUp", label: "Показатель роста", val: "Значение" },
            { icon: "Users", label: "Аудитория", val: "Значение" },
            { icon: "MapPin", label: "Локация", val: "Значение" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white shadow-sm border border-orange-100">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #FFB800, #FF6B35)" }}>
                <Icon name={item.icon as "Star"} size={14} className="text-white" />
              </div>
              <div>
                <p className="font-golos text-xs text-gray-400 mb-0.5">{item.label}</p>
                <p className="font-oswald font-semibold text-gray-800 text-sm">{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GallerySlide() {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col" style={{ background: "#0F0F1A" }}>
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,184,0,0.2) 0%, transparent 70%)" }} />

      <div className="relative z-10 flex items-center justify-between px-10 pt-8 pb-4 animate-fade-in" style={{ opacity: 0, animationDelay: "0.1s" }}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-summer-sun to-summer-orange" />
            <span className="font-oswald text-summer-sun text-sm tracking-widest uppercase">Лето в Москве</span>
          </div>
          <h2 className="font-oswald font-bold text-white text-3xl tracking-wide">ФОТОГАЛЕРЕЯ</h2>
        </div>
        <div className="text-right">
          <p className="font-golos text-white/30 text-xs tracking-widest uppercase mb-1">Слайд</p>
          <p className="font-oswald text-white/20 text-4xl font-bold">03</p>
        </div>
      </div>

      <div className="relative z-10 flex-1 px-10 pb-10 grid grid-cols-3 gap-4 animate-fade-in" style={{ opacity: 0, animationDelay: "0.25s" }}>
        <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: "0" }}>
          <img src={IMG1} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-golos text-white text-sm font-semibold">Название фото 1</span>
          </div>
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon name="Expand" size={12} className="text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {[IMG2, IMG3].map((src, i) => (
            <div key={i} className="relative flex-1 rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: "0" }}>
              <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-golos text-white text-xs font-semibold">Фото {i + 2}</span>
              </div>
            </div>
          ))}
        </div>

        {[1, 2, 3].map(i => (
          <div key={i} className="relative rounded-2xl overflow-hidden cursor-pointer group" style={{ minHeight: "0" }}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-2" style={{ background: "rgba(255,255,255,0.04)", border: "2px dashed rgba(255,184,0,0.2)" }}>
              <div className="w-10 h-10 rounded-full bg-summer-sun/10 flex items-center justify-center">
                <Icon name="ImagePlus" size={18} className="text-summer-sun/50" />
              </div>
              <span className="font-golos text-white/25 text-xs">Добавить фото</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinalSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(255,184,0,0.3) 0%, transparent 70%)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-summer-sun/20 animate-spin-slow" />
        <div className="absolute w-[550px] h-[550px] rounded-full border border-summer-orange/10" style={{ animation: "spin-slow 30s linear infinite reverse" }} />
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 opacity-30" style={{ background: "linear-gradient(135deg, rgba(255,184,0,0.4) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20" style={{ background: "linear-gradient(315deg, rgba(255,107,53,0.4) 0%, transparent 60%)" }} />

      <div className="relative z-10 mb-6 animate-fade-in" style={{ opacity: 0, animationDelay: "0.1s" }}>
        <div className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-summer-sun/40 bg-summer-sun/10 backdrop-blur-sm">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-summer-sun to-summer-orange flex items-center justify-center text-white font-bold font-oswald">Л</div>
          <span className="text-summer-sun font-golos font-semibold text-sm tracking-widest uppercase">Лето в Москве</span>
        </div>
      </div>

      <div className="relative z-10 text-center px-8 animate-slide-up" style={{ opacity: 0, animationDelay: "0.25s" }}>
        <h2 className="font-oswald font-bold text-white leading-tight mb-3" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          ВЫВОДЫ И<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FFB800, #FF6B35)" }}>
            СЛЕДУЮЩИЙ ШАГ
          </span>
        </h2>
        <p className="font-golos text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
          Ключевые итоги и призыв к действию. Опишите, что вы предлагаете аудитории сделать прямо сейчас.
        </p>
      </div>

      <div className="relative z-10 flex gap-4 animate-fade-in" style={{ opacity: 0, animationDelay: "0.45s" }}>
        <button className="font-oswald font-semibold text-sm tracking-widest uppercase px-8 py-3.5 rounded-full text-summer-deep transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ background: "linear-gradient(135deg, #FFB800, #FF6B35)", boxShadow: "0 8px 32px rgba(255,184,0,0.35)" }}>
          Главное действие
        </button>
        <button className="font-oswald font-semibold text-sm tracking-widest uppercase px-8 py-3.5 rounded-full text-white border border-white/20 hover:border-summer-sun/50 hover:text-summer-sun transition-all duration-300 hover:scale-105 backdrop-blur-sm">
          Второе действие
        </button>
      </div>

      <div className="relative z-10 mt-10 flex gap-8 animate-fade-in" style={{ opacity: 0, animationDelay: "0.6s" }}>
        {[
          { icon: "Globe", label: "сайт.ру" },
          { icon: "Mail", label: "почта@пример.ру" },
          { icon: "Phone", label: "+7 (000) 000-00-00" },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <Icon name={c.icon as "Globe"} size={14} className="text-summer-sun/60" />
            <span className="font-golos text-white/40 text-xs">{c.label}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 right-8 z-10">
        <span className="font-golos text-white/20 text-xs tracking-widest uppercase">04 / Финальный слайд</span>
      </div>
    </div>
  );
}

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (idx === current || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
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
      case 0: return <TitleSlide />;
      case 1: return <ContentSlide />;
      case 2: return <GallerySlide />;
      case 3: return <FinalSlide />;
      default: return <TitleSlide />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-golos" style={{ background: "#111827" }}>
      <div className="w-full max-w-5xl flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-summer-sun to-summer-orange flex items-center justify-center text-white font-bold font-oswald text-sm">Л</div>
          <div>
            <p className="font-oswald text-white font-semibold text-sm tracking-wide">Лето в Москве</p>
            <p className="text-gray-500 text-xs">Шаблон презентации</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <Icon name="Keyboard" size={12} />
          <span>← → для навигации</span>
        </div>
      </div>

      <div className="w-full max-w-5xl relative" style={{ aspectRatio: "16/9" }}>
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(0.98)" : "scale(1)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {renderSlide()}
        </div>
      </div>

      <div className="w-full max-w-5xl flex items-center justify-between mt-5">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-golos font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ background: "rgba(255,255,255,0.06)", color: "#ffffff80" }}
        >
          <Icon name="ChevronLeft" size={16} />
          Назад
        </button>

        <div className="flex items-center gap-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="flex items-center gap-2 group"
            >
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 32 : 8,
                  background: i === current
                    ? "linear-gradient(135deg, #FFB800, #FF6B35)"
                    : "rgba(255,255,255,0.2)",
                }}
              />
              {i === current && (
                <span className="text-xs font-golos text-summer-sun">{SLIDE_LABELS[i]}</span>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={current === SLIDES.length - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-golos font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ background: "rgba(255,184,0,0.12)", color: "#FFB800" }}
        >
          Далее
          <Icon name="ChevronRight" size={16} />
        </button>
      </div>

      <p className="mt-4 text-gray-600 text-xs text-center">
        4 слайда · Переключайте стрелками на клавиатуре или кнопками
      </p>
    </div>
  );
}
