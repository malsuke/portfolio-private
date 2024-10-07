import Layout from '@/_layouts/section/layout'
import type { Education } from '@/types/data'
import { Box, Typography } from '@mui/material'

interface EduComponentProps {
  educations: Education[]
}

const EduComponent: React.FC<EduComponentProps> = ({ educations }) => {
  return (
    <>
      <Layout title="Education">
        {educations.map((education, index) => (
          <EduItem key={index} {...education} />
        ))}
      </Layout>
    </>
  )
}

export const EduItem: React.FC<Education> = (data) => {
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

export default EduComponent
