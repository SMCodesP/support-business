import logoImg from '@/public/logo.png';

import {
  ButtonAccess,
  ContainerLogo,
  ContainerMenu,
  ListPages,
  LogoImage,
  LogoText,
  PageItem,
} from './styles';

const Menu: React.FC = () => {
  return (
    <ContainerMenu>
      <LogoImage src={logoImg} height={84} alt="Logo image website" />

      <ListPages>
        <PageItem>PLANEJAMENTO FINANCEIRO</PageItem>
        <PageItem>FERRAMENTAS FINANCEIRAS</PageItem>
        <PageItem>CRÉDITO</PageItem>
        <PageItem>CAPACITAÇÃO PARA GESTORES</PageItem>
        <PageItem>TRIBUTAÇÃO</PageItem>
      </ListPages>

      <ButtonAccess>Manual</ButtonAccess>
    </ContainerMenu>
  );
};

export default Menu;
