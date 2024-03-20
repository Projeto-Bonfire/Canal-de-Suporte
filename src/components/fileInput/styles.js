import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
position: relative;
`

export const Input = styled.input`
   display: none;
   
`

  export const Label = styled.label`
display: grid;
box-sizing: border-box;
place-items: center;
width: 100%;
 height: 100px;
background: ${({theme}) => theme.colors.tertiaryBackground};
color: #fff;
padding: 8px 20px;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
position: relative;

& > p {
  position: absolute;
  right: 10px;
  bottom: 10px;
  text-transform: uppercase;
  font-size: 10px;
  color: ${({theme}) => theme.colors.secondaryText};
}
  `

