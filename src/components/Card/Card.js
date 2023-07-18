import { CardContainer } from './style';

export const Card = (props) => {
    return (
        <CardContainer
            backgroudColor={props.backgroudColor}
            textColor={props.textColor}
        >
            {props.title && <h1>{props.title}</h1>}
            <p>{props.text}</p>
        </CardContainer>
    );
};
