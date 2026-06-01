import {
  FaBalanceScale,
  FaChartLine,
  FaFileInvoiceDollar,
  FaBuilding,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Servico {
  id: string;
  icon: IconType;
  titulo: string;
  descricao: string;
  itens: string[];
  destaque?: boolean;
}

export const SERVICOS: Servico[] = [
  {
    id: "assessoria-consultoria",
    icon: FaBalanceScale,
    titulo: "Assessoria e Consultoria",
    descricao:
      "Orientação especializada nas áreas fiscal, trabalhista, contábil e de legalizações para manter sua empresa sempre em conformidade.",
    itens: [
      "Consultoria Fiscal e Tributária",
      "Assessoria Trabalhista e Previdenciária",
      "Consultoria Contábil e Financeira",
      "Processos de Legalização Empresarial",
      "Orientação em Obrigações Acessórias",
    ],
    destaque: true,
  },
  {
    id: "servicos-contabeis",
    icon: FaChartLine,
    titulo: "Serviços Contábeis",
    descricao:
      "Gestão contábil completa com classificação de documentos, elaboração de relatórios e cumprimento das normas vigentes.",
    itens: [
      "Classificação e Escrituração Contábil",
      "Balanço Patrimonial e DRE",
      "Relatórios Gerenciais Mensais",
      "Adequação às Normas IFRS e CPC",
      "Guarda e Organização de Documentos",
    ],
    destaque: true,
  },
  {
    id: "planejamento-tributario",
    icon: FaFileInvoiceDollar,
    titulo: "Planejamento Tributário",
    descricao:
      "Estratégias legais para reduzir a carga tributária e aumentar a competitividade do seu negócio com segurança jurídica.",
    itens: [
      "Análise e Escolha do Regime Tributário",
      "Simples Nacional, Lucro Presumido e Real",
      "Recuperação de Créditos Tributários",
      "Elisão Fiscal e Incentivos Legais",
      "Revisão de Tributos Pagos a Maior",
    ],
    destaque: true,
  },
  {
    id: "abertura-encerramento",
    icon: FaBuilding,
    titulo: "Abertura e Encerramento",
    descricao:
      "Cuidamos de todo o processo burocrático para constituir ou encerrar sua empresa com rapidez e segurança.",
    itens: [
      "Abertura de MEI, ME, EPP e LTDA",
      "Alterações Contratuais e Societárias",
      "Encerramento e Distrato Empresarial",
      "Registros em Juntas Comerciais",
      "Licenças e Alvarás de Funcionamento",
    ],
  },
  {
    id: "departamento-pessoal",
    icon: FaUsers,
    titulo: "Departamento Pessoal",
    descricao:
      "Gestão completa da folha de pagamento e obrigações trabalhistas para que você foque no crescimento do negócio.",
    itens: [
      "Folha de Pagamento Mensal",
      "Admissão e Demissão de Funcionários",
      "Cálculo de FGTS, INSS e IRRF",
      "eSocial e SEFIP/GFIP",
      "Férias, 13º Salário e Rescisões",
    ],
  },
  {
    id: "regularizacao-fiscal",
    icon: FaShieldAlt,
    titulo: "Regularização Fiscal",
    descricao:
      "Identificação e resolução de pendências fiscais, evitando multas e garantindo a saúde tributária da sua empresa.",
    itens: [
      "Parcelamento de Débitos Tributários",
      "REFIS e Programas de Regularização",
      "Certidões Negativas de Débitos",
      "Defesas Administrativas e Recursos",
      "Monitoramento Fiscal Preventivo",
    ],
  },
];
