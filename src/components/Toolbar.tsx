import React from 'react';
import {
  MousePointer2,
  Hand,
  MessageSquare,
  Square,
  Play,
  ChevronDown,
  Undo2,
  Redo2 } from
'lucide-react';
export function Toolbar() {
  return (
    <div className="fixed top-3 left-1/2 z-20 -translate-x-1/2">
      <div className="relative flex rounded-2xl border border-border bg-card/70 shadow-glass-lg backdrop-blur-2xl">
        {/* Top glow */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-10 rounded-b-full bg-gradient-to-b from-white/5 via-white/0 to-transparent"></div>

        {/* Tools section */}
        <div className="relative z-10 flex gap-2 p-2 border-r border-border bg-background/20">
          {/* Selection Tool - Active */}
          <button
            className="size-10 border rounded-xl transition-all hover:bg-accent/60 bg-accent/40 border-border/20 shadow-inner-lg"
            aria-label="Selection tool">

            <MousePointer2
              className="inline-flex size-5 stroke-foreground mx-auto"
              strokeWidth={1.5} />

          </button>

          {/* Hand Tool */}
          <button
            className="size-10 border rounded-xl transition-all hover:bg-accent/60 border-transparent"
            aria-label="Hand tool">

            <Hand
              className="inline-flex size-5 stroke-foreground mx-auto"
              strokeWidth={1.5} />

          </button>

          {/* Comment Tool */}
          <button
            className="size-10 border rounded-xl transition-all hover:bg-accent/60 border-transparent"
            aria-label="Comment tool">

            <MessageSquare
              className="inline-flex size-5 stroke-foreground mx-auto"
              strokeWidth={1.5} />

          </button>

          {/* Frame Tool */}
          <button
            className="size-10 border rounded-xl transition-all hover:bg-accent/60 border-transparent"
            aria-label="Frame tool">

            <Square
              className="inline-flex size-5 stroke-foreground mx-auto"
              strokeWidth={1.5} />

          </button>

          {/* Play Tool */}
          <button
            className="size-10 border rounded-xl transition-all hover:bg-accent/60 border-transparent"
            aria-label="Play">

            <Play
              className="inline-flex size-5 stroke-foreground mx-auto"
              strokeWidth={1.5} />

          </button>
        </div>

        {/* Zoom and history section */}
        <div className="relative z-10 flex gap-2 p-2 bg-background/10">
          {/* Zoom Dropdown */}
          <div className="relative group">
            <button
              className="flex justify-between items-center gap-2 min-w-[5.5rem] h-10 px-3 rounded-xl border border-border bg-background/40 text-foreground outline-0 transition hover:border-border/50"
              type="button"
              aria-label="Zoom level">

              <span className="text-sm font-medium">100%</span>
              <ChevronDown
                className="size-4 stroke-muted-foreground transition-transform group-hover:rotate-180"
                strokeWidth={2} />

            </button>
          </div>

          {/* Undo - Disabled */}
          <button
            className="size-10 border rounded-xl transition-all opacity-40 border-transparent"
            aria-label="Undo"
            disabled>

            <Undo2
              className="inline-flex size-5 stroke-foreground mx-auto rotate-180"
              strokeWidth={1.5} />

          </button>

          {/* Redo */}
          <button
            className="size-10 border rounded-xl transition-all hover:bg-accent/60 border-transparent"
            aria-label="Redo">

            <Redo2
              className="inline-flex size-5 stroke-foreground mx-auto"
              strokeWidth={1.5} />

          </button>
        </div>

        {/* Export button section */}
        <div className="relative z-10 p-2 bg-background/20">
          <button
            className="relative inline-flex justify-center items-center h-10 px-6 rounded-xl text-xs md:text-sm font-semibold bg-foreground text-background hover:bg-muted active:scale-95 transition-all overflow-hidden shadow-glass"
            aria-label="Export">

            <div className="relative z-10 flex items-center gap-2">Export</div>
            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Bottom glow */}
        <div className="pointer-events-none absolute inset-x-8 bottom-0 h-10 rounded-t-full bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        {/* Inset shadow overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-inner-lg z-[3]"></div>
      </div>
    </div>);

}