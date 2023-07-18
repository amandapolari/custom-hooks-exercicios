import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { Title, PostContainer } from './style';
import { Card } from '../components/Card/Card';

const StarShipsListPage = () => {
    const [starShipsList, setStarShipsList] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/starships`)
            .then((response) => {
                setStarShipsList(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Title>Título das Naves</Title>
            <PostContainer>
                {starShipsList.map((starShip) => {
                    return (
                        <Card
                            key={starShip.name}
                            title={starShip.name}
                            text={starShip.manufacturer}
                            backgroudColor={'gray'}
                            textColor={'#ffffff'}
                        />
                    );
                })}
            </PostContainer>
        </div>
    );
};

export default StarShipsListPage;
