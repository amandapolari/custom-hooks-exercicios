import { Title, PostContainer } from './style';
import { Card } from '../components/Card/Card';
import useRequestData from '../hooks/useRequestData';
import Loading from '../components/Loading/Loading';
import Error from '../components/Error/Error';

const StarShipsListPage = () => {
    const [starShipsList, isLoading, isError] = useRequestData('/starships');
    return (
        <div>
            <Title>Título das Naves</Title>
            <PostContainer>
                {isError ? (
                    <Error />
                ) : isLoading ? (
                    <Loading />
                ) : (
                    starShipsList.map((starShip) => {
                        return (
                            <Card
                                key={starShip.name}
                                title={starShip.name}
                                text={starShip.manufacturer}
                                backgroudColor={'gray'}
                                textColor={'#ffffff'}
                            />
                        );
                    })
                )}
            </PostContainer>
        </div>
    );
};

export default StarShipsListPage;
