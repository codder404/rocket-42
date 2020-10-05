import styled from 'styled-components';

export const Container = styled.section`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#F9F9F9' : '#161616')};

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.header`
  display: grid;
  justify-content: center;

  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.5rem;
  z-index: 1; 
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col 2"`)};

  @media (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`)};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin-bottom: 0.9rem;
  padding: 0 0.9rem;
`;

export const Column2 = styled.div `
  grid-area: col2;
  margin-bottom: 0.9rem;
  padding: 0 0.9rem;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 4rem;
`;

export const TopLine = styled.small`
  color: #6C63FF;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 1.4px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#161616')};

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${({darkText}) => (darkText ? '#010606' : '#f9f9f9')};
`;

export const InfoBtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;