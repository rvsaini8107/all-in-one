import React from "react";
const SelectedMovie = ({selectedMovie}) => {
    return(<>

    
                {selectedMovie && <div className="movie-details">
                    <img src={selectedMovie.img_link} className="imgClass" width="300px" alt={selectedMovie.name} />
                    <p>Title : {selectedMovie.name}</p>
                    <p>Rating : {selectedMovie.rating}</p>
                    <p>Year : {selectedMovie.year}</p>
                </div>
                }
            </>
        );
}
export default SelectedMovie;