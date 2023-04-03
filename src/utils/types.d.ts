interface hreflangType {
  locale: string
  subFolder: string
  url: string
}

interface localeType {
  hreflang: string
  languageCode: string
  subFolder: string
}

interface pageParamType {
  data: any
  location: any
  pageContext: {
    locale: localeType
    hreflang: hreflangType
  }
}