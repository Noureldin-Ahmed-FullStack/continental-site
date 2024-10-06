import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FloatingNav } from "./components/ui/floating-navbar"
import { FloatingDock } from './components/ui/floating-dock.tsx'
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
} from "@tabler/icons-react";
const navbarItems = [
  { name: 'Home', link: 'home' }, { name: 'Posts', link: 'Posts' }, { name: 'News', link: 'News' }, { name: 'About', link: 'About' }
]
const dockItems = [
  { title: 'Home', icon: (<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'home' },
  { title: 'Posts', icon: (<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'Posts' },
  { title: 'News', icon: (<IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'News' },
  { title: 'About', icon: (<IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'About' }
]
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FloatingNav navItems={navbarItems} />

    <App />
    <FloatingDock items={dockItems} />
  </StrictMode>,
)
