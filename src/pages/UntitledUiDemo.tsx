import React, { useEffect, useState, Component } from 'react';
import {
  Package,
  Palette,
  Settings,
  GitBranch,
  Layers,
  Shield,
  Sun,
  Wrench,
  AlertTriangle,
  Play,
  Copy,
  Check,
  Moon,
  Monitor,
  Home,
  User,
  Search,
  Bell,
  Mail,
  Calendar,
  Star,
  Heart,
  Zap,
  Globe,
  FileText,
  BarChart3,
  Command,
  Terminal,
  Type,
  MousePointer2,
  LayoutTemplate,
  ChevronRight } from
'lucide-react';
import { useTheme } from '../providers/theme-provider';
import { useClipboard } from '../hooks/use-clipboard';
import { cx } from '../utils/cx';
// --- Internal Helper Components ---
function SectionHeader({
  icon: Icon,
  title,
  description,
  colorClass





}: {icon: React.ElementType;title: string;description: string;colorClass: string;}) {
  return (
    <div
      className="flex items-start gap-4 mb-6 scroll-mt-24"
      id={title.toLowerCase().replace(/\s+/g, '-')}>

      <div className={cx('p-3 rounded-xl shrink-0', colorClass)}>
        <Icon className="size-6 text-white" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
        <p className="text-neutral-400">{description}</p>
      </div>
    </div>);

}
function CodeBlock({ code, label }: {code: string;label?: string;}) {
  const { isCopied, copy } = useClipboard();
  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/40 mb-6">
      {label &&
      <div className="px-4 py-2 border-b border-white/5 bg-white/5 text-xs font-medium text-neutral-400 flex justify-between items-center">
          <span>{label}</span>
          <span className="text-[10px] text-neutral-600 font-mono">tsx</span>
        </div>
      }
      <div className="p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
        <pre>{code}</pre>
      </div>
      <button
        onClick={() => copy(code)}
        className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Copy code">

        {isCopied ?
        <Check className="size-4 text-emerald-400" /> :

        <Copy className="size-4" />
        }
      </button>
    </div>);

}
function ColorSwatch({
  name,
  colorClass,
  hex




}: {name: string;colorClass: string;hex?: string;}) {
  return (
    <div className="space-y-2">
      <div
        className={cx(
          'h-12 w-full rounded-lg border border-white/10 shadow-sm',
          colorClass
        )}>
      </div>
      <div className="space-y-0.5">
        <div className="text-xs font-medium text-white">{name}</div>
        {hex &&
        <div className="text-[10px] font-mono text-neutral-500">{hex}</div>
        }
      </div>
    </div>);

}
function IconCard({
  icon: Icon,
  name



}: {icon: React.ElementType;name: string;}) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-default">
      <Icon
        className="size-6 text-neutral-400 group-hover:text-white transition-colors"
        strokeWidth={1.5} />

      <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300 font-mono">
        {name}
      </span>
    </div>);

}
// --- Main Page Component ---
export function UntitledUiDemo() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('packages');
  const [isToggled, setIsToggled] = useState(false);
  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const tabs = [
  {
    id: 'packages',
    label: 'Packages',
    icon: Package
  },
  {
    id: 'tailwind',
    label: 'Tailwind',
    icon: Palette
  },
  {
    id: 'vite',
    label: 'Vite',
    icon: Settings
  },
  {
    id: 'router',
    label: 'Router',
    icon: GitBranch
  },
  {
    id: 'icons',
    label: 'Icons',
    icon: Layers
  },
  {
    id: 'aria',
    label: 'Aria',
    icon: Shield
  },
  {
    id: 'theme',
    label: 'Theme',
    icon: Sun
  },
  {
    id: 'utils',
    label: 'Utils',
    icon: Wrench
  },
  {
    id: 'error',
    label: 'Error',
    icon: AlertTriangle
  },
  {
    id: 'app',
    label: 'App',
    icon: Play
  }];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 space-y-12 pb-32">
      {/* Header */}
      <header className="space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Complete Setup Guide
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            A comprehensive reference for implementing Tailwind CSS v4.1 +
            Untitled UI integration with Vite.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="sticky top-4 z-40 flex overflow-x-auto pb-2 md:pb-0 gap-2 p-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl w-full md:w-fit no-scrollbar">
          {tabs.map((tab) =>
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={cx(
              'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap',
              activeTab === tab.id ?
              'bg-white/10 text-white shadow-sm' :
              'text-neutral-400 hover:text-white hover:bg-white/5'
            )}>

              <tab.icon className="size-4" />
              {tab.label}
            </button>
          )}
        </div>
      </header>

      {/* Section 1: Package Dependencies */}
      <section
        id="packages"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={Package}
          title="Package Dependencies"
          description="Install the core dependencies and development tools required for the project."
          colorClass="bg-sky-500/20 text-sky-400" />


        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Core Dependencies
            </h3>
            <CodeBlock
              code="npm install react-router-dom react-aria-components @untitledui/icons @untitledui/react"
              label="Terminal" />

          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Dev Dependencies
            </h3>
            <CodeBlock
              code="npm install -D tailwindcss@^4.1.0 @types/react @types/react-dom typescript vite @vitejs/plugin-react"
              label="Terminal" />

          </div>
        </div>
      </section>

      {/* Section 2: Tailwind CSS Configuration */}
      <section
        id="tailwind"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={Palette}
          title="Tailwind CSS Configuration"
          description="Configure Tailwind with Untitled UI design tokens, including colors, typography, and spacing."
          colorClass="bg-indigo-500/20 text-indigo-400" />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CodeBlock
              code={`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@untitledui/react/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          // ... other shades
        },
        gray: {
          25: '#fcfcfd',
          50: '#f9fafb',
          // ... other shades
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
}`}
              label="tailwind.config.js" />

            <CodeBlock
              code={`@import "tailwindcss";

@layer base {
  :root {
    --color-primary-50: 240 249 255;
    --color-primary-500: 59 130 246;
  }
  
  .dark {
    --color-primary-50: 30 41 59;
  }
}`}
              label="src/index.css" />

          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Gray Scale</h3>
              <div className="grid grid-cols-4 gap-3">
                <ColorSwatch
                  name="25"
                  colorClass="bg-neutral-50"
                  hex="#fcfcfd" />

                <ColorSwatch
                  name="50"
                  colorClass="bg-neutral-100"
                  hex="#f9fafb" />

                <ColorSwatch
                  name="100"
                  colorClass="bg-neutral-200"
                  hex="#f2f4f7" />

                <ColorSwatch
                  name="200"
                  colorClass="bg-neutral-300"
                  hex="#eaecf0" />

                <ColorSwatch
                  name="300"
                  colorClass="bg-neutral-400"
                  hex="#d0d5dd" />

                <ColorSwatch
                  name="400"
                  colorClass="bg-neutral-500"
                  hex="#98a2b3" />

                <ColorSwatch
                  name="500"
                  colorClass="bg-neutral-600"
                  hex="#667085" />

                <ColorSwatch
                  name="600"
                  colorClass="bg-neutral-700"
                  hex="#475467" />

                <ColorSwatch
                  name="700"
                  colorClass="bg-neutral-800"
                  hex="#344054" />

                <ColorSwatch
                  name="800"
                  colorClass="bg-neutral-900"
                  hex="#1d2939" />

                <ColorSwatch
                  name="900"
                  colorClass="bg-neutral-950"
                  hex="#101828" />

                <ColorSwatch name="950" colorClass="bg-black" hex="#0c111d" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Primary Colors
              </h3>
              <div className="grid grid-cols-5 gap-3">
                <ColorSwatch name="50" colorClass="bg-blue-50" hex="#f0f9ff" />
                <ColorSwatch
                  name="500"
                  colorClass="bg-blue-500"
                  hex="#3b82f6" />

                <ColorSwatch
                  name="600"
                  colorClass="bg-blue-600"
                  hex="#2563eb" />

                <ColorSwatch
                  name="700"
                  colorClass="bg-blue-700"
                  hex="#1d4ed8" />

                <ColorSwatch
                  name="900"
                  colorClass="bg-blue-900"
                  hex="#1e3a8a" />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vite Configuration */}
      <section
        id="vite"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={Settings}
          title="Vite Configuration"
          description="Configure path aliases for clean imports and optimized builds."
          colorClass="bg-violet-500/20 text-violet-400" />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Vite Config</h3>
            <CodeBlock
              code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      // ... other aliases
    },
  }
})`}
              label="vite.config.ts" />

          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              TypeScript Config
            </h3>
            <CodeBlock
              code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      // ... other paths
    }
  }
}`}
              label="tsconfig.json" />

            <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
              <p className="text-sm text-violet-200">
                <strong>Pro Tip:</strong> Using path aliases makes refactoring
                easier and imports cleaner.
                <br />
                <code className="text-xs bg-black/20 px-1 py-0.5 rounded mt-1 inline-block">
                  import {'{ Button }'} from '@components/ui/Button'
                </code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: React Router Setup */}
      <section
        id="router"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={GitBranch}
          title="React Router Setup"
          description="Set up client-side routing with nested layouts and error boundaries."
          colorClass="bg-blue-500/20 text-blue-400" />


        <div className="space-y-6">
          <CodeBlock
            code={`import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@components/Layout'
import { ErrorBoundary } from '@components/ErrorBoundary'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}`}
            label="src/lib/router.tsx" />


          <CodeBlock
            code={`export function Layout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}`}
            label="src/components/Layout.tsx" />

        </div>
      </section>

      {/* Section 5: Untitled UI Icons */}
      <section
        id="icons"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={Layers}
          title="Untitled UI Icons"
          description="Integration of the comprehensive icon set with proper sizing and styling."
          colorClass="bg-rose-500/20 text-rose-400" />


        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Usage Pattern
              </h3>
              <CodeBlock
                code={`import { HomeIcon } from '@untitledui/icons/outline'
import { IconButton } from '@components/IconButton'

// Usage
<IconButton 
  icon={<HomeIcon className="w-4 h-4" />} 
  variant="secondary" 
/>`}
                label="Component Usage" />

            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Icon Sizing</h3>
              <div className="flex items-end gap-6 p-6 rounded-xl bg-black/20 border border-white/10">
                <div className="flex flex-col items-center gap-2">
                  <Home className="size-4 text-white" />
                  <span className="text-xs text-neutral-500 font-mono">
                    size-4 (16px)
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Home className="size-5 text-white" />
                  <span className="text-xs text-neutral-500 font-mono">
                    size-5 (20px)
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Home className="size-6 text-white" />
                  <span className="text-xs text-neutral-500 font-mono">
                    size-6 (24px)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Example Icons</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              <IconCard icon={Home} name="Home" />
              <IconCard icon={Settings} name="Settings" />
              <IconCard icon={User} name="User" />
              <IconCard icon={Search} name="Search" />
              <IconCard icon={Bell} name="Bell" />
              <IconCard icon={Mail} name="Mail" />
              <IconCard icon={Calendar} name="Calendar" />
              <IconCard icon={Star} name="Star" />
              <IconCard icon={Heart} name="Heart" />
              <IconCard icon={Shield} name="Shield" />
              <IconCard icon={Zap} name="Zap" />
              <IconCard icon={Globe} name="Globe" />
              <IconCard icon={FileText} name="FileText" />
              <IconCard icon={BarChart3} name="BarChart" />
              <IconCard icon={Layers} name="Layers" />
              <IconCard icon={Command} name="Command" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: React Aria Components */}
      <section
        id="aria"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={Shield}
          title="React Aria Components"
          description="Accessible UI primitives styled with Tailwind CSS."
          colorClass="bg-purple-500/20 text-purple-400" />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CodeBlock
              code={`import { Button as AriaButton } from 'react-aria-components'
import { cn } from '@utils/cn'

export function Button({ variant = 'primary', className, ...props }) {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-500',
    secondary: 'bg-white text-gray-700 border border-gray-300',
    destructive: 'bg-red-600 text-white hover:bg-red-500',
    ghost: 'text-gray-700 hover:bg-gray-100'
  }
  
  return (
    <AriaButton 
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-semibold',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}`}
              label="src/components/ui/Button.tsx" />

          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">
              Interactive Examples
            </h3>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-6">
              <div className="flex flex-wrap gap-4">
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
                  Primary
                </button>
                <button className="px-4 py-2 rounded-lg bg-white text-neutral-700 font-semibold border border-neutral-300 hover:bg-neutral-50 transition-colors">
                  Secondary
                </button>
                <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-500 transition-colors">
                  Destructive
                </button>
                <button className="px-4 py-2 rounded-lg text-neutral-300 font-semibold hover:bg-white/10 transition-colors">
                  Ghost
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <p className="text-xs text-neutral-500">
                  We'll never share your email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Theme Provider */}
      <section
        id="theme"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={Sun}
          title="Theme Provider"
          description="Dark mode implementation with system preference detection."
          colorClass="bg-amber-500/20 text-amber-400" />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CodeBlock
              code={`export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}`}
              label="src/components/ThemeProvider.tsx" />

          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">
              Interactive Switcher
            </h3>
            <div className="p-6 rounded-xl bg-black/20 border border-white/10 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 p-1 bg-black/40 rounded-lg border border-white/5">
                <button
                  onClick={() => setTheme('light')}
                  className={cx(
                    'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all',
                    theme === 'light' ?
                    'bg-white text-black shadow-sm' :
                    'text-neutral-400 hover:text-white'
                  )}>

                  <Sun className="size-4" />
                  Light
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={cx(
                    'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all',
                    theme === 'dark' ?
                    'bg-neutral-800 text-white shadow-sm border border-white/10' :
                    'text-neutral-400 hover:text-white'
                  )}>

                  <Moon className="size-4" />
                  Dark
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={cx(
                    'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all',
                    theme === 'system' ?
                    'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                    'text-neutral-400 hover:text-white'
                  )}>

                  <Monitor className="size-4" />
                  System
                </button>
              </div>
              <div className="text-xs text-neutral-500 font-mono">
                Active Theme: <span className="text-amber-400">{theme}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Utility Functions */}
      <section
        id="utils"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={Wrench}
          title="Utility Functions"
          description="Helper functions for class merging and component type checking."
          colorClass="bg-emerald-500/20 text-emerald-400" />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CodeBlock
              code={`import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
              label="src/utils/cn.ts" />

          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">
              Interactive Demo
            </h3>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                <code className="text-xs text-neutral-400">
                  cn("px-4 py-2 rounded transition-all", <br />
                  &nbsp;&nbsp;isToggled ? "bg-emerald-500 text-white" :
                  "bg-neutral-700")
                </code>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setIsToggled(!isToggled)}
                  className={cx(
                    'px-6 py-3 rounded-xl font-medium transition-all duration-300',
                    isToggled ?
                    'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105' :
                    'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
                  )}>

                  {isToggled ? 'Active State' : 'Inactive State'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Error Boundary */}
      <section
        id="error"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={AlertTriangle}
          title="Error Boundary"
          description="Catch route errors and display a friendly UI to the user."
          colorClass="bg-red-500/20 text-red-400" />


        <div className="space-y-6">
          <CodeBlock
            code={`import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export function ErrorBoundary() {
  const error = useRouteError()
  // ... error handling logic
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg">
        <h1>Oops! Something went wrong</h1>
        <p>{errorMessage}</p>
        <button onClick={() => window.location.reload()}>Try again</button>
      </div>
    </div>
  )
}`}
            label="src/components/ErrorBoundary.tsx" />

        </div>
      </section>

      {/* Section 10: App Entry Point */}
      <section
        id="app"
        className="glass-card rounded-2xl p-6 md:p-8 scroll-mt-24">

        <SectionHeader
          icon={Play}
          title="App Entry Point"
          description="The main entry point connecting the router and providers."
          colorClass="bg-teal-500/20 text-teal-400" />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CodeBlock
              code={`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`}
              label="src/main.tsx" />

            <CodeBlock
              code={`import { AppRouter } from '@lib/router'
