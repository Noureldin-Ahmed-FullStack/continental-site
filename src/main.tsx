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
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.tsx'
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react'
import CenteredPage from './components/CenteredPage.tsx'
import NotFoundPage from './components/NotFoundPage.tsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const navbarItems = [
  { name: 'Home', link: 'home' }, { name: 'Posts', link: 'Posts' }, { name: 'News', link: 'News' }, { name: 'managment', link: 'managment' }
]
const dockItems = [
  { title: 'Home', icon: (<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'home' },
  { title: 'Posts', icon: (<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'Posts' },
  { title: 'News', icon: (<IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'News' },
  { title: 'About', icon: (<IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />), href: 'About' }
]

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/continental", element: <HomePage /> },
      { path: "/managment", element: <HomePage /> },
      { path: "/messages", element: <HomePage /> },
      { path: "/products/:productId", element: <CenteredPage><HomePage /></CenteredPage> },
      { path: "/sign-in", element: <CenteredPage><SignUp routing='hash' forceRedirectUrl={'/continental'} /></CenteredPage> },
      { path: "/sign-up", element: <CenteredPage><SignIn routing='hash' forceRedirectUrl={'/continental'} /></CenteredPage> },
      { path: "*", element: <CenteredPage><NotFoundPage /></CenteredPage> },
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <FloatingNav navItems={navbarItems} />
        <RouterProvider router={router} />
      {/* <App /> */}
      <FloatingDock items={dockItems} />
    </ClerkProvider>
  </StrictMode>,
)
