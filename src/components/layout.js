/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./style.css"

// Define light and dark themes
const lightTheme = {
  background: "#f3f9f7",
  transparent: "#f3f9f700",
  surface: {
    low: "#D1E2E2",
    medium: "#BBD9DA",
    high: "#BBD9DA",
  },
  text: {
    high: "#123e36",
    medium: "#1f7c6c",
  },
}

const darkTheme = {
  background: "#131713",
  transparent: "#13171300",
  surface: {
    low: "#25332D",
    medium: "#BBD9DA",
    high: "#456E5E",
  },
  text: {
    high: "#E7ECEB",
    medium: "#90A79C",
  },
}

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

const ToggleButton = styled.button`
  background-color: ${props => props.theme.surface.low};
  border: 1px solid ${props => props.theme.transparent};
  color: ${props => props.theme.text.high};
  border-radius: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: 0.3s;
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

  // State for theme toggling
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  // Persist theme using localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        {{ showHeader } === true ? (
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        ) : null}
        <Content>{children}</Content>
        {/* Toggle Button */}
        {/*<ToggleButton onClick={toggleTheme}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </ToggleButton>*/}
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
