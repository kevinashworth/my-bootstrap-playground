import React from 'react'
// import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const MyComponent1 = (props) => {
  console.log('props:', props)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src='https://loremflickr.com/320/240/girl' width='320' height='240' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <p>Eum neque placeat et cumque voluptates? Ad deleniti dolorem <em>et dolor</em> nam consectetur Quis. Eum galisum esse <strong>nam odit non tempora explicabo id optio tempora</strong> qui vero ducimus et consequatur iste qui laudantium voluptatem.</p>
        </Card.Text>
        <Card.Link href='https://react-bootstrap.github.io/'>React Bootstrap</Card.Link>
        <Card.Link href='https://react-bootstrap.github.io/react-overlays/'>React Overlays</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default MyComponent1
