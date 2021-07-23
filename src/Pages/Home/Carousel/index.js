import React from 'react';
import { FlatList } from 'react-native';

//import { Container } from '../styles';

import {
    Image,
    Icon,
    Gradient,
    ButtonWacth,
    Text,
    Item
  
  } from './styles';

const Carousel = ({list}) => {
    return (
        <FlatList
        //flatlist para mover os cards dos filmes pelo carousel
        data={list}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => `${item}_${index}`}
        renderItem={({ item }) => {
                return (
                    <Item>
                        <Image source={{ uri: 'https://img.assinaja.com/assets/tZ/004/img/157476_520x520.png' }} />


                        <Gradient
                            // "fade" dos botoes abaixo do carousel
                            colors={["transparent", "rgba(0,0,0, 0.9)", "rgba(0,0,0, 1)"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                        >
                            <Icon name="share" size={40} color="white" />

                            <ButtonWacth>
                                <Icon name="controller-play" size={25} color="black" styled={{ marginRigth: 5 }} />
                                <Text>Assistir</Text>
                            </ButtonWacth>

                            <Icon name="info-with-circle" size={40} color="white" />
                        </Gradient>
                    </Item>
                );
            }}
        />
    );
};

export default Carousel;