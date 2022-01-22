import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 10px;
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.title};
  text-align: center;
`

const NotFoundPage = () => (
  <Wrapper>
    Error 404
    <br />
    Page Not Found
  </Wrapper>
)

export default NotFoundPage
