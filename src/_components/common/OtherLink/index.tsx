import Layout from '@/_layouts/section/layout'
import type { OtherLinks } from '@/types/data'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type LinksProps = {
  Links: OtherLinks[]
}

const OtherLink: React.FC<LinksProps> = ({ Links }) => {
  return (
    <Layout title="Links">
      <Box
        sx={{
          height: '400px',
          '@media screen and (max-width:600px)': {
            height: '600px',
          },
        }}
      >
        {Links.map((link: OtherLinks) => (
          <Box
            key={link.url}
            sx={{
              mb: 2,
              display: 'flex',
              '@media screen and (max-width:600px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Typography
              fontSize={14}
              color="text.primary"
              sx={{ flex: 4 }}
              key={link.name}
            >
              {link.name}
            </Typography>
            <Link
              href={link.url}
              passHref
              style={{
                flex: 7,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              <Typography
                fontSize={14}
                color="text.primary"
                sx={{
                  textDecoration: 'underline',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  ':hover': {
                    textDecorationColor: 'red',
                  },
                }}
              >
                {link.url}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Layout>
  )
}

export default OtherLink
