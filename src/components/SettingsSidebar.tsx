import React from 'react';
import { Share2, Wind, ChevronDown, Plus, Camera } from 'lucide-react';
export function SettingsSidebar() {
  return (
    <div className="relative flex w-full max-w-xs sm:max-w-sm flex-col rounded-2xl border border-border bg-card/70 shadow-glass-lg backdrop-blur-2xl h-full max-h-[90vh]">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-10 rounded-b-full bg-gradient-to-b from-white/5 via-white/0 to-transparent"></div>

      {/* Side rail */}
      <div className="absolute flex items-center gap-3 bg-card/80 border border-border rounded-full shadow-glass top-1/2 right-full flex-col-reverse w-11 mr-3 py-5 -translate-y-1/2 backdrop-blur-md">
        <button
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Navigate down">

          <svg
            className="inline-flex size-4 fill-current rotate-90"
            viewBox="0 0 20 20">

            <path d="M12.183 4.3a.75.75 0 0 1 1.061 0l3.44 3.441a3.25 3.25 0 0 1 0 4.596l-3.44 3.441a.75.75 0 0 1-1.061-1.061l3.441-3.441a1.75 1.75 0 0 0 .298-.397l.043-.091H3.13a.75.75 0 0 1-.743-.648l-.007-.102a.75.75 0 0 1 .75-.75h12.836l-.044-.09c-.052-.095-.114-.186-.184-.272l-.114-.125-3.44-3.441a.75.75 0 0 1 0-1.061z"></path>
          </svg>
        </button>

        <div className="flex items-center gap-2 flex-col">
          <span className="bg-white/10 rounded-full w-2 h-[1.5px]"></span>
          <span className="bg-white/40 rounded-full w-3.5 h-[1.5px]"></span>
          <span className="bg-white/10 rounded-full w-2 h-[1.5px]"></span>
          <span className="bg-white/10 rounded-full w-2 h-[1.5px]"></span>
          <span className="bg-white/10 rounded-full w-2 h-[1.5px]"></span>
          <span className="bg-white/40 rounded-full w-3.5 h-[1.5px]"></span>
          <span className="bg-white/10 rounded-full w-2 h-[1.5px]"></span>
        </div>

        <button
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Navigate up">

          <svg
            className="inline-flex size-4 fill-current -rotate-90"
            viewBox="0 0 20 20">

            <path d="M12.183 4.3a.75.75 0 0 1 1.061 0l3.44 3.441a3.25 3.25 0 0 1 0 4.596l-3.44 3.441a.75.75 0 0 1-1.061-1.061l3.441-3.441a1.75 1.75 0 0 0 .298-.397l.043-.091H3.13a.75.75 0 0 1-.743-.648l-.007-.102a.75.75 0 0 1 .75-.75h12.836l-.044-.09c-.052-.095-.114-.186-.184-.272l-.114-.125-3.44-3.441a.75.75 0 0 1 0-1.061z"></path>
          </svg>
        </button>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center p-3 pl-4 border-b border-border bg-background/20">
        <div className="flex -space-x-2">
          <div
            className="size-8 border-2 border-card rounded-full overflow-hidden bg-secondary shadow-glass relative"
            style={{
              zIndex: 2
            }}>

            <img
              src="https://i.pravatar.cc/100?u=21"
              alt="User avatar"
              className="size-full object-cover" />

          </div>
          <div
            className="size-8 border-2 border-card rounded-full overflow-hidden bg-secondary shadow-glass relative"
            style={{
              zIndex: 1
            }}>

            <img
              src="https://i.pravatar.cc/100?u=22"
              alt="User avatar"
              className="size-full object-cover" />

          </div>
        </div>

        <button className="group relative inline-flex justify-center items-center h-10 px-6 rounded-xl text-xs md:text-sm font-semibold bg-foreground text-background hover:bg-muted active:scale-95 transition-all overflow-hidden shadow-glass">
          <div className="relative z-10 flex items-center gap-2">
            <Share2 className="size-4 stroke-[1.5]" />
            <span>Share</span>
          </div>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>

      {/* Tabs */}
      <div className="px-4 py-3 border-b border-border bg-background/20">
        <div className="p-1 border border-border/50 bg-background/40 rounded-xl shadow-inner-lg relative">
          <div className="relative flex">
            <div className="absolute top-0 bottom-0 rounded-lg bg-secondary shadow-xs transition-transform w-1/2 translate-x-full"></div>
            <button className="relative z-[1] flex-1 h-8 text-xs md:text-sm font-semibold transition-colors text-muted-foreground hover:text-foreground">
              Design
            </button>
            <button className="relative z-[1] flex-1 h-8 text-xs md:text-sm font-semibold transition-colors text-foreground">
              Animation
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="grow overflow-y-auto rounded-b-[1.25rem] bg-transparent">
        {/* Show Frame */}
        <div className="border-t border-border">
          <div className="flex justify-between items-center min-h-12 px-4 py-3 text-xs md:text-sm font-medium text-card-foreground">
            <span>Show Frame</span>
            <button
              className="group inline-flex w-10 h-5.5 p-0.5 rounded-full transition-colors relative items-center bg-sky-500 shadow-inner-lg"
              aria-label="Toggle show frame">

              <span className="size-4.5 rounded-full bg-white shadow-glass transition-transform translate-x-[18px]"></span>
            </button>
          </div>
        </div>

        {/* Artboard */}
        <div className="border-t border-border">
          <div className="flex justify-between items-center min-h-12 px-4 py-3 text-xs md:text-sm font-medium text-card-foreground">
            <span>Artboard</span>
            <button
              className="p-1 hover:bg-accent/5 rounded-lg transition-colors text-muted-foreground"
              aria-label="Add artboard">

              <Plus className="size-4" />
            </button>
          </div>

          <div className="p-4 pt-0 space-y-2">
            <div className="flex items-center gap-2">
              <button className="grow flex items-center h-9 px-3 border border-border/50 rounded-lg bg-background/20 text-foreground hover:border-border transition-all group">
                <Wind className="size-4 mr-1.5 text-muted-foreground group-hover:text-card-foreground" />
                <span className="shrink-0 pr-2 text-xs md:text-sm font-semibold">
                  X Post
                </span>
                <span className="pr-2 text-xs text-muted-foreground">
                  800x600
                </span>
                <ChevronDown className="size-4 ml-auto text-muted-foreground" />
              </button>

              <button
                className="p-1.5 hover:bg-accent/5 rounded-lg text-muted-foreground"
                aria-label="3D view">

                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">

                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                  <path d="m3.3 7 8.7 5 8.7-5"></path>
                  <path d="M12 22V12"></path>
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex flex-1 gap-1.5">
                <div className="relative flex-1">
                  <div className="absolute top-1/2 left-2.5 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
                    W
                  </div>
                  <input
                    className="w-full h-9 pl-7 pr-2 border border-border/50 bg-background/40 rounded-lg text-xs md:text-sm text-foreground focus:border-border outline-none transition-all tabular-nums"
                    type="text"
                    readOnly
                    value="800"
                    aria-label="Width" />

                </div>
                <div className="relative flex-1">
                  <div className="absolute top-1/2 left-2.5 -translate-y-1/2 text-xs font-semibold text-muted-foreground">
                    H
                  </div>
                  <input
                    className="w-full h-9 pl-7 pr-2 border border-border/50 bg-background/40 rounded-lg text-xs md:text-sm text-foreground focus:border-border outline-none transition-all tabular-nums"
                    type="text"
                    readOnly
                    value="600"
                    aria-label="Height" />

                </div>
              </div>
              <div className="shrink-0 w-6 text-center text-xs font-semibold text-muted-foreground">
                px
              </div>
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="border-t border-border">
          <div className="flex justify-between items-center min-h-12 px-4 py-3 text-xs md:text-sm font-medium text-card-foreground">
            <span>Materials</span>
            <button
              className="p-1 hover:bg-accent/5 rounded-lg text-muted-foreground"
              aria-label="Add material">

              <Plus className="size-4" />
            </button>
          </div>

          <div className="p-4 pt-0">
            <div className="flex flex-wrap gap-2">
              <div className="flex justify-center items-center aspect-square w-[calc(50%-0.25rem)] bg-background/40 border border-border/50 rounded-2xl cursor-pointer hover:border-sky-500/50 transition-all p-1.5 shadow-glass group">
                <img
                  src="https://picsum.photos/seed/17/100"
                  alt="Material texture"
                  className="rounded-lg w-full h-full object-cover group-hover:scale-105 transition-transform" />

              </div>
              <div className="flex justify-center items-center aspect-square w-[calc(50%-0.25rem)] bg-background/40 border border-border/50 rounded-2xl cursor-pointer hover:border-sky-500/50 transition-all p-1.5 shadow-glass group">
                <img
                  src="https://picsum.photos/seed/18/100"
                  alt="Material texture"
                  className="rounded-lg w-full h-full object-cover group-hover:scale-105 transition-transform" />

              </div>
              <div className="flex justify-center items-center aspect-square w-[calc(50%-0.25rem)] bg-background/40 border border-border/50 rounded-2xl cursor-pointer hover:border-sky-500/50 transition-all p-1.5 shadow-glass group">
                <img
                  src="https://picsum.photos/seed/19/100"
                  alt="Material texture"
                  className="rounded-lg w-full h-full object-cover group-hover:scale-105 transition-transform" />

              </div>
              <div className="flex justify-center items-center aspect-square w-[calc(50%-0.25rem)] bg-background/40 border border-border/50 rounded-2xl cursor-pointer hover:border-sky-500/50 transition-all p-1.5 shadow-glass group">
                <img
                  src="https://picsum.photos/seed/20/100"
                  alt="Material texture"
                  className="rounded-lg w-full h-full object-cover group-hover:scale-105 transition-transform" />

              </div>
            </div>
          </div>
        </div>

        {/* Background */}
        <div className="border-t border-border">
          <div className="flex justify-between items-center min-h-12 px-4 py-3 text-xs md:text-sm font-medium text-card-foreground">
            <span>Background</span>
            <button
              className="p-1 hover:bg-accent/5 rounded-lg text-muted-foreground"
              aria-label="Add background">

              <Plus className="size-4" />
            </button>
          </div>

          <div className="p-4 pt-0">
            <div className="flex items-center p-1 bg-background/40 border border-border/50 rounded-lg">
              <div className="size-7 mr-3 bg-white rounded-md border border-border/50 shadow-xs"></div>
              <span className="text-xs font-semibold text-foreground tracking-widest">
                F4F4F4
              </span>
              <div className="flex justify-center items-center gap-1 w-16 ml-auto border-l border-border/50 text-xs font-semibold text-muted-foreground">
                <span>100</span>
                <span>%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Camera */}
        <div className="border-t border-border rounded-b-[1.25rem]">
          <div className="flex justify-between items-center min-h-12 px-4 py-3 text-xs md:text-sm font-medium text-card-foreground">
            <span>Camera</span>
            <button
              className="p-1 hover:bg-accent/5 rounded-lg text-muted-foreground"
              aria-label="Add camera">

              <Plus className="size-4" />
            </button>
          </div>

          <div className="p-4 pt-0 space-y-4">
            {/* Camera mode tabs */}
            <div className="p-1 border border-border/50 bg-background/40 rounded-xl shadow-inner-lg relative">
              <div className="relative flex">
                <div className="absolute top-0 bottom-0 rounded-lg bg-secondary shadow-xs transition-transform w-1/2 translate-x-full"></div>
                <button className="relative z-[1] flex-1 h-8 text-xs font-semibold transition-colors text-muted-foreground hover:text-foreground">
                  Isometric
                </button>
                <button className="relative z-[1] flex-1 h-8 text-xs font-semibold transition-colors text-foreground">
                  Perspective
                </button>
              </div>
            </div>

            {/* Distortion */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] px-1">
                Distortion
              </div>
              <div className="flex gap-2 items-center">
                <div className="grow relative h-9 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.001"
                    defaultValue="0.283"
                    className="w-full h-1.5 appearance-none rounded-full cursor-pointer"
                    style={{
                      background:
                      'linear-gradient(to right, rgb(14, 165, 233) 0%, rgb(14, 165, 233) 28.3%, rgb(38, 38, 38) 28.3%, rgb(38, 38, 38) 100%)',
                      accentColor: 'rgb(14,165,233)'
                    }}
                    aria-label="Camera distortion" />

                </div>
                <div className="flex justify-center items-center gap-1.5 shrink-0 w-20 h-9 bg-background/40 border border-border/50 rounded-lg text-xs font-semibold text-foreground shadow-inner-lg">
                  <Camera className="size-3.5 stroke-[1.5] text-muted-foreground" />
                  <span>0.283</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}