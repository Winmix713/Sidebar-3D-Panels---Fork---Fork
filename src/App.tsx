import React, { useState } from 'react';
import { SettingsSidebar } from './components/SettingsSidebar';
import { ObjectsPanel } from './components/ObjectsPanel';
import { ScenePanel } from './components/ScenePanel';
import { Toolbar } from './components/Toolbar';
import { ExportPanel } from './components/ExportPanel';
import { UntitledUiDemo } from './pages/UntitledUiDemo';
import { ThemeProvider } from './providers/theme-provider';
import { LayoutTemplate } from 'lucide-react';
export function App() {
  const [isExportPanelOpen, setIsExportPanelOpen] = useState(false);
  const [view, setView] = useState<'editor' | 'demo'>('editor');
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background flex flex-col items-center p-4 text-sm md:text-base text-foreground tracking-tight antialiased relative overflow-hidden">
        {/* Background Mesh Gradient (Optional visual enhancement) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-900/10 blur-[120px]" />
        </div>

        {/* View Toggle Switch */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-1 p-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg shadow-lg">
          <button
            onClick={() => setView('editor')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view === 'editor' ? 'bg-white/10 text-white shadow-sm' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}>

            <div className="size-3.5" />
            Editor
          </button>
          <button
            onClick={() => setView('demo')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view === 'demo' ? 'bg-white/10 text-white shadow-sm' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}>

            <LayoutTemplate className="size-3.5" />
            UI Demo
          </button>
        </div>

        {/* Toolbar - Fixed at top (Visible in both views) */}
        <Toolbar />

        {/* Main Content Area */}
        <div className="w-full h-full flex-1 flex items-center justify-center z-10 pt-20">
          {view === 'editor' ?
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-start max-w-[1600px]">
              <SettingsSidebar />
              <ObjectsPanel />
              <ScenePanel />
            </div> :

          <UntitledUiDemo />
          }
        </div>

        {/* Export Panel - Positioned absolutely (Only relevant for editor view usually, but keeping logic) */}
        {isExportPanelOpen && view === 'editor' &&
        <div className="fixed inset-0 z-50 flex items-start justify-end p-4 pt-20">
            <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsExportPanelOpen(false)} />

            <div className="relative">
              <ExportPanel />
            </div>
          </div>
        }
      </div>
    </ThemeProvider>);

}