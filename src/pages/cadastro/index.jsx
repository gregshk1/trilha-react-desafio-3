import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleCadastro,
  SubtitleCadastro,
  TermosText,
  Wrapper,
  Row,
  LoginLink
} from './styles';

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
    try {
      // Substitua esse GET por um POST real na API de cadastro
      await api.post('/users', {
        email: formData.email,
        senha: formData.senha
      });

      navigate('/feed');
    } catch (e) {
      alert('Erro ao fazer cadastro, tente novamente');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
              {errors.senha && <span>Senha é obrigatória</span>}
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <TermosText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade
              e os Termos de uso da DIO.
            </TermosText>
            <Row>
              <strong>Já tem conta?</strong>
              <LoginLink onClick={() => navigate('/login')}>Faça o login</LoginLink>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
