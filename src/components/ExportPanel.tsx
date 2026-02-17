import React, { lazy } from 'react';
import {
  Image,
  Video,
  ChevronRight,
  Plus,
  Minus,
  Maximize2,
  ChevronDown } from
'lucide-react';
export function ExportPanel() {
  return (
    <div className="relative flex w-full max-w-[34.375rem] min-h-[31.875rem] flex-col rounded-2xl border border-border bg-card/70 shadow-glass-lg backdrop-blur-2xl">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-10 rounded-b-full bg-gradient-to-b from-white/5 via-white/0 to-transparent"></div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-border bg-background/20 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="relative flex h-4 w-4 items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-500 blur-[2px] opacity-70"></div>
            <div className="absolute inset-[3px] w-1.5 h-1.5 rounded-full bg-white opacity-80"></div>
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Export Settings
          </span>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex flex-1">
        {/* Left Sidebar */}
        <div className="flex flex-col shrink-0 w-38 p-2 border-r border-border bg-background/10">
          <div className="flex flex-col gap-1 mb-auto">
            {/* Images - Active */}
            <button className="group flex items-center p-1 pr-2 w-full border rounded-xl transition hover:bg-accent/60 bg-accent/40 border-border/20">
              <div className="flex justify-center items-center size-8 mr-3 rounded-lg text-sm transition group-hover:bg-secondary bg-secondary shadow-xs">
                <Image className="size-4 stroke-foreground" strokeWidth={1.5} />
              </div>
              <div className="text-sm text-foreground">Images</div>
              <ChevronRight
                className="size-4 ml-auto stroke-muted-foreground transition-opacity opacity-100"
                strokeWidth={2} />

            </button>

            {/* Video */}
            <button className="group flex items-center p-1 pr-2 w-full border rounded-xl transition hover:bg-accent/60 border-transparent">
              <div className="flex justify-center items-center size-8 mr-3 rounded-lg text-sm transition group-hover:bg-secondary bg-accent/40">
                <Video
                  className="size-4 stroke-muted-foreground group-hover:stroke-foreground transition-colors"
                  strokeWidth={1.5} />

              </div>
              <div className="text-sm text-foreground">Video</div>
              <ChevronRight
                className="size-4 ml-auto stroke-muted-foreground transition-opacity opacity-0"
                strokeWidth={2} />

            </button>

            {/* 3D Object */}
            <button className="group flex items-center p-1 pr-2 w-full border rounded-xl transition hover:bg-accent/60 border-transparent">
              <div className="flex justify-center items-center size-8 mr-3 rounded-lg text-sm transition group-hover:bg-secondary bg-accent/40">
                <div
                  className="size-4 stroke-muted-foreground group-hover:stroke-foreground transition-colors"
                  strokeWidth={1.5} />

              </div>
              <div className="text-sm text-foreground">3D Object</div>
              <ChevronRight
                className="size-4 ml-auto stroke-muted-foreground transition-opacity opacity-0"
                strokeWidth={2} />

            </button>
          </div>

          {/* Preview Image */}
          <div className="relative mt-6 border border-border/50 rounded-xl bg-background/40 overflow-hidden shadow-glass">
            <button className="group absolute top-1.5 right-1.5 z-[1] size-6 bg-secondary rounded-md shadow-inner-lg hover:bg-accent transition-colors">
              <Maximize2
                className="size-4 stroke-muted-foreground group-hover:stroke-foreground transition-colors mx-auto"
                strokeWidth={1.5} />

            </button>
            <img
              alt="Preview"
              loading="lazy"
              width="136"
              height="96"
              className="w-full opacity-80"
              src="https://picsum.photos/seed/preview/272/192" />

          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col flex-1">
          {/* Export formats section */}
          <div className="p-4 border-b border-border bg-background/10">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-semibold text-foreground">
                Export images
              </div>
              <button
                className="p-1 hover:bg-accent/5 rounded-lg transition-colors text-muted-foreground"
                aria-label="Add export format">

                <Plus className="size-4" />
              </button>
            </div>

            {/* Export Rows */}
            <div className="flex flex-col gap-1.5">
              {/* Row 1 */}
              <div className="flex items-center gap-1.5">
                {/* Scale Dropdown */}
                <div className="w-20">
                  <button className="group flex items-center w-full px-2 border border-border/50 rounded-lg text-foreground transition-all hover:border-border/20 outline-0 h-9 text-sm bg-background/40">
                    <svg
                      className="size-4 mr-1.5 stroke-muted-foreground group-hover:stroke-card-foreground"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5">

                      <path d="M2.96 12.453a.96.96 0 0 1 .96.96v1.92c0 .412.334.747.747.747h1.92a.96.96 0 1 1 0 1.92h-1.92C3.194 18 2 16.806 2 15.333v-1.92a.96.96 0 0 1 .96-.96zm14.08 0a.96.96 0 0 1 .96.96v1.92C18 16.806 16.806 18 15.333 18h-1.92a.96.96 0 1 1 0-1.92h1.92c.412 0 .747-.334.747-.747v-1.92a.96.96 0 0 1 .96-.96z"></path>
                    </svg>
                    <div className="pr-2 truncate text-xs font-semibold">
                      1x
                    </div>
                    <ChevronDown
                      className="size-4 ml-auto stroke-muted-foreground"
                      strokeWidth={2} />

                  </button>
                </div>

                {/* Color Space Dropdown */}
                <div className="w-33">
                  <button className="group flex items-center w-full px-2 border border-border/20 rounded-lg text-foreground transition-all hover:border-border/20 outline-0 h-9 text-sm bg-transparent">
                    <svg
                      className="size-4 mr-1.5 stroke-muted-foreground group-hover:stroke-card-foreground"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5">

                      <path d="M2.96 12.453a.96.96 0 0 1 .96.96v1.92c0 .412.334.747.747.747h1.92a.96.96 0 1 1 0 1.92h-1.92C3.194 18 2 16.806 2 15.333v-1.92a.96.96 0 0 1 .96-.96zm14.08 0a.96.96 0 0 1 .96.96v1.92C18 16.806 16.806 18 15.333 18h-1.92a.96.96 0 1 1 0-1.92h1.92c.412 0 .747-.334.747-.747v-1.92a.96.96 0 0 1 .96-.96z"></path>
                    </svg>
                    <div className="pr-2 truncate text-xs font-semibold">
                      sRGB
                    </div>
                    <ChevronDown
                      className="size-4 ml-auto stroke-muted-foreground"
                      strokeWidth={2} />

                  </button>
                </div>

                {/* Format Toggle */}
                <div className="p-0.75 border border-border/20 bg-background/40 rounded-xl grow">
                  <div className="relative flex">
                    <div className="absolute top-0 left-0 bottom-0 rounded-lg bg-secondary shadow-xs transition-transform w-1/2"></div>
                    <button className="relative z-[1] flex-1 transition-colors hover:text-foreground text-foreground h-7 text-xs font-semibold">
                      PNG
                    </button>
                    <button className="relative z-[1] flex-1 transition-colors hover:text-foreground text-muted-foreground h-7 text-xs font-semibold">
                      JPG
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="p-1 hover:bg-accent/5 rounded-lg transition-colors text-muted-foreground"
                  aria-label="Remove format">

                  <Minus className="size-4" strokeWidth={2} />
                </button>
              </div>

              {/* Row 2 */}
              <div className="flex items-center gap-1.5">
                {/* Scale Dropdown */}
                <div className="w-20">
                  <button className="group flex items-center w-full px-2 border border-border/50 rounded-lg text-foreground transition-all hover:border-border/20 outline-0 h-9 text-sm bg-background/40">
                    <svg
                      className="size-4 mr-1.5 stroke-muted-foreground group-hover:stroke-card-foreground"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5">

                      <path d="M2.96 12.453a.96.96 0 0 1 .96.96v1.92c0 .412.334.747.747.747h1.92a.96.96 0 1 1 0 1.92h-1.92C3.194 18 2 16.806 2 15.333v-1.92a.96.96 0 0 1 .96-.96zm14.08 0a.96.96 0 0 1 .96.96v1.92C18 16.806 16.806 18 15.333 18h-1.92a.96.96 0 1 1 0-1.92h1.92c.412 0 .747-.334.747-.747v-1.92a.96.96 0 0 1 .96-.96z"></path>
                    </svg>
                    <div className="pr-2 truncate text-xs font-semibold">
                      2x
                    </div>
                    <ChevronDown
                      className="size-4 ml-auto stroke-muted-foreground"
                      strokeWidth={2} />

                  </button>
                </div>

                {/* Color Space Dropdown */}
                <div className="w-33">
                  <button className="group flex items-center w-full px-2 border border-border/20 rounded-lg text-foreground transition-all hover:border-border/20 outline-0 h-9 text-sm bg-transparent">
                    <svg
                      className="size-4 mr-1.5 stroke-muted-foreground group-hover:stroke-card-foreground"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5">

                      <path d="M2.96 12.453a.96.96 0 0 1 .96.96v1.92c0 .412.334.747.747.747h1.92a.96.96 0 1 1 0 1.92h-1.92C3.194 18 2 16.806 2 15.333v-1.92a.96.96 0 0 1 .96-.96zm14.08 0a.96.96 0 0 1 .96.96v1.92C18 16.806 16.806 18 15.333 18h-1.92a.96.96 0 1 1 0-1.92h1.92c.412 0 .747-.334.747-.747v-1.92a.96.96 0 0 1 .96-.96z"></path>
                    </svg>
                    <div className="pr-2 truncate text-xs font-semibold">
                      sRGB
                    </div>
                    <ChevronDown
                      className="size-4 ml-auto stroke-muted-foreground"
                      strokeWidth={2} />

                  </button>
                </div>

                {/* Format Toggle */}
                <div className="p-0.75 border border-border/20 bg-background/40 rounded-xl grow">
                  <div className="relative flex">
                    <div className="absolute top-0 left-0 bottom-0 rounded-lg bg-secondary shadow-xs transition-transform w-1/2"></div>
                    <button className="relative z-[1] flex-1 transition-colors hover:text-foreground text-foreground h-7 text-xs font-semibold">
                      PNG
                    </button>
                    <button className="relative z-[1] flex-1 transition-colors hover:text-foreground text-muted-foreground h-7 text-xs font-semibold">
                      JPG
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="p-1 hover:bg-accent/5 rounded-lg transition-colors text-muted-foreground"
                  aria-label="Remove format">

                  <Minus className="size-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          {/* Compression Section */}
          <div className="p-4 border-b border-border">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs md:text-sm font-medium text-card-foreground">
                Compression
              </div>
              <div className="text-xs font-semibold text-muted-foreground">
                3840px × 2160px
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="grow relative h-9 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  defaultValue="80"
                  className="w-full h-1.5 appearance-none rounded-full cursor-pointer"
                  style={{
                    background:
                    'linear-gradient(to right, rgb(14, 165, 233) 0%, rgb(14, 165, 233) 80%, rgb(38, 38, 38) 80%, rgb(38, 38, 38) 100%)',
                    accentColor: 'rgb(14,165,233)'
                  }}
                  aria-label="Compression quality" />

              </div>
              <div className="flex justify-center items-center gap-1.5 shrink-0 w-20 h-9 bg-background/40 border border-border/50 rounded-lg text-xs font-semibold text-foreground shadow-inner-lg">
                <svg
                  className="size-3.5 stroke-muted-foreground"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5">

                  <path d="M11.858 5.789a.92.92 0 0 1 1.341 0l2.776 2.891c.699.729.699 1.91 0 2.639L13.2 14.211a.92.92 0 0 1-1.341 0 1.02 1.02 0 0 1 0-1.397l2.701-2.815-2.701-2.813a1.02 1.02 0 0 1-.092-1.286l.092-.111zm-5.058 0a.92.92 0 0 1 1.341 0 1.02 1.02 0 0 1 0 1.397L5.44 9.999l2.702 2.815a1.02 1.02 0 0 1 .092 1.286l-.092.111a.92.92 0 0 1-1.341 0l-2.776-2.891c-.7-.729-.7-1.91 0-2.639L6.8 5.789z"></path>
                </svg>
                <span>80%</span>
              </div>
            </div>
          </div>

          {/* Export Button */}
          <div className="mt-auto p-4 bg-background/40 rounded-b-2xl">
            <button className="group relative inline-flex justify-center items-center h-10 px-6 rounded-xl text-xs md:text-sm font-semibold bg-foreground text-background hover:bg-muted active:scale-95 transition-all overflow-hidden shadow-glass w-full">
              <div className="relative z-10 flex items-center gap-2">
                Export Robot 2.0
              </div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-10 rounded-t-full bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Inset shadow overlay */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-inner-lg z-[3]"></div>
    </div>);

}