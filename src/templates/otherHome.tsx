import React, { useEffect } from "react"
import { graphql, navigate } from "gatsby"

import queryString from "query-string"

export default function HomePage({ data, location, pageContext }: pageParamType) {

  const { locale } = pageContext

  useEffect(() => console.log('Body pageContext', pageContext), [])

  useEffect(() => {
    const urlParameters = queryString.parse(location.search)

    if (urlParameters && Object.keys(urlParameters).length > 0) navigate(`/en/${location.search}`)
  }, [location])

  return (
    <h1>Other Home Page ({locale.hreflang})</h1>
  )
}

export const Head = ({ data, pageContext }: pageParamType) => {

  const { locale } = pageContext

  useEffect(() => console.log('Head pageContext', pageContext), [])

  return <title>Other Home Page ({locale.hreflang})</title>
}
