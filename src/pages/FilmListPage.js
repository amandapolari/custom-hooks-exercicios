import { Title, PostContainer } from './style';
import { Card } from '../components/Card/Card';
import useGetFilms from '../hooks/useGetFilms';

const FilmListPage = () => {
    const filmsList = useGetFilms();

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
