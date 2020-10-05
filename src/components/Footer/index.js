import React from 'react';
import * as BIcon from '@styled-icons/boxicons-logos';
import * as F from './styles';

function Footer () {
  return (
    <F.Container>
      <F.FooterWrap>
        <F.FooterLinksContainer>
        <F.FooterLinksWrapper>
          <F.FooterLinkItems>
            <F.FooterLinkTitle>Sobre</F.FooterLinkTitle>
              <F.FooterLink to="about">Sobre</F.FooterLink>
              <F.FooterLink to="about">Sobre</F.FooterLink>
              <F.FooterLink to="about">Sobre</F.FooterLink>
              <F.FooterLink to="about">Sobre</F.FooterLink>
          </F.FooterLinkItems>
          <F.FooterLinkItems>
            <F.FooterLinkTitle>Carreira</F.FooterLinkTitle>
              <F.FooterLink to="about">Carreira</F.FooterLink>
              <F.FooterLink to="about">Carreira</F.FooterLink>
              <F.FooterLink to="about">Carreira</F.FooterLink>
              <F.FooterLink to="about">Carreira</F.FooterLink>
          </F.FooterLinkItems>
        </F.FooterLinksWrapper>
        <F.FooterLinksWrapper>
          <F.FooterLinkItems>
            <F.FooterLinkTitle>Negócios</F.FooterLinkTitle>
              <F.FooterLink to="about">Sobre</F.FooterLink>
              <F.FooterLink to="about">Sobre</F.FooterLink>
              <F.FooterLink to="about">Sobre</F.FooterLink>
              <F.FooterLink to="about">Sobre</F.FooterLink>
          </F.FooterLinkItems>
          <F.FooterLinkItems>
            <F.FooterLinkTitle>Vagas</F.FooterLinkTitle>
              <F.FooterLink to="about">Carreira</F.FooterLink>
              <F.FooterLink to="about">Carreira</F.FooterLink>
              <F.FooterLink to="about">Carreira</F.FooterLink>
              <F.FooterLink to="about">Carreira</F.FooterLink>
          </F.FooterLinkItems>
        </F.FooterLinksWrapper>
        </F.FooterLinksContainer>
        <F.SocialMedia>
          <F.SocialMediaWrap>
            <F.SocialLogo to="/">Rocket</F.SocialLogo>
            <F.WebsiteRights>Rocket &copy; {new Date().getFullYear()} Todos os direitos reservados</F.WebsiteRights>
            <F.SocialIcons>
              <F.SocialIconLink href="#" target="_blank" arial-label="Facebook">
              <BIcon.Facebook />
              </F.SocialIconLink>

               <F.SocialIconLink href="#" target="_blank" arial-label="Twitter">
              <BIcon.Twitter />
              </F.SocialIconLink>

               <F.SocialIconLink href="#" target="_blank" arial-label="Linkedin">
              <BIcon.Linkedin />
              </F.SocialIconLink>

               <F.SocialIconLink href="#" target="_blank" arial-label="Github">
              <BIcon.Github />
              </F.SocialIconLink>
            </F.SocialIcons>
          </F.SocialMediaWrap>
        </F.SocialMedia>
      </F.FooterWrap>
    </F.Container>
  )
}

export default Footer;