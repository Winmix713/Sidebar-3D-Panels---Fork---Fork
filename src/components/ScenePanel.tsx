import React from 'react';
import {
  Search,
  Plus,
  Clock,
  ChevronDown,
  Eye,
  EyeOff,
  Unlock,
  MoreVertical } from
'lucide-react';
export function ScenePanel() {
  return (
    <div className="relative mx-auto flex w-[280px] h-[520px] flex-col rounded-2xl border border-border bg-card/70 shadow-glass-lg backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-10 rounded-b-full bg-gradient-to-b from-white/5 via-white/0 to-transparent"></div>

      <header className="relative z-10 flex border-b border-border bg-background/20 rounded-t-2xl overflow-hidden">
        <button className="flex-1 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all relative text-foreground">
          Scene
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-sky-500 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
        </button>
        <button className="flex-1 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all relative text-muted-foreground hover:text-card-foreground">
          Assets
        </button>
      </header>

      <div className="relative z-10 p-3 bg-background/10 border-b border-border/50">
        <div className="relative group">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3 stroke-[1.5] text-muted-foreground group-focus-within:text-sky-400 transition-colors" />
          <input
            type="text"
            placeholder="Search hierarchy..."
            className="w-full bg-secondary/50 border border-border/50 rounded-lg pl-8 pr-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-sky-500/30 focus:bg-secondary transition-all placeholder:text-muted-foreground shadow-inner-lg"
            aria-label="Search scene hierarchy" />

        </div>
      </div>

      <main className="relative z-10 flex-1 overflow-y-auto no-scrollbar p-2 space-y-0.5">
        {/* Main Scene */}
        <div className="group/item">
          <div className="flex items-center gap-2 py-1.5 px-2 rounded-lg transition-all relative hover:bg-accent/5 cursor-pointer">
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              <button
                className="w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Expand Main Scene">

                <ChevronDown className="size-2.5 stroke-[1.5]" />
              </button>
              <span className="transition-colors text-sky-400">
                <svg
                  className="size-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">

                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </span>
              <span className="text-xs font-medium truncate tracking-tight transition-colors text-card-foreground">
                Main Scene
              </span>
            </div>
            <div className="flex items-center gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
              <button
                className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                aria-label="Toggle visibility">

                <Eye className="size-3.5 stroke-[1.5]" />
              </button>
              <button
                className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                aria-label="Toggle lock">

                <Unlock className="size-3.5 stroke-[1.5]" />
              </button>
              <button
                className="p-1 hover:text-foreground text-muted-foreground transition-colors active:scale-90"
                aria-label="More options">

                <MoreVertical className="size-3.5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          {/* Hero Environment */}
          <div className="space-y-0.5 mt-0.5 border-l border-border/50 ml-5">
            <div className="group/item">
              <div className="flex items-center gap-2 py-1.5 px-2 rounded-lg transition-all relative hover:bg-accent/5 cursor-pointer ml-3">
                <div className="flex items-center gap-1.5 flex-1 min-w-0">
                  <button
                    className="w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Expand Hero Environment">

                    <ChevronDown className="size-2.5 stroke-[1.5]" />
                  </button>
                  <span className="transition-colors text-sky-400">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round">

                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                  </span>
                  <span className="text-xs font-medium truncate tracking-tight transition-colors text-card-foreground">
                    Hero Environment
                  </span>
                </div>
                <div className="flex items-center gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
                  <button
                    className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                    aria-label="Toggle visibility">

                    <Eye className="size-3.5 stroke-[1.5]" />
                  </button>
                  <button
                    className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                    aria-label="Toggle lock">

                    <Unlock className="size-3.5 stroke-[1.5]" />
                  </button>
                  <button
                    className="p-1 hover:text-foreground text-muted-foreground transition-colors active:scale-90"
                    aria-label="More options">

                    <MoreVertical className="size-3.5 stroke-[1.5]" />
                  </button>
                </div>
              </div>

              {/* Nested objects inside Hero Environment */}
              <div className="space-y-0.5 mt-0.5 border-l border-border/50 ml-5">
                {/* Standard Cube */}
                <div className="group/item">
                  <div className="flex items-center gap-2 py-1.5 px-2 rounded-lg transition-all relative hover:bg-accent/5 cursor-pointer ml-3">
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <button
                        className="w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors opacity-0 pointer-events-none"
                        aria-label="Expand">

                        <ChevronDown className="size-2.5 stroke-[1.5]" />
                      </button>
                      <span className="transition-colors text-sky-400">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round">

                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        </svg>
                      </span>
                      <span className="text-xs font-medium truncate tracking-tight transition-colors text-card-foreground">
                        Standard Cube
                      </span>
                    </div>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <button
                        className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                        aria-label="Toggle visibility">

                        <Eye className="size-3.5 stroke-[1.5]" />
                      </button>
                      <button
                        className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                        aria-label="Toggle lock">

                        <Unlock className="size-3.5 stroke-[1.5]" />
                      </button>
                      <button
                        className="p-1 hover:text-foreground text-muted-foreground transition-colors active:scale-90"
                        aria-label="More options">

                        <MoreVertical className="size-3.5 stroke-[1.5]" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sphere Mesh (hidden) */}
                <div className="group/item">
                  <div className="flex items-center gap-2 py-1.5 px-2 rounded-lg transition-all relative hover:bg-accent/5 cursor-pointer ml-3">
                    <div className="flex items-center gap-1.5 flex-1 min-w-0">
                      <button
                        className="w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors opacity-0 pointer-events-none"
                        aria-label="Expand">

                        <ChevronDown className="size-2.5 stroke-[1.5]" />
                      </button>
                      <span className="transition-colors text-muted-foreground">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round">

                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </span>
                      <span className="text-xs font-medium truncate tracking-tight transition-colors text-muted-foreground">
                        Sphere Mesh
                      </span>
                    </div>
                    <div className="flex items-center gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <button
                        className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                        aria-label="Toggle visibility">

                        <EyeOff className="size-3.5 stroke-[1.5]" />
                      </button>
                      <button
                        className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                        aria-label="Toggle lock">

                        <Unlock className="size-3.5 stroke-[1.5]" />
                      </button>
                      <button
                        className="p-1 hover:text-foreground text-muted-foreground transition-colors active:scale-90"
                        aria-label="More options">

                        <MoreVertical className="size-3.5 stroke-[1.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Light */}
              <div className="group/item">
                <div className="flex items-center gap-2 py-1.5 px-2 rounded-lg transition-all relative hover:bg-accent/5 cursor-pointer ml-3">
                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    <button
                      className="w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors opacity-0 pointer-events-none"
                      aria-label="Expand">

                      <ChevronDown className="size-2.5 stroke-[1.5]" />
                    </button>
                    <span className="transition-colors text-sky-400">
                      <svg
                        className="size-3.5"
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
                    </span>
                    <span className="text-xs font-medium truncate tracking-tight transition-colors text-card-foreground">
                      Primary Light
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <button
                      className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                      aria-label="Toggle visibility">

                      <Eye className="size-3.5 stroke-[1.5]" />
                    </button>
                    <button
                      className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                      aria-label="Toggle lock">

                      <Unlock className="size-3.5 stroke-[1.5]" />
                    </button>
                    <button
                      className="p-1 hover:text-foreground text-muted-foreground transition-colors active:scale-90"
                      aria-label="More options">

                      <MoreVertical className="size-3.5 stroke-[1.5]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Camera Rig */}
        <div className="group/item">
          <div className="flex items-center gap-2 py-1.5 px-2 rounded-lg transition-all relative hover:bg-accent/5 cursor-pointer">
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              <button
                className="w-4 h-4 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors opacity-0 pointer-events-none"
                aria-label="Expand">

                <ChevronDown className="size-2.5 stroke-[1.5]" />
              </button>
              <span className="transition-colors text-sky-400">
                <svg
                  className="size-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">

                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
              </span>
              <span className="text-xs font-medium truncate tracking-tight transition-colors text-card-foreground">
                Camera Rig
              </span>
            </div>
            <div className="flex items-center gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
              <button
                className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                aria-label="Toggle visibility">

                <Eye className="size-3.5 stroke-[1.5]" />
              </button>
              <button
                className="p-1 hover:text-sky-400 text-muted-foreground transition-colors active:scale-90"
                aria-label="Toggle lock">

                <Unlock className="size-3.5 stroke-[1.5]" />
              </button>
              <button
                className="p-1 hover:text-foreground text-muted-foreground transition-colors active:scale-90"
                aria-label="More options">

                <MoreVertical className="size-3.5 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 p-3 border-t border-border bg-background/40 flex items-center justify-between rounded-b-2xl">
        <button className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-all active:scale-95 font-bold text-xs uppercase tracking-widest">
          <Plus className="size-3.5 stroke-[1.5]" />
          <span>New Layer</span>
        </button>
        <div className="flex items-center gap-3">
          <button
            className="text-muted-foreground hover:text-card-foreground transition-colors"
            aria-label="Sort">

            <Clock className="size-3.5 stroke-[1.5]" />
          </button>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-tighter">
            7 Objects
          </span>
        </div>
      </footer>

      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-10 rounded-t-full bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-inner-lg z-[3]"></div>
    </div>);

}