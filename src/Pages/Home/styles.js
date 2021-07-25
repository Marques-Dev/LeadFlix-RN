import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";


const { width, height } = Dimensions.get('screen')

export const Container = styled.ScrollView`
    background-color: #000;
    flex: 1;
`;

//atravez do dimensions consigo fazer o ContainerCarousel ser dividido
//em 50% da tela do dispositivo
export const ContainerCarousel = styled.View`
    height: ${`${height/2}px`};
`;

export const ContainerList = styled.View`
    margin-left: 10px; 
    margin-top: 10px;
`;

