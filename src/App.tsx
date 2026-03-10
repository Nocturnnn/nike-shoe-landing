import { useEffect, useState } from "react";
import ShoeScene from "./components/ShoeScene";
import OverlayUI from "./components/OverlayUI";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = window.innerHeight * 1.5;
      const progress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="relative min-h-[220vh] bg-[#050505] text-white">
      <section className="sticky top-0 h-screen overflow-hidden">
        <div className="grid-overlay absolute inset-0 opacity-20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_52%,rgba(72,140,255,0.22),transparent_20%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_53%,rgba(72,140,255,0.15),transparent_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_52%,rgba(72,140,255,0.08),transparent_48%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.42),transparent_28%,transparent_72%,rgba(0,0,0,0.26))]" />

        <ShoeScene scrollProgress={scrollProgress} />
        <OverlayUI />
      </section>
    </main>
  );
}