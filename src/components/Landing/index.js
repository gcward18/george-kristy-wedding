import React, { Component } from 'react'
import BG from '../../img/kristy_george.png';
import GM from '../../img/getting_married.png';
export default class Landing extends Component {
    render() {
        return (
        <body>
            <div className="row">
                <div className="column">
                    <img 
                        src={GM} 
                        alt="kandg">    
                    </img>
                </div>
                <div className="column">
                    <img 
                        src={BG} 
                        className="bg" 
                        // style={{
                        //     boxShadow:" 1px 2px 3px rgba(0,0,0,.5)",
                        //     marginLeft:'25%'
                        // }}
                        alt="kandg">

                    </img>
                </div>
            </div>
        </body>
        )
    }
}
