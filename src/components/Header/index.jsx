import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import WhiteLogo from '../../assets/white-logo.svg'
import BlackLogo from '../../assets/black-logo.svg'
import { useTheme } from '../../utils/hooks'

const HomeLogo = styled.img`
  height: 40px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`

function Header() {
  const { theme } = useTheme()

  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={theme === 'light' ? BlackLogo : WhiteLogo} />
      </Link>
      <div>
        <StyledLink $theme={theme} to="/">
          Home
        </StyledLink>
        <StyledLink $theme={theme} to="/freelancers">
          Profiles
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Take the survey
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
