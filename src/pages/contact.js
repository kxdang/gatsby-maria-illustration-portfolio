import React from "react"
import { graphql } from "gatsby"
import Obfuscate from "react-obfuscate";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaEnvelopeOpen, FaTwitter, FaPatreon, FaInstagram, FaImage } from "react-icons/fa";

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2 style={{ textAlign: `center` }}>Contact</h2>
        <ul className="contact-list">

          <li className="contact-item">
            <FaEnvelopeOpen />
            <Obfuscate email="hello@dtnart.com" />
          </li>

          <li className="contact-item">
            <FaTwitter />
            <a
              href="https://twitter.com/DTNart"
              target="_blank"
              rel="noopener noreferrer"
            >
              DTNart
          </a>
          </li>

          <li className="contact-item">
            <FaPatreon />
            <a
              href="https://www.patreon.com/dtnart"
              target="_blank"
              rel="noopener noreferrer"
            >
              dtnart
          </a>
          </li>

          <li className="contact-item">
            <FaImage />
            <a
              href="https://www.inprnt.com/gallery/dtnart/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prints
          </a>
          </li>

          <li className="contact-item">
            <FaInstagram />
            <a
              href="https://www.patreon.com/dtnart"
              target="_blank"
              rel="noopener noreferrer"
            >
              dtnart
          </a>
          </li>
        </ul>


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
