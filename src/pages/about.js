import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import avatar from "../../content/assets/bio-pic.png"

import "../utils/global.css"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title



  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2 style={{ textAlign: "center" }}>Hey, I'm Duong Thuy Nguyen👋</h2>
        <div style={{ textAlign: `center` }}>
          <img style={{ borderRadius: `50%` }} src={avatar} />
        </div>

        <p style={{ textAlign: "center" }}>I also go by Maria.</p>
        <div>
          <p>I am an illustrator and I'm here to purge my visual creation onto anyone who doesn't mind the mess :) I am currently residing in a city just outside of Toronto with two cats I'm trying to convince to love me more. I also enjoy gardening, the colour hot pink, horror manga, pop music and listening to interviews with rappers.</p>

          <p>My illustrations for Reveal News' Instagram post for an investigative article about exploiting human labour were among the submitted materials to earn a spot as a Pulitzer finalist in 2017. I am also a staff illustrator for the Global Press Accuracy Network.</p>
        </div>

        <h2 style={{ textAlign: `center` }}>Partial Client List</h2>
        <div style={{ textAlign: `center` }}>
          <ul className="client-list">
            <li>Abrams Books</li>
            <li>AKQA</li>
            <li>AnitaB.org</li>
            <li>Big Planet Comics</li>
            <li>Bloomberg Businessweek</li>
            <li>CBC</li>
            <li>Chapterhouse Comics Store</li>
            <li>Courier Magazine</li>
            <li>Culture Trip</li>
            <li>DFTBA Records</li>
            <li>Eater</li>
            <li>ESPN</li>
            <li>Global Press Journal</li>
            <li>Lion Forge</li>
            <li>Necrosoft Games</li>
            <li>Orca Book Publishers</li>
            <li>Penguin Random House</li>
            <li>Quanta Magazine</li>
            <li>The New York Times</li>
            <li>Report on Business</li>
            <li>Reveal News</li>
            <li>Simon & Schuster</li>
            <li>The Atlantic</li>
            <li>The Believer Magazine</li>
            <li>The Guardian Newspaper</li>
            <li>The National Post</li>
            <li>The New Republic Magazine</li>
            <li>The Walrus Magazine</li>
            <li>TKO Studio</li>
          </ul>
        </div>
      </div>

      <h2 style={{ textAlign: `center` }}>Selected Exhibitions</h2>
      <div style={{ textAlign: `center` }}>
        <ul className="client-list">
          <li>2018 Nucleus Portland, Salute! III (group) | Portland, Oregon</li>
          <li>2017 WOW x WOW, Squared (group) | Scotland, United Kingdom</li>
          <li>2016 October, Botanica (group) | Light Art Grey Lab, Minneapolis, Minnesota</li>
          <li>
            2016 September - Botanica (group) | Light Art Grey Lab, Minneapolis, Minnesota</li>
        </ul>
      </div>







    </Layout >
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
