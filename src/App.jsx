import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardExample from './CardExample'
import OverlayExample from './OverlayExample'

function App () {
  return (
    <div className='App'>
      <Container className='my-4'>
        <Row>
          <Col className='border mx-4'>
            <OverlayExample />
          </Col>
          <Col className='border mx-4'>
            <CardExample />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
