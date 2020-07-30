import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import config from "../../client-config";
import styled from "styled-components";

const BlogItem = styled.section`
  position: relative;

  > * {
    position: absolute;
  }
  
  h1 {
    position: absolute;
    top: 0.5em;
    left: 0.5em;
  }


`;
export const query = graphql`
  query BlogQuery {
    allSanityBlog {
      edges {
        node {
          _id
          title
          _rawContent
          tags
          image {
            _key
            alt
            asset {
              _id
              path
            }
          }
        }
      }
    }
  }
`;

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

const Blog = ({ data, location }) => {

  const [current, setCurrent] = React.useState(null)

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <h1>Blog/Articles</h1>
      <p>Some of my blog posts and articles can be found here. <a alt="medium post" href="https://medium.com/@jorgenlybeck">More can be found here on Medium</a>. </p>
      {data.allSanityBlog.edges.map((blog) => {
        console.log(config.sanity)
        const fluidProps = blog.node.image ? getFluidGatsbyImage(blog.node.image.asset._id, { maxWidth: 1024, maxHeight: 400 }, config.sanity) : null

        return (
          <div style={{ margin: "2em 0" }}>

            <BlogItem onClick={() => setCurrent(current === blog.node._id ? null : blog.node._id)} key={blog.node._id}>
              {fluidProps ? <Img style={{ opacity: 0.5 }} fluid={fluidProps} /> : null}
              <h1 style={{marginTop: 50 }}>{blog.node.title}</h1>
            </BlogItem>


            {current === blog.node._id && (
              <div style={{ margin: "3em 0" }}>
                <BlockContent blocks={blog.node._rawContent} serializers={serializers} />
              </div>
            )}
          </div>
        )
      })}
    </Layout>
  );
}

export default Blog;
