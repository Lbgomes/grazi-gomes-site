# PRD — Grazi Gomes | Psicóloga (TCC & Psicologia Provocativa)

## Problema original (verbatim)
"Crie um site para uma psicóloga abordagem tcc e psicologia provocativa, o site deve ser incrível e atrair desejo em se consultar. Psicóloga Grazi Gomes - use um toque de humor"

Escolhas do usuário: todas as seções principais; agendamento por formulário + WhatsApp; clima elegante e provocativo com humor inteligente; incluir um pequeno teste para a pessoa descobrir por que precisa de terapia.

## Personas
- Visitante em dúvida sobre terapia (conquistar pelo humor e pelo teste)
- Visitante pronto para agendar (CTA direto WhatsApp/formulário)
- Grazi (recebe os leads por e-mail/WhatsApp coletados no site)

## Arquitetura
- Frontend: React + Tailwind + framer-motion + lenis + react-fast-marquee (one-page landing pt-BR)
- Backend: FastAPI, rotas /api/leads (POST/GET) persistindo em MongoDB
- Tema dark editorial (Playfair Display / Manrope / JetBrains Mono, acento #E35A3D), grain overlay, grid assimétrico

## Implementado (12/08/2026)
- Hero cinético com reveal linha a linha mascarado + parallax
- Marquee editorial lento entre seções
- Sobre Grazi (retrato com parallax, métricas humorísticas)
- Manifesto em 4 capítulos numerados (TCC + Provocativa) com imagem da poltrona
- Quiz interativo "Descubra por que você precisa de terapia" (4 perguntas, 4 perfis com humor, CTA)
- Depoimentos editoriais em pull-quotes
- Contato: formulário salvando leads no MongoDB + botão WhatsApp + FAB flutuante
- Scroll suave (lenis), reveals em scroll, micro-interações

## Pendências / Backlog
- P0: Substituir número de WhatsApp placeholder (5511999999999) em src/components/site/config.js pelo número real da Grazi
- P0: Substituir foto retrato de stock por foto real da Grazi
- P1: Notificação de novos leads por e-mail (Resend)
- P1: Área administrativa para visualizar leads
- P2: Blog/artigos, FAQ, página de agendamento com calendário
- P2: SEO/avaliação Google, meta tags sociais personalizadas

## Próximas tarefas
1. Receber número de WhatsApp real e foto real
2. Ativar notificação de leads por e-mail
3. Painel simples de leads
