import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import 'react-vertical-timeline-component/style.min.css'
import BlockContent from '@sanity/block-content-to-react'
import {graphql} from 'gatsby'

const Philosophy = ({data}) => (
  <Layout>
    <SEO title='Philosophy' />
    <h1>{data.sanityPhilosophy.header}</h1>
    <BlockContent blocks={data.sanityPhilosophy._rawPhilosophy} />
  </Layout>
)

export default Philosophy

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
