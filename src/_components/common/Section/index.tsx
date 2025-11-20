import SocialLinks from '@/_components/feature/SocialMedia'
import Layout from '@/_layouts/section/layout'
import type {
  Career,
  Education,
  Event,
  OSS,
  OtherLinks,
  Profile,
  Research,
  ScholarShip,
  Speaker,
} from '@/types/data'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export type SectionType =
  | 'timeline'
  | 'profile'
  | 'oss'
  | 'otherlink'
  | 'research'

type SectionProps =
  | {
      title: string
      type: 'timeline'
      items: (Career | Education | Event | ScholarShip | Speaker)[]
    }
  | { title: string; type: 'profile'; items: [Profile] }
  | { title: string; type: 'oss'; items: OSS[] }
  | { title: string; type: 'otherlink'; items: OtherLinks[] }
  | { title: string; type: 'research'; items: Research[] }

const Section: React.FC<SectionProps> = (props) => {
  const { title, type, items } = props

  const renderItems = () => {
    switch (type) {
      case 'timeline':
        return items.map(
          (item: Career | Education | Event | ScholarShip | Speaker, index) => (
            <Box key={index} display="flex" alignItems="center">
              <Box sx={{ my: 2, mr: 3, flex: 1 }}>
                <Typography fontSize={13} textAlign="center">
                  {item.start}
                </Typography>
                {item.end && (
                  <>
                    <Typography fontSize={10} textAlign="center">
                      |
                    </Typography>
                    <Typography fontSize={13} textAlign="center">
                      {item.end}
                    </Typography>
                  </>
                )}
              </Box>
              <Box sx={{ my: 2, flex: 4 }}>
                <Typography
                  fontSize={16}
                  sx={{
                    '@media screen and (max-width:600px)': { fontSize: 13 },
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    opacity: 0.8,
                    '@media screen and (max-width:600px)': { fontSize: 12 },
                  }}
                  fontSize={13}
                >
                  {item.desc}
                </Typography>
                {'link' in item && item.link && (
                  <Typography
                    fontSize={12}
                    sx={{
                      '@media screen and (max-width:600px)': { fontSize: 13 },
                    }}
                  >
                    <a
                      style={{ color: '#1a73e8' }}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      link
                    </a>
                  </Typography>
                )}
              </Box>
            </Box>
          ),
        )
      case 'profile':
        const profile = items[0] as Profile
        return (
          <>
            {Object.entries(profile.detail).map(([key, value]) => (
              <Typography key={key} sx={{ mb: 0.5 }}>
                {key}: {value}
              </Typography>
            ))}
            {profile.sns && <SocialLinks profiles={profile.sns} />}
          </>
        )
      case 'oss':
        return items.map((item: OSS) => (
          <Box
            key={item.url}
            sx={{
              mb: 2,
              display: 'flex',
              '@media screen and (max-width:600px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Link
              href={item.url}
              passHref
              style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
            >
              <Typography
                fontSize={14}
                color="text.primary"
                sx={{
                  textDecoration: 'underline',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  ':hover': { textDecorationColor: 'red' },
                }}
              >
                {item.title}
              </Typography>
            </Link>
          </Box>
        ))
      case 'otherlink':
        return items.map((item: OtherLinks) => (
          <Box
            key={item.url}
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
              key={item.name}
            >
              {item.name}
            </Typography>
            <Link
              href={item.url}
              passHref
              style={{ flex: 7, overflow: 'hidden', whiteSpace: 'nowrap' }}
            >
              <Typography
                fontSize={14}
                color="text.primary"
                sx={{
                  textDecoration: 'underline',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  ':hover': { textDecorationColor: 'red' },
                }}
              >
                {item.url}
              </Typography>
            </Link>
          </Box>
        ))
      case 'research':
        return items.map((item: Research, index) => (
          <Box key={index} display="flex" alignItems="center">
            <Box sx={{ my: 2, mr: 3, flex: 1 }}>
              <Typography fontSize={13} textAlign="center">
                {item.date}
              </Typography>
            </Box>
            <Box sx={{ my: 2, flex: 4 }}>
              <Typography
                fontSize={16}
                sx={{
                  '@media screen and (max-width:600px)': { fontSize: 13 },
                }}
              >
                {item.title}
              </Typography>
              {item.desc && (
                <Typography
                  sx={{
                    opacity: 0.8,
                    '@media screen and (max-width:600px)': { fontSize: 12 },
                  }}
                  fontSize={13}
                >
                  {item.desc}
                </Typography>
              )}
              {item.link && (
                <Typography
                  fontSize={12}
                  sx={{
                    '@media screen and (max-width:600px)': { fontSize: 13 },
                  }}
                >
                  <a
                    style={{ color: '#1a73e8' }}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    link
                  </a>
                </Typography>
              )}
            </Box>
          </Box>
        ))
      default:
        return null
    }
  }

  return <Layout title={title}>{renderItems()}</Layout>
}

export default Section
