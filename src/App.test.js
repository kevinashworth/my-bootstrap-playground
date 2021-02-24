import React from 'react'
import { render } from '@testing-library/react'
import './matchMedia.mock.js'
import App from './App'

test('renders a bootstrap link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/bootstrap/i)
  expect(linkElement).toBeInTheDocument()
})
