import styled from "styled-components"

const Section = styled.section`
  background-color: ${props => props.color};
  border-top: solid 6px #53a8b6;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 3px 3px rgb(0,0,0,.3);
  border-radius: 4px;
  transition: background-color .5s ease;
`

export default Section