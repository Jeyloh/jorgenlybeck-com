import React, { useState } from "react";
import styled from "styled-components";
import { rotateAnimation } from "./keyframes";
import Particles from "react-particles-js";
import { getParticles } from "../particles-setup";
import { animatedBackground } from "../components/IndexComponent/styles";
import { motion, useAnimation, useCycle } from "framer-motion";
import CodeSnippetsComponent from "../components/CodeSnippetsComponent";
import { navigate } from "gatsby";
import { useWindowSize } from "../hooks";

function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    React.useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );

    return debouncedValue;
}

function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  function replaceVerticalScrollByHorizontal(event) {
    if (event.deltaY != 0) {
      // manually scroll horizonally instead
    window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
    
    // prevent vertical scroll
      event.preventDefault();
  }
  return;
}

const ScrollWrapper = () => {
    const [index, setIndex] = React.useState(0);
    const debouncedIndex = useDebounce(index, 500);
    const { width } = useWindowSize();
    let listenerRef = React.useRef();
    let wrapperRef = React.useRef();
    let nextCompRef = React.useRef();

    const componentsArray = React.useMemo( () => [
        {
          Component: <div><h1>comp 1</h1></div>,
        },
        
        {
          Component: <div><h1>comp 2</h1></div>,
        },
        
        {
          Component: <div><h1>comp 3</h1></div>,
        }
      ])
      

    React.useEffect((e) => {


        listenerRef.current = window.addEventListener("scroll", (e) => throttle(() => {
            console.log(e);
            e.preventDefault();
            // useDebounce to not spam new index
            console.log(index);
            setIndex(debouncedIndex + 1)
            nextCompRef.current ? nextCompRef.current.scrollIntoView({ behavior: "smooth" }) : alert("no current")
            // Scroll right 100vw every index update, or 100vh if vertical
            // wrapperRef.current.scrollTo(x + )
        },  1000))
        return (() => {
            window.removeEventListener("scroll", listenerRef.current);
        })
    }, )

    // ON index === 0, create an animated text component which pops up every letter by each .2s

    const getGridPlacement = (_i) => {
        if (_i === 0) {
            return {cS:1, cE: 3, rS: 1, rE: 1}
        } else if (_i === 1) return {cS:3, cE: 3, rS: 1, rE: 3}
        else if (_i === 2) return {cS:3, cE: 5, rS: 3, rE: 3}
    }

    const nextComponent = () => {
        setIndex(debouncedIndex + 1)

        nextCompRef.current ? nextCompRef.current.scrollIntoView({ behavior: "smooth" }): alert("no current")
    }
  
    return (
        <StyledScrollWrapper ref={wrapperRef}>


            {componentsArray.map((obj, i) => {
                console.log("indexes: ", i, debouncedIndex, index)
                console.log("Component: ", obj.Component)
                    return (
                        <ScrollContainer ref={debouncedIndex + 1 === i ? nextCompRef : null} 
                                        key={i} horizontal={i !== 1} 
                                        gridColStart={getGridPlacement(i).cS} gridColEnd={getGridPlacement(i).cE} 
                                        gridRowStart={getGridPlacement(i).rS} gridRowEnd={getGridPlacement(i).rE} 
                                        
                                        >
            <button onClick={nextComponent}>Next</button>

                            {obj.Component}
                        </ScrollContainer>
                    )
            })}


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
        `
            : `
        overflow-y: scroll;
        overflow-x: hidden;
        background: rgba(0,0,0,0.5);
        border: 1px solid blue;
        `
    };

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    grid-column-start:      ${props => props.gridColStart};
    grid-column-end:        ${props => props.gridColEnd};
    grid-row-start:         ${props => props.gridRowStart};
    grid-row-end:           ${props => props.gridRowEnd};

`
const StyledScrollWrapper = styled.div`
    width: 500vw;
    height: 500vh;
    background: rgba(0,0,0,0.5);
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

`;