import Card from '../../components/Card'
import DefaultPicture from '../../assets/profile.png'

const freelancerProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'DevOps',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Front-end Developer',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Fullstack Developer',
    picture: DefaultPicture,
  },
]

function Freelancers() {
  return (
    <div>
      <h1>Freelancers 👩‍💻👨‍💻👩‍💻</h1>
      {freelancerProfiles.map((profile, index) => (
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
