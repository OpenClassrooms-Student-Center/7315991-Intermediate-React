import { rest } from 'msw'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test'
import Freelancers from './'

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Front-End Magician',
    picture: '',
    id: 1,
  },
  {
    name: 'Hermione Granger',
    job: 'Full-Stack Magician',
    picture: '',
    id: 2,
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

it('Should display freelancers names after loader is removed', async () => {
  render(<Freelancers />)

  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  expect(screen.getByText('Harry Potter')).toBeInTheDocument()
  expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
  expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})
