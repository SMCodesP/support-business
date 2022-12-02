import logoImg from '@/public/logo.png';
import { Link } from 'react-scroll';

import {
  ButtonAccess,
  ContainerMenu,
  ListPages,
  LogoImage,
  PageItem,
} from './styles';

const Menu: React.FC = () => {
  return (
    <ContainerMenu>
      <LogoImage src={logoImg} height={84} alt="Logo image website" />

      <ListPages>
        <Link to="financialPlanning" smooth={true} duration={500}>
          <PageItem>PLANEJAMENTO FINANCEIRO</PageItem>
        </Link>
        <Link to="financialTools" smooth={true} duration={500}>
          <PageItem>FERRAMENTAS FINANCEIRAS</PageItem>
        </Link>
        <Link to="lineCredits" smooth={true} duration={500}>
          <PageItem>CRÉDITO</PageItem>
        </Link>
        <Link to="trainingManagers" smooth={true} duration={500}>
          <PageItem>CAPACITAÇÃO PARA GESTORES</PageItem>
        </Link>
        <PageItem>TRIBUTAÇÃO</PageItem>
      </ListPages>

      <ButtonAccess>Manual</ButtonAccess>
    </ContainerMenu>
  );
};

export default Menu;
