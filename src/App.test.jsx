import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('React + Node 22 + GitHub Actions')
  })

  it('displays the project info', () => {
    render(<App />)
    expect(screen.getByText('Thông tin dự án:')).toBeInTheDocument()
  })
})
