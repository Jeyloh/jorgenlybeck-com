import {css, keyframes} from 'styled-components'

const rotate = keyframes`
   0%{
      transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    33.33%{
       transform:rotateX(360deg) rotateY(0deg)  rotateZ(0deg);    
    }
    66.66%{
       transform:rotateX(360deg) rotateY(360deg)  rotateZ(0deg);
    }
    100%{
      transform:rotateX(360deg) rotateY(360deg)  rotateZ(360deg);
    }
`

const xyRotation = keyframes`
   0%{
      transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100%{
       transform:rotateX(360deg) rotateY(360deg)  rotateZ(0deg);    
    }
`

export const rotateAnimation = () =>
  css`
    ${xyRotation} 20s infinite linear;
  `
export const rotateOnceAnimation = () =>
  css`
    ${rotateX} 4s;
  `

const rotateX = keyframes`
   0%{
      transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100%{
      transform:rotateX(0deg) rotateY(360deg)  rotateZ(0deg);
    }
`

export const rotateXAnimation = () =>
  css`
    ${rotateX} 4s infinite alternate;
  `

export const glowAnimation = () =>
  css`
    animation: ${glow} 3s ease-in-out;
  `

const glow = keyframes`
    0% {
      text-shadow:  0 0 10px white;
    }
    15% {
      text-shadow: 2px 2px 10px rgba(255, 255, 255, 1),
      -2px -2px 10px rgba(255, 255, 255, 1);
    }
    30% {
      text-shadow: 2px 2px 4px rgba(255, 255, 255, .7),
      -2px -2px 4px rgba(255, 255, 255, .7);
    }
    50% {
      text-shadow: 20px 20px 50px rgba(255, 255, 255, .5),
      -20px -20px 50px rgba(255, 255, 255, .5);
    }
`
