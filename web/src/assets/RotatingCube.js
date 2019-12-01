import React, { useState } from 'react'
import styled from 'styled-components'
import { rotateAnimation } from './keyframes'
import Particles from 'react-particles-js'
import { getParticles } from '../particles-setup'
import { animatedBackground } from '../components/IndexComponent/styles'
import { motion, useAnimation, useCycle } from 'framer-motion'
import CodeSnippetsComponent from '../components/CodeSnippetsComponent'
import { navigate } from "gatsby"

// https://codepen.io/magnus16/pen/rbEju


const cubeVariants = {
    initRotation: {
        rotateX: 360,
        rotateY: 360,
        transition: {
            loop: Infinity,
            ease: 'linear',
            duration: 100,
        }
    },
    quickRotation: {
        rotateX: 360,
        rotateY: 360,
        transition: {
            loop: Infinity,
            ease: 'linear',
            duration: 10,
            scale: {
                delay: 1,
                duration: 5
            }
        }
    },
    scaleBack: {
        scale: 1,
        transition: {
            ease: 'easeInOut',
            duration: 3,
        }
    },
    unset: {
        scale: 1.4,
        rotateY: 0,
        rotateX: 0,
        x: 0,
        y: 0
    }
}

const containerVariants = {
    passive: {
        scale: 1
    },
    spin: {
        rotate: 360,
        scale: 0.01,
        x: 0,
        y: 0,
        transition: {
            rotate: {
                ease: 'linear',
                loop: 10,
                duration: 1,
            },
            // x: {
            //     type: "keyframes", ease: 'easeInOut', values: [-300, 300, -300], loop: 5, duration: 2,
            // },
            // y: { type: "keyframes", ease: 'easeInOut', values: [-100, 100, -100], loop: 5, duration: 2 },
            scale: {
                ease: 'easeInOut',
                delay: 1,
                duration: 10
            }
        }
    },
    unset: {
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0
    }
}




function RotatingCube({ size, colors, callback }) {
    const [clicked, toggleClicked] = useState(false)
    const [particles, setParticles] = useState(getParticles(50))


    const [currentCubeAnimation, cycleCube] = useCycle(
        "initRotation",
        "quickRotation",
        "scaleBack",
        "unset"
    )
    const [currentContainerAnimation, cycleContainer] = useCycle(
        "passive",
        "spin",
        "unset"
    )

    const [currentComponent, seturrentComponent] = React.useState(null)


    const handleRoute = route => {
        // alert(route)
        if (clicked) return null;
        toggleClicked(true)

        cycleCube()
        cycleContainer()
        setTimeout(() => {
            // cycleCube(3)
            // cycleContainer(2)
            // toggleClicked(true)
            // cycleCube(3)
            // seturrentComponent(route)
            // setParticles(getParticles(46))

            // setTimeout(() => {
            // }, 2000)
            navigate("/hobbies")

        }, 10000)
       

        console.log(currentCubeAnimation)
        console.log(currentContainerAnimation)
        // setRoute(route)
    }

    const renderComponent = () => {

        console.log(currentComponent)
        switch (currentComponent) {
            case "About": return <h1>æææ</h1>
            case "Hobbies": return <h1>æææ</h1>
            case "Portfolio": return <h1>æææ</h1>
            case "Code Snippets": return <CodeSnippetsComponent />
            case "Blog": return <h1>æææ</h1>
            case "Something Crazy": return <h1>æææ</h1>
            default: return <h1>miss...</h1>
        }
    }

    return (
        <CubeContainer noAnimation={!!currentComponent} size={100} animate={!!currentComponent ? "none" : currentContainerAnimation} variants={containerVariants}>
            <Cube
                animate={!!currentComponent ? "none" : currentCubeAnimation}
                variants={cubeVariants}
                whileHover={!clicked && { scale: 1.2 }}
                size={size}
                noAnimation={!!currentComponent}
            >
                <Side size={size} id='s1' color={colors[0]} onClick={() => handleRoute('About')}>
                    <Particles style={{ position: 'absolute', top: 0, left: 0 }} params={particles} />
                    {currentComponent ? renderComponent() : <>
                        Jørgen <br /> Lybeck <br /> Hansen

                    </>}

                </Side>
                {!currentComponent ? <>

                    <Side size={size} id='s2' color={colors[1]} onClick={() => handleRoute('Hobbies')}>
                        <Particles style={{ position: 'absolute', top: 0, left: 0 }} params={particles} />
                        Hobbies
        </Side>
                    <Side size={size} id='s3' color={colors[0]} onClick={() => handleRoute('Portfolio')}>
                        <Particles style={{ position: 'absolute', top: 0, left: 0 }} params={particles} />
                        Experience/
          <br />
                        Portfolio
        </Side>
                    <Side size={size} id='s4' color={colors[1]} onClick={() => handleRoute('Code Snippets')}>
                        <Particles style={{ position: 'absolute', top: 0, left: 0 }} params={particles} />
                        Code Snippets
        </Side>
                    <Side size={size} id='s5' color={colors[2]} onClick={() => handleRoute('Blog')}>
                        <Particles style={{ position: 'absolute', top: 0, left: 0 }} params={particles} />
                        Blog/
          <br />
                        Articles
        </Side>
                    <Side size={size} id='s6' color={colors[2]} onClick={() => handleRoute('Something Crazy')}>
                        <Particles style={{ position: 'absolute', top: 0, left: 0 }} params={particles} />
                        Articles/
          <br />
                        Something Crazy
        </Side>
                </> : null}
            </Cube>
        </CubeContainer>
    )
}

RotatingCube.defaultProps = {
    size: 100,
    colors: ['#41C3AC', '#f9a000', '#fb00ba']
}

export default RotatingCube

const CubeContainer = styled(motion.div)`
  position: absolute;
  top: 15vh;
  left: calc(50% - ${props => props.size + "px"} );
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  transform: translateX(-50%) translateY(-50%);
  perspective: 400px;
  ${ props => props.noAnimation && `
      transform: unset;
      left: 0;
      width: unset;
      height: unset;
   `};
`

const Cube = styled(motion.div)`
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  transform-origin: 100% 100%;
  transform-style: preserve-3d;

  > div {
      ${ props => props.noAnimation && `
        transform: unset;
        height: 50vh;
        width: 60vw;
        margin: 0 auto;
      ` };
  }
`

const Side = styled.div`
  position: absolute;
  display: block;
  height: ${props => props.size * 2 + 'px'};
  width: ${props => props.size * 2 + 'px'};
  ${animatedBackground}
  transition: 2000ms all;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 130%;
  line-height: 110%;
  padding: 10%;
  user-select: none;
  font-family: 'Audiowide', cursive;
  line-break: all;
  border: 3px solid white;

  ${props =>
        props.id === 's1' &&
        `
    transform: translateZ(${props.size}px);

  `};

  transform: ${props => {
        switch (props.id) {
            case 's2':
                return `rotateY(90deg) translateZ(${props.size}px)`
            case 's3':
                return `rotateY(180deg) translateZ(${props.size}px)`
            case 's4':
                return `rotateY(-90deg) translateZ(${props.size}px)`
            case 's5':
                return `rotateX(90deg) translateZ(${props.size}px)`
            case 's6':
                return `rotateX(-90deg) translateZ(${props.size}px)`
        }
    }};
`
