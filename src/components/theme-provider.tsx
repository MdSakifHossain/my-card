// @ts-nocheck
import * as React from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: Theme
}

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)"

const ThemeProviderContext = React.createContext<
  ThemeProviderState | undefined
>(undefined)

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light" // SSR fallback
  return window.matchMedia(COLOR_SCHEME_QUERY).matches ? "dark" : "light"
}

function disableTransitionsTemporarily() {
  const style = document.createElement("style")
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{-webkit-transition:none!important;transition:none!important}"
    )
  )
  document.head.appendChild(style)

  return () => {
    window.getComputedStyle(document.body)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(getSystemTheme)

  React.useEffect(() => {
    const root = document.documentElement
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY)

    const applyTheme = (newTheme: Theme) => {
      const restoreTransitions = disableTransitionsTemporarily()

      root.classList.remove("light", "dark")
      root.classList.add(newTheme)

      if (restoreTransitions) {
        restoreTransitions()
      }
    }

    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light"
      setTheme(newTheme)
      applyTheme(newTheme)
    }

    // Apply initial theme on mount
    applyTheme(theme)

    // Listen for OS theme changes
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const value = React.useMemo(() => ({ theme }), [theme])

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
