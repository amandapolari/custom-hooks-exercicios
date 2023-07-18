import React from 'react';
import images from '../../assets/images';
import { ImgError } from '../LoadingAndErrorStyle';

const Error = () => {
    return (
        <div>
            <ImgError src={images.error} alt="imagem de error" />
        </div>
    );
};

export default Error;
