import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import * as Styled from '../components/IndexComponent/styles'
import Particles from 'react-particles-js'
import {getParticles} from '../particles-setup'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import myConfiguredSanityClient from '../../client-config'
import arrIcon from '../images/white-down-arrow.png'
import {graphql} from 'gatsby'
import RotatingCube from '../assets/RotatingCube'

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

// https://github.com/alexfoxy/laxxx/blob/master/README.md#supported-presets

const IndexPage = ({data, error}) => {
  const [particles, addParticles] = React.useState(100)
  const scrollTopRef = React.useRef()
  const threeRef = React.useRef()

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  function scrollDown () {
    scrollTopRef.current && scrollTopRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const builder = imageUrlBuilder(myConfiguredSanityClient)
  function urlFor (source) {
    return builder.image(source)
  }

  // React.useEffect( () => {
  //   threeRef.current && initCube(threeRef.current)
  // }, [threeRef])

  if (!data) return null
  return (
    <Styled.StyledIndexWrapper>
      <SEO title='Jørgen Lybeck Hansen' />
      <Styled.SplashScreenWrapper>
        {/* <Particles
          style={{position: 'absolute', top: 0, left: 0}}
          params={getParticles(particles)}
        /> */}
        {/* <Styled.SplashScreenTitle fontSize='5rem'>
          Jørgen
          <br />
          Lybeck
          <br />
          Hansen
        </Styled.SplashScreenTitle> */}
        <Styled.SplashScreenArrow src={arrIcon} alt='Logo' onClick={() => scrollDown()} />
        <RotatingCube />
      </Styled.SplashScreenWrapper>
      <Layout>
        <h1 ref={scrollTopRef}>{data.sanityAbout.header}</h1>
        <BlockContent blocks={data.sanityAbout._rawDescription} />
        <img
          src={urlFor(data.sanityAbout._rawImage)
            .width(200)
            .url()}
        />
      </Layout>
    </Styled.StyledIndexWrapper>
  )
}

export default IndexPage
