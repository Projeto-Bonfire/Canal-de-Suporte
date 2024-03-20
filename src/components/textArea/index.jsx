import React from 'react'
import {Container} from "./styles";

const TextArea = () => {
  return(
    ({onChange, value, height, placeholder}) => {
    return (
        <Container height={height}>
            <textarea
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                required
           />

       </Container>

    );
  )
}


export default TextArea