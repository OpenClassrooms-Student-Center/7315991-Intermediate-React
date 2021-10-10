import Card from '../../components/Card'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'DevOps',
  },
  {
    name: 'John Doe',
    jobTitle: 'Front-End Developer',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Full-Stack Developer',
  },
]

function Freelancers() {
  return (
    <div>
      <h1>Freelancers 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          title={profile.name}
        />
      ))}
    </div>
  )
}

export default Freelancers
