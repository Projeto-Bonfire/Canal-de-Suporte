import styled from 'styled-components';

export const Container = styled.input`
background: ${({ theme }) => theme.colors.tertiaryBackground};
height: 50px;
padding: 0 10px;
outline: none;
border: none;
color: ${({ theme }) => theme.colors.text};
justify-content: space-between;
box-sizing: border-box;
align-items: center;
border-radius: 2px;
padding-top: 4px;
display: flex;
font-size: 16px;
width: 100%;

@media (max-width: 820px) {
   height: 6vh;
}

 &:focus::after {
        content: "oii";
     height: 100px;
   width: 300px;
   background: red;
    }
`;
