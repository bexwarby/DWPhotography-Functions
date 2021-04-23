/**
 *  components/PhotoPage/PhotoPage.js - Photo Page component 
 * */

/* Imports */
import "./people.css";
/* import { useState } from "react"; */
import 'bootstrap/dist/css/bootstrap.css';
/* import { BrowserRouter as Router, useParams } from "react-router-dom";
 */
/**
 *  Photo Page component */
function People (props) {

/*     let peoplePage = await fetch("http://localhost:8000/people");
     console.log(peoplePage);*/
    
    /* const [like, setLikes] = useState(0); */
   
    // Need to attach like to specific photo in specific page
    /* const handleLike = async () => {
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
    } */
    // NEED TO ADD fetch

    return (

        <div className="photoBlock">

            {/* Photo album for each page */}
            <div className="introPeople">
                <h1><br/><br/>People - A Moment in Time</h1>
                <div className="txtPeople">
                    <p>
                    Those moments of complete and utter fascination
                    or contemplation. 
                    <br/>
                    Those moments where we are
                    deeply engrossed in what we are doing.    
                    <br/>
                    Those are the moments I most love to capture.
                    <br/>
                    At times when the subject has no idea that I'm                   
                    taking a picture.
                    <br/>
                    Of course, that's much easier said than done!
                    </p>
                </div>
            </div>

            <div className="photoAlbums">
                {/* Animals - Image, Like and caption */}
                <div className="polaroid">
                    <div className="container">
                        <p>Berets</p>
                    </div>
                    <img alt="Men wearing berets" src={props.head1}/>
                </div>
                <div className="polaroid">
                    <div className="container">
                        <p>My wife in the Lake District</p>
                    </div>
                    <img alt="My wife in the Lake District" src={props.head2}/>
                </div>
                <div className="polaroid">
                    <div className="container">
                        <p>My children</p>
                    </div>
                    <img alt="My children" src={props.head3}/>
                </div>
                <div className="polaroid">
                    <div className="container">
                        <p>Pure joy - Mary and Angela winning Nat Masters rowing race</p>
                    </div>
                    <img alt="Pure joy, Mary and Angela winning rowing race" src={props.head5}/>
                </div>
                <div className="polaroid">
                    <div className="container">
                        <p>My self portrait in a reflection</p>
                    </div>
                    <img alt="My self potrait in a reflection" src={props.head6}/>
                </div>
            </div>
        </div>
    );
}

/* Export */
export default People;