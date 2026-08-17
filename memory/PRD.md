# PRD — Grazi Gomes | Psicóloga (TCC & Psicologia Provocativa)

## Problema original (verbatim)
"Crie um site para uma psicóloga abordagem tcc e psicologia provocativa, o site deve ser incrível e atrair desejo em se consultar. Psicóloga Grazi Gomes - use um toque de humor"

Escolhas do usuário: todas as seções principais; agendamento por formulário + WhatsApp; clima elegante e provocativo com humor inteligente; incluir um pequeno teste para a pessoa descobrir por que precisa de terapia.

## Personas
- Visitante em dúvida sobre terapia (conquistar pelo humor e pelo teste)
- Visitante pronto para agendar (CTA direto WhatsApp/formulário)
- Grazi (recebe os leads por e-mail/WhatsApp coletados no site)

## Arquitetura
- Frontend: React + Tailwind + framer-motion + lenis + react-fast-marquee (one-page landing pt-BR), site 100% estático
- Sem backend: agendamento e contato feitos inteiramente via WhatsApp
- Tema dark editorial (Playfair Display / Manrope / JetBrains Mono, acento #E35A3D), grain overlay, grid assimétrico

## Implementado (12/08/2026)
- Hero cinético com reveal linha a linha mascarado + parallax
- Marquee editorial lento entre seções
- Seção de destaque "Plantão Psicológico" (atendimento prioritário, vagas em até 24h, sessão avulsa, online)
- Sobre Grazi (retrato com parallax, métricas)
- Manifesto em 4 capítulos numerados (TCC + Provocativa) com imagem da poltrona
- Quiz interativo "Descubra por que você precisa de terapia" (4 perguntas, 4 perfis, CTA)
- Depoimentos editoriais em pull-quotes
- Contato: formulário salvando leads no MongoDB + botão WhatsApp + FAB flutuante
- Scroll suave (lenis), reveals em scroll, micro-interações

## Ajustes (12/08/2026 — 2ª iteração)
- Adicionada seção Plantão Psicológico em destaque após o hero + link no menu + selo no hero e no contato
- Tom de humor suavizado em todo o site (resultados do quiz, depoimentos, manifesto, formulário) mantendo o design

## Ajustes (12/08/2026 — 3ª iteração)
- Adicionadas especialidades: Sexologia e Terapia de Casais
- Nova seção "Áreas de atendimento" (Terapia Individual, Terapia de Casais, Sexologia) após o Manifesto + link no menu
- Hero, Sobre, rodapé e meta description atualizados com as novas especialidades

## Ajustes (12/08/2026 — 4ª iteração — tom profissional)
- Credenciais oficiais em todo o site: formada no Brasil, pós-graduada em Portugal, CRP Brasil, BPS Londres (hero, Sobre, Atendimentos, rodapé, selo na foto)
- Teste transformado em "Autoavaliação" com linguagem clínica profissional, perfis renomeados (esquiva emocional, ruminação, hipercuidado, autocobrança) e aviso de que não substitui avaliação clínica
- Plantão Psicológico reduzido a uma faixa discreta (banner fino) após o hero; removido destaque do hero
- Removida qualquer menção a "papel de vítima" e humor excessivo; Manifesto reescrito com foco em base científica

## Ajustes (17/08/2026 — 5ª iteração)
- Foto real da Grazi adicionada na seção Sobre (public/grazi.jpg, barras pretas removidas), com tratamento preto e branco que revela a cor no hover, mantendo o visual do design

## Ajustes (17/08/2026 — 6ª iteração)
- Removida a seção de Autoavaliação/teste por completo (site, menu e link do hero)

## Ajustes (17/08/2026 — 7ª iteração)
- WhatsApp real configurado: 55 11 95286-7624 (todos os botões)
- Foto da Grazi com transparência (opacidade reduzida + P&B, cor no hover)
- Removida legenda "Fig. 01" abaixo da poltrona no Manifesto

## Ajustes (17/08/2026 — 8ª iteração)
- Pagamentos via Stripe (modo teste): seção "Investimento" com Sessão Avulsa R$250, Pacote Mensal R$900 e Plantão R$350
- Checkout hospedado Stripe (cartão + Pix), páginas /payment/success e /payment/cancel
- Backend: POST /api/payments/checkout, GET /api/payments/status/{id}, POST /api/stripe/webhook
- Webhook registrado na conta sandbox (todos os eventos)
- Removidos travessões dos textos visíveis do site
- Conta sandbox Stripe "grazi-gomes-terapia" (país GB). Para produção: clicar Connect with Stripe no Deploy.
- PENDENTE: ajustar valores reais (rodar novamente backend/setup_stripe.py após editar CATALOG)

## Ajustes (17/08/2026 — 9ª iteração)
- Números de registro adicionados: CRP 183637/06 e BPS 687171 (seção Sobre, métricas e rodapé)

## Ajustes (17/08/2026 — 10ª iteração)
- Selo de verificação discreto no topo (navbar), ao lado do nome: CRP 183637/06 · BPS 687171 com ícone de escudo

## Ajustes (17/08/2026 — 11ª iteração)
- Removidos por completo: backend (FastAPI/MongoDB), integração Stripe e a seção "Investimento" (pagamento por cartão), incluindo as páginas /payment/success e /payment/cancel
- Formulário de Contato deixou de enviar para uma API própria: agora monta a mensagem digitada e abre o WhatsApp com o texto pré-preenchido
- Site voltou a ser 100% estático (React puro), sem nenhuma dependência de servidor — agendamento e contato acontecem inteiramente pelo WhatsApp
- Removidos também todos os resquícios da plataforma Emergent (scripts de analytics/visual-edit, dependências, metadados de job/cron)

## Pendências / Backlog
- P1: Notificação de novos leads por e-mail (Resend) — requer decidir uma nova forma de captar leads, já que não há mais backend
- P2: Blog/artigos, FAQ, página de agendamento com calendário
- P2: SEO/avaliação Google, meta tags sociais personalizadas

## Próximas tarefas
1. Confirmar que o número de WhatsApp (55 11 95286-7624) é o definitivo em todos os pontos de contato
2. Avaliar se vale reintroduzir alguma forma de pagamento online mais simples (ex: link de pagamento do próprio WhatsApp/Instagram) caso necessário no futuro
