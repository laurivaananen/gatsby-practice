/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import InfoBox from "./infoBox"
import { graphql } from "gatsby"

const shortcodes = { InfoBox }

const MarkdownLayout = ({ data: { mdx } }) => {
  return (
    <MDXProvider
      components={{
        p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
        ...shortcodes,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </MDXProvider>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default MarkdownLayout
