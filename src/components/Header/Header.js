import { useNavigate } from 'react-router-dom';
import {
    goToCharactersListPage,
    goToStarShipsPage,
    goToFilmsPage,
} from '../../routes/coordinator';

import { StyledHeader, ButtonContainer, TittleContainer } from './style.js';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <TittleContainer>
                <img
                    src={
                        'https://ecoms1-nyc3.nyc3.cdn.digitaloceanspaces.com/1162/@v3/1623846373431-tndkwkd.png'
                    }
                    alt="logo"
                />
                <h2>Star Wars</h2>
            </TittleContainer>

            <ButtonContainer>
                <button onClick={() => goToFilmsPage(navigate)}>
                    Lista de Filmes
                </button>
                <button onClick={() => goToCharactersListPage(navigate)}>
                    Lista de Personagens
                </button>
                <button onClick={() => goToStarShipsPage(navigate)}>
                    Lista de Naves
                </button>
            </ButtonContainer>
        </StyledHeader>
    );
};
