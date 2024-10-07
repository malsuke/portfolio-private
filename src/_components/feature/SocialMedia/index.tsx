import { faGithub, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type SocialMediaProfiles<SocialMedias extends string> = {
  [Key in SocialMedias]?: string
}

type MyProfile = SocialMediaProfiles<'github' | 'twitter'>

const socialMediaIcons: { [key: string]: React.ReactNode } = {
  github: <FontAwesomeIcon icon={faGithub} />,
  twitter: <FontAwesomeIcon icon={faSquareXTwitter} />,
}

interface SocialLinksProps {
  profiles: MyProfile
}

/**
 * SNSのリンクを表示するコンポーネント
 *
 * 使用例 :
 * <SocialLinks profiles={{ github: 'https://github.com/example', twitter: 'https://twitter.com/example' }} />
 */
const SocialLinks: React.FC<SocialLinksProps> = ({ profiles }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {Object.entries(profiles).map(([key, value]) =>
        value ? (
          <Box
            key={key}
            sx={{
              mr: 2,
              '@media screen and (max-width:600px)': { fontSize: 20 },
            }}
          >
            <Link key={key} href={value}>
              {socialMediaIcons[key]}
            </Link>
          </Box>
        ) : null,
      )}
    </Box>
  )
}

export default SocialLinks
