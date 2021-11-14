import Card from '../../components/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const freelancerProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'DevOps',
  },
  {
    name: 'John Doe',
    jobTitle: 'Front-end Developer',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Fullstack Developer',
  },
]

function Freelancers() {
  return (
    <div>
      <h1>Freelancers 👩‍💻👨‍💻👩‍💻</h1>
      <CardsContainer>
        {freelancerProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelancers
