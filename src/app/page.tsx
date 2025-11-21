import CopyRight from '@/_components/common/CopyRight'
import Header from '@/_components/common/Header/Header'
import Section, { type SectionType } from '@/_components/common/Section'
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

  const SectionType = {
    PROFILE: 'profile',
    OTHERLINK: 'otherlink',
    OSS: 'oss',
    RESEARCH: 'research',
    TIMELINE: 'timeline',
  } as const satisfies Record<string, SectionType>

  return (
    <>
      <Header {...data.meta} />
      <Section
        title="Profile"
        items={[data.profile]}
        type={SectionType.PROFILE}
      />
      <Section
        title="Links"
        items={data.otherlink}
        type={SectionType.OTHERLINK}
      />
      <Articles articles={posts} />
      <Section title="Career" items={data.career} type={SectionType.TIMELINE} />
      <Section
        title="Education"
        items={data.education}
        type={SectionType.TIMELINE}
      />
      <Section
        title="Research"
        items={data.research}
        type={SectionType.RESEARCH}
      />
      <Section
        title="SholarShip"
        items={data.scholarship}
        type={SectionType.TIMELINE}
      />
      <Section title="Event" items={data.event} type={SectionType.TIMELINE} />
      <Section
        title="OSS Contribution"
        items={data.oss}
        type={SectionType.OSS}
      />
      <CopyRight year={data.copyright.year} name={data.copyright.name} />
    </>
  )
}
