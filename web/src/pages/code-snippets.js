import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import BlockContent from "@sanity/block-content-to-react";
import Refractor from "react-refractor";
import "../styles/prism.css";
import styled from "styled-components";
import { graphql } from "gatsby";
import js from "refractor/lang/javascript";
import css from "refractor/lang/css";
import typescript from "refractor/lang/typescript";
import batch from "refractor/lang/batch";
import python from "refractor/lang/python";
import "../styles/prism.css";

export const query = graphql`
  query CodeSnippetsQuery {
          allSanityCodeSnippets {
            edges {
              node {
                _id
                description
                codeSnippet {
                  _key
                  _type
                  code
                  language
                  filename
                }
                _rawCodeSnippet
                _rawSlug
              }
            }
          }
        }
`;

export const CodeBlockContent = ({ blocks }) => {
  Refractor.registerLanguage(js);
  Refractor.registerLanguage(css);
  Refractor.registerLanguage(python);
  Refractor.registerLanguage(typescript);
  Refractor.registerLanguage(batch);

  const StyledRefractor = styled(Refractor)`
    background: #272822;
  `;
  const serializers = {
    types: {
      authorReference: ({ node }) => <span>{node.author.name}</span>,
      code({ node }) {
        return <StyledRefractor value={node.code} language={node.language} />;
      }
    }
  };
  return <BlockContent blocks={blocks} serializers={serializers} />;
};


const CodeSnippetTitleButton = styled.button`
background: black;
color: whitesmoke;
`;


const CodeSnippets = ({ data, location }) => {
  
  return (
    <Layout location={location}>
      <SEO title="Code Snippets" />
      <div>
        <h1>Code snippets</h1>
        <p>A library of my saved code snippets for later use</p>
          {data.allSanityCodeSnippets.edges.map(({ node: codeSnippet }) => {
            return <CodeSnippet key={codeSnippet._id} codeSnippet={codeSnippet} />
          })}
        </div>
    </Layout>
  );
};

export default CodeSnippets;


const CodeSnippet = ({codeSnippet}) => {


  const [ display, setDisplay ] = React.useState(false);

  return (
    <div style={{marginBottom: 20}} onClick={() => setDisplay(!display)}>
      <CodeSnippetTitleButton>{codeSnippet.description}</CodeSnippetTitleButton>
      <p>{codeSnippet.markdown}</p>
      { display && <CodeBlockContent blocks={codeSnippet._rawCodeSnippet} />
      }
    </div>
  )
}