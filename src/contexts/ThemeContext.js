import { createContext, useContext } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const theme = resolveConfig(tailwindConfig).theme

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
