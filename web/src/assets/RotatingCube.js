import React, {useState} from 'react'
import styled from 'styled-components'
import {rotateAnimation} from './keyframes'
import Particles from 'react-particles-js'
import {getParticles} from '../particles-setup'
import { animatedBackground } from '../components/IndexComponent/styles'
import { motion } from "framer-motion";

// https://codepen.io/magnus16/pen/rbEju


function RotatingCube ({size, colors}) {
  const [active, toggleActive] = useState(true)

  const handle = (bool) => {
    toggleActive(bool)
  }

  const _particles = getParticles(50)

  return (
    <CubeContainer
      transition={{duration: 2}}
      whileHover={{scale: 1.2}}
      whilePress={{scale: 0.8}}
      onHoverStart={e => handle(false)}
      onHoverEnd={e => handle(true)}
    >
      <Cube
        animate={{rotateX: 360, rotateY: 360, rotateZ: 360}}
        transition={{
          loop: Infinity,
          type: 'spring',
          velocity: 0,
          ease: 'linear',
          duration: 40
        }}
        onClick={() => toggleActive(!active)}
        size={size}
      >
        <Side size={size} id='s1' color={colors[0]}>
          <Particles
            style={{position: 'absolute', top: 0, left: 0}}
            params={_particles}
          />
          Jørgen <br /> Lybeck <br />Hansen
        </Side>
        <Side size={size} id='s2' color={colors[1]}>
          <Particles
            style={{position: 'absolute', top: 0, left: 0}}
            params={_particles}
          />
        </Side>
        <Side size={size} id='s3' color={colors[0]}>
          <Particles
            style={{position: 'absolute', top: 0, left: 0}}
            params={_particles}
          />
          Experience/<br />
          Portfolio
        </Side>
        <Side size={size} id='s4' color={colors[1]}>
          <Particles
            style={{position: 'absolute', top: 0, left: 0}}
            params={_particles}
          />
          Code Snippets
        </Side>
        <Side size={size} id='s5' color={colors[2]}>
          <Particles
            style={{position: 'absolute', top: 0, left: 0}}
            params={_particles}
          />
          Blog/<br />
          Articles
        </Side>
        <Side size={size} id='s6' color={colors[2]}>
          <Particles
            style={{position: 'absolute', top: 0, left: 0}}
            params={_particles}
          />
          Articles/<br />
          Something Crazy
        </Side>
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
  top: 50%;
  left: 50%;
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  transform: translateX(-50%) translateY(-50%);
  perspective: 400px;
`

const Cube = styled(motion.div)`
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  transform-origin: 100% 100%;
  transform-style: preserve-3d;
`

const Side = styled.div`
  position: absolute;
  display: block;
  height: ${props => (props.size * 2) + 'px'};
  width: ${props => (props.size * 2) + 'px'};
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

  ${props => props.id === 's1' && `
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
