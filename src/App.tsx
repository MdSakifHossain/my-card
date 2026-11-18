import { useEffect } from "react"
import GhostCursor from "./components/my-comps/GhostCursor"
import ProfileCard from "./components/my-comps/ProfileCard"
import { config } from "./constants"

export function App() {
  useEffect(() => {
    document.title = config.title
  }, [])

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <GhostCursor />
      <ProfileCard config={config} />
    </div>
  )
}

export default App
