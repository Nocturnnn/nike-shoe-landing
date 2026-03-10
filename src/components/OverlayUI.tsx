import { motion } from "framer-motion";
import NikeMark from "./NikeMark";

export default function OverlayUI() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none">
        <div className="nike-bg-word text-[9rem] leading-none md:text-[16rem] xl:text-[30rem]">
          NIKE
        </div>
      </div>

      <div className="absolute left-[6%] top-[17%] hidden h-px w-24 ui-line md:block" />
      <div className="absolute left-[6%] top-[17%] hidden text-[10px] uppercase tracking-[0.38em] text-white/30 md:block">
        01
      </div>

      <div className="absolute right-[7%] top-[22%] hidden h-20 w-20 rounded-full border border-white/8 md:block" />
      <div className="absolute right-[7.7%] top-[24%] hidden h-8 w-8 rounded-full border border-blue-400/20 md:block" />

      <div className="absolute bottom-[12%] left-[7%] hidden w-28 md:block">
        <div className="mb-2 h-px w-full ui-line" />
        <p className="tech-font text-[10px] uppercase tracking-[0.35em] text-white/30">
          Motion
        </p>
      </div>

      <div className="absolute right-[6%] top-1/2 hidden -translate-y-1/2 md:flex flex-col items-center gap-3">
        <span className="h-8 w-px bg-white/15" />
        <span className="tech-font text-[10px] tracking-[0.4em] text-white/35 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-8 w-px bg-white/15" />
      </div>

      <div className="absolute left-[52%] top-[74%] hidden h-10 w-10 -translate-x-1/2 rounded-full border border-white/10 bg-white/4 panel-blur md:grid place-items-center">
        <div className="h-1.5 w-1.5 rounded-full bg-blue-400/90" />
      </div>

      <div className="flex h-full flex-col justify-between p-5 md:p-8">
        <div className="flex items-start justify-between">
          <NikeMark className="w-10 text-white md:w-12" />

          <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 panel-blur">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="tech-font text-xs text-white/70">Menu</span>
          </div>
        </div>

        <div className="grid items-end md:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-sm"
          >
            <p className="tech-font mb-3 text-[11px] uppercase tracking-[0.35em] text-blue-400/80">
              New Model
            </p>

            <h1 className="display-font text-glow text-5xl uppercase leading-[0.86] md:text-8xl">
              Speed.
              <br />
              Control.
              <br />
              Presence.
            </h1>

            <p className="tech-font mt-4 max-w-[22rem] text-xs leading-6 text-white/55 md:text-sm">
              Modelo 3D com rotação suave, presença premium e transição visual
              guiada pelo scroll.
            </p>
          </motion.div>

          <div className="mt-8 flex items-end justify-between gap-6 md:mt-0">
            <div className="hidden items-center gap-2 md:flex">
              <button className="pointer-events-auto grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/5 text-white/60">
                ‹
              </button>
              <button className="pointer-events-auto grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/5 text-white/60">
                ›
              </button>
            </div>

            <button className="pointer-events-auto tech-font rounded-sm bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-[1.03]">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
