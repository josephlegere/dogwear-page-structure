import React, { useEffect } from "react"
import { graphql } from "gatsby"

export default function HomePage({ data, pageContext }: pageParamType) {

  const { locale } = pageContext

  useEffect(() => console.log('Body pageContext', pageContext), [])

  return (
    <h1>Other Home Page ({locale.hreflang})</h1>
  )
}

export const Head = ({ data, pageContext }: pageParamType) => {

  const { locale } = pageContext

  useEffect(() => console.log('Head pageContext', pageContext), [])

  return <title>Other Home Page ({locale.hreflang})</title>
}
