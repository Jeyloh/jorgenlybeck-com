import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import wordCloud from '../assets/word_cloud'
import {graphql} from 'gatsby'

const Experiences = ({data}) => {
  const ref = React.useRef()

  React.useEffect(() => {
    while (ref.current && ref.current.firstChild) {
      ref.current.removeChild(ref.current.firstChild)
    }
    const techStringFromArray = data.allSanityProjects.edges.map(({node: use}) => {
      return use.technologyString.split(',')
    })
    const merged = [].concat.apply([], techStringFromArray)

    console.log(merged)

    const allMain = window.document.getElementsByTagName("main");
    const mainElem = allMain[0];


    wordCloud(merged, mainElem.offsetWidth / 1.01, mainElem.offsetHeight / 1.5).start()
  })

  return (
    <Layout>
      <SEO title='Experiences' />
      <svg ref={ref} id='word_cloud' />
    </Layout>
  )
}

export default Experiences

export const query = graphql`
  query ExperienceQuery {
    allSanityProjects {
      edges {
        node {
          _id
          title
          description {
            _key
            _type
            style
            list
          }
          color {
            _key
            _type
            hex
            alpha
          }
          _rawDescription
          _rawColor
          _rawSlug
          technologyString
        }
      }
    }
  }
`
