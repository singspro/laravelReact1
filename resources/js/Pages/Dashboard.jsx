import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import NavBar from "@/Components/navBar";
import axios from "axios";

export default function Dashboard({ auth }) {
const[data,getData]=useState(false);


useEffect(()=>{
    axios.get('/api/gas').then((res)=>{
        console.log(res)
    })
},[])
    return (
        <>
        <Head title="singspro" />
        <NavBar/>
        </>
    )
}
