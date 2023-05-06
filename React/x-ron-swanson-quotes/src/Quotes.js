import React, { useEffect, useState } from "react";

export function Quotes(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
            );

            const data = await response.json();
            setData([...data]);
        };

        getData();
    }, []);

    return (
        <div>
            {data.map((item, index) => {
                return <p key={index}>{item}</p>;
            })}
        </div>
    );
}
