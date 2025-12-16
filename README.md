# 🚀 WebLito.tech | Arthur Norberto

> Portfólio pessoal e hub de projetos desenvolvido com foco em alta performance e design moderno.

Este repositório contém o código-fonte da minha landing page pessoal. O projeto serve como um cartão de visitas digital e centralizador para meus contatos profissionais e futuros projetos de Engenharia de Software.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando a arquitetura de **Ilhas** e **Geração de Site Estático (SSG)** para garantir a máxima velocidade de carregamento.

* **[Astro](https://astro.build/):** Framework web para sites orientados a conteúdo e performance.
* **[Tailwind CSS v4](https://tailwindcss.com/):** Framework de utilitários CSS (configurado com a nova engine v4 via Vite).
* **JavaScript (ES6+):** Lógica de animação e interatividade leve.
* **FontAwesome:** Ícones vetoriais.

## ✨ Funcionalidades

* 🎨 **Design Moderno:** Estilo "Glassmorphism" (efeito de vidro) e fundo animado com CSS puro.
* 📱 **Totalmente Responsivo:** Adaptável para mobile, tablets e desktop.
* ⚡ **Performance Extrema:** Zero JavaScript desnecessário enviado ao navegador (filosofia do Astro).
* 🔗 **Links Sociais:** Integração direta com WhatsApp, LinkedIn, GitHub e E-mail.

## 📂 Estrutura do Projeto

A estrutura segue o padrão do Astro, organizada para escalabilidade:

```text
/
├── public/          # Arquivos estáticos (favicon, robos.txt)
├── src/
│   ├── components/  # Componentes reutilizáveis (botões, cards)
│   ├── layouts/     # Layout base (BaseLayout.astro)
│   ├── pages/       # Rotas do site (index.astro)
│   └── styles/      # CSS Global e importação do Tailwind
└── astro.config.mjs # Configuração do Astro + Vite
```

## Como rodar localmente
Pré-requisitos: Node.js instalado.

1- Clone o repositório:

``` Bash
git clone [https://github.com/ArthurNorb/weblito.git](https://github.com/ArthurNorb/weblito.git)
cd weblito
```

2- Instale as dependências:

```Bash
npm install
```

3- Rode o servidor de desenvolvimento:

```Bash
npm run dev
```

O site estará disponível em http://localhost:4321.

## 📦 Build e Deploy
Para gerar os arquivos estáticos para produção (Hostinger, Vercel, etc):

```Bash
npm run build
```

Isso criará uma pasta dist/ com o HTML, CSS e JS otimizados. Basta fazer o upload do conteúdo desta pasta para o diretório public_html da sua hospedagem.

Desenvolvido por Arthur Norberto.