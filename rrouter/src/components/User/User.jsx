import React from "react";
import { useParams } from "react-router-dom"; //to fetch the parameters from the url

export default function User(){
    const {userId} = useParams();
    return(
        <>User: {userId}</>
    )
}

