import React, {useEffect} from 'react';
import { faHeartCircleMinus, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {useParams} from "react-router-dom";
import Description from "../Post/Description";
import Info from "../Post/Info";
import NavBar from "../NavBar";
import PhotoCarousel from "../Post/PhotoCarousel";
import "./Post.css";
import useFetchAnimalAndShelter from "../../hooks/useFetchAnimalAndShelter";

const Post = () => {
    const [heart, setHeart] = React.useState(faHeartCirclePlus);
    const [fav, setFav] = React.useState('');
    let tmpFavourites = localStorage.getItem('favourites') !== null ? JSON.parse(localStorage.getItem('favourites')) : [];
    let {id} = useParams();
    const idEval = eval(id);

    const request = {
        "animal_id":id
    }

    const { data, dataInfo, hasError, loading } = useFetchAnimalAndShelter('http://localhost:5000/animal', id, 'http://localhost:5000/user/shelter/');
    const post = {
        name: "Lola",
        description: "Poznaj Lolę lepiej. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem....",
        male: true,
        city: "Kraków",
        size: "Mały/a",
        age: "3",
        healthy: true,
        date: "19.10.2021 19:20",
        breed: "Mieszaniec",
        weight: "6",
        color: "white",
        photo_path: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    }

    const handleClickOnHeart = () => {
        if (heart === faHeartCirclePlus) {
            setHeart(faHeartCircleMinus);
            setFav(true);
            tmpFavourites.push(idEval);
            localStorage.setItem('favourites', JSON.stringify(tmpFavourites));
        }
        else {
            setHeart(faHeartCirclePlus);
            setFav(false);
            tmpFavourites = tmpFavourites.filter(item => item !== idEval);
            localStorage.setItem('favourites', JSON.stringify(tmpFavourites));
        }
    }

    useEffect(() =>{
        if (tmpFavourites.includes(idEval)) {
            setHeart(faHeartCircleMinus);
        }
    }, []);

    useEffect( () => {
        console.log(data);
        async function fetchData(method) {
            try {
                await fetch('/favourite', {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(request),
                });
                if (data.message) {
                    console.log(data.message);
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (fav === true) {
            fetchData('POST');
        }
        else if (fav === false) {
            fetchData('DELETE');
        }
    }, [fav]);



    return (
        <div className='post-base-container'>
            <NavBar />
            {hasError ? <div>404</div> :
                loading ? <div>Loading...</div> :
                    <div className='post-info-container'>
                        {id === '1' ? <>
                                <img src={post.photo_path} alt="post" className="post-carousel"/>
                                <Description post={post} heart={heart} handleClickOnHeart={handleClickOnHeart}/>
                                <Info dataInfo={dataInfo}/>
                            </> : <>
                                <img src={data.photo_path.substring('/public'.length)} alt="post" className="post-carousel"/>
                                <Description post={data} heart={heart} handleClickOnHeart={handleClickOnHeart}/>
                                <Info dataInfo={dataInfo}/>
                        </>}
                    </div>

            }
        </div>
    );
};

export default Post;
