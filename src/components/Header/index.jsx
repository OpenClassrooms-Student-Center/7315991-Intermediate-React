import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/survey/1">Survey</Link>
      <Link to="/freelancers">Profiles</Link>
    </nav>
  )
}

export default Header
