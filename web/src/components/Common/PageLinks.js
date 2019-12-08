import React from "react";
import { Link } from "gatsby";

export const PageLinks = () => {
  return (
    <>
      <h3>
        <Link to="/projects/">Projects</Link>
      </h3>
      <h3>
        <Link to="/experience/">Experience</Link>
      </h3>
      <h3>
        <Link to="/blog/">Blog</Link>
      </h3>
      <h3>
        <Link to="/uses/">Uses</Link>
      </h3>
    </>
  );
};
