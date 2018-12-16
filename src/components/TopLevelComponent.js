
import React, {Component} from 'react'
import styled from 'styled-components'
import BottomComponent from './BottomComponent'

export default class TopLevelComponent extends Component {
  render() {
    return (
      <StyledComponent>
        <BottomComponent/>
      </StyledComponent>
    )
  }
}

const StyledComponent = styled.div`
  background-color: green;

  .indirect-child {
    opacity: 0.1
  }
`