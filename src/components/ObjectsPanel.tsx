import React from 'react';
import { Search, Plus, Clock } from 'lucide-react';
export function ObjectsPanel() {
  return (
    <div className="relative mx-auto flex w-[280px] h-[500px] flex-col rounded-2xl border border-border bg-card/70 shadow-glass-lg backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-10 rounded-b-full bg-gradient-to-b from-white/5 via-white/0 to-transparent"></div>

      <header className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-border bg-background/20 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="relative flex h-4 w-4 items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-500 blur-[2px] opacity-70"></div>
            <div className="absolute inset-[3px] w-1.5 h-1.5 rounded-full bg-white opacity-80"></div>
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            3D Objects
          </span>
        </div>
      </header>

      <div className="relative z-10 p-4 space-y-3 bg-background/10 border-b border-border/50">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 stroke-[1.5] text-muted-foreground group-hover:text-sky-400 transition-colors" />
          <input
            type="text"
            placeholder="Search assets..."
            className="w-full bg-secondary/90 border border-border/50 rounded-xl pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-all placeholder:text-muted-foreground"
            aria-label="Search 3D assets" />

        </div>

        <div className="flex gap-1 overflow-x-auto no-scrollbar pb-1">
          <button className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all bg-sky-500/20 text-sky-400 border border-sky-500/30">
            All
          </button>
          <button className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all text-muted-foreground hover:text-card-foreground">
            Basic
          </button>
          <button className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all text-muted-foreground hover:text-card-foreground">
            Recent
          </button>
          <button className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all text-muted-foreground hover:text-card-foreground">
            Complex
          </button>
        </div>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar px-4 pb-4 pt-3">
        <div className="grid grid-cols-2 gap-3">
          <button className="aspect-square flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-secondary/40 border border-border/50 shadow-inner-lg hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group active:scale-95">
            <div className="relative w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center text-muted-foreground group-hover:text-sky-400 shadow-glass transition-colors overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">

                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <span className="text-xs font-bold text-muted-foreground text-center leading-tight group-hover:text-foreground uppercase tracking-tighter">
              Standard Cube
            </span>
          </button>

          <button className="aspect-square flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-secondary/40 border border-border/50 shadow-inner-lg hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group active:scale-95">
            <div className="relative w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center text-muted-foreground group-hover:text-sky-400 shadow-glass transition-colors overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">

                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <span className="text-xs font-bold text-muted-foreground text-center leading-tight group-hover:text-foreground uppercase tracking-tighter">
              Sphere Mesh
            </span>
          </button>

          <button className="aspect-square flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-secondary/40 border border-border/50 shadow-inner-lg hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group active:scale-95">
            <div className="relative w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center text-muted-foreground group-hover:text-sky-400 shadow-glass transition-colors overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">

                <path d="M12 2 2 19h20L12 2z"></path>
              </svg>
            </div>
            <span className="text-xs font-bold text-muted-foreground text-center leading-tight group-hover:text-foreground uppercase tracking-tighter">
              Pyramid
            </span>
          </button>

          <button className="aspect-square flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-secondary/40 border border-border/50 shadow-inner-lg hover:border-sky-500/50 hover:bg-sky-500/5 transition-all group active:scale-95">
            <div className="relative w-12 h-12 rounded-xl bg-secondary border border-border/50 flex items-center justify-center text-muted-foreground group-hover:text-sky-400 shadow-glass transition-colors overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">

                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <path d="M7.5 4.21l4.5 2.6 4.5-2.6"></path>
                <path d="M7.5 19.79V14.6L3 12"></path>
                <path d="M21 12l-4.5 2.6v5.19"></path>
                <path d="M3.27 6.96L12 12.01l8.73-5.05"></path>
                <path d="M12 22.08V12"></path>
              </svg>
            </div>
            <span className="text-xs font-bold text-muted-foreground text-center leading-tight group-hover:text-foreground uppercase tracking-tighter">
              Hexagon Prism
            </span>
          </button>
        </div>
      </div>

      <footer className="relative z-10 p-3 border-t border-border bg-background/40 flex items-center justify-between rounded-b-2xl">
        <button className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-all active:scale-95 font-bold text-xs uppercase tracking-widest">
          <Plus className="size-3.5 stroke-[1.5]" />
          <span>New Asset</span>
        </button>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock className="size-3 stroke-[1.5]" />
          <span className="text-xs font-bold">48 Total</span>
        </div>
      </footer>

      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-10 rounded-t-full bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-inner-lg z-[3]"></div>
    </div>);

}