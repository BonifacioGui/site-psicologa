# Site profissional de psicóloga — V1

Site institucional static-first em Next.js, TypeScript e Tailwind CSS. Não possui backend, banco de dados, login ou formulário clínico.

## Personalização antes de publicar

Substitua em todo o projeto:

- confirmar se as fotografias atuais serão mantidas na versão final;
- `contato@exemplo.com` e o canal de WhatsApp profissional;
- os campos entre colchetes na página de formação;
- `https://www.exemplo-psicologia.com.br` em metadata, sitemap e robots;
- a imagem provisória por uma fotografia autorizada.

Revise também a política de privacidade com os dados reais da profissional e do provedor de hospedagem.

## Paleta

- Marfim: `#F7F3EE`
- Taupe/cinza quente: `#EEE7E2`
- Vinho/ameixa: `#743B4D`
- Rosé queimado: `#D9B7BD`
- Grafite quase preto: `#171B20`
- Texto principal: `#252124`
- Texto secundário: `#676064`

## Tipografia

- Títulos: DM Serif Display
- Textos e interface: Manrope

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run build
npm test
```

## Git

- `develop`: desenvolvimento e homologação.
- `main`: produção; recebe merge somente após as validações.

## Prévia no GitHub Pages

Cada atualização aprovada e enviada para `main` publica automaticamente uma prévia estática. Alterações em `develop` não afetam o endereço público até serem testadas e promovidas.

O GitHub Pages é usado somente para protótipo e revisão. A versão profissional final deve usar hospedagem apropriada, domínio próprio e configuração de cabeçalhos de segurança no provedor. Os headers definidos em `next.config.ts` não devem ser considerados ativos na exportação estática do Pages.
