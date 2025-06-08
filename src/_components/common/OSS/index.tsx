import Layout from '@/_layouts/section/layout'
import type { OSS } from '@/types/data'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type LinksProps = {
  ossinfo: OSS[]
}

const OSS: React.FC<LinksProps> = ({ ossinfo }) => {
  return (
    <Layout title="OSS Contribution">
      <Box>
        {ossinfo.map((link: OSS) => (
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
            <Link
              href={link.url}
              passHref
              style={{
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
                {link.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Layout>
  )
}

export default OSS
