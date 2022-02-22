<div align="center">
  <h1>Squad #5: Sistema de pedidos e entregas</h1>
  <img src="https://www.mercadosaobento.com.br/wp-content/uploads/2020/01/img-delivery.png" height="250" />
</div>

## Projeto final de NodeJS realizado no bootcamp de Desenvolvimento Web Full Stack da SoulCode Academy. Construir uma Rest API em MongoDB que permite cadastrar pedidos a serem entregues.

## Requisitos da aplicação:
- Deve realizar CRUD de pedidos (com endereço e data desejada).
- Deve disponibilizar a ação de verificar o status do pedido: em processamento, em transporte e entregue.
- Deve disponibilizar a ação de fechar pedido com dados de quem fez a entrega.

<br/>

> ## Tecnologias

![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

<br/>

> ## Documentação

[Postman Doc](https://documenter.getpostman.com/view/18941413/UVkmPwgt)

<details>
<summary>Visualizar aqui</summary>
<br>

## 📁 Collection: Admin 

## End-point: /visualizar
``` json
[
    {
        "_id": "620fe24f0922bd4e6ec04ea6",
        "nome": "Libertadores",
        "dataDesejada": "12/03/2022",
        "endereco": "Rua do Maracanã, 777",
        "status": "Em Processamento",
        "nomeEntregador": "Andreas 'Pitico' Pereira",
        "__v": 0
    },
    {
        "_id": "62122a149d52784f8fd29252",
        "nome": "Pão com brioche",
        "dataDesejada": "15/03/2022",
        "endereco": "Rua do Limoeiro, 177",
        "status": "Entregue",
        "nomeEntregador": "Cebolinha",
        "__v": 0
    }
]

```
### Method: GET
>```
>http://localhost:3000/visualizar/
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /cadastrar
### Method: POST
>```
>http://localhost:3000/cadastrar/
>```
### Body (**raw**)

```json
{
        "nome": "Pão",
        "dataDesejada": "17/03/2022",
        "endereco": "Rua de Konoha",
        "status": "Em Processamento",
        "nomeEntregador": "José"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /editar
### Method: POST
>```
>http://localhost:3000/editar/
>```
### Body (**raw**)

```json
{
    "id": "620fe24f0922bd4e6ec04ea6",
    "nome":"Libertadores",
    "dataDesejada": "12/03/2022",
    "endereco":"Rua do Maracanã, 777",
    "status": "Em Processamento",
    "nomeEntregador": "Andreas 'Pitico' Pereira"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /deletar
### Method: POST
>```
>http://localhost:3000/deletar/
>```
### Body (**raw**)

```json
{
    "id":"621398b05c7c2d81f5c9c897"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
## 📁 Collection: Entregador 

## End-point: /ver-status
### Method: POST
>```
>http://localhost:3000/ver-status/
>```
### Body (**raw**)

```json
{
    "nomeEntregador":"Cebolinha"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /att-status
### Method: POST
>```
>http://localhost:3000/att-status/
>```
### Body (**raw**)

```json
{
    "id": "62122a149d52784f8fd29252",
    "status": "Entregue",
    "nomeEntregador": "Cebolinha"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
  
</details>

<br/>

> ## Integrantes [Squad #05] 

| [Igor Pedrosa](https://github.com/igorlap) | [Júlia Bassul](https://github.com/jubassul) | [Bruno Gomes](https://github.com/BrunodevOliveira) | [Bruna Gattei](https://github.com/brunagattei) | [Diego Zagalia](https://github.com/zagalia1984) |
|----------|----------|----------| ---------- | ---------- |
| ![](https://avatars.githubusercontent.com/u/47355583?v=4) |  ![](https://avatars.githubusercontent.com/u/65166068?v=4) | ![](https://avatars.githubusercontent.com/u/85235164?v=4) | ![](https://avatars.githubusercontent.com/u/94197414?v=4) | ![](https://avatars.githubusercontent.com/u/77940907?v=4) |