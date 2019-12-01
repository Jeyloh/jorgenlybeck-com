import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import 'react-vertical-timeline-component/style.min.css'
import { graphql } from 'gatsby'
import styled from "styled-components";
import imageUrlBuilder from '@sanity/image-url'
import myConfiguredSanityClient from '../../client-config'
import Img from 'gatsby-image'

const builder = imageUrlBuilder(myConfiguredSanityClient)


const HobbyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;

`;

const HobbyItem = styled.div`
  width: 48%;
  height: 200px;
  border: 3px solid white;
  border-radius: 5px;
  margin: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 500ms;
  position: relative;
  text-align: center;
  flex-grow: 1;
  position: relative;
  overflow: hidden;

  

  :hover {
    filter: unset;
  }
  background: rgba(255,255,255,0.5);

  ${ props => props.isCurrent && `
    min-height: 500px;
    width: 100%;
    justify-content: flex-start;
    filter: unset;
    background: rgba(255,255,255,0.5);

  `}

  .gatsby-image-wrapper {
    filter: blur(2px);
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all 500ms;

    ${ props => !props.isCurrent && `

    :hover {
      filter: unset;
    }
    `};
    
  ${ props => props.isCurrent && `
      filter blur(20px);
    `};
  }

  h1 , p{
    position: absolute;
  }
  @media only screen and (min-width: 1200px) {
    width: 30%;
  }
  @media only screen and (max-width: 460px) {
    width: 100%;
  }

`;


const Hobbies = ({ data }) => {
  console.log(data)

  const [current, setCurrent] = React.useState(null);

  const handleSetCurrent = (id) => {
    console.log(id);
    //setCurrent(id)
  }

  console.log(data);
  return (
    <Layout>
      <SEO title='Hobbies' />
      <HobbyWrapper>
        {data.allSanityHobbies.edges.map(hobbies => {
          console.log(hobbies.node)
          if (!hobbies.node) return null
          const id = hobbies.node.id;
          const isCurrent = current === id;
          const fluid = hobbies.node.image ? hobbies.node.image.asset.fluid : null;
          return (
            <HobbyItem key={id} isCurrent={isCurrent} onClick={() => handleSetCurrent(id)}> 
            
            {/* imgSrc={fluid ? fluid.src : ""} */}
              {
                fluid ? <Img fluid={fluid} /> : null
              }
              <h1>{hobbies.node.title}</h1>
              {isCurrent && <>
                <p>{hobbies.node.description} </p>
              </>}
            </HobbyItem>

          )
        })}
      </HobbyWrapper>
    </Layout>
  )
}
export default Hobbies


export const query = graphql`
  query HobbiesQuery {
    allSanityHobbies {
    edges {
      node {
        id
        description
        title
        image {
          _key
          asset {
            fluid(maxWidth: 600) {
              aspectRatio
              src
              srcSet
              sizes
              base64
              srcWebp
              srcSetWebp
              }
          }
        }
      }
    }
  }
  }
`