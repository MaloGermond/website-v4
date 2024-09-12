import React, { useEffect, useRef, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import gsap from "gsap"
import Layout from "../components/layout"
import Seo from "../components/seo"

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

const IndexPage = () => {
  const header = useRef()
  const subHeader = useRef()

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
    <Layout showHeader="false">
      <Container>
        <Title ref={header}>
          I'm working <br />
          on something new.
        </Title>
        <SubTitle ref={subHeader}>
          I’ll be live shortly! Follow me on social media for updates.
        </SubTitle>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
