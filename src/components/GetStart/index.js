import React from 'react';

import * as G from './styles';

function GetStart () {
  return (
    <G.Container>
      <G.FormWrap>
        <G.Icon to="/">Rocket</G.Icon>
        <G.FormContent>
          <G.Form action="#">
          <G.FormTitle>Introduza seus dados</G.FormTitle>
            <G.FormLabel htmlFor="for">Nome</G.FormLabel>
            <G.FormInput type="text" required />
            <G.FormLabel htmlFor="for">Email</G.FormLabel>
            <G.FormInput type="email" required />
            <G.FormLabel htmlFor="for">Telefone</G.FormLabel>
            <G.FormInput tyoe="tel" />
            <G.FormButton>Enviar</G.FormButton>
            <G.Text>Obrigado!</G.Text>
          </G.Form>
        </G.FormContent>
      </G.FormWrap>
    </G.Container>
  )
}

export default GetStart;