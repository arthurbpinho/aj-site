# Segurança e configuração no Cloudflare

## Estado do site

Auditoria atual:

| Item | Status |
|------|--------|
| Vulnerabilidades em dependências (`npm audit`) | ✓ 0 |
| Segredos / credenciais em código ou histórico git | ✓ Nenhum |
| Arquivos sensíveis no repo (`.env`, `.pem`, `.key`…) | ✓ Nenhum |
| `dangerouslySetInnerHTML`, `eval`, `innerHTML=`, `document.write` | ✓ Nenhum |
| Input de usuário processado (XSS surface) | ✓ Site 100% read-only |
| `target="_blank"` sem `rel="noopener noreferrer"` | ✓ Todos protegidos |
| Embed do vídeo | ✓ `youtube-nocookie.com` + `allow` mínimo |
| Source maps em produção | ✓ Desabilitados |
| HTTPS forçado + HSTS | ✓ Pelo GitHub Pages |

## Headers que faltam — adicionar via Cloudflare

GitHub Pages **não permite cabeçalhos customizados**. Quando o site passar pelo Cloudflare como proxy (laranja ativo), aplicar via **Transform Rules → Modify Response Header**.

Os valores recomendados também estão pré-configurados em `public/_headers` (usado automaticamente caso o site migre para Cloudflare Pages).

### CSP (Content-Security-Policy)

```
default-src 'self';
img-src 'self' data: https://i.ytimg.com;
media-src 'self' https://www.youtube-nocookie.com;
script-src 'self';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
frame-src https://www.youtube-nocookie.com https://www.youtube.com;
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'self';
upgrade-insecure-requests
```

> **Observação**: `style-src 'unsafe-inline'` é necessário porque o Tailwind e o Framer Motion injetam estilos inline. Se quisermos eliminar o `'unsafe-inline'`, dá pra migrar para nonces — mas exige rework no build.

### Outros cabeçalhos

| Header | Valor |
|--------|-------|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()` |

## Recomendações no painel Cloudflare

- **SSL/TLS Mode**: Full (strict) — força TLS entre Cloudflare e GitHub Pages.
- **Always Use HTTPS**: ON.
- **Automatic HTTPS Rewrites**: ON.
- **Min TLS Version**: 1.2.
- **Bot Fight Mode**: ON (proteção básica gratuita).
- **Cache Level**: Standard. Páginas estáticas serão automaticamente cacheadas.
- **Polish** (plano free): Lossless — comprime imagens automaticamente. Reduz o peso das imagens grandes (~2MB) que estão em `/midias/gruposcursos/`.
- **Brotli**: ON.
- **Rate Limiting**: opcional, 100 req/min por IP em `/*` é razoável pra site institucional.
- **Page Rules / Cache Rules**: assets em `/assets/*` (com hash do Vite) podem ter `Cache TTL` de 1 ano.

## Plano de migração para domínio próprio

1. Você compra/configura o domínio no Cloudflare (ou aponta os nameservers).
2. Me passa o domínio (ex: `academiajunguiana.com.br`).
3. Eu:
   - Adiciono `public/CNAME` com o domínio.
   - Mudo `VITE_BASE` para `/` no workflow.
   - Atualizo `robots.txt` e `sitemap.xml` com o domínio real.
   - Faço o push.
4. No painel do Cloudflare:
   - DNS: `CNAME @ → arthurbpinho.github.io` (proxy ON / laranja).
   - SSL/TLS: Full (strict).
   - Adicionar Transform Rules com os headers acima.
   - Configurar as recomendações da seção anterior.
5. No GitHub: Settings → Pages → "Custom domain" — colocar o domínio (o workflow do `actions/deploy-pages` respeita o arquivo CNAME).

## O que NÃO está no site (escolha consciente)

- **Sem analytics/tracking** — nada de Google Analytics, Hotjar etc. Se quiser, recomendo Plausible ou Cloudflare Web Analytics (privacy-first).
- **Sem login / formulários / banco** — nenhum dado de usuário é coletado. Não há LGPD a tratar além de cookies de terceiros (YouTube, quando o vídeo é tocado — daí o uso de `youtube-nocookie.com`).
- **Sem service worker** — site simples, sem necessidade.
