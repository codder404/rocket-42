import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, rgba(108, 99, 255, 1) 0%, rgba(152, 113, 245, 1) 100%);
`;

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  @media (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media (max-width: 480px) {
    margin-left: 1rem;
    margin-top: 8px;
  }
`;

export const FormContent = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  background: #161616;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;

  @media (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormTitle = styled.h1`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
`;

export const FormLabel = styled.label`
  color: #fff;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 1rem 1rem;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #6C63FF;
  padding: 1rem 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out;
    filter: brightness(90%);
  }
`;

export const Text = styled.span`
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-top: 1.5rem;
`;