import { Outlet } from "react-router-dom"
import { FloatingNav } from "./components/ui/floating-navbar"
import OpenIconSpeedDial from "./components/ui/SpeedDial"
function App() {

  const navbarItems = [
    { name: 'Home', link: 'home' }, { name: 'Posts', link: 'Posts' }, { name: 'News', link: 'News' }, { name: 'managment', link: 'managment' }
  ]

  return (
    <div className="grow flex flex-col">
      <FloatingNav navItems={navbarItems} />
      <Outlet />
      <OpenIconSpeedDial />
    </div>
  )
}

export default App
