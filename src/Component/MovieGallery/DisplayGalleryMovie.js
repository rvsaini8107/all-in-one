import React,{useState} from "react";
import moviesData from "../MovieData";
const DisplayGalleryMovie = ({select}) => {
    return(
            <>
                {/* <div className="movieGelleryView"> */}
                {
                    moviesData.map((movie,index)=>(
                        <div className="movieCard">
                            <div className="cardBody" onClick={()=>select(movie)}>
                                <img src={movie.img_link} className="imgClass" alt={movie.name}/>
                                <p>{movie.name}</p>
                            </div>
                        </div>
                    ))
                }
                {/* </div> */}
            </>
    );
}
export default DisplayGalleryMovie;