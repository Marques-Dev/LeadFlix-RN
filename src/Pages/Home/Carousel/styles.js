import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";


//usando dimensions para pegar tamanho da tela do dispositivo
const { width, height } = Dimensions.get('screen')


export const Image = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    width: 100%;
    height: 100%;

`;

export const Icon = styled(Entypo)`

`;

export const ContainerButtons = styled.View`
    position: absolute;
    bottom: 0px;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`;

export const ButtonWacth = styled.TouchableOpacity`
    background-color: white;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const Text = styled.Text`

`;

export const Gradient = styled(LinearGradient)`
    position: absolute;
    bottom: 0px;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`;

//deixando os itens da lista clicaveis 
export const Item = styled.TouchableOpacity.attrs({
    activeOpacity: 1,
    })`
    height: 100%;
    width: ${`${width}px`};
`;