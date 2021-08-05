import React,{useState,useEffect} from "react"
import Header from "./Header"
import Jobs from "./Jobs"
import Filter from "./Filter"
import item from "./data.json"

function App() {

  const[filterItem ,setFilterItem ] = useState([])

  const [jobs,setJobs] = useState(item)

  const handleFilter = (filterKey) =>{

    if(filterItem.indexOf(filterKey) !== -1){
      return;
    }
     const filteredArr=filterItem.concat(filterKey)
     
     setFilterItem(filteredArr)

     const check = jobs.filter((item) => item.languages.includes(filterKey) || item.tools.includes
     (filterKey)

     || item.role.includes(filterKey) 
     || item.level.includes(filterKey)
     
     )
     

     setJobs(check)


     
  }

  const removeItem = (key) =>{

    const newArr =filterItem.filter((item) => item !== key)
     
    setFilterItem(newArr)

    if(newArr.length === 0){

      setJobs(item)
      return
    }
    
  
    const result = item.filter((data) => {
      return newArr.every((str) => {
        return data.languages.includes(str) || data.tools.includes(str)
        || data.role.includes(str) 
        || data.level.includes(str)

      });
    });
            
    setJobs(result)
    

  }



  



 
  
 
  return (

    <div>

      < Header />
      < Filter filterItem = {filterItem} removeItem = {removeItem} />


      <div className = "container">
        < Jobs jobs = {jobs}  handleFilter = {handleFilter}/>

      </div>
      
     
    </div>
     
  );
}

export default App;
