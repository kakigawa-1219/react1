import React , {Component} from 'react'

class Main1 extends Component{
    render(){
        return(
         <>
         <div main1>
         <div id="main-image">
             <div><img src="./images/main01.png" alt=""></img></div>
             <div className="arrow arrow_left" ><img src="./images/arrow_left.png" alt=""></img></div>
             <div className="arrow arrow_right"><img src="./images/arrow_right.png" alt=""></img></div>
         </div>
         <div id="thumb">
             <div className="thumb_list" ><img src="./images/main01_thumb.png" alt=""></img></div>
             <div className="thumb_list"><img src="./images/main02_thumb.png" alt=""></img></div>
             <div className="thumb_list"><img src="./images/main03_thumb.png" alt=""></img></div>
         </div>
         </div>
         
        
         </>
        )
    }
 
}
export default Main1