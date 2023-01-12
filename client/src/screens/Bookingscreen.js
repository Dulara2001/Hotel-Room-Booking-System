import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";

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
            // console.log(data);
          } catch (error) {
            setloading(false);
            seterror(true);
            // console.log(error);
            
          }
        };
        fetchData();
      }, []);

    return (
        
        <div className="m-5">
            {loading ? (<Loader/>) : room ?  (<div>

                <div className="row justify-content-center mt-5 bs">
                    <div className="col-md-6">
                        <h1>{room.name}</h1>
                         <img src={room.imageurls[0]} className="bigimg" />  

                    </div>
                    <div className="col-md-6">
                      <div style={{textAlign: 'right'}}>
                      <h1>Booking Details</h1>
                      <hr></hr>

                      <b>
                      <p>Name : </p>
                      <p>From Date :</p>
                      <p>To Date :</p>
                      <p>Max Count : {room.maxcount}</p>
                      </b>
                      </div>
                      
                      
                      <div style={{textAlign: 'right'}}>
                        <b>
                        <h1>Amount</h1>
                        <hr/>
                        <p>Total days :</p>
                        <p>Rent per day : {room.rentperday} </p>
                        <p>Total Amount :</p>
                        </b>                   
                        
                      </div>

                      <div style={{float: 'right'}}>
                        <button className="btn btn-primary">Pay Now</button>
                      </div>
                      
                    </div>
                </div>

            </div>) : (<Error/>)}
        </div>  

      /*  <div>
            <h1>booking screen</h1>
            <h1>Room id = {roomid}</h1>
        </div> */
    );
}

export default Bookingscreen;