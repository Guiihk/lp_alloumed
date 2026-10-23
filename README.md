# Alloumed | Programa Equilíbrio Quinzenal

Landing page estática. Arquivos publicáveis em `dist/`. Sem formulário, armazenamento de dados ou checkout próprio. Os três CTAs direcionam para `https://app.alloumed.com.br/planos`.

Identidade conferida no BrandBook Alloumed, abril de 2026: páginas 8 (proteção da marca), 11 (paleta), 15–17 (Bai Jamjuree), 19–20 (linguagem próxima e humana). Logo SVG oficial, com recorte de prancheta e caminhos preservados. Fontes locais, com licença OFL. Verde-água #00E7AD, azul-petróleo #005A71 e #004A5D, cinza quente #E3DEDA. Fotografia ilustrativa gerada pelo imagegen integrado.

O destino de contratação foi atualizado pelo cliente para `https://app.alloumed.com.br/planos`. Os CTAs preservam os parâmetros da URL atual, incluindo UTMs, ao encaminhar para a próxima página. O texto de apoio do card orienta que dúvidas sejam tratadas com a equipe pelo WhatsApp na próxima tela.

Informações do programa fornecidas pelo cliente: R$99/mês, duas consultas por mês, intervalo quinzenal, atendimento online com o mesmo psicólogo, sigilo, acolhimento, possibilidade de troca e idade mínima de 6 anos. Sem depoimentos, estatísticas ou perfis profissionais inventados. Duração, cancelamento, reagendamento e renovação não foram informados; FAQ orienta confirmar com a equipe.

## Verificação

`node --check dist/app.js`. `qa.cjs` usa o Playwright do runtime local e Chrome instalado para verificar quatro larguras, imagens, overflow, FAQ, CTA visível no desktop, destino do plano, movimento reduzido e erros JavaScript. Iniciar servidor local em `127.0.0.1:4186` servindo `dist/` antes de rodar. Capturas são ignoradas pelo Git.

Container Google Tag Manager `GTM-KR3DCSLB` instalado em `dist/index.html`; tags, pixels e eventos devem ser configurados no próprio workspace do GTM. Publicação privada pelo Sites; não é uma página pública de campanha.

## Prompt da fotografia

Ferramenta: imagegen integrado; arquivo `dist/assets/hero.webp`.

Premium editorial lifestyle photograph for a Brazilian online psychological care landing page. A relaxed Brazilian woman about 35 with natural curly dark hair, sitting comfortably at home in a warm sunlit room, talking with a psychologist over an open laptop, side three-quarter camera angle. Generic face subtly visible on laptop without interface text. Thoughtful expression, authentic skin, no medical clothing. Warm grey wall, plant, petrol teal cushion #005A71 and subtle orange object. Horizontal 3:2, woman and laptop on right two thirds, uncluttered left. Film-like texture, warm natural light. No text, logos, graphics or badges. Illustrative scene, not a testimonial or actual Alloumed employee.
