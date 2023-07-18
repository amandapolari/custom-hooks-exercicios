import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';

const useRequestData = (path) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/${path}`)
            .then((response) => {
                setData(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return data;
};
export default useRequestData;
