import { Title, PostContainer } from './style';
import { Card } from '../components/Card/Card';
import useRequestData from '../hooks/useRequestData';

const StarShipsListPage = () => {
    const starShipsList = useRequestData('/starships');
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
