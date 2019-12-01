import styled from 'styled-components'
import {APP_COLOR} from '../Common/styles'
import { animatedBackground } from '../IndexComponent/styles'

export const StyledContentWrapper = styled.main`
  /* background: ${APP_COLOR.light};
  color: ${APP_COLOR.dark};
  padding: 2.45rem 1.0875rem;
  width: 100vw;

   */
   height: calc(100vh);
   ${animatedBackground}
   padding-top: 10vh;
   overflow-y: scroll;
   
     color: white;

`
