import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import * as Styled from '../components/IndexComponent/styles'
import RotatingCube from '../assets/RotatingCube'
import CubeRoutingContainer from '../components/Sidebar/RouteContainer'

// https://github.com/alexfoxy/laxxx/blob/master/README.md#supported-presets

const IndexPage = () => {
  const scrollTopRef = React.useRef()
  // const canvasRef = React.useRef()
  // const threeRef = React.useRef()

  function scrollDown () {
    scrollTopRef.current && scrollTopRef.current.scrollIntoView({behavior: 'smooth'})
  }

  // React.useEffect( () => {
  //   canvasRef.current && canvasRef.current.simulateDrawingLines({
  //     lines: jlhSignature
  //   })
  // }, [canvasRef])

  // React.useEffect( () => {
  //   threeRef.current && initCube(threeRef.current)
  // }, [threeRef])

  const [ currentComponent, setCurrentComponent ] = React.useState(null);
  const handleCubeCallback = (component) => {
    setCurrentComponent(component)
  }

  return (
    <Styled.StyledIndexWrapper>
      <SEO title='Jørgen Lybeck Hansen' />
      {/* <CanvasDraw
          ref={canvasRef}
          hideGrid
          disabled
          canvasWidth={200}
          canvasHeight={200}
          lazyRadius={8}
          loadTimeOffset={15}
          canvasBackground={'transparent'}
        /> */}
      {/* <Particles
          style={{position: 'absolute', top: 0, left: 0}}
          params={getParticles(particles)}
        /> */}
      {/* <Styled.SplashScreenTitle fontSize='5rem'>
          Jørgen
          <br />
          Lybeck
          <br />
          Hansen
        </Styled.SplashScreenTitle> */}
      <Layout>
        <Styled.SplashScreenWrapper>
          {/* {currentComponent ? 
          <CubeRoutingContainer component={currentComponent} />
        : */}
        <RotatingCube callback={handleCubeCallback} />
        {/* } */}
        </Styled.SplashScreenWrapper>
      </Layout>
    </Styled.StyledIndexWrapper>
  )
}

export default IndexPage
