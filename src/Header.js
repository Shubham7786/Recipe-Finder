import React, { Component } from 'react';
import "./css/Header.css";
import RecipeBody from "./RecipeBody";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searched: false,
          foodItem: "",
        };
      }
    
      getRecipe = (e) => {
        e.preventDefault();
    
        var item = document.getElementById("text").value;
    
        this.setState({
          searched: true,
          foodItem: item,
        });
        if(item){
          document.getElementById("headerDiv").style.paddingBottom = "10px";
        }
      };

    render() {
        return (
        
 <React.Fragment>
    <div className='headerDiv' id="headerDiv">
                <div className="header-container">
                    <h1 className="heading"><span className='logo'>R</span>ecipe<span className='logo'>F</span>inder</h1>
                  
                
                <form className="input-form">
                    <input type="text" id="text" placeholder="Enter the Name of the Dish"></input>
                    <button className="submit-btn" onClick={this.getRecipe}>Get Intgredients</button>
                </form>
                </div>
               
                {this.state.searched ? (
          <RecipeBody foodItem={this.state.foodItem} />
        ) : (
          <h2 className="center">
            Type a Dish Name to search for its ingredients
          </h2>
        )}
         </div>
            </React.Fragment>
         
           
        )
    }
}

export default Header;