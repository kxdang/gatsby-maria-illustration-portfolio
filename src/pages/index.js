import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import Masonry from 'react-masonry-css'
import Img from 'gatsby-image'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const images = data.allFile.edges

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (

    < Layout location={location} title={siteTitle} >
      <div style={{ marginTop: "2rem" }}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {images.map((object) => (
            <div key={object.node.childImageSharp.id}><Link to={`/${object.node.name}`}><Img fluid={object.node.childImageSharp.fluid} /></Link></div>
          ))}
        </Masonry>
      </div>
    </Layout >
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            template
            title
            tags
            description
            slug
            category
          }
        }
      }
    },
    allFile(sort: {order: ASC, fields: name},filter: {relativeDirectory: {eq: "gallery"}}) {
      edges {
        node {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  
  }
`
