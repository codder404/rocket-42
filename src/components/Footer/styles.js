import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.footer`
  background: #161616;
`;

export const FooterWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  color: #fff;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  margin: 1rem;

  @media (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #6C63FF;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;
`;

export const SocialMediaWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: start;
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1rem;
`;