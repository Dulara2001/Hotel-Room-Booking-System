import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Bookingscreen(match) {

    let { roomid } = useParams();

    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [room, setroom] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            setloading(true)
            const data = (await axios.post('/api/rooms/getroombyid',  {roomid : roomid})).data;
    
            setroom(data);
            setloading(false);
            console.log(data);
          } catch (error) {
            setloading(false);
            seterror(true);
            console.log(error);
            
          }
        };
        fetchData();
      }, []);

    return (
        
      /*  <div>
            {loading ? (<h1>Loading....</h1>) : error ? (<h1>Error...</h1>) : (<div>

                <div className="row">
                    <div className="col-md-5">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className="bigimg" /> 

                    </div>
                    <div className="col-md-7">

                    </div>
                </div>

            </div>)}
        </div>  */

        <div>
            <h1>booking screen</h1>
            <h1>Room id = {roomid}</h1>
        </div>
    );
}

export default Bookingscreen;