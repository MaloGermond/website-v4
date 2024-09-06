import * as React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>503: Website under maintenance</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
