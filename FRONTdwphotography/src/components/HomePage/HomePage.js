/**
 *  components/HomePage/HomePage.js - Home Page component 
 * */

/* Imports */
//import { useState } from "react";
import "./homePage.css";

/**
 *  Home component */
function HomePage () {
    
    /* const fetchBadStatus = async() => {
        const response = await fetch("http://localhost:8000/");
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
        throw new Error(message);
        } const home = 
            await response.json();
            return home;
    }
    fetchBadStatus(); */
    /* this.useApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }
      
    useApi = async () => {
        const response = await fetch("http://localhost:8000/");
        const body = await response.json();
        if (response.status !== 200) 
        throw Error(body.message);
        return body;
    }; */
    
    return ( 
            
        <div className="mainBody">
            <div className="heading">
                <h1 className="mainHeader">
                    David Warburton Photography
                </h1>

                <h2 className="mainSubtitle">
                    I'm delighted to welcome you here on
                    this beautiful day!
                </h2>
            </div>

            {/* Introduction text on home page*/}
            <div className="textIntro">
                <div className="welcome">
                    {/* General welcome */}
                    <h2>
                        Welcome to my gallery
                    </h2>
                    <p>
                        Since the young age of 20, I've been completely and
                        utterly passionate about the magic that photography
                        brings to the world, capturing those priceless moments.
                    <br />
                    <br />
                        Now at the young age of 70, I feel ready to share
                        my view of the world, captured through so many
                        different lenses, in an endless variety of
                        powerful situations.
                    <br />
                    <br />
                        Sports and landscapes have always been my passion.
                        Many years ago did a lot of freelance sports photography,
                        focussing on rugby and track and field.
                    </p>
                </div>
                <div className="about">
                    {/* About me info */}
                    <h2>
                        About Me
                    </h2>
                    <p>
                        Back in the day, I had my own darkroom and all - I can still remember the smell
                        of the fixer!! Purchased a Canon PowerShot A710 is compact
                        in 2007 and really started to rekindle my passion for the
                        search for the perfect shot - this will of course take more
                        than a lifetime to find. My cameras go everywhere with me.
                    <br />
                    <br />
                        I now have two Canon EOS 60D digital SLRs. I replaced the
                        original kit lens for a Canon EFS 15-85, 10-22 and 60mm
                        macro USM IS lenses. I also purchased a superb Manfrotto
                        tripod so now I have no excuses - do I?!
                    </p>
                </div>

                {/* NEED TO ADD
                * Photo under main, title: "Photo of the day"
                * Function: click to like, leave comment for the photographer
                */}

            </div>
        </div>

    );
}

/* Export */
export default HomePage;