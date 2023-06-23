import { createContext, useContext } from 'react'

import tailwindConfig from 'tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const theme = resolveConfig(tailwindConfig).theme

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
