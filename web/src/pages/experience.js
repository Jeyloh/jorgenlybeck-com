import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import wordCloud from "../assets/word_cloud";
import { graphql } from "gatsby";


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
`;


const Experiences = ({ data, location }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (!data) return
    while (ref.current && ref.current.firstChild) {
      ref.current.removeChild(ref.current.firstChild);
    }
    const techStringFromArray = data.allSanityProjects.edges.map(({ node: use }) => {
      return use.technologyString.split(",");
    });
    const merged = [].concat.apply([], techStringFromArray);

    const allMain = window.document.getElementsByTagName("main");
    const mainElem = allMain[0];


    wordCloud(merged, mainElem.offsetWidth / 1.6, mainElem.offsetHeight).start()
  }, [data])

  return (
    <Layout location={location}>
      <SEO title="Experiences" />
      <h1>Experience</h1>
      <svg ref={ref} id="word_cloud" />
    </Layout>
  );
};

export default Experiences;
