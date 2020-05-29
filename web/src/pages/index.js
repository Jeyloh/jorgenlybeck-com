import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import FlipContainer from "../assets/FlipContainer";

// https://github.com/alexfoxy/laxxx/blob/master/README.md#supported-presets



const IndexPage = ({ location }) => {
  const scrollTopRef = React.useRef();
  // const canvasRef = React.useRef()
  // const threeRef = React.useRef()

  function scrollDown() {
    scrollTopRef.current && scrollTopRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // React.useEffect( () => {
  //   canvasRef.current && canvasRef.current.simulateDrawingLines({
  //     lines: jlhSignature
  //   })
  // }, [canvasRef])

  // React.useEffect( () => {
  //   threeRef.current && initCube(threeRef.current)
  // }, [threeRef])




  console.log(location);

  return (
      <>
        <SEO title="Jørgen Lybeck Hansen" />
        <FlipContainer/>
      </>
  );
};

export default IndexPage;
