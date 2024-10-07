import SocialLinks from '@/_components/feature/SocialMedia'
import Layout from '@/_layouts/section/layout'
import type { Profile } from '@/types/data'
import { Typography } from '@mui/material'

const ProfileComponent: React.FC<Profile> = (data) => {
  return (
    <Layout title="Profile">
      {Object.entries(data.detail).map(([key, value]) => (
        <Typography key={key} sx={{ mb: 0.5 }}>
          {key}: {value}
        </Typography>
      ))}
      {data.sns && <SocialLinks profiles={data.sns} />}
    </Layout>
  )
}

export default ProfileComponent
