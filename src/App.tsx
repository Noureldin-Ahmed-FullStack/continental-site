import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="grow flex flex-col">
      <Outlet />
    </div>
  )
}

export default App
