import React , {useState , useEffect} from "react"
import axios from "axios";

function Homescreen(){

    const[rooms , setrooms] = useState([])

    useEffect(() => {
        async function fetchData() { 
          try {
            const data = (await axios.get('/api/rooms/getallrooms')).data;
            setrooms(data);   
          } catch (error) { 
            console.error(error);  
          }  
        }
     fetchData(); 
      }, []);

    
    return(
        <div>
            <h1>home screen</h1>
            <h1>there are {rooms.length} rooms</h1>
        </div>
    )
}

export default Homescreen;