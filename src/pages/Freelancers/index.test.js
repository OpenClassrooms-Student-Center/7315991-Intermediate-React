import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { render } from '../../utils/test'
import { ThemeProvider } from '../../utils/context'
import Freelancers from './'

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

const server = setupServer(
  rest.get('http://localhost:8000/freelancers', (req, res, ctx) => {
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display freelancers names', async () => {
  render(
    <ThemeProvider>
      <Freelancers />
    </ThemeProvider>
  )

  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

  expect(screen.getByText('Harry Potter')).toBeInTheDocument()
  expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
})
