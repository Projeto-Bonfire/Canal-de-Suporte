import React from 'react';
import Button from '../../components/button'
import FileInput from '../../components/fileInput'
import Input from '../../components/input'
import Layout from '../../components/layout'
import Label from '../../components/label'

import { Container, Box, Select } from './styles.js'
const Form = () => {
  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
    <Container>
      <section>
      <h1>suporte</h1>
      <img src="../../../public/images/bonfireLogo.svg"/>
      </section>
      <Box>
      <section>
        <Label label="nome completo"/>
        <Input placeholder="Nome"/> 
      </section>
        <section>
        <Label label="tipo"/>
          <Select>
          <option><p>dúvida</p></option>
          <option>erro</option>
          <option>sugestão</option>
          <option>reclamação</option>
          </Select>
        </section>
      <section id="description">
        <Label label="descrição"/>
        <Input placeholder="Descrição"/> 
        <div id="information"><p>AQUI VOCÊ PODE NOS DIZER O QUE ESTÁ ACONTENDO</p></div>
      </section>
         <section id="description2">
           <Label label="adicionar imagem"/>
      <FileInput/>
           <div id="information2">
             <h1>MB (MEGABYTES)</h1>
             <p>AQUI VOCÊ PODE COLOCAR UMA IMAGEM PARA NOS AJUDAR A ENTENDER MELHOR O SEU PROBLEMA.</p>
           </div>
         </section>
        <Button name="enviar"/>
      </Box>
    </Container>
    </Layout>
  )
}

export default Form;