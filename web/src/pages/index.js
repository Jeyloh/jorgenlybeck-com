import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import * as Styled from "../components/IndexComponent/styles";
import RotatingCube from "../assets/RotatingCube";
import CubeRoutingContainer from "../components/Sidebar/RouteContainer";

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

  const [currentComponent, setCurrentComponent] = React.useState(null);
  const handleCubeCallback = component => {
    setCurrentComponent(component);
  };

  console.log(location);

  return (
   
      <Layout location={location}>
      <SEO title="Jørgen Lybeck Hansen" />
      
      <RotatingCube callback={handleCubeCallback} />
     
      </Layout>
  );
};

export default IndexPage;
