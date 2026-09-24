'use client'

import { createContext, ReactNode, useContext } from 'react'

import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../tailwind.config'

type Theme = ReturnType<typeof resolveConfig>['theme']

const ThemeContext = createContext<Theme | undefined>(undefined)

export const useTheme = () => useContext(ThemeContext)

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = resolveConfig(tailwindConfig).theme

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
