import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Bookingscreen(match) {
    const [loading, setloding] = useState()
    const [error, seterror] = useState()
    const [room, setroom] = useState()

    let { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                setloding(true)
                const data = (await axios.post('/api/rooms/getroombyid', {id : match.useParams.id})).data

                setroom(data)
                setloding(false)
                console.log(data);

            } catch (error) {
                seterror(true)
                console.error(error);
                setloding(false)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Booking screen</h1>
            <h1>Room id = {id}</h1>
        </div>
    );
}

export default Bookingscreen;