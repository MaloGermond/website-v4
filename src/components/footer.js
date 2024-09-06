import * as React from "react"

import styled from "styled-components"

import { Link } from "gatsby"

const Container = styled.header`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`

const Caption = styled.p`
  font-size: 0.75rem;
  font-weight: 450;
  color: var(--text-color-medium);
`

const Footer = () => (
  <Container>
    <Caption>
      Thanks to <a href="https://www.gatsbyjs.com"> Gatsby </a> community for
      this awsome tool 🚀
    </Caption>
    <Caption>
      Copyright 2016-{new Date().getFullYear()}- All Rights Reserved - Marseille
    </Caption>
  </Container>
)

export default Footer
