import React, {Component} from 'react';
import Description from './Description';
import Title from './Title';
import Image from './Image';
import Codetrain from '../Images/CT Logo.jpg'
import './SimpleCard.css'


class SimpleCard extends Component{
    render(){
        return(
            <div className="card__body">
                <div className="img__container">
                     <Image url={Codetrain} className="img__style"/>
                </div>
                <div className="data">
                    <div className="title__container">
                        <h1><Title title="Codetrain Africa"/></h1>
                    </div>
                    <div className="description__container">
                       <p><Description text="We are Ghana's leading Software Engineering Training Center and our stacks includes MERN."/></p> 

                        <div className="stack__title">
                        <h2><Description text="Mongo DB | Express | React.JS | Node.JS"/></h2>
                        </div>

                        <div className="address">
                        <p><Description text="Location: Parsnip East Legon, Accra, Ghana"/></p>
                        </div>
                        
                    </div>  
                </div>
                
            </div>
            
        )
    }
}
export default SimpleCard;