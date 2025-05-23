import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;
  color: #FFFFFF;
`;

export const TitleCadastro = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleCadastro = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const TermosText = styled.p`
  font-family: 'Open Sans';
  font-size: 12px;
  line-height: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #FFFFFF;
`;

export const Row = styled.div`
  display: flex;
  gap: 5px;
  font-size: 14px;
  font-weight: 700;
  align-items: center;
`;

export const LoginLink = styled.span`
  color: #23DD7A;
  cursor: pointer;
  text-decoration: underline;
`;
