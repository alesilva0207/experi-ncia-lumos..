# Chalé Lumos Experience

### ⚠️ COMO SUBIR PARA O GITHUB (IMPORTANTE)

Para o Vercel funcionar, seu repositório no GitHub deve ficar **EXATAMENTE** assim na página inicial:

```text
/src                <-- (Pasta com os códigos)
.gitignore          <-- (Arquivo oculto)
index.html          <-- (Arquivo na raiz)
package.json        <-- (Arquivo na raiz)
postcss.config.js   <-- (Arquivo na raiz)
tailwind.config.js  <-- (Arquivo na raiz)
tsconfig.json       <-- (Arquivo na raiz)
vercel.json         <-- (Arquivo na raiz)
vite.config.ts      <-- (Arquivo na raiz)
```

**ERRO COMUM:** Se você abrir o GitHub e ver uma pasta chamada `pousada-lumos` e os arquivos dentro dela, **ESTÁ ERRADO**. Os arquivos devem estar soltos na página inicial do repositório.

### Como fazer:
1. Baixe o projeto.
2. Entre na pasta do projeto no seu computador.
3. Selecione todos os arquivos e pastas (src, index.html, package.json, etc).
4. Arraste tudo para dentro do seu repositório no GitHub.

### Configurações no Vercel:
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
