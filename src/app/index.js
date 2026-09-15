// ETAPA 1 -   INICIO DO PROJETO: TELA INICIAL

// O que fazemos aqui?
// Esta é a tela inicial do app (rota "/"). 

import { View, text, ScrollView, FlatList, pressable, StyleSheet} from "react-native";
// view - Conteiner básicos
// text - Para exibir textos
// ScrollView - Permite rolagem vertical
// FlatList - Lista otimizada com rolagem
//Pressable - Botão de feedback de toque
//StyleSheet - Define estilos

import { useRouter } from "expo-router";
// acesso ao objeto router, tem a função de navegação baseada em arquivos (biblioteca).

import GameCard from "../components/GameCard";
// Reutilizar componentes, isso evita duplicação de código e mantem a consistência visual.

import { jogos } from "../data/jogos";
// Importante uma array de objetos do arquivo data/jogos.js

import { cores } from "../data/tema"
// importa a paleta de cores do app do arquivo data/tema.js

// ===================================================
export default function Inicio() {
     const router = useRouter();
    // obtemos o objeto de navegação 

    //--------------------------------
    // BLOCO 1 - PREPARAÇÃO DOS DADOS
    //--------------------------------

    const destaques = jogos.filter((jogo) => jogo.destaque);
    // percorre o array de jogos e cria um novo array destaques contendo apenas os objetos cuja o campo "destaque" seja true.
    const populares = [...jogos].sort((a, b) => b.nota - a.nota).slice(0, 5);
    // ...jogos -> cria uma cópia do array original
    // .sort((a, b) => b.nota - a.nota) ordena a cópia da maior nota para a menor
    // .slice(0, 5) : extrai apenas os 5 primeiros elementos do array

    //--------------------------------
    // BLOCO 2 - ESTRUTURA DA TELA
    //--------------------------------
    
    return (
        // Inicio do JSK retornando pelo componente: define o que será renderizado na tela
        <ScrollView style={style.container} contentContainerStyle={ Styles.conteudo }>
            {/* scrollview: Container com rolagem vertical */}
            <Text style={style.titulo}>GameHub</Text>
            {/* Exibe o texto "GameHub" como titulo, usando o estilo "titulo" */}
            <Text style={style.subtitulo}>Seu universo de jogos em um só lugar</Text>

        </ScrollView>
             //--------------------------------
            // BLOCO 2.1 - SEÇÃO JOGOS
            //--------------------------------

            
    );

}