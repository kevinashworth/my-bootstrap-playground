import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyComponent1 from './MyComponent1'

function App () {
  return (
    <div className='App'>
      <Container>
        <Row>
          <Col>
            <MyComponent1 />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
