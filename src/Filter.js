import React from "react"
import "./styling/filter/filter.css"



const Filter = ({filterItem,removeItem}) =>{


    return (

        <div>
            {
                filterItem.length >= 1 &&


                <div className = "filter-container">
                {filterItem.map((item,index) =>{
                    return (
                        <button key = {index} onClick = {() =>removeItem (item)} className = "filtered-item filter-btn">{item}
                            <img  className = "close" src= "./images/icon-remove.svg"></img>
                        </button>
                        
                    )
                })                    
                }
                </div>
            }

        </div>

        
    )
}

export default Filter