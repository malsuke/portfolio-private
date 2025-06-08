export type Toml = {
  meta: Meta
  profile: Profile
  otherlink: OtherLinks[]
  oss: OSS[]
  education: Education[]
  career: Career[]
  event: Event[]
  copyright: CopyRight
}

export type CopyRight = {
  year?: string
  name: string
}

export type Meta = {
  imgUrl: string
  title: string
  desc: string
}

type SocialMediaAccount<SocialMedias extends string> = {
  [Key in SocialMedias]?: string
}

type SocialMedia = SocialMediaAccount<'github' | 'twitter' | 'facebook'>

type ProfileDetail = {
  [key: string]: string
}

export type Profile = {
  detail: ProfileDetail
  sns: SocialMedia
}

export type OtherLinks = {
  name: string
  url: string
}

export type OSS = {
  title: string
  url: string
}

export type Education = {
  name: string
  desc: string
  start: string
  end: string
}

export type Career = {
  name: string
  desc: string
  start: string
  end: string
}

export type Event = {
  name: string
  desc: string
  start: string
  end: string
  link?: string
}
