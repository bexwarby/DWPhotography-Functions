/**
 *  components/PhotoPage/PhotoPage.js - Photo Page component 
 * */

/* Imports */
import "./nature.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
/**
 *  Photo Page component */
function Nature (props) {    
   
/* let naturePage = await fetch("http://localhost:8000/nature");
console.log(naturePage); */
    const [like, setLikes] = useState(0); 
   
    // IMPORTANT
    // Need to attach like to specific photo in specific page
    const handleLike = async () => {
        const likeNew = like+1;
        setLikes(likeNew)
        fetch ('/:id', {
        method: 'POST',
        headers: {
            'Accept': 'application:json',
            'Content-Type': 'application:json'
        },
        body: JSON.stringify({
            likeClicked : like
        })
    });
    } 
    // NEED TO ADD fetch

    return (

        <div className="photoBlock">

            {/* Photo album for each page */}
            <div className="introNature">
                <h1>Nature Photography</h1>
                <h2>Beauty is in the eye of the beholder</h2>
                <p className="natureText">
                    "What are you taking a picture of now?!""     
                    <br/>
                    A question that I'm often asked!
                    <br/>
                    Through my photographer's eye, I can honestly
                    find beauty in almost everything. The tiniest
                    cracks can hold pure genius.
                    <br/>
                    I hope that you enjoy my photos of animals,
                    plants and landscapes.
                </p>
            </div>

                <div className="photoAlbums d-flex flex-wrap">
                    
                <div className="carousselShadow">
                    {/* Animals - Image, Like and caption */}
                    <h3 className="photoTitle">Animals</h3>
                    <Carousel className="carousel-override">
                        <Carousel.Item>
                            <img                                
                                className="d-block w-100"
                                src={props.outdoor5}
                                alt="donkey"
                            />
                            <Carousel.Caption>
                                <h3>Eeeee Awwwwww</h3>
                                <p>But am I friendly?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img                                
                                className="d-block w-100"
                                src={props.outdoor1}
                                alt="cow"
                            />
                            <Carousel.Caption>
                                <h3>Cow Headshot</h3>
                                <p>Who are you sniffing?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img                                
                                className="d-block w-100"
                                src={props.outdoor2}
                                alt="goat"
                            />
                            <Carousel.Caption>
                                <h3>Smiling Goat</h3>
                                <p>Living life to the full</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img                                
                                className="d-block w-100"
                                src={props.outdoor3}
                                alt="sheep"
                            />
                            <Carousel.Caption>
                                <h3>Shy sheep</h3>
                                <p>In the North of England, there's an abundance of sheep!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img                                
                                className="d-block w-100"
                                src={props.outdoor4}
                                alt="owl"
                            />
                            <Carousel.Caption>
                                <h3>Wise Owl</h3>
                                <p>Look into my eyes...</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="carousselShadow">
                    {/* Plants - Image, Like and caption */}
                    <h3 className="photoTitle">Plants</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="flower" 
                                src={props.plants1}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="wild mushrooms" 
                                src={props.plants2}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="carousselShadow">
                    {/* Landscapes - Image, Like and caption */}
                    <h3 className="photoTitle">Landscapes</h3>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="Bassenthwaite" 
                                src={props.land1}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="Hiking in the Lakes" 
                                src={props.land2}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="Oilworks in the North East of England" 
                                src={props.land3}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="South Gare" 
                                src={props.land4}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                alt="Reflection on the river in Yarm" 
                                src={props.land5}
                            />
                        {/*  <button onClick= {handleLike} className="likesButton"> 
                                Like
                            </button>
                            <p>{like}</p> */}
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )}
  
export default Nature;