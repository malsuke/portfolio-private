'use client'
import { theme } from '@/theme/theme'
import { Box, ThemeProvider, Typography } from '@mui/material'

type LayoutProps = {
  title?: string
  children?: React.ReactNode
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ my: 10 }}>
          <Box>
            {title && (
              <Typography fontSize={25} variant="h3" sx={{ my: 4 }}>
                {title}
              </Typography>
            )}
          </Box>
          <Box>{children && children}</Box>
        </Box>
      </ThemeProvider>
    </>
  )
}
