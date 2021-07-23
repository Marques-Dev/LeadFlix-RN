import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerCarousel,
  ContainerList,
} from "./styles";
import Carousel from './Carousel';
import List from '../../Components/List';
import api from '../../Services/api'


const apikey = 'api_key=e0f7ddbcb7a27757fee3f82310428f34';
const language = 'language=pt-BR';


const Home = () => {
//guardado estado da lista
  const [listTrending, setListTrending] = useState([]);

  const lista = [0, 1, 2, 3, 4, 5];


  const init = async () => {
    const response = await api.get(
      `trending/movie/week?${apikey}&${language}&page=${1}`
      );
      setListTrending(response.data.results);
};

//disparando requisição quando entrar na rela de home
  useEffect(() => {
    init(); 
  }, []);

  return (
    <Container>

      <ContainerCarousel>
        <Carousel list={lista} />
      </ContainerCarousel>

      <ContainerList>
        <List list={listTrending} title = "Filmes em Cartaz" trending={true}/>
      </ContainerList>

      <ContainerList>
        <List list={listTrending} title = "Filmes de Ação" />
      </ContainerList>

      <ContainerList>
        <List list={listTrending} title = "Filmes de Comédia" />
      </ContainerList>

    </Container>
  );
};

export default Home;