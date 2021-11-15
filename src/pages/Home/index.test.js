import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Home from './'
import { ThemeProvider } from '../../utils/context'

describe('The Home component', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', {
        level: 2,
        text:
          "Identify your needs and we'll take care of the rest along with our talented professionals",
      })
    ).toBeTruthy()
  })
})
