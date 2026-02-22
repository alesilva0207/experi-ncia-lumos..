# Chalé Lumos Experience

Este é o código fonte do site do Chalé Lumos Experience.

## Como publicar no GitHub e Vercel sem erros

O erro `Token inesperado '<'` no Vercel geralmente acontece quando o arquivo `package.json` é baixado incorretamente como um arquivo HTML.

### Passo a Passo Correto:

1. **Não baixe os arquivos um por um pelo navegador.**
2. Use a opção de **Download ZIP** (se disponível) ou copie o conteúdo dos arquivos **brutos (raw)**.
3. **Estrutura de Pastas:** Certifique-se de que a pasta `src` está na raiz do seu repositório.
4. **Arquivos na Raiz:**
   - `package.json`
   - `vite.config.ts`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `index.html`
   - `vercel.json`
   - `.gitignore`
5. **Vercel:** Ao importar no Vercel, ele deve detectar automaticamente que é um projeto **Vite**. Não altere as configurações de build padrão do Vercel.

### Configurações de Build no Vercel:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

---

**Nota:** O arquivo `.gitignore` já está configurado para não enviar a pasta `node_modules` e `dist` para o GitHub. Isso é essencial para que o Vercel faça o build do zero corretamente.
