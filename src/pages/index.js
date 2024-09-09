import React, { useEffect } from "react"
import styled from "styled-components"
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

  margin: 0.3125rem 0 0.1875rem 0;
  padding: 0;
`
const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;

  margin: 0.3125rem 0 0.1875rem 0;
  padding: 0;

  color: var(--text-color-medium);
`

const IndexPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".header",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power1.inOut" }
    )
    gsap.fromTo(
      ".subHeader",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power1.inOut", delay: 1 }
    )
  }, [])
  return (
    <Layout showHeader="false">
      <Container>
        <Title className="header">
          This website is
          <br />
          under construction.
        </Title>
        <SubTitle className="subHeader">
          I’ll be back soon with nice projects.
        </SubTitle>
      </Container>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
