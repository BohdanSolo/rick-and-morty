import React from 'react';
import { useLocation } from 'react-router-dom';

const SingleCharacterPage = () => {
    const location = useLocation()
    console.log(location);
    return (
       <div>Character card</div>
    );
};

export default SingleCharacterPage