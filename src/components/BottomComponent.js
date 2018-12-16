
import React, {Component} from 'react'
import styled from 'styled-components'

export default class BottomComponent extends Component {
  render() {
    return (
      <StyledComponent>
        <div className="direct-child"/>
        <div className="indirect-child"/>
      </StyledComponent>
    )
  }
}

const StyledComponent = styled.div`
  > .direct-child {
    width: 100px;
    height: 100px;
    background-color: red
  }
  
  .indirect-child {
    width: 100px;
    height: 100px;
    background-color: blue
  }
`