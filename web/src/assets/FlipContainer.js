import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../hooks";
import FlipComponent from "./FlipComponent";


export default function FlipContainer({ size, colors, callback }) {

    const {width, height} = useWindowSize();
  

    const renderFlips = () => {
        const squares = []
        for (let i = 0; i < 100; i++) {
            if (i === 32) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="J" />)
            else if (i === 33) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="Ø" />)
            else if (i === 34) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="R" />)
            else if (i === 35) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="G" />)
            else if (i === 36) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="E" />)
            else if (i === 37) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="N" />)

            else if (i === 42) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="L" />)
            else if (i === 43) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="Y" />)
            else if (i === 44) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="B" />)
            else if (i === 45) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="E" />)
            else if (i === 46) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="C" />)
            else if (i === 47) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="K" />)

            else if (i === 52) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="H" />)
            else if (i === 53) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="A" />)
            else if (i === 54) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="N" />)
            else if (i === 55) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="S" />)
            else if (i === 56) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="E" />)
            else if (i === 57) squares.push(<FlipComponent key={`flip-${i}`}  id={`flip-${i}`} text="N" />)

            else if (i === 73) squares.push(<FlipComponent key={`flip-${i}`} route={"/about"} id={`flip-${i}`} text="ABT" />)
            else if (i === 74) squares.push(<FlipComponent key={`flip-${i}`} route={"/experience"} id={`flip-${i}`} text="EXP" />)
            else if (i === 75) squares.push(<FlipComponent key={`flip-${i}`} route={"/projects"} id={`flip-${i}`} text="PRT" />)
            else if (i === 76) squares.push(<FlipComponent key={`flip-${i}`} route={"/code-snippets"} id={`flip-${i}`} text="COS" />)

            else if (i === 82) squares.push(<FlipComponent key={`flip-${i}`} id={`flip-${i}`} text="URL:" />)
            else if (i === 83) squares.push(<FlipComponent key={`flip-${i}`} onClick={() => window.open("https://www.linkedin.com/in/jorgenlybeckhansen/")} id={`flip-${i}`} text="LinkedIn" />)
            else if (i === 84) squares.push(<FlipComponent key={`flip-${i}`} onClick={() => window.open("https://medium.com/@jorgenlybeck")} id={`flip-${i}`} text="Medium" />)
            else if (i === 85) squares.push(<FlipComponent key={`flip-${i}`} onClick={() => window.open("https://github.com/jeyloh")} id={`flip-${i}`} text="Github" />)
            else if (i === 86) squares.push(<FlipComponent key={`flip-${i}`} onClick={() => window.open("https://secure.nordealiv.no/app7/enkelpensjon")} id={`flip-${i}`} text="Nordea Boost" />)
            else if (i === 87) squares.push(<FlipComponent key={`flip-${i}`} onClick={() => window.open("https://cop-tech-radar.com")} id={`flip-${i}`} text="CG Tech Radar" />)

            else squares.push(<FlipComponent direction={i % 2 === 0} key={`flip-${i}`}  id={`flip-${i}`} />)
        }
        return squares;
    }

    return (
        <StyledFlipContainer height={height} width={width}>
            {renderFlips()}
            {/* <FlipComponent /> */}

        </StyledFlipContainer>
    );
  }

const StyledFlipContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
  grid-auto-flow: row;
`;