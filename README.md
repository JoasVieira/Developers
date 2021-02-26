## Tecnologias

- Laravel
- React
- Mysql

## Projeto

Projeto desenvolvido para o teste técnico da empresa Gazin.

## Layout

Você pode visualizar o layout da aplicação  através [desse link](https://www.figma.com/file/kuHW4ZGY5GOP5RRSaH6CuG/Developer?node-id=0%3A1), com uma conta do figma.

#BACKEND

- Completo

Executando o Backend:

1. Acessar a pasta backend_laravel/developer:

```powershell
cd backend_laravel/developer
```

2.  Em seguida executar o comando, para subir o container:

```powershell
docker-compose up -d
```

3.  Após isso executar  para o acesso ao container:

```powershell
docker exec -it developer bash
```

4. Depoi acessar a pasta developer:

```powershell
cd developer
```

5.  Utilize o comado para instalar as dependências:

```powershell
composer install
```

6. Renomear arquivo .env.example para .env e alterar as seguintes configurações:

```powershell
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=developers
DB_USERNAME=root
DB_PASSWORD=root
```

7.  Em seguida rodar o seguinte comando para gerar um key necessário: 

```powershell
php artisan key:generate
```

8. Realizar o seguinte comando para a criação do banco de dados:

```powershell
php artisan migrate
```

#FRONTEND

- Incompleto:
    1. Sistema de paginação.

1. Dependências
    1. axios → Para a conexão com a api.
    2. react-router-dom → Para controle SPA, como o (useHistory, Link).
    3. react-icon → Para os ícones utilizados.
    4. styled-components → Para uma estilização em javascript.
2. Dependências para Desenvolvimento 
    1. eslint → Para padronização de códigos, utilizando boas praticas.
    2. prettier → Para a complementação do eslint, deixando o código mais "bonito".

Executando o Frontend:

1. yarn
    1. com yarn basta executar `yarn` para a instalação das dependências  e depois das dependências instaladas utilizar o script:

    ```powershell
    yarn start
    ```

    2.  Acesse [http://localhost:3000/](http://localhost:3000/) se não abrir automaticamente.

2. npm
    1. Como essa aplicação foi toda construída com yarn por motivos de instalação e execuções mais rápidas, para utilizar npm demorara um pouco mais, para a instalação para as dependências, precisando primeiramente excluir o arquivo: yarn.lock, em seguida rodando o comando:

    ```powershell
    npm install
    ```

     2.  logo poderá executar o npm

    3.  Acesse [http://localhost:3000/](http://localhost:3000/) se não abrir automaticamente.
