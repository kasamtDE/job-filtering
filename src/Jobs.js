import React from "react"
import "./styling/jobs/jobs.css"



const Jobs = ({jobs,handleFilter}) =>{

    
    return (

        <div>
            {jobs.map((job) =>{
                const {id,company,logo,isNew,featured,position,role,level,postedAt,contract,location,languages,tools} = job      
       
                return (
                    <div className = {isNew && featured ? "job-container green-border" : "job-container"} key = {id}>

                        <div className="job-infos">  
                            <div className="logo">
                                <img src={logo}  alt = "logo"/>
                            </div>        
                            <div className="info">                      
                                <div className="company-name">
                                   <h3>{company}</h3> 
                                {isNew  && <span className = "new"> NEW !</span>}
                                {featured && <span className = "featured"> FEATURED</span>}
                                
                                </div>
                                <div className="position">{position}</div>
                                <div className="posted">
                                    <div className="time">{postedAt}</div>
                                    <span></span>
                                    <div className="contract"> {contract} </div>
                                    <span></span>
                                    <div className="location"> {location} </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="key-words">
                            <button onClick = {() => handleFilter(`${role}`)} className = "role filter-btn"> {role } </button>
                            <button onClick = {() => handleFilter(`${level}`)} className = "level filter-btn"> {level} </button>
                            <div className="languages"> {languages.map((language,index) =>{
                                return <button key = {index} onClick = {() => handleFilter(`${language}`)} className = "filter-btn"> {language} </button>
                            })} </div>
                            <div className="tools"> {tools.map((tool,index) =>{
                                return <button key = {index} onClick = {() => handleFilter(`${tool}`)} className = "filter-btn"> {tool} </button>
                            })} </div>
                        </div>
                        

                    </div>
    
                )
            })}

        </div>
    )

}

export default Jobs