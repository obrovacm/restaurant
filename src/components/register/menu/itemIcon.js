import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Img from "gatsby-image"

const ItemIcon = props => (
  <StaticQuery
    query={graphql`
      query {
        allFile {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const icon = data.allFile.edges.find(edge => {
        return edge.node.name === props.name
      })
      if (!icon) {
        return null
      }

      const iconSizes = icon.node.childImageSharp.fluid
      return (
        <Img alt={props.name} sizes={iconSizes} className={props.className} />
      )
    }}
  />
)

export default ItemIcon
