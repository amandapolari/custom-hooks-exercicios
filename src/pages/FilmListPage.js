import { Title, PostContainer } from './style';
import { Card } from '../components/Card/Card';
import useRequestData from '../hooks/useRequestData';
import Error from '../components/Error/Error';
import Loading from '../components/Loading/Loading';

const FilmListPage = () => {
    const [filmsList, isLoading, isError] = useRequestData('/films');

    return (
        <div>
            <Title>Título dos filmes</Title>
            <PostContainer>
                {isError ? (
                    <Error />
                ) : isLoading ? (
                    <Loading />
                ) : (
                    filmsList.map((film) => {
                        return (
                            <Card
                                key={film.title}
                                title={film.title}
                                text={film.opening_crawl}
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

export default FilmListPage;
