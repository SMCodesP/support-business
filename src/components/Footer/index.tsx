import logoImg from '@/public/logo.png';
import Link from 'next/link';

import { HiMail } from 'react-icons/hi';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

import {
  ContainerColumn,
  ContainerColumns,
  ContainerFooter,
  LogoImage,
  DescriptionBrand,
  ListNetworks,
  Network,
  Line,
  ContainerCopyright,
  TextCopyright,
  TextCredits,
  TitleColumn,
  ItemColumn,
} from './styles';

const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <ContainerColumns>
        <ContainerColumn>
          <LogoImage src={logoImg} height={72} alt="Logo image website" />
          <DescriptionBrand>
            O Support Business é a comunidade líder mundial para negócios,
            crescerem e serem relevantes.
          </DescriptionBrand>
          <ListNetworks>
            <Network>
              <FaFacebook size={22} />
            </Network>
            <Network>
              <FaInstagram size={22} />
            </Network>
            <Network>
              <FaTwitter size={22} />
            </Network>
          </ListNetworks>
        </ContainerColumn>
        <ContainerColumn>
          <TitleColumn>Navegação</TitleColumn>
          <Link href="/#data">
            <ItemColumn>DADOS E CITAÇÕES</ItemColumn>
          </Link>
          <Link href="/#data">
            <ItemColumn>PLANEJAMENTO FINANCEIRO</ItemColumn>
          </Link>
          <Link href="/#data">
            <ItemColumn>FERRAMENTAS FINANCEIRAS</ItemColumn>
          </Link>
          <Link href="/#data">
            <ItemColumn>LINHAS DE CRÉDITO</ItemColumn>
          </Link>
          <Link href="/#data">
            <ItemColumn>ANÁLISE DE CRÉDITO</ItemColumn>
          </Link>
          <Link href="/#data">
            <ItemColumn>CAPACITAÇÃO PARA GESTORES</ItemColumn>
          </Link>
          <Link href="/#data">
            <ItemColumn>TRIBUTAÇÃO</ItemColumn>
          </Link>
          <Link href="/#data">
            <ItemColumn>PERGUNTAS FREQUENTES</ItemColumn>
          </Link>
        </ContainerColumn>
        <ContainerColumn>
          <TitleColumn>Integrantes</TitleColumn>
          <ItemColumn>Fulano</ItemColumn>
          <ItemColumn>Beltrano</ItemColumn>
          <ItemColumn>Sla mais quem</ItemColumn>
          <ItemColumn>Nomes</ItemColumn>
        </ContainerColumn>
        <ContainerColumn>
          <TitleColumn>Contatos</TitleColumn>
          <ItemColumn>
            <FaPhoneAlt size={18} />
            (17) 99999-9999
          </ItemColumn>
          <ItemColumn>
            <FaWhatsapp size={18} />
            (17) 99999-9999
          </ItemColumn>
          <ItemColumn>
            <HiMail size={18} />
            suporte@supportbusiness.com
          </ItemColumn>
        </ContainerColumn>
      </ContainerColumns>
      <Line />
      <ContainerCopyright>
        <TextCopyright>
          © 2022 Support Business. Todos direitos reservados.
        </TextCopyright>
        <TextCredits>
          Feito com <FaHeart color="#e02041" /> por Equipe X.
        </TextCredits>
      </ContainerCopyright>
    </ContainerFooter>
  );
};

export default Footer;
