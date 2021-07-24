import React, {useEffect} from 'react';
import { FlatList } from 'react-native';

import { ContainerItem, Text, Image } from './styles';

const List = ({ list, title, trending }) => {
     
   

    return (
        <>
            <Text>{title}</Text>
            <FlatList
                data={list}
                keyExtractor={(item, index) => `${index}`}
                horizontal
                //passando estilização diretamente ao flatList
                style={{ marginTop: 10 }}
                renderItem={({ item }) => {
                    const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;
                    return (
                        <ContainerItem trending={trending}>
                            <Image 
                                trending={trending}
                                source={{
                                    uri,
                                        
                                }}
                            />
                        </ContainerItem>
                    );
                }}
            />
        </>
    );
};

export default List;