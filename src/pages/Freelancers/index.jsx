import Card from '../../components/Card'
import DefaultPicture from '../../assets/profile.png'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'DevOps',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Front-End Developer',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Full-Stack Developer',
    picture: DefaultPicture,
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
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  )
}

export default Freelancers
