import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #161616;
  height: 800px;

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServiceTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServiceWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 50px;
  margin: 0 auto;
  max-width: 1000px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceCard = styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background: #fff;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServiceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServiceTitle2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServiceText = styled.p`
  font-size: 1rem;
  text-align: center;
`;