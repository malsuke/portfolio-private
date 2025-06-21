import CareerComponent from '@/_components/common/Career'
import CopyRight from '@/_components/common/CopyRight'
import EduComponent from '@/_components/common/Edu'
import EventComponent from '@/_components/common/Event'
import Header from '@/_components/common/Header/Header'
import OSS from '@/_components/common/OSS'
import OtherLink from '@/_components/common/OtherLink'
import ProfileComponent from '@/_components/common/Profile'
import ScholarShip from '@/_components/common/ScholarShip'
import Articles from '@/_components/feature/Articles'
import { getBlogItems, type ApiKeys } from '@/libs/hatenablog'
import parseToml from '@/libs/tomlParser'

const keys: ApiKeys = {
  blogUrl: process.env.NEXT_PUBLIC_HATENA_BLOG_URL as string,
  username: process.env.NEXT_PUBLIC_HATENA_USERNAME as string,
  apiKey: process.env.NEXT_PUBLIC_HATENA_API_KEY as string,
}

const keys_2: ApiKeys = {
  blogUrl: process.env.NEXT_PUBLIC_HATENA_BLOG_URL_2 as string,
  username: process.env.NEXT_PUBLIC_HATENA_USERNAME_2 as string,
  apiKey: process.env.NEXT_PUBLIC_HATENA_API_KEY_2 as string,
}

export async function generateMetadata() {
  const data = await parseToml()
  return {
    title: data.meta.title && data.meta.title,
    description: data.meta.desc && data.meta.desc,
    icons: data.meta.imgUrl && [{ rel: 'icon', url: data.meta.imgUrl }],
    robots: {
      index: false,
      googleBot: {
        index: false,
      },
    },
    openGraph: {
      title: data.meta.title && data.meta.title,
      description: data.meta.desc && data.meta.desc,
      images: data.meta.imgUrl && [
        {
          url: data.meta.imgUrl,
          width: 200,
          height: 100,
        },
      ],
    },
  }
}

export default async function Home() {
  const posts = await getBlogItems(keys)
  const posts_2 = await getBlogItems(keys_2)

  // postsとposts_2を結合する
  posts.push(...posts_2)

  // 日付順にソート
  posts.sort((a, b) => {
    if (a.updated < b.updated) return 1
    if (a.updated > b.updated) return -1
    return 0
  })

  const data = await parseToml()

  return (
    <>
      <Header {...data.meta} />
      <ProfileComponent {...data.profile} />
      <OtherLink Links={data.otherlink} />
      <Articles articles={posts} />
      <OSS ossinfo={data.oss} />
      <EduComponent educations={data.education} />
      <ScholarShip events={data.scholarship} />
      <CareerComponent careers={data.career} />
      <EventComponent events={data.event} />
      <CopyRight year={data.copyright.year} name={data.copyright.name} />
    </>
  )
}
