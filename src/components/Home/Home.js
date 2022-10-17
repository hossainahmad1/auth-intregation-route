import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);

    console.log(user)
    return (
        <div>
            <h3>this is a home {user?.email}</h3>
        </div>
    );
};

export default Home;