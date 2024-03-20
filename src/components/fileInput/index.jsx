import React from 'react'
import {Container, Input, Label} from "./styles";
import { MdOutlineWallpaper } from 'react-icons/md'
const FileInput = () => {

  return(
    
      <Container>
      <Input type="file" id="fileInput"/>
      <Label htmlFor="fileInput">
            <MdOutlineWallpaper size={48} className="upload-icon" />
            <p>tamanho máximo de 5 mb</p>
        </Label>
      
      </Container>
      
  )
}


export default FileInput