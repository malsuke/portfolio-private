import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

type HatenaCardProps = {
  title: string
  imgUrl: string
  linkUrl: string
  date: string
}

export default function HatenaCard({
  title,
  imgUrl,
  linkUrl,
  date,
}: HatenaCardProps) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Link href={linkUrl} passHref>
        <CardActionArea disableRipple>
          <CardMedia component="img" image={imgUrl} alt="green iguana" />
          <CardContent
            sx={{
              width: '100%',
              height: 90,
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 600,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                WebkitLineClamp: 2,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
              }}
              gutterBottom
              component="div"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}
