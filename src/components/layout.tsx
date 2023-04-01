import React, { useEffect } from "react"
import type { ReactNode } from "react"
import type { WindowLocation } from "@reach/router"

import queryString from "query-string"

export function Layout({
  children,
  location,
  pageContext: { locale, hreflang },
}: {
  children: ReactNode
  location: WindowLocation<unknown>
  pageContext: {
    locale: localeType
    hreflang: hreflangType[] | undefined
  }
}) {

  useEffect(() => {
    const urlParameters = queryString.parse(location.search)
    console.log('urlParameters', urlParameters)
  }, [location])

  return (
    <>
      <div>Ship Shipping</div>
      {children}
    </>
  )
}