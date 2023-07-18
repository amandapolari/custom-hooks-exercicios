import React from 'react';
import images from '../../assets/images';
import { ImgLoading } from '../LoadingAndErrorStyle';

const Loading = () => {
    return (
        <div>
            <ImgLoading src={images.loading} alt="imagem de loading" />
            <p>CARREGANDO..</p>
        </div>
    );
};

export default Loading;
