import { GatsbyNode } from "gatsby"
import path from "path"

const locales: localeType[] = [
  { hreflang: 'en', languageCode: 'en', subFolder: 'en' },
  { hreflang: 'fr', languageCode: 'fr', subFolder: 'fr' }
]

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
}) => {
  const { createPage, createRedirect } = actions

  locales.map((locale) => {
    const { languageCode, subFolder } = locale

    // Home Page
    try {
      const url = `${subFolder}/`
      const hreflang: hreflangType[] =
        locales.map((loc) => ({
          locale: loc.hreflang,
          subFolder: loc.subFolder,
          url: `/${loc.subFolder}/`
        }))

      createPage({
        path: url,
        component: path.resolve("./src/templates/home.tsx"),
        context: {
          locale,
          hreflang
        }
      })

      createRedirect({
        fromPath: `/defense`,
        toPath: `https://www.nonstopdefense.com`,
        redirectInBrowser: true,
        statusCode: 200,
        // conditions: { language: languageCode },
      })
    } catch (error) {
      console.error(`Failed to generate home page : ${error}`)
    }
  })
}