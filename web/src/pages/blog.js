import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import TextAnimation from "../assets/TextAnimation";

const Blog = ({ location }) => (
  <Layout location={location}>
    <SEO title="Blog" />
    <TextAnimation text="Hi from the blog page" />
  </Layout>
);

export default Blog;
