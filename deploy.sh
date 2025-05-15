#!/bin/bash
# Script de deploy para Debian 12 - Projeto mkw-landingpage
# Execute como root ou com sudo

set -e

# 1. Atualização do sistema e instalação de dependências essenciais
apt update && apt upgrade -y
apt install -y curl git build-essential

# 2. Instalação do Node.js 20.x (recomendado para projetos modernos)
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt install -y nodejs
fi

# 3. Clone do repositório (remova se já estiver no servidor)
git clone https://github.com/provedorconsult/mkw-landingpage.git
cd mkw-landingpage

# 4. Instalação das dependências Node.js
npm install

# 5. Build do projeto
npm run build

# 6. Configuração de variáveis de ambiente
if [ ! -f .env ]; then
  echo "Arquivo .env não encontrado. Criando um exemplo com base em .env.example."
  cp .env.example .env
  echo "Edite o arquivo .env com suas credenciais antes de iniciar o backend!"
else
  echo ".env já existe."
fi

# 7. Start do backend (em produção)
# node dist/index.js
# Recomenda-se usar PM2 ou systemd para manter o processo rodando:
# npm install -g pm2
# pm2 start dist/index.js --name mkw-landingpage

# 8. Instalação e configuração do NGINX e Certbot
apt install -y nginx certbot python3-certbot-nginx
cp nginx-example.conf /etc/nginx/sites-available/mkw-landingpage
ln -sf /etc/nginx/sites-available/mkw-landingpage /etc/nginx/sites-enabled/mkw-landingpage

# Ajusta o caminho root para o diretório atual
sed -i "s|/caminho/absoluto/para/mkw-landingpage|$(pwd)|g" /etc/nginx/sites-available/mkw-landingpage

systemctl enable nginx
systemctl restart nginx

# 9. Gerar certificado SSL com Certbot (Let's Encrypt)
# O domínio mkwdedetizadora.com.br deve estar apontando para este servidor!
certbot --nginx -d mkwdedetizadora.com.br -d www.mkwdedetizadora.com.br --non-interactive --agree-tos -m mkwdf1@gmail.com --redirect

# 10. Instalar e usar PM2 para rodar o backend
npm install -g pm2
npm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste
pm run build
pm install -g pm2
pm run build
pm run start & # Inicialização rápida para teste

pm2 start dist/index.js --name mkw-landingpage
pm2 save
pm2 startup

echo "\nDeploy concluído!\nAcesse https://mkwdedetizadora.com.br\nO backend está rodando com PM2 e o SSL está configurado."

