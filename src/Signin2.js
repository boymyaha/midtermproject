import React, { Component } from 'react';
import './bulma.css';
import './App.css';
import {App} from './App';
import {Signin} from './Signin';
import {Signin3} from './Signin3';

export class Signin2 extends Component {

    On1 = (event) =>
    {
      this.props.ChangeScene("Signin")
    }
    On3 = (event) =>
    {
      this.props.ChangeScene("Signin3")
    }
    OnLogout = (event) =>
    {
      this.props.ChangeScene("main")
    }


    render(){
        return(
          <div>
          <h1 style={{textAlign:"right",marginRight:"80px",marginTop:"20px"}}>GUEST LOGIN</h1>
          <div style={{textAlign:"right",marginRight:"80px",marginTop:"10px"}}>
          <button className="button is-danger is-active" onClick={this.OnLogout}> LOGOUT </button>
          </div>
            <div className="Signin">
              <center>
              <div className="columns">
                  <div className="Top">
                   <div className="card" style={{marginLeft:"36px"}}>
                    <div className="card-image" >
                    <figure className="image is-square">
                      <img src="http://d12vfgykacfet6.cloudfront.net/tmp/catalog/product/large/BB8818_SL_eCom.jpg"   alt="Image" style={{marginTop:"60px"}}/>
                    </figure>
                </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/originals/28/3b/dc/283bdc79d656997d1de923bb59bf98ac.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4"> ADIDAS TUBULAR SHADOW SHOES</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                <div className="title is-4">$150
                </div>
             </div>
           </div>
         </div>
                   <div className="column">
                     <div className="Top">
                      <div className="card" style={{marginLeft:"60px"}}>
                       <div className="card-image" >
                       <figure className="image is-square">
                         <img src="http://d12vfgykacfet6.cloudfront.net/tmp/catalog/product/large/AW3857_SL_eCom.jpg" alt="Image" style={{marginTop:"60px"}}/>
                       </figure>
                      </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/originals/28/3b/dc/283bdc79d656997d1de923bb59bf98ac.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ADIDAS CLOUDFOAM FLYER SHOES  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                 <p className="subtitle is-6">MEN'S SHOES</p>
               </div>
                 <div className="title is-4">$80
            </div>
          </div>
        </div>
      </div>
    </div>
                     <div className="column">
                     <div className="Top">
                      <div className="card" style={{marginLeft:"40px"}}>
                       <div className="card-image" >
                       <figure className="image is-square">
                         <img src="http://d12vfgykacfet6.cloudfront.net/tmp/catalog/product/large/F99329_SL_eCom.jpg" alt="Image" style={{marginTop:"60px"}}/>
                       </figure>
                      </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/originals/28/3b/dc/283bdc79d656997d1de923bb59bf98ac.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ADIDAS CIT RACER SHOES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$70
          
            </div>
          </div>
        </div>
      </div>
    </div>
                    <div className="column">
                     <div className="Top">
                      <div className="card" style={{marginLeft:"40px"}}>
                       <div className="card-image" >
                       <figure className="image is-square">
                         <img src="http://d12vfgykacfet6.cloudfront.net/tmp/catalog/product/large/BA8893_SL_eCom.jpg" alt="Image" style={{marginTop:"60px"}}/>
                       </figure>
                      </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/originals/28/3b/dc/283bdc79d656997d1de923bb59bf98ac.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ADIDAS PURE BOOST SHOES</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$90
            </div>
          </div>
        </div>
      </div>
                   <div className="columns" style={{marginLeft:"-1122px"}}>
                   <div className="Top">
                   <div className="card" style={{marginLeft:"0px"}}>
                   <div className="card-image" >
                     <figure className="image is-square">
                        <img src="http://d12vfgykacfet6.cloudfront.net/tmp/catalog/product/large/AW3950_SL_eCom.jpg"   alt="Image" style={{marginTop:"60px"}}/>
                     </figure>
                    </div>
                  <div className="card-content" style={{marginTop:"60px"}}>
                  <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/originals/28/3b/dc/283bdc79d656997d1de923bb59bf98ac.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ADIDAS CLOUDFOAM REVIVAL MID SOHES</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                <div className="title is-4">$90
                </div>
             </div>
           </div>
         </div>
                     <div className="column" style={{marginRight:"0px"}}>
                     <div className="Top">
                       <div className="card" style={{marginLeft:"55px"}}>
                         <div className="card-image" >
                            <figure className="image is-square">
                            <img src="http://d12vfgykacfet6.cloudfront.net/tmp/catalog/product/large/BB1260_SL_eCom.jpg" alt="Image" style={{marginTop:"60px"}}/>
                         </figure>
                      </div>
                    <div className="card-content" style={{marginTop:"60px"}}>
                    <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/originals/28/3b/dc/283bdc79d656997d1de923bb59bf98ac.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ADIDAS EQT SUPPORT ADV PRIMEKNIT </p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$250
            </div>
          </div>
        </div>
      </div>     
    </div>
                    <div className="column">
                    <div className="Top">
                    <div className="card" style={{marginLeft:"30px"}}>
                       <div className="card-image" >
                          <figure className="image is-square">
                             <img src="http://d12vfgykacfet6.cloudfront.net/tmp/catalog/product/large/BB1302_SL_eCom.jpg" alt="Image" style={{marginTop:"60px"}}/>
                         </figure>
                      </div>
                    <div className="card-content" style={{marginTop:"60px"}}>
                    <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/originals/28/3b/dc/283bdc79d656997d1de923bb59bf98ac.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ADIDAS EQT SUPPROT ADV SOHES &nbsp;</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$170
            </div>
          </div>
        </div>
      </div>
      </div>  
                   <div className="column">
                   <div className="Top">
                   <div className="card" style={{marginLeft:"23px"}}>
                     <div className="card-image" >
                        <figure className="image is-square">
                            <img src="http://d12vfgykacfet6.cloudfront.net/tmp/catalog/product/large/AQ5960_SL_eCom.jpg" alt="Image" style={{marginTop:"60px"}}/>
                         </figure>
                      </div>
                    <div className="card-content" style={{marginTop:"60px"}}>
                    <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/originals/28/3b/dc/283bdc79d656997d1de923bb59bf98ac.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ADIDAS ENERGY BOOST 3 SHOES</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$170
            </div>
           </div>
          </div>
         </div>     
        </div>         
       </div>
      </div>
     </div>
    </center>
        <p className="control" style={{marginTop:"60px",marginLeft:"704px"}}>
          <button className="button is-primary" onClick={this.On1}> 1 </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="button is-primary  is-active"> 2 </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="button is-primary" onClick={this.On3}> 3 </button>
        </p>

    </div>
    </div>
        );
    }
}