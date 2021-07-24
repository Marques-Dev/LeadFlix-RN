import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerCarousel,
  ContainerList,
} from "./styles";
import Carousel from './Carousel';
import List from '../../Components/List';
import { GetFilmsTrending, GetFilmsNowPlaying, GetGenders, GetFilmsDiscover } from "../../Services/filmsApi";





const Home = () => {
  //guardado estado da lista
  const [listTrending, setListTrending] = useState([]);
  const [listNowPlaying, setlistNowPlaying] = useState([]);
  const [genders, setGenders] = useState([]);
  const [discovers, setDiscovers] = useState([]);


  const getFilmsTrending = async () => {
    const response = await GetFilmsTrending(1);
    setlistNowPlaying(response.data.results);
  };

  const getFilmsNowPlaying = async () => {
    const response = await GetFilmsNowPlaying(1);
    setListTrending(response.data.results);
  };

  const getFilmsByGender = async () => {
    const response = await GetGenders();
    setGenders(response.data.genres);
  };

  const getFilmsDiscover = async () => {
    const response = await GetFilmsDiscover(1);
    setDiscovers(response.data.results);
  };

  //-----------------------------------------------
  //disparando requisição quando entrar na rela de home
  useEffect(() => {
    getFilmsTrending();
  }, []);

  useEffect(() => {
    getFilmsNowPlaying();
  }, []);

  useEffect(() => {
    getFilmsByGender();
  }, []);

  useEffect(() => {
    getFilmsDiscover();
  }, []);

  return (
    <Container>

      <ContainerCarousel>
        <Carousel list={listTrending} />
      </ContainerCarousel>

      <ContainerList>
        <List list={listNowPlaying} title="Filmes Assistidos Agora" trending={true} />
      </ContainerList>

    
      
        {genders.map((item) => {
          const title = `Filmes de ${item.name}`;
          return (
            <ContainerList key={`${item.id}`}>
              <List list={listTrending} title={title} /> 
            </ContainerList>
          );
        })}

        


    </Container>
  );
};

export default Home;