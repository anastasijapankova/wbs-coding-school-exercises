import React from 'react';
import { useFetch } from '../custom-hooks/fetch-hook';

const Fetch = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (

        <ul className='fetch'>
            <h1>Fetched Data</h1>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
};

export default Fetch;