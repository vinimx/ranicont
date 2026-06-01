import {
  FaLandmark,
  FaBuilding,
  FaFlag,
  FaCar,
  FaMapMarkerAlt,
  FaUniversity,
  FaCalculator,
  FaFileInvoiceDollar,
  FaUserTie,
  FaBriefcase,
  FaLock,
  FaUsers,
  FaHardHat,
  FaListUl,
  FaShieldAlt,
  FaChartBar,
  FaChartLine,
  FaFileAlt,
  FaMoneyBillWave,
  FaPercent,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface ConsultaLink {
  id: string;
  icon: IconType;
  nome: string;
  href: string;
  descricao?: string;
}

export interface ConsultaCategoria {
  id: string;
  label: string;
  labelCurto: string;
  icon: IconType;
  links: ConsultaLink[];
}

export const CONSULTAS_CATEGORIAS: ConsultaCategoria[] = [
  {
    id: "estadual-sp",
    label: "Estadual SP",
    labelCurto: "Estadual SP",
    icon: FaMapMarkerAlt,
    links: [
      {
        id: "sefaz-sp",
        icon: FaLandmark,
        nome: "SEFAZ SP",
        href: "https://www.fazenda.sp.gov.br/",
        descricao: "Secretaria da Fazenda e Planejamento do Estado de SP",
      },
      {
        id: "jucesp",
        icon: FaBuilding,
        nome: "JUCESP",
        href: "https://www.jucesp.sp.gov.br/",
        descricao: "Junta Comercial do Estado de São Paulo",
      },
      {
        id: "governo-sp",
        icon: FaFlag,
        nome: "Governo SP",
        href: "https://www.sp.gov.br/",
        descricao: "Portal oficial do Governo do Estado de São Paulo",
      },
      {
        id: "detran-sp",
        icon: FaCar,
        nome: "DETRAN SP",
        href: "https://www.detran.sp.gov.br/",
        descricao: "Departamento Estadual de Trânsito de São Paulo",
      },
      {
        id: "prefeitura-avare",
        icon: FaMapMarkerAlt,
        nome: "Prefeitura de Avaré",
        href: "https://www.avare.sp.gov.br/",
        descricao: "Portal da Prefeitura Municipal de Avaré – SP",
      },
    ],
  },
  {
    id: "federal",
    label: "Federal",
    labelCurto: "Federal",
    icon: FaLandmark,
    links: [
      {
        id: "receita-federal",
        icon: FaUniversity,
        nome: "Receita Federal",
        href: "https://www.gov.br/receitafederal/",
        descricao: "Secretaria Especial da Receita Federal do Brasil",
      },
      {
        id: "simples-nacional",
        icon: FaCalculator,
        nome: "Simples Nacional",
        href: "https://www8.receita.fazenda.gov.br/SimplesNacional/",
        descricao: "Portal do Simples Nacional – PGDAS-D e DEFIS",
      },
      {
        id: "nfe-nacional",
        icon: FaFileInvoiceDollar,
        nome: "NF-e Nacional",
        href: "https://www.nfe.fazenda.gov.br/",
        descricao: "Portal Nacional da Nota Fiscal Eletrônica",
      },
      {
        id: "cfc",
        icon: FaUserTie,
        nome: "CFC",
        href: "https://cfc.org.br/",
        descricao: "Conselho Federal de Contabilidade",
      },
      {
        id: "mei",
        icon: FaBriefcase,
        nome: "Portal MEI",
        href: "https://mei.receita.economia.gov.br/",
        descricao: "Microempreendedor Individual — formalização e DAS",
      },
      {
        id: "ecac",
        icon: FaLock,
        nome: "e-CAC",
        href: "https://cav.receita.fazenda.gov.br/",
        descricao: "Centro Virtual de Atendimento ao Contribuinte",
      },
    ],
  },
  {
    id: "trabalhista",
    label: "Trabalhista",
    labelCurto: "Trabalhista",
    icon: FaHardHat,
    links: [
      {
        id: "trabalho-previdencia",
        icon: FaHardHat,
        nome: "Trabalho e Previdência",
        href: "https://www.gov.br/trabalho-e-previdencia/",
        descricao: "Ministério do Trabalho e Previdência Social",
      },
      {
        id: "esocial",
        icon: FaUsers,
        nome: "eSocial",
        href: "https://www.gov.br/esocial/",
        descricao: "Sistema de Escrituração Digital das Obrigações Fiscais",
      },
      {
        id: "cnae",
        icon: FaListUl,
        nome: "CNAE",
        href: "https://cnae.ibge.gov.br/",
        descricao: "Classificação Nacional de Atividades Econômicas – IBGE",
      },
      {
        id: "inss",
        icon: FaShieldAlt,
        nome: "Meu INSS",
        href: "https://meu.inss.gov.br/",
        descricao: "Portal de serviços do Instituto Nacional do Seguro Social",
      },
    ],
  },
  {
    id: "indices-financas",
    label: "Índices e Finanças",
    labelCurto: "Índices",
    icon: FaChartBar,
    links: [
      {
        id: "banco-central",
        icon: FaChartBar,
        nome: "Banco Central",
        href: "https://www.bcb.gov.br/",
        descricao: "Indicadores econômicos, taxas e câmbio oficial",
      },
      {
        id: "ibge-indicadores",
        icon: FaChartLine,
        nome: "IBGE — Indicadores",
        href: "https://www.ibge.gov.br/explica/inflacao.php",
        descricao: "IPCA, inflação e indicadores do IBGE",
      },
      {
        id: "formularios-rf",
        icon: FaFileAlt,
        nome: "Formulários — Receita",
        href: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/formularios",
        descricao: "Formulários oficiais da Receita Federal do Brasil",
      },
      {
        id: "tabela-irrf",
        icon: FaPercent,
        nome: "Tabela IRRF",
        href: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/pagamentos-e-parcelamentos/deducoes-na-fonte-pagadora/irrf",
        descricao: "Tabela progressiva do Imposto de Renda Retido na Fonte",
      },
      {
        id: "tabela-inss",
        icon: FaMoneyBillWave,
        nome: "Tabela INSS",
        href: "https://www.gov.br/trabalho-e-previdencia/pt-br/assuntos/previdencia-social/tabela-de-contribuicao-mensal",
        descricao: "Tabela de contribuição mensal do INSS atualizada",
      },
    ],
  },
];
