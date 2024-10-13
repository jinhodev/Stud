import React from "react"
import "../App.css" 
import Album from "../components/Album"
import AddAlbum from "../components/AddAlbum"





export default function Home() {

    return(
        <div className="home">
           <AddAlbum></AddAlbum>
           <Album></Album>
        </div>
    )

}