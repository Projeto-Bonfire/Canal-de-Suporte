import React from 'react';

import { Container, Box, Informations } from './styles';

import Button from "../../components/button";

const Error = () => {

    return (
        <Container>
            <Box>
                <h1>4</h1>
              <img src='../../public/images/bonfireLogo.svg' width= '300px'/>
              <h1>4</h1>
            </Box>
          <Informations>
          <p>Página não encontrada :(</p>
          <Button 
            name='Voltar pra tela inicial'
            secondary='secondary'
             onAction = {() => window.location.href = '/'}
            />
          </Informations>
        </Container>
    )
}

export default Error; 