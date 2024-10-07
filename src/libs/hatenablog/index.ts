import parse from 'fast-xml-parser'

export type ApiKeys = {
  blogUrl: string
  username: string
  apiKey: string
}

type Articles = {
  id: string
  title: string
  url: string
  updated: string
  tags?: string[]
}

export const getBlogItems = async ({
  blogUrl,
  username,
  apiKey,
}: ApiKeys): Promise<Articles[]> => {
  const res = await fetch(
    `https://blog.hatena.ne.jp/${username}/${blogUrl}/atom/entry`,
    {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${apiKey}`)}`,
      },
    },
  ).then((res) => res.text())

  let parsed = new parse.XMLParser({
    attributeNamePrefix: '',
    ignoreAttributes: false,
  }).parse(res)

  const data = dataFactory(parsed.feed.entry)

  while (1) {
    if (!parsed.feed.link[1]) {
      break
    }
    const nextUrl = parsed.feed.link[1].href
    const res = await fetch(nextUrl, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${apiKey}`)}`,
      },
    }).then((res) => res.text())

    parsed = new parse.XMLParser({
      attributeNamePrefix: '',
      ignoreAttributes: false,
    }).parse(res)

    if (!parsed.feed) {
      break
    }
    data.push(...dataFactory(parsed.feed.entry))
  }

  return data
}

// eslintの設定によりany型を許容する
/* eslint @typescript-eslint/no-explicit-any: 0 */
const dataFactory = (entry: any) => {
  // filterできなかったときの処理を追加
  if (!Array.isArray(entry)) {
    return []
  }
  return entry
    .filter((entry: any) => entry['app:control']['app:draft'] !== 'yes')
    .map((entry: any) => {
      return {
        id: entry.id,
        title: entry.title,
        url: entry.link[1].href,
        updated: trimDate(entry.updated),
        tags: entry.category?.length
          ? entry.category.map((category: any) => category.term)
          : [],
      }
    })
}

const trimDate = (date: string) => {
  return date.split('T')[0]
}
