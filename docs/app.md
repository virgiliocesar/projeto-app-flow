# Podcast Menager

### Descrição
Um app ao estio netflix, aonde posso centralizar diferentes podcastes episódio
podcasts separados por categorias.

### Dominio
Podocast Menager

### Features
- Listar os episódios podcasts em sessões de categorias
  - [saúde, fitness, mentalidade, humor ]
- Filtrar episódios por nome de podcast


## Como vou implementar
  GET retorna lista de episódios
  
```js
[{
    podcastName: "Fui SURPREENDIDO pelo MC Lan",
    episode: "CBUM - folw #319",
    videoId: "aXidK0_UlO8"
    cover: "https://i.ytimg.com/vi/aXidK0_UlO8/maxresdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZmybxlFx-jZaVBuHL7uth4esREQ",
    link: "https://www.youtube.com/watch?v=aXidK0_UlO8"
    category: ["saúde", "esport", "bodybuilder"]
},
{
    podcastName: "a treta do NEYMAR x LUANA PIOVANI e a privatização das prais",
    episode: "CBUM - folw #320",
    videoId: "nRJLNINlsoo"
    cover: "https://i.ytimg.com/vi/nRJLNINlsoo/maxresdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDeNpYetroHqfyiS5Swxwe_4pYcg",
    link: "https://www.youtube.com/watch?v=nRJLNINlsoo"
    category: ["Noticias","treta"]
}]
```