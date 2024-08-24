import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function DefaultP() {
    const params = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(params);
                // const { data: postData } = await axios.get(`http://localhost:9000/posts/${1}`);
                const { data: postData } = await axios.get(`https://gist.github.com/mojtaba-python/c6e6e95e4c55f5119403e7ec859620ff/${1}`);
                console.log(postData);
                setPosts(postData);

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, [])


    return (
        <>
            <div className='card'>
                <img className='card-img-top' src={posts.img} alt="" style={{ height: "300px" }} />
                <div className="card-body">
                    <h5 className='card-title'>{posts.title}</h5>
                    <p className='card-text'>{posts.des}</p>
                </div>
            </div>
        </>
    )
}