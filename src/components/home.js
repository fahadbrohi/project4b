import React from 'react';
import useWebAnimations, {fadeInDown , fadeInLeft, fadeInRight, fadeInUp} from "@wellyshen/use-web-animations";

import sirzia from './../images/sirzia.jpeg';
import siraamir from './../images/siraamir.jpeg';
import sirameen from './../images/sirameen.jpeg';
import sirmohsin from './../images/sirmohsin.jpeg';
import './home.css';
function Home(){
  const {ref} = useWebAnimations({...fadeInDown})
  const {ref: pinger} = useWebAnimations({...fadeInLeft})
  const {ref: ameen} = useWebAnimations({...fadeInUp})
  const {ref: mohsin} = useWebAnimations({...fadeInRight})

    return(
      
            <div>
            <div><img  src={sirzia} ref={ref} className="sirzia" alt="sirzia"/></div>
            <div  className="sir" >
            <img src={siraamir} ref={pinger} className="siraamir" alt="siraamir" />
            <img src={sirameen} ref={ameen} className="sirameen" alt="sirameen" />
            <img src={sirmohsin}ref={mohsin}  className="sirmohsin" alt="sirmohsin" />

            
            <h2 className="lines">The Hardwork of bootcamp2020 teacher is really appreciable
              these are few pictures, but i meant to all the staff of bootcamp2020</h2>
                    
            </div>


    </div>
    




    
  
    
    )
}
export default Home;