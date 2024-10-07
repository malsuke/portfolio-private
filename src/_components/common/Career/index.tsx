import Layout from '@/_layouts/section/layout'
import type { Career, Education } from '@/types/data'
import { Box, Typography } from '@mui/material'

interface CareerComponentProps {
  careers: Career[]
}

const CareerComponent: React.FC<CareerComponentProps> = ({ careers }) => {
  return (
    <>
      <Layout title="Career">
        {careers.map((career, index) => (
          <CareerItem key={index} {...career} />
        ))}
      </Layout>
    </>
  )
}

export const CareerItem: React.FC<Education> = (data) => {
  return (
    <>
      <Box display="flex" alignItems="center">
        <Box
          sx={{
            my: 2,
            mr: 3,
            flex: 1,
          }}
        >
          <Typography fontSize={13} textAlign="center">
            {data.start}
          </Typography>
          {data.end ? (
            <>
              <Typography fontSize={10} textAlign="center">
                |
              </Typography>
              <Typography fontSize={13} textAlign="center">
                {data.end}
              </Typography>
            </>
          ) : null}
        </Box>
        <Box sx={{ my: 2, flex: 4 }}>
          <Typography
            fontSize={16}
            sx={{
              '@media screen and (max-width:600px)': {
                fontSize: 13,
              },
            }}
          >
            {data.name}
          </Typography>
          <Typography
            sx={{
              opacity: 0.8,
              '@media screen and (max-width:600px)': {
                fontSize: 12,
              },
            }}
            fontSize={13}
          >
            {data.desc}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default CareerComponent
