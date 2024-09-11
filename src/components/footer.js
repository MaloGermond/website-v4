import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"

// import { Link } from "gatsby"

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;

  padding: 0 1rem;
  margin: 1rem auto;
`

const Caption = styled.p`
  font-size: 0.75rem;
  font-weight: 450;
  color: ${props => props.theme.text.medium};
`

const Footer = () => {
  const container = useRef()

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        container.current,
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut", delay: 2 }
      )
    }
  }, [])
  return (
    <Container ref={container}>
      <Caption>
        Thanks to <a href="https://www.gatsbyjs.com"> Gatsby </a> community for
        this awsome tool 🚀
      </Caption>
      <Caption>
        Copyright 2016-{new Date().getFullYear()}- All Rights Reserved -
        Marseille
      </Caption>
    </Container>
  )
}

export default Footer
