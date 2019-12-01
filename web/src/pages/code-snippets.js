import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import BlockContent from '@sanity/block-content-to-react'
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import css from 'refractor/lang/css'
import '../styles/prism.css'
import styled from 'styled-components'
import CodeSnippetsComponent from '../components/CodeSnippetsComponent'

const CodeSnippets = () => {

  return (
    <Layout>
      <SEO title='Code Snippets' />
      <CodeSnippetsComponent />
    </Layout>
  )
}

export default CodeSnippets

