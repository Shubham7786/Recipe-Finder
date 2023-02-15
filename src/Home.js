import React, { Component } from 'react';
import "./Home.css";
// import Header from './Header';
import {Link } from "react-router-dom";


class Home extends Component {
    
    render() {
        
        return (
            <React.Fragment>
                <div className="top-body">
                    <div className="header">
                        <p className="logo-title"><span className='logo'>R</span>ecipe<span className='logo'>F</span>inder</p>
                    </div>
                    <div className="top-container">
                        <div className="home-para">
                            <h1 className='homeslogan'>It is even better than<br />
                                an expensive cookery book</h1><br />
                            <h4>Learn how to make favourite restaurant's dishes</h4>
                            {/* <a href='/Header'><button className="find-recipe-btn">Find Recipes</button></a> */}
                            <Link to="/findRecipe"><button className="find-recipe-btn">Find Recipes</button></Link>
                        </div>
                    </div>
                </div>

                <div className="catogery-block-conatiner">
                    <h2 className="category-block-heading">Recipes By Category</h2>
                    <div id="sweet-block" className="category-block">
                        {/* <img class="cat-image" alt="sweets" src="https://foodhub.modeltheme.com/wp-content/uploads/2020/01/sweets_categ-400x500.jpg"></img> */}
                        <h4 className="block-name">Sweets</h4>
                    </div>
                    <div id="burger-block" className="category-block">
                        <h4 className="block-name">Burger</h4>
                    </div>
                    <div id="drink-block" className="category-block">
                        <h4 className="block-name">Drinks</h4>
                    </div>
                    <div id="pizza-block" className="category-block">
                        <h4 className="block-name">Pizza</h4>
                    </div>
                </div>

                <div className="footer">
                    <div className="footer-logo">
                    <p className="logo-title"><span className='logo'>R</span>ecipe<span className='logo'>F</span>inder</p>
                    </div>
                    <div className="social-icon">
                        <div className="social-item">
                        <a href="https://www.facebook.com/"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"></img></a>
                        </div>
                        <div className="social-item">
                        <a href="https://www.instagram.com/"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"></img></a>
                        </div>
                        <div className="social-item">
                        <a href="https://accounts.google.com/"><img src="https://img.icons8.com/bubbles/100/000000/gmail-new.png"></img></a>
                        </div>
                    </div>
                    
                </div>

            </React.Fragment>

        );
    }
}
export default Home;