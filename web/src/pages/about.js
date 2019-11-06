import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import myConfiguredSanityClient from '../../client-config'

export const query = graphql`
  query AboutQuery {
    sanityAbout {
      _id
      header
      _rawDescription
      _rawImage
    }
  }
`

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor (source) {
  return builder.image(source)
}

const About = ({data, error}) => {
  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }
  if (!data) return null
  else {
    return (
      <Layout>
        <SEO title='Jørgen Lybeck Hansen' />

        <h1>{data.sanityAbout.header}</h1>
        <BlockContent blocks={data.sanityAbout._rawDescription} />
        <img
          src={urlFor(data.sanityAbout._rawImage)
            .width(200)
            .url()}
        />
      </Layout>
    )
  }
}

export default About
