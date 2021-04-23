/**
 *  components/PhotoPage/PhotoPage.js - Photo Page component 
 * */

/* Imports */
//import { useState } from "react";
import "./blog.css";

/**
 *  Photo Page component */
 function Blog() {

/*     let blogPage = await fetch("http://localhost:8000/blog");
     console.log(blogPage);*/

    return (
        <div className="blogOverview">

            <div className="headerBlog">
                <h1 className="title">
                    My Photography Blog
                </h1>
                <h2 className="subtitle">
                    The inspiration behind my photography ventures.
                </h2>
            </div>

            {/* Blog - Yarm */}
            <div className="blog blog1">
                <h3 className="blogTitle">Yarm - My Beautiful Hometown</h3>
                <h5>Written on 09.04.2021</h5>
                <p className="blogInput blogYarm">
                    I will always be a Leeds boy at heart, born 'n' bred,
                    but for over 20 years, Yarm in the North-East of 
                    England has become my quaint and welcoming dwelling.
                    <br/>
                    <br/>
                    Yarm is an ancient market town, packed with welcoming 
                    cafes, restaurants, boutiques and pubs. All in one 
                    street! I would recommend a visit to anyone heading
                    up North. Drop me a message if you want some company
                    for a chat and coffee :-)
                    <br/>
                    <br/>
                    Set in a huge meander in the River Tees, it offers
                    a photographers' paradise. Not only does Yarm boast 
                    fascinating cobbled streets and shop fronts, but it's 
                    also surrounded by beautiful nature spots.
                </p>
            </div>

            {/* Blog - My Family */}
            <div className="blog blog2">
                <h3 className="blogTitle">My Family</h3>
                <h5>Written on 09.04.2021</h5>
                <p className="blogInput blogFamily">
                    My family are my reason for being. And what can I say?
                    I absolutely <span className="love">LOVE</span> taking
                    pictures of them! Ok, so I may have a few too many,
                    but how many photos is really too many?
                    <br/>
                    <br/>
                    So, my beautiful wife Angela may, every now and 
                    again, get ever-so-slightly frustrated with me sticking
                    my camera in her face! She shouldn't be so blooming
                    photogenic then.
                    <br/>
                    <br/>
                    As well as my son and daughter, Ben and Rebekah, I've
                    been blessed with two stunning grandchildren, Adela and
                    Ilay. They are simply stunning (biased, me?!) and never
                    fail to surprise me with their ability to learn French,
                    English and Spanish at the young ages of two and four.
                </p>
            </div>

        </div>
    );
}

export default Blog;