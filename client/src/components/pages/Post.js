import React from 'react';
import { faHeartCircleMinus, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {useParams} from "react-router-dom";
import Description from "../Post/Description";
import Info from "../Post/Info";
import NavBar from "../NavBar";
import PhotoCarousel from "../Post/PhotoCarousel";
import "./Post.css";

const Post = () => {
    const [heart, setHeart] = React.useState(faHeartCirclePlus);
    let {id} = useParams();

    // TODO: route to 404 page if post is not found and better error handling
    if (isNaN(id)) {
        return <div>404</div>
    }

    // TODO: fetch post data
    const post = {
        id: 1,
        name: "Lola",
        image: [
            {image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"},
            {image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880"},
            {image: "https://images.unsplash.com/photo-1598628461950-268968751a2e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688"},
            {image: "https://images.unsplash.com/photo-1583511666372-62fc211f8377?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688"}
        ],
        description: "Poznaj Lolę lepiej. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem....",
        gender: "female",
        city: "Kraków",
        size: "Mała",
        age: "3",
        health: "Zdrowa",
        date: "19.10.2021 19:20",
        breed: "Mieszaniec"
    }

    const handleClickOnHeart = () => {
        if (heart === faHeartCirclePlus)
            setHeart(faHeartCircleMinus);
        else
            setHeart(faHeartCirclePlus);
    }

    return (
        <div className='post-base-container'>
            <NavBar />
            <div className='post-info-container'>
                <PhotoCarousel post={post.image}/>
                <Description post={post} heart={heart} handleClickOnHeart={handleClickOnHeart} />
                <Info />
            </div>
        </div>
    );
};

export default Post;
