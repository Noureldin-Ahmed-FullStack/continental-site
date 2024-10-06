import { Outlet } from "react-router-dom"
import { FloatingNav } from "./components/ui/floating-navbar"
import { FloatingDock } from './components/ui/floating-dock.tsx'
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
} from "@tabler/icons-react";
function App() {
  const navbarItems = [
    { name: 'Home', link: 'home' }, { name: 'Posts', link: 'Posts' }, { name: 'News', link: 'News' }, { name: 'managment', link: 'managment' }
  ]
  const dockItems = [
    { title: 'Home', icon: (<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'home' },
    { title: 'Posts', icon: (<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'Posts' },
    { title: 'News', icon: (<IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'News' },
    { title: 'About', icon: (<IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'About' }
  ]
  return (
    <div className="grow flex flex-col">
      <FloatingNav navItems={navbarItems} />
      <Outlet />
      <FloatingDock items={dockItems} />

    </div>
  )
}

export default App
