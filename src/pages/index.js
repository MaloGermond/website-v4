import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;

  max-width: var(--bp-medium);
  min-height: 100%;
  margin: auto;
`

const Title = styled.h1`
  margin: 0.5rem 0;
  font-family: playfair;
  font-size: 3rem;
  font-weight: 300;
`
const subTitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
`

const IndexPage = () => (
  <Layout showHeader="false">
    <Container>
      <Title>
        This website is
        <br />
        under maintenance.
      </Title>
      <subTitle>I’ll be back soon with nice projects.</subTitle>
    </Container>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
