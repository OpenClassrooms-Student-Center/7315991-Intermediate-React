import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react'
import { render } from '../../utils/test'
import Freelancers from './'
import '@testing-library/jest-dom/extend-expect'

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
    return res(
      ctx.status(200),
      ctx.json({ freelancersList: freelancersMockedData })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display freelancers names', async () => {
  render(<Freelancers />)

  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

  await waitFor(() => {
    expect(screen.getByText('Harry Potter')).toBeInTheDocument()
    expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
  })
})

it('Should display error content', async () => {
  server.use(
    rest.get('http://localhost:8000/freelancers', (req, res, ctx) => {
      return res.once(
        ctx.status(500),
        ctx.json({
          errorMessage: `Oops! There is an error with the API`,
        })
      )
    })
  )
  render(<Freelancers />)
  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  expect(screen.getByTestId('error')).toMatchInlineSnapshot(`
    <span
      data-testid="error"
    >
      Oops! There is an error with the API
    </span>
  `)
})
