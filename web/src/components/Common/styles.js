import styled from 'styled-components'

function getColorsByDay () {
  const day = new Date().getDay()
  switch (day) {
    case 0:
      return {
        // PURPLE
        dailyColor1: '#20093D',
        dailyColor2: '#110421',
        dailyColor3: '#06010C'
      }
    case 1:
      return {
        // RED
        dailyColor1: '#330000',
        dailyColor2: '#210000',
        dailyColor3: '#160000'
      }
    case 2:
      return {
        // ORANGE
        dailyColor1: '#381100',
        dailyColor2: '#210A00',
        dailyColor3: '#0F0400'
      }
    case 3:
      return {
        // YELLOW
        dailyColor1: '#FFD800',
        dailyColor2: '#A88F00',
        dailyColor3: '#705F00'
      }
    case 4:
      return {
        // GREEN
        dailyColor1: '#004211',
        dailyColor2: '#00350E',
        dailyColor3: '#002309'
      }
    case 5:
      return {
        // BLUE
        dailyColor1: '#00033D',
        dailyColor2: '#00022D',
        dailyColor3: '#000121'
      }
    case 6:
      return {
        // PINK
        dailyColor1: '#4F0043',
        dailyColor2: '#38002F',
        dailyColor3: '#2B0024'
      }
    default:
      return {
        // PURPLE
        dailyColor1: '#20093D',
        dailyColor2: '#110421',
        dailyColor3: '#06010C'
      }
  }
}

export const APP_COLOR = {
  dark: '#020005',
  light: '#fff',
  ...getColorsByDay()
}

export const Row = styled.div`
  display: flex;
`
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledPre = styled.pre`
  width: 50vw;
`
export const CodeBlock = styled.code`
  background: #3e3e3e;
`
