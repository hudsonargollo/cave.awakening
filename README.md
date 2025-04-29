# cave.awakening
You've just activated Cave Mode. 


Este projeto é um protótipo do fluxo de onboarding para o Modo Caverna, implementado com Next.js, TypeScript e Tailwind CSS.

Este protótipo foi desenvolvido como uma versão independente do fluxo de onboarding, permitindo testes e iterações rápidas antes da integração com o projeto principal.

Funcionalidades

Fluxo completo de onboarding com 8 etapas
Mascote interativo (Capitão Caverna)
Animações e transições suaves
Design responsivo
Formulários interativos

Requisitos

Node.js 18.x ou superior
npm ou yarn

Instalação

Clone o repositório
bashgit clone https://github.com/hudsonargollo/cave.awakening.git
cd modo-caverna-onboarding

Instale as dependências
bashnpm install
# ou
yarn

Inicie o servidor de desenvolvimento
bashnpm run dev
# ou
yarn dev

Abra http://localhost:3000 no seu navegador

Estrutura do projeto
cave.awakening/
│
├── public/
│   └── images/             # Imagens do Capitão Caverna
│
├── src/
│   ├── app/                # Componentes de página do Next.js App Router
│   ├── components/         # Componentes React
│   │   └── onboarding/     # Componentes específicos do onboarding
│   └── lib/                # Funções utilitárias
│
├── package.json
└── README.md

Arquivos Principais

src/app/page.tsx - Página principal que carrega o componente de onboarding
src/components/onboarding/onboarding-container.tsx - Componente cliente que gerencia o estado do fluxo
src/components/onboarding/steps/ - Componentes para cada etapa do onboarding
src/components/onboarding/mascot.tsx - Componente que renderiza o Capitão Caverna

Dependências Mínimas
json{
  "dependencies": {
    "next": "14.1.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "lucide-react": "^0.344.0",
    "framer-motion": "^11.0.5",
    "tailwind-merge": "^2.2.1",
    "clsx": "^2.1.0"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "@types/node": "^20.10.5",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18"
  }
}

Personalização
Ajustando as imagens do Capitão Caverna
Substitua as imagens em public/images/ com suas próprias versões do mascote.

Modificando o fluxo
Para alterar o fluxo de onboarding, edite o arquivo src/components/onboarding/onboarding-container.tsx.

Alterando textos
Os textos do Capitão Caverna podem ser modificados no objeto mascotDialogs dentro do arquivo src/components/onboarding/onboarding-container.tsx.

Deployando para produção

Para implantar este protótipo:

Construa o projeto para produção
bashnpm run build
# ou
yarn build

Inicie o servidor de produção
bashnpm start
# ou
yarn start


Consulte também as instruções de implantação no Netlify no arquivo DEPLOYMENT.md.


Próximos passos

Implementar/Melhorar adições ao Layout e Fluxos
Integrar com API de backend
Adicionar autenticação
Implementar mais animações
Otimizar para dispositivos móveis

Licença
Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
