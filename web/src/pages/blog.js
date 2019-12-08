import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

const Blog = ({ location }) => (
  <Layout location={location}>
    <SEO title="Blog" />
    <h1>Hi from the Blog page</h1>
  </Layout>
);

export default Blog;
