import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { Title, PostContainer } from './style';
import { Card } from '../components/Card/Card';

const FilmListPage = () => {
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/films`)
            .then((response) => {
                setFilmsList(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Title>Título dos filmes</Title>
            <PostContainer>
                {filmsList.map((film) => {
                    return (
                        <Card
                            key={film.title}
                            title={film.title}
                            text={film.opening_crawl}
                            backgroudColor={'gray'}
                            textColor={'#ffffff'}
                        />
                    );
                })}
            </PostContainer>
        </div>
    );
};

export default FilmListPage;
