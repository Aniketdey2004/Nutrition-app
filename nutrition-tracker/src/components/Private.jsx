import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import Track from "./Track";
export default function Private(props)
{

    const loggedData = useContext(UserContext);
    return (

        loggedData.loggedUser!==null?
        <props.component/>
        :
        <Navigate to="/login"/>

    )

}