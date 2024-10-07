import { createTheme } from '@mui/material/styles'
import { JetBrains_Mono } from 'next/font/google'

const Mono = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2696F0',
    },
    text: {
      primary: '#383838',
    },
  },
  typography: {
    fontFamily: [Mono.style.fontFamily, 'monospace'].join(','),
  },
})
