import {useEffect, useState} from 'react';

export default function ApiCall() {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setData(data);
        }
        catch(error){
            console.log('Error fetching the data', error);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <div>
            <ul>
                {data && data.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    )


}