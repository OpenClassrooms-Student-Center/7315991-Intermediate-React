import { Component } from 'react'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileData: {},
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`http://localhost:8000/freelancer?id=${id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({ profileData: jsonResponse?.freelanceData })
      })
  }

  render() {
    const { profileData } = this.state
    const {
      picture,
      name,
      location,
      tjm,
      job,
      skills,
      available,
      id,
    } = profileData
    return (
      <div>
        <img src={picture} alt={name} height={150} width={150} />
        <h1>{name}</h1>
        <span>{location}</span>
        <h2>{job}</h2>
        <div>
          {skills &&
            skills.map((skill) => (
              <div key={`skill-${skill}-${id}`}>{skill}</div>
            ))}
        </div>
        <div>{available ? 'Available immediately' : 'Not available'}</div>
        <span>${tjm} / day</span>
      </div>
    )
  }
}

export default Profile
