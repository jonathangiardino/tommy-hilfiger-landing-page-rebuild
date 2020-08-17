import React from "react"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Video from "../components/video"
import RedLine from "../components/redLine"

// ASSETS
import TestVideo from "../video/test-video.mp4"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Video testVideo={TestVideo} />
    <RedLine />
  </Layout>
)

export default IndexPage
