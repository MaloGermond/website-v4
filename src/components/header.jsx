import * as React from "react"

import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Container = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
`

const Placeholder = styled.div`
  height: 2rem;
`
const Logo = styled.div`
  height: 2rem;
`

const Header = ({ siteTitle }) => (
  <>
    <Container>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Container>
    <Placeholder />
  </>
)

export default Header
