import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Hey</h2>
        My name is Duong Thuy Nguyen. I also go by Maria.

I am an illustrator and I'm here to purge my visual creation onto anyone who doesn't mind the mess :) I am currently residing in a city just outside of Toronto with two cats I'm trying to convince to love me more. I also enjoy gardening, the colour hot pink, horror manga, pop music and listening to interviews with rappers.

My illustrations for Reveal News' Instagram post for an investigative article about exploiting human labour were among the submitted materials to earn a spot as a Pulitzer finalist in 2017. I am also a staff illustrator for the Global Press Accuracy Network.
        <a href="https://22boxes.com" target="blank">
          22Boxes.com
        </a>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
