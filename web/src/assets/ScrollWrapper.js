import React, { useState } from "react";
import styled from "styled-components";
import { rotateAnimation } from "./keyframes";
import Particles from "react-particles-js";
import { getParticles } from "../particles-setup";
import { animatedBackground } from "../components/IndexComponent/styles";
import { motion, useAnimation, useCycle } from "framer-motion";
import CodeSnippetsComponent from "../components/CodeSnippetsComponent";
import { navigate } from "gatsby";


const ScrollWrapper = () => {

    let wrapperRef = React.useRef();

    React.useEffect( (e) => {
        
        wrapperRef.current = window.addEventListener("scroll", e => {
            console.log(e)
        })
        return ( () => {
            window.removeEventListener("scroll", wrapperRef.current);
        })
    })


    return (
        <StyledScrollWrapper>

            <ScrollContainer horizontal>

            </ScrollContainer>
            <ScrollContainer vertical>

            </ScrollContainer>

        </StyledScrollWrapper>
    )
}


export default ScrollWrapper; 

const ScrollContainer = styled.div`
    ${ props => 
        props.horizontal ? `
        overflow-y: hidden;
        overflow-x: scroll;
        background: rgba(0,0,0,0.5);
        border: 1px solid green;
        width: 200vw;
        height: 100vh;
        `
        : `
        overflow-y: scroll;
        overflow-x: hidden;
        background: rgba(0,0,0,0.5);
        border: 1px solid blue;
        width: 100vw;
        height: 200vh;
        `
    }

`
const StyledScrollWrapper = styled.div`
    width: 500vw;
    height: 500vh;
    position: absolute;
    background: rgba(0,0,0,0.5);
    border: 1px solid red;
    top: 2vh; bottom: 2vh; left: 2vh; right: 2vh;
    display: grid;

`;