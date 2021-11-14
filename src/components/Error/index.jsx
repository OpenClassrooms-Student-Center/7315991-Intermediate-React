import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Illustration = styled.img`
  max-width: 800px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oops...</ErrorTitle>
      <Illustration src="https://github.com/atoulmet/assets/blob/master/404.svg?raw=true" />
      <ErrorSubtitle>
        It looks like the page you're after doesn't exist
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
