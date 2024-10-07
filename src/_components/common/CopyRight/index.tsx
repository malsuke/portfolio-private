import Layout from '@/_layouts/section/layout'
import type { CopyRight } from '@/types/data'
import { Box, Typography } from '@mui/material'

const CopyRight: React.FC<CopyRight> = ({ year, name }) => {
  return (
    <Layout>
      <Box sx={{ mt: 15 }} textAlign="center">
        <Typography fontSize={13}>
          &copy; {year} {name}
        </Typography>
      </Box>
    </Layout>
  )
}

export default CopyRight
