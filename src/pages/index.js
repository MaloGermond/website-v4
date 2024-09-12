import React, { useEffect, useRef, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import gsap from "gsap"
import Layout from "../components/layout"
import Seo from "../components/seo"

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

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: var(--bp-medium);
  padding: 1rem;
  margin: auto;
  gap: 0;
`

const Title = styled.h1`
  font-family: playfair;
  font-size: 3.25rem;
  line-height: 3.5rem;
  font-weight: 100;
  color: ${props => props.theme.text.high}; /* Use theme text color */
  margin: 0.3125rem 0 0.1875rem 0;
  padding: 0;
`

const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
  margin: 0.3125rem 0 0.1875rem 0;
  padding: 0;
  color: ${props => props.theme.text.medium}; /* Use theme text color */
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

const IndexPage = () => {
  const header = useRef()
  const subHeader = useRef()

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

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      header.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power1.inOut" }
    )
    gsap.fromTo(
      subHeader.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power1.inOut", delay: 1 }
    )
  }, [])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Layout showHeader="false">
        <Container>
          <Title ref={header}>
            We’re working <br />
            on something new.
          </Title>
          <SubTitle ref={subHeader}>
            We’ll be live shortly! Follow us on social media for updates.
          </SubTitle>
          {/* Toggle Button */}
          <ToggleButton onClick={toggleTheme}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </ToggleButton>
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
