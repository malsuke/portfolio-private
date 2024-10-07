'use client'

import { theme } from '@/theme/theme'
import type { Meta } from '@/types/data'
import { Box, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Link from 'next/link'

const Header = ({ imgUrl, title }: Meta) => {
  return (
    <Box mb={10}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: 2 }}>
            <Link href="/" passHref>
              <img src={imgUrl} alt="header image" width={50} height={50} />
            </Link>
          </Box>
          <Link href="/" passHref>
            <Typography fontSize={25} variant="h2">
              {title}
            </Typography>
          </Link>
        </Box>
      </ThemeProvider>
    </Box>
  )
}

export default Header
