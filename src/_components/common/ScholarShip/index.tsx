import Layout from '@/_layouts/section/layout'
import type { ScholarShip } from '@/types/data'
import { Box, Typography } from '@mui/material'

interface ScholarShipComponentProps {
  events: ScholarShip[]
}

const EventComponent: React.FC<ScholarShipComponentProps> = ({ events }) => {
  return (
    <>
      <Layout title="SholarShip">
        {events.map((event, index) => (
          <EventItem key={index} {...event} />
        ))}
      </Layout>
    </>
  )
}

export const EventItem: React.FC<ScholarShip> = (data) => {
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
          <Typography
            fontSize={12}
            sx={{
              '@media screen and (max-width:600px)': {
                fontSize: 13,
              },
            }}
          >
            {data.link && (
              <a
                style={{ color: '#1a73e8' }}
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                link
              </a>
            )}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default EventComponent
