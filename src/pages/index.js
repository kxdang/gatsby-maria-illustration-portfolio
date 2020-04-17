import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "../utils/global.css"
import Masonry from 'react-masonry-css'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === "post"
  )

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Layout location={location} title={siteTitle}>
      <div style={{ marginTop: "2rem" }}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          <div><img src="https://picsum.photos/200/300" /></div>

          <div><img src="https://picsum.photos/400/300" /></div>
          <div><img src="https://picsum.photos/200/500" /></div>
          <div><img src="https://picsum.photos/300/200" /></div>
          <div><img src="https://picsum.photos/600/300" /></div>
          <div> <Link to={"/whats-jamstack"}><img src="https://picsum.photos/700/400" /></Link></div>

        </Masonry>

      </div>

      {/* <Gallery /> */}
      {/* <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            key={node.fields.slug}
            style={{
              marginTop: `-15px`,
              marginBottom: `70px`,
            }}
          >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 10),
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    color: "#000000",
                    fontSize: `21px`,
                    fontWeight: `400`,
                    fontFamily: `Montserrat`,
                  }}
                  to={node.fields.slug}
                >
                  {title} 
                </Link>
              </h3>
              <small
                style={{
                  color: "#B7B7B7",
                  fontSize: `11px`,
                  fontWeight: `300`,
                }}
              >
                {node.frontmatter.date}
              </small>
            </header>
            <section
              style={{ color: "#888888", fontSize: `17px`, fontWeight: `300` }}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })} */}
    </Layout>
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
    }
  }
`
