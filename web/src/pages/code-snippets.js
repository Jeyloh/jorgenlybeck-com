import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import BlockContent from '@sanity/block-content-to-react'
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import css from 'refractor/lang/css'
import '../styles/prism.css'
import styled from 'styled-components'
import {graphql} from 'gatsby'

export const CodeBlockContent = ({blocks}) => {
  Refractor.registerLanguage(js)
  Refractor.registerLanguage(css)

  const StyledRefractor = styled(Refractor)`
    background: #272822;
  `

  const serializers = {
    types: {
      authorReference: ({node}) => <span>{node.author.name}</span>,
      code ({node}) {
        return <StyledRefractor value={node.code} language={node.language} />
      }
    }
  }
  return <BlockContent blocks={blocks} serializers={serializers} />
}

const CodeSnippets = ({data}) => (
  <Layout>
    <SEO title='Code Snippets' />
    <div>
      {data.allSanityCodeSnippets.edges.map(({node: use}) => {
        return (
          <div>
            <h5>{use.description}</h5>
            <CodeBlockContent blocks={use._rawCodeSnippet} />
          </div>
        )
      })}
    </div>
  </Layout>
)

export default CodeSnippets

export const query = graphql`
  query CodeSnippetsQuery {
    allSanityCodeSnippets {
      edges {
        node {
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
`
