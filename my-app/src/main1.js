import React , {Component} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Main1 extends Component{
    render(){
        return(
         <>
         <div id="main1">
        


         <div id="main-image">
         
         {(() => {   
                   const settings = {
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  };
                 
                  return(
             <Slider {...settings}>
                 <div><img src="./images/main01.png" alt=""></img></div>
                 <div><img src="./images/main02.png" alt=""></img></div>
                 <div><img src="./images/main03.png" alt=""></img></div>
             
             </Slider>);
     } )()}        
                           
                         
             
             <div className="arrow arrow_left" ><img src="./images/arrow_left.png" alt=""></img></div>
             <div className="arrow arrow_right"><img src="./images/arrow_right.png" alt=""></img></div>
             <div id="overFlowScrollArea">
                 
                 </div>
        </div>
         </div>
         <div id="thumb">
             <div className="thumb_list" ><img src="./images/main01_thumb.png" alt=""></img></div>
             <div className="thumb_list"><img src="./images/main02_thumb.png" alt=""></img></div>
             <div className="thumb_list"><img src="./images/main03_thumb.png" alt=""></img></div>
         </div>
         
      
        
        
         </>
        )
    }
 
}
export default Main1