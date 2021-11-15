import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelancers() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelancers`
  )

  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Find your service provider</PageTitle>
      <PageSubtitle theme={theme}>
        Here at Shiny we bring together the best profiles for you.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList?.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
              theme={theme}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelancers
