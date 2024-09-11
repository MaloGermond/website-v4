/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./style.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-color: ${props => props.theme.background};
`

const Content = styled.main`
  max-width: 1280px;
  margin: auto 0;
`

const Layout = ({ children, showHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      {{ showHeader } === true ? (
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      ) : null}
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default Layout
