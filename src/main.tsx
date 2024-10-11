// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/fonts.css'
import './styles/ExtraComponents.css'
import './styles/navbar.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.tsx'
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react'
import CenteredPage from './components/CenteredPage.tsx'
import NotFoundPage from './components/NotFoundPage.tsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/continental", element: <HomePage /> },
      { path: "/managment", element: <HomePage /> },
      { path: "/messages", element: <HomePage /> },
      { path: "/sign-in", element: <CenteredPage className="mt-20"><SignUp routing='hash' forceRedirectUrl={'/continental'} /></CenteredPage> },
      { path: "/sign-up", element: <CenteredPage className="mt-20"><SignIn routing='hash' forceRedirectUrl={'/continental'} /></CenteredPage> },
      { path: "*", element: <CenteredPage><NotFoundPage /></CenteredPage> },
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
    {/* <App /> */}
  </ClerkProvider>
  // </StrictMode>,
)
