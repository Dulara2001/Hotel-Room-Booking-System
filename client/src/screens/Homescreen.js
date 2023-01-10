import React, { useState, useEffect } from "react"
import axios from "axios";
import Room from "../components/Room";

function Homescreen() {

    const [rooms, setrooms] = useState([])
    const [loading, setloding] = useState()
    const [error, seterror] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                setloding(true)
                const data = (await axios.get('/api/rooms/getallrooms')).data

                setrooms(data)
                setloding(false)

            } catch (error) {
                seterror(true)
                console.error(error);
                setloding(false)
            }
        }
        fetchData();
    }, []);


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {loading ? (
                  <h1>loading...</h1>
                ) : error ? (
                  <h1>Error</h1>
                ) : (
                  rooms.map((room) => {
                    return <div className="col-md-9 mt-2">
                        <Room room={room}/>
                    </div>

                }))}
            </div>
        </div>
    )
}

export default Homescreen;