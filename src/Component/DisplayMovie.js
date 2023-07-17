import React,{useState} from "react";
import moviesData from "./MovieData";
const DisplayMovie = ({addSelectedMovies}) =>{
    // console.log(moviesData)
    return(
        <div className="mainMovie">
            {moviesData.map((movie,index)=>(
             
                <div className="list" onClick={()=>addSelectedMovies(movie)}>
                    <h2>{movie.name}</h2>
                </div>
            ))
            }
        </div>
    )
}
export default DisplayMovie;