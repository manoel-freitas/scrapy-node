# scrapy-bv-node
Projeto para automatizar download de arquivos manuais, prova de conceito em node

## Funcionalidades

1. Inserção de link e local do arquivo no site
2. Download do arquivo
3. Conectar no banco de dados para pegar pasta para mover arquivo
4. Mover arquivo para a pasta pegada do banco

# Instruções de intalaçõ do baixador bv

Siga os comandos abaixo para instalar o node

1. wget https://nodejs.org/dist/v6.9.5/node-v6.9.5-linux-x64.tar.gz --no-check-certificate
2. tar --strip-components 1 -xzvf node-v6.9.5-linux-x64.tar.gz -C /usr/local

Verificar a instalção

1. node -v && npm -
