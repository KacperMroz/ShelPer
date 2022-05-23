import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import "../pages/Post.css";

const PhotoCarousel = (props) => {
    // TODO: CSS FOR THUMBNAILS
    //.thumbnail {
    //     margin: 0 5px;
    //     height: 100px;
    //     width: 100px;
    //     object-fit: cover;
    //     border-radius: 5px;

    return (
        <>
            <div className='post-carousel' style={{ textAlign: "center" }}>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={props.post}
                        time={10000}
                        width="850px"
                        height="500px"
                        radius="10px"
                        slideNumber={false}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="#EEEEEE"
                        slideImageFit="contain"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default PhotoCarousel;