import './index.css'

function App() {
  return <AppRouter />
}

export default App`}
              label="src/App.tsx" />

          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">
              Integration Checklist
            </h3>
            <div className="space-y-3">
              {[
              {
                label: 'Package Dependencies',
                detail:
                'react, react-dom, lucide-react, clsx, tailwind-merge',
                status: 'done'
              },
              {
                label: 'Tailwind Configuration',
                detail:
                'Design tokens, gray scale, primary colors, font sizes',
                status: 'done'
              },
              {
                label: 'Theme Provider',
                detail: 'Light/dark/system with localStorage persistence',
                status: 'done'
              },
              {
                label: 'Utility Functions',
                detail:
                'cx() class merging, isReactComponent, useClipboard, useBreakpoint',
                status: 'done'
              },
              {
                label: 'Vite Path Aliases',
                detail: 'Requires vite.config.ts — add @ → src/ alias',
                status: 'install',
                command: 'npm install -D vite @vitejs/plugin-react'
              },
              {
                label: 'React Router Setup',
                detail: 'Client-side routing with nested layouts',
                status: 'install',
                command: 'npm install react-router-dom'
              },
              {
                label: 'React Aria Components',
                detail:
                'Accessible UI primitives for buttons, inputs, dialogs',
                status: 'install',
                command: 'npm install react-aria-components'
              },
              {
                label: 'Untitled UI Component Library',
                detail: 'Full component set (requires license)',
                status: 'install',
                command: 'npm install @untitledui/react @untitledui/icons'
              }].
              map((item, i) =>
              <div
                key={i}
                className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 border border-white/5">

                  <div className="flex items-center gap-3">
                    <div
                    className={cx(
                      'flex items-center justify-center size-5 rounded-full border shrink-0',
                      item.status === 'done' ?
                      'bg-teal-500/20 border-teal-500/50 text-teal-400' :
                      'bg-amber-500/20 border-amber-500/50 text-amber-400'
                    )}>

                      {item.status === 'done' ?
                    <Check className="size-3" strokeWidth={3} /> :

                    <Package className="size-3" />
                    }
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                      className={cx(
                        'text-sm font-medium',
                        item.status === 'done' ?
                        'text-white' :
                        'text-amber-200'
                      )}>

                        {item.label}
                      </span>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                    {item.status === 'install' &&
                  <span className="text-[10px] font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 shrink-0">
                        INSTALL
                      </span>
                  }
                  </div>
                  {item.status === 'install' && (item as any).command &&
                <div className="ml-8">
                      <CodeBlock
                    code={(item as any).command}
                    label="Terminal" />

                    </div>
                }
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>);

}