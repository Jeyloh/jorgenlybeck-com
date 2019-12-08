import styled, { keyframes, css } from "styled-components";
import { APP_COLOR } from "../Common/styles";

export const StyledIndexWrapper = styled.main`
  overflow: hidden;
`;

export const IndexContent = styled.div`
  background: white;
  min-height: 50vh;
`;

export const NavigationBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  h3 {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    color: ${APP_COLOR.dark};
    border: 1px solid ${APP_COLOR.dark};
  }
`;

const size = "600vw";
const kfSlide = keyframes`
    0% { background-position-x: 0%; }
    100% { background-position-x: ${size}; }
`;

export const animatedBackground = css`
  background: repeating-linear-gradient(
    -45deg,
    ${APP_COLOR.dailyColor1} 0%,
    ${APP_COLOR.dailyColor2} 8.3%,
    ${APP_COLOR.dailyColor3} 16.6%,
    ${APP_COLOR.dailyColor1} 24.9%,
    ${APP_COLOR.dailyColor2} 33.7%,
    ${APP_COLOR.dailyColor3} 42.68%,
    ${APP_COLOR.dailyColor1} 50%
  );
  background-size: ${size} ${size};
  animation: ${kfSlide} 40s infinite linear forwards;
`;
export const SplashScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SplashScreenTitle = styled.h1`
  font-family: "Audiowide", cursive;
  user-select: none;
  padding: 1.45rem 1.0875rem;
  color: white;
  font-size: 5rem;
  text-align: center;
`;

const kfPulse = keyframes`
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
`;

export const SplashScreenArrow = styled.img`
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 100px;
  animation-name: ${kfPulse};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;
