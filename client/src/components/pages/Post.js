import React, {useEffect} from 'react';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import {useParams} from "react-router-dom";
import Description from "../Post/Description";
import Info from "../Post/Info";
import NavBar from "../NavBar";
import "./Post.css";
import useFetchAnimalAndShelter from "../../hooks/useFetchAnimalAndShelter";
import { useNavigate } from 'react-router-dom';
import Photo from "../Post/Photo";

const Post = () => {
    const navigate = useNavigate();
    const [heart, setHeart] = React.useState(farHeart);
    const [fav, setFav] = React.useState('');
    let tmpFavourites = localStorage.getItem('favourites') !== null ? JSON.parse(localStorage.getItem('favourites')) : [];
    let {id} = useParams();
    const idEval = eval(id);

    const request = {
        "animal_id":id
    }

    const { data, dataInfo, town, size, hasError, loading, owner } = useFetchAnimalAndShelter('http://localhost:5000/animal', id, 'http://localhost:5000/user/shelter/');

    const handleClickOnHeart = () => {
        if (heart === farHeart) {
            setHeart(faHeart);
            setFav(true);
            tmpFavourites.push(idEval);
            localStorage.setItem('favourites', JSON.stringify(tmpFavourites));
        }
        else {
            setHeart(farHeart);
            setFav(false);
            tmpFavourites.filter(item => item !== idEval);
            localStorage.setItem('favourites', JSON.stringify(tmpFavourites));
        }
    }

    const handleClickOnTrash = () => {
        if (window.confirm('Czy na pewno chcesz usunąć post?')) {
            setFav(false);
            tmpFavourites.filter(item => item !== idEval);
            localStorage.setItem('favourites', JSON.stringify(tmpFavourites));

            fetch('/animal/' + id, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(() => {
                navigate('/');
            })
        }
    }

    useEffect(() =>{
        if (tmpFavourites.includes(idEval)) {
            setHeart(faHeart);
        }
    }, []);

    useEffect( () => {
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
                        <Photo url={data.photo_path.substring('/public'.length)} name={data.name} male={data.male}/>
                        {/*<img src={data.photo_path.substring('/public'.length)} alt="post" className="post-carousel"/>*/}
                        <Description post={data} town={town} size={size} heart={heart} handleClickOnHeart={handleClickOnHeart} owner={owner} trash={faTrashCan} handleClickOnTrash={handleClickOnTrash}/>
                        <Info dataInfo={dataInfo}/>
                    </div>
            }
        </div>
    );
};

export default Post;
