import PropTypes from 'prop-types'
import React from 'react'
import {StyledContentWrapper} from './styles'

const Content = ({children}) => <StyledContentWrapper>{children}</StyledContentWrapper>

Content.propTypes = {
  children: PropTypes.element
}

Content.defaultProps = {
  children: ``
}

export default Content
