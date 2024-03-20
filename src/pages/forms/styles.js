import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
margin: 0;
padding: 0;
width: 100vw;
background: ${({theme}) => theme.colors.background};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

& > section {
  display: flex;
  flex-direction: row;
  width: 60%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 441px) {
    width: 90%;
  }
}

& > section > h1 {
  text-transform: uppercase;
}
& > section > img {
  height: 80px;
  width: 80px;
}
`

export const Box = styled.div`
height: 75%;
padding: 25px 0;
width: 60%;
background: ${({theme}) => theme.colors.secondaryBackground};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;

@media (max-width: 441px) {
  width: 90%;
}

& > section {
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

& > section > #information {
  height: 75px;
  width: 200px;
  background: #eeeeee;
  position: absolute;
  top: -75px;
  left: 75px;
  display: flex;
  opacity: 0;
  transition: ease .3s;
  justify-content: center;
  border-radius: 25px 25px 25px 0;
  
}

& > section > #information p {
  width: 80%;
  margin-top: 10px;
  font-size: 10px;
  color: #000;
}
& > #description:hover #information {
  opacity: 1;
}


    & > section > #information2 {
      height: 75px;
      width: 200px;
      background: #eeeeee;
      position: absolute;
      top: -75px;
      left: 120px;
      display: flex;
      opacity: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: ease .3s;
      justify-content: center;
      border-radius: 25px 25px 25px 0;
    }

     & > section > #information2 h1 {
       color: ${({theme}) => theme.colors.primary};
       font-size: 14px;
       margin: 0;
       width: 80%;
     }

    & > section > #information2 p {
      width: 80%;

      font-size: 10px;
      color: #000;
    }

    & > #description2:hover #information2 {
      opacity: 1;
    }
`

export const Select = styled.select`
width: 100%;
height: 50px;
border: none;
outline: none;
padding: 0 8px;
color: ${({theme}) => theme.colors.text};
background: ${({theme}) => theme.colors.tertiaryBackground};
gap: 5px;
  font-size: 12px;
  text-transform: uppercase;

& > option {
  text-transform: uppercase;
  font-size: 12px;
  height: 50px;
}

`