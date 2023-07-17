import React,{useState} from "react";
import Button from "./Component/Button";
import PersonalGreeting from "./Component/PersonalGreeting";
import Component4 from "./Component/React-composition-4";
import LiftStateUp1 from "./Component/LiftStateUp1";
import LiftStateUp2 from "./Component/LiftStateUp2";
import LiftStateUp3 from "./Component/LiftStateUp3";
import Async from "./Component/Async";
import DisplayMovie from "./Component/DisplayMovie";
import SelectedMovie from "./Component/SelectedMovie";
import DisplayGalleryMovie from "./Component/MovieGallery/DisplayGalleryMovie";
import SelectedGalleryMovie from "./Component/MovieGallery/SelectedGalleryMovie";
import Menu from "./Component/Menu";
function App(){
    const [clickedMovie,setClickedMovie] = useState({});
    const [clickedMovie2,setClickedMovie2] = useState({});
    console.log(clickedMovie2)
    return (<div>
            
                 {/* <Button/> */}
                 {/* <PersonalGreeting/> */}
                 {/* <Component4/> */}
                 {/* <LiftStateUp1/> */}
                 {/* <LiftStateUp2/> */}
                 {/* <LiftStateUp3/> */}
                 {/* <Async/> */}
                 {/* <div className="movieDiv">
                    <DisplayMovie addSelectedMovies={setClickedMovie}/>
                    <SelectedMovie selectedMovie={clickedMovie}/> 
                 </div> */}
                 {/* <div className="galleyMovie">
                    <SelectedGalleryMovie selected={clickedMovie2}/>
                    <DisplayGalleryMovie select={setClickedMovie2}/>
                    
                    
                 </div> */}
                 <Menu/>

                 
                 
                 



            </div>
            )
}
export default App;
