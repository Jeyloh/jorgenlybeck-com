import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import 'react-vertical-timeline-component/style.min.css'
import BlockContent from '@sanity/block-content-to-react'
import {graphql} from 'gatsby'

export const query = graphql`
  query PhilosophyQuery {
    allSanityPhilosophy {
      edges {
        node {
          _rawPhilosophy
          _rawSlug
          _rawImages
          _id
          header
          id
          images {
            _key
            _type
          }
        }
      }
    }
  }
`

const Philosophy = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <SEO title='Philosophy' />
      {data.allSanityPhilosophy.edges.map(philosophy => {
        console.log(philosophy.node)
        if (!philosophy.node) return null
        return (
          <div key={philosophy.node._id} >
            <h1>{philosophy.node.header}</h1>
            <BlockContent blocks={philosophy.node._rawPhilosophy} />
          </div>
        )
      })}
    </Layout>
  )
}
export default Philosophy
