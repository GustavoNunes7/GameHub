// ==============================
// ETAPA 3 - CADASTRO DOS JOGOS
// ==============================

export const jogos = [
    {
        id: "1",
        nome: "Minecraft",
        genero: "Sandbox",
        nota: 4.8,
        plataforma:"PC, Console, Mobile",
        Descrição: "Um mundo feito de blocos onde você pode construir",
        imagem: require("../../assets/games/minecraft.jpg"),
        destaque: true,
    },
    {
        id: "2",
        nome: "Fortnite",
        genero: "Battle",
        nota: 4.5,
        plataforma:"PC, Console, Mobile",
        Descrição: "Uma ilha e um objetivo, sobreviver!",
        imagem: require("../../assets/games/fortnite.jpg"),
        destaque: true,
    },
    {
        id: "3",
        nome: "EA Sports FC",
        genero: "Esportes",
        nota: 4.3,
        plataforma:"PC, Console",
        Descrição: "Simulador de futebols mais famoso do mundo",
        imagem: require("../../assets/games/fortnite.jpg"),
        destaque: true,
    },
]