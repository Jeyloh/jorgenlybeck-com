import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";


export const query = graphql`
  query AboutQuery {
    sanityAbout {
      _id
      header
      _rawDescription
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
`;


const About = ({ data, error, location }) => {
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  if (!data) return null;

  else {
    const fluid = data.sanityAbout.image ? data.sanityAbout.image.asset.fluid : null;

    return (
      <Layout location={location}>
        <SEO title="Jørgen Lybeck Hansen" />

        <h1>{data.sanityAbout.header}</h1>
        <BlockContent blocks={data.sanityAbout._rawDescription} />
        {fluid ? <Img fluid={fluid} /> : null}
      </Layout>
    );
  }
};

export default About;
