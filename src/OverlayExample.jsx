import React from 'react'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import MyComponent1 from './MyComponent1'

function renderTooltip (props) {
  return (
    <Tooltip id='button-tooltip' {...props}>
      Simple tooltip
    </Tooltip>
  )
}

const OverlayExample = () => (
  <OverlayTrigger
    placement='bottom'
    overlay={renderTooltip}
    trigger='click'
  >
    <Button variant='success'>Click to see Toolip</Button>
  </OverlayTrigger>
)

export default OverlayExample
