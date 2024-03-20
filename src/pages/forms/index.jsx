import React, {useState} from 'react';
import Button from '../../components/button'
import FileInput from '../../components/fileInput'
import Input from '../../components/input'
import Layout from '../../components/layout'
import Label from '../../components/label'
import axios from 'axios';

import { Container, Box, Select } from './styles.js'
const Form = () => {
  
  const clientId = "67e9304a345f806";
  const [uploadImageUrl, setUploadImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadImgur = () => {
    if (selectedFile) {
      const apiUrl = "https://api.imgur.com/3/image";
      const formData = new FormData();
      formData.append('image', selectedFile);

      axios.post(apiUrl, formData, {
        headers: {
          'Authorization': `Client-ID ${clientId}`,
        }
      })
      .then(response => {
        const imageUrl = response.data.data.link;
        setUploadImageUrl(imageUrl);
        console.log("link da imagem no imgur:", uploadImageUrl);
      })
      .catch(error => {
        console.log("Erro ao fazer upload da imagem:", error);
      });
    } else {
      console.log("Por favor, selecione uma imagem para fazer upload");
    }
  };



  const [name, setName] = useState('');
  const [selectType, setSelectType] = useState('dúvida')
  const [description, setDescription] = useState('')
  


  const url = 'https://api.sheetmonkey.io/form/dSxGaWnL6rpGihWRqAwPEw'

  return (
    <Layout onLayout={(x) => x.setBackgroundPadding(false)}>
    <Container>
      <section>
      <h1>suporte</h1>
      <img src="../../../public/images/bonfireLogo.svg"/>
      </section>
      <Box action= {url} method="post">
      <section>
        <Label label="nome completo"></Label>
        <Input placeholder="Nome" name="Nome" onChange={(e) => setName(e.target.value)}/> 
        
        
      </section>
        <section>
        <Label label="tipo"/>
          <Select name="Tipo" onChange={(e) => setSelectType(e.target.value)}>
          <option>dúvida</option>
          <option>erro</option>
          <option>sugestão</option>
          <option>reclamação</option>
          </Select>
        </section>
          
      <section id="description">
        <Label label="descrição"/>
        <Input placeholder="Descrição" name="Descrição" onChange={(e) => setDescription(e.target.value)}/> 
        <div id="information"><p>AQUI VOCÊ PODE NOS DIZER O QUE ESTÁ ACONTENDO</p></div>
      </section>
         <section id="description2">
           <Label label="adicionar imagem"/>
      <FileInput onChange={handleFileChange}/>
           <div id="information2">
             <h1>MB (MEGABYTES)</h1>
             <p>AQUI VOCÊ PODE COLOCAR UMA IMAGEM PARA NOS AJUDAR A ENTENDER MELHOR O SEU PROBLEMA.</p>
           </div>
         </section>
        <input type="hidden" name="Data de Criação:" value="x-sheetmonkey-current-date-time" />
        <Button name="enviar" type="submit" onAction={uploadImgur}/>
        
      </Box>
    </Container>
    </Layout>
  )
}

export default Form;

// <input type="hidden" name="Data de Criação:" value="x-sheetmonkey-current-date-time" />