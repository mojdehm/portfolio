export interface ContentSection {
  title: string
  content: string[]
}

export interface AboutContent {
  sections: ContentSection[]
}

export interface NewsItem {
  date: string
  content: string
}

export interface HomeContent {
  'main-section': {
    title: string
    content: string[]
  }
  news?: NewsItem[]
  sections: ContentSection[]
}

export interface ResearchContent {
  sections: ContentSection[]
}

export interface PublicationItem {
  item: string
  status: string
  link: string
}

export interface PublicationsContent {
  main: {
    title: string
    list: PublicationItem[]
  }
  sections: ContentSection[]
}
