/**
 *  components/PhotoPage/PhotoPage.js - Photo Page component 
 * */

/* Imports */
import "./sports.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

/**
 *  Photo Page component */
function Sports (props) {
    
    /* let sportsPage = await fetch("http://localhost:8000/sports");
    console.log(sportsPage); */

    const [like, setLikes] = useState(0);
   
    /* Need to attach like to specific photo in 
    specific page. How do I incorporate AWAIT?*/
    const handleLike = async () => {
        const likeNew = like+1;
        setLikes(likeNew)
        fetch ('localhost:8000/', {
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
            <div className="introSports">
                <h1>Sports Photography</h1>
                <h2>Capturing the moment</h2>
                <p className="txtSports">
                    I began my sports career playing and coaching rugby 
                    whilst I was a PE teacher, and coaching athletics 
                    on evenings and weekends.       
                    <br/>
                    <br/>
                    Athletics was my passion, my life.
                    <br/>
                    <br/>
                    Then came along rowing, discovered 20 years ago 
                    during my daughter's gymnastics display. 
                    <br/>
                    <br/>
                    I've been coaching and snapping away with my cameras
                    ever since!
                </p>
            </div>
            <div className="polaroidContainer">
                {/* Image and caption */}
                <div className="polaroid polaroid1">
                    <img alt="Colin Jackson hurdling 1983" src={props.sport1}/>
                    <button onClick= {handleLike} className="likesButton" > 
                        Like
                    </button>
                    <p>{like}</p>
                </div>
                <div className="polaroid">
                    <img alt="Angela hurdling" src="images/1980s.jpg" id="2"/>
                    <button onClick= {handleLike} className="likesButton"> 
                        Like
                    </button>
                    <p>{like}</p>
                </div>
                <div className="polaroid">
                    <img alt="Athletes hillclimbing in training" src={props.sport3}/>
                    <button onClick= {handleLike} className="likesButton"> 
                        Like
                    </button>
                    <p>{like}</p>
                </div>
                <div className="polaroid">               
                    <img alt="Male four in rowing competition" src={props.sport4}/>
                    <button onClick= {handleLike} className="likesButton"> 
                        Like
                    </button>
                    <p>{like}</p>
                </div>
                <div className="polaroid">
                    <img alt="Rowing into a sunset" src={props.sport5}/>
                    <button onClick= {handleLike} className="likesButton"> 
                        Like
                    </button>
                    <p>{like}</p>
                </div>
                <div className="polaroid">
                    <img alt="Young grammar school rugby players" src={props.sport6}/>
                    <button onClick= {handleLike} className="likesButton"> 
                        Like
                    </button>
                    <p>{like}</p>
                </div>
                <div className="polaroid">
                    <img alt="Black and white women quad" src={props.sport7}/>
                    <button onClick= {handleLike} className="likesButton"> 
                        Like
                    </button>
                    <p>{like}</p>
                </div>
                <div className="polaroid">
                    <img alt="Polo national championships" src={props.sport8}/>
                    <button onClick= {handleLike} className="likesButton"> 
                        Like
                    </button>
                    <p>{like}</p>
                </div>
            </div>
        </div>
    );
}

/* Export */
export default Sports;