import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import { useState, CSSProperties } from "react";

function Loader() {

    let [loading, setLoading] = useState(true);
   

    return (
        <div>
            <div className="sweet-loading text-center">

                <HashLoader
                    color= '#000'
                    loading={loading}
                    css = ''
                    size={80}

                />
            </div>
        </div>
    )
}

export default Loader;