import { Title, NameContainer } from './style';
import { Card } from '../components/Card/Card';
import useGetCharacter from '../hooks/useGetCharacter';

const CharactersListPage = () => {
    const caractersList = useGetCharacter();
    return (
        <div>
            <Title>Nomes dos Personagens</Title>
            <NameContainer>
                {caractersList.map((caracter) => {
                    return (
                        <Card
                            key={caracter.name}
                            text={caracter.name}
                            backgroudColor={'nome'}
                            textColor={'nome'}
                        />
                    );
                })}
            </NameContainer>
        </div>
    );
};

export default CharactersListPage;
