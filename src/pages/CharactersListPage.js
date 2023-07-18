import { Title, NameContainer } from './style';
import { Card } from '../components/Card/Card';
import useRequestData from '../hooks/useRequestData';
import Error from '../components/Error/Error';
import Loading from '../components/Loading/Loading';

const CharactersListPage = () => {
    const [caractersList, isLoading, isError] = useRequestData('/people');
    return (
        <div>
            <Title>Nomes dos Personagens</Title>
            <NameContainer>
                {isError ? (
                    <Error />
                ) : isLoading ? (
                    <Loading />
                ) : (
                    caractersList.map((caracter) => {
                        return (
                            <Card
                                key={caracter.name}
                                text={caracter.name}
                                backgroudColor={'nome'}
                                textColor={'nome'}
                            />
                        );
                    })
                )}
            </NameContainer>
        </div>
    );
};

export default CharactersListPage;
