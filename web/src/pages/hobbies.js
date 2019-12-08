import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import "react-vertical-timeline-component/style.min.css";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const HobbyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  
  h1 {
  padding: 10px;

  }
  :hover {
    filter: unset;
  }
  background: rgba(255, 255, 255, 0.5);

  ${props =>
    props.isCurrent &&
    `
    min-height: 500px;
    width: 100%;
    justify-content: flex-start;
    filter: unset;
    background: rgba(255,255,255,0.5);

  `}

  

  h1,
  p {
    position: absolute;
  }
  @media only screen and (min-width: 1200px) {
    width: 30%;
  }
  @media only screen and (max-width: 460px) {
    width: 100%;
  }
`;

const HobbiesGridWrapper = styled.div`
  padding: 20px 0;
  display: grid;
  grid-gap: 20px 0;
  grid-template-columns: 20px 1fr 20px;
  align-content: start;
  width: 100%;
  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }

  .hs {
    display: grid;
    grid-gap: calc(20px / 2);
    grid-template-columns: 10px;
    grid-template-rows: minmax(150px, 1fr);
    grid-auto-flow: column;
    grid-auto-columns: calc(50% - 20px * 2);

    overflow-x: scroll;
    scroll-snap-type: x proximity;
    padding-bottom: calc(.75 * 20px);
    margin-bottom: calc(-.25 * 20px);

    :before,
    :after {
      content: '';
      width: 10px;
    }
  }

  .hs > li,
  .item {
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 8px;

    .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all 500ms;
    border-radius: 8px;

    ${props =>
      !props.isCurrent &&
      `

    :hover {
      filter: unset;
    }
    `};

    ${props =>
      props.isCurrent &&
      `
      filter blur(20px);
    `};
  }
  }

  .no-scrollbar {
    scrollbar-width: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;

const Hobbies = ({ data, location }) => {
  console.log(data);

  const [current, setCurrent] = React.useState(null);

  const handleSetCurrent = id => {
    console.log(id);
    //setCurrent(id)
  };

  console.log(data);
  return (
    <Layout location={location}>
      <SEO title="Hobbies" />
      <HobbyWrapper>
        
        <HobbiesGridWrapper>
          {data.allSanityHobbies.edges.map(hobbies => {
              console.log(hobbies.node);
              if (!hobbies.node) return null;
              const id = hobbies.node.id;
              const isCurrent = current === id;
              const fluid = hobbies.node.image ? hobbies.node.image.asset.fluid : null;
              return (
                <>
                  <h2>{hobbies.node.title}</h2>
                  <ul class="hs full no-scrollbar">
                    <li class="item">
                      {fluid && <Img fluid={fluid} /> }
                    </li>
                    <li class="item">test</li>
                    <li class="item">test</li>
                    <li class="item">test</li>
                    <li class="item">test</li>
                    <li class="item">test</li>
                  </ul>
                </>
              )
            })}
        </HobbiesGridWrapper>
         
      </HobbyWrapper>
    </Layout>
  );
};
export default Hobbies;

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
`;
