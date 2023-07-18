# Custom Hooks - Exercícios

## Índice

-   [1. Exercício 1](#exercício-1)
-   [2. Exercício 2](#exercício-2)
-   [3. Exercício 3](#exercício-3)

---

No exercicios de hoje vamos utilizar a API do Star Wars. Ela é uma API pública que fornece dados relacionados ao universo Star Wars, incluindo informações sobre filmes, personagens, planetas, naves espaciais, espécies e muito mais.
https://swapi.dev/

No exercício de hoje você deverá criar um Custom Hook de requisição que seja reutilizado nas três páginas do site: filmes(FilmListPage.js), personagens(CharactersListPage.js) e naves(StarShipsListPage.js) do Star Wars.

## Exercício 1

### Enunciado

Extraia a lógica das requisições já existente no template e construa três custom hooks:

-   **useGetFilms** (Custom Hook para pegar os filmes do Star Wars)
-   **useGetCharacter** (Custom Hook para pegar o nome dos personagens do Star Wars)
-   **useGetStarShips** (Custom Hook para pegar as naves do Star Wars)

### Resolução

## Exercício 2

### Enunciado

-   Utilize o exemplo do **useRequestData do material assíncrono** e reorganize o código do exercício 1, de modo a permitir a reutilização da lógica para todas as requisições projeto.

### Resolução

## Exercício 3

### Enunciado

Atualize o **useRequestData** do exercício anterior:

-   Faça o tratamento de erros: ele deve mostrar os erros de requisição para o usuário.
-   Adicione um indicador de carregamento: o usuário deve saber que os dados estão sendo carregados.
-   Utilize o nome "isLoading" como variável de estado.

### Resolução
