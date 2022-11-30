import Menu from '../Menu';

import openFinance from '@/public/finance.svg';

import {
  ButtonDownload,
  ContainerFinance,
  ContainerHeader,
  DescriptionFinance,
  FinanceImg,
  InformationFinance,
  TitleFinance,
} from './styles';

const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <Menu />

      <ContainerFinance>
        <InformationFinance>
          <TitleFinance>FERRAMENTAS FINANCEIRAS</TitleFinance>
          <DescriptionFinance>
            A ferramenta de gestão financeira pode ajudar a organizar os dados
            financeiros do seu negócio, otimizando o trabalho e fazendo com que
            os profissionais responsáveis pela área tenham mais tempo hábil.
          </DescriptionFinance>
          <ButtonDownload>Baixar PDF</ButtonDownload>
        </InformationFinance>
        <FinanceImg src={openFinance} height={450} alt="Open finance" />
      </ContainerFinance>
    </ContainerHeader>
  );
};

export default Header;
