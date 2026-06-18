import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByText(/React \+ Node 22 \+ GitHub Actions/i)
    expect(heading).toBeInTheDocument()
  })

  it('displays the project info', () => {
    render(<App />)
    const text = screen.getByText(/Đây là dự án test GitHub Action/i)
    expect(text).toBeInTheDocument()
  })
})
