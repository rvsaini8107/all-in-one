import React,{useState} from "react";
const SelectedGalleryMovie = ({selected}) =>{
    return(
            <>{selected.name &&
                <div className="selectedMovieDiv">
                    <div className="rightDiv">
                        <img src={selected.img_link} style={{borderRadius:"25px"}} width={"500px"} alt={selected.name} />
                    </div>
                    <div className="leftDiv">
                        <h1>{selected.name}</h1>
                        <p>Rating : {selected.rating} </p> 
                        <p>Year : {selected.rating} </p> 
                    </div>    
                        
                    
                </div>
            }</>
    );
}
export default SelectedGalleryMovie;