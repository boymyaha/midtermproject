import React, { Component } from 'react';
import './bulma.css';
import './App.css';
import {App} from './App';
import {Signin} from './Signin';
import {Signin2} from './Signin2';



export class Signin3 extends Component {

    On1 = (event) =>
    {
      this.props.ChangeScene("Signin")
    }
    On2 = (event) =>
    {
      this.props.ChangeScene("Signin2")
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
                      <img src="https://asics.scene7.com/is/image/asics/ASI_TH709L_0123_S?$OT1$"   alt="Image" style={{marginTop:"60px"}}/>
                    </figure>
                </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="http://logos-download.com/wp-content/uploads/2016/12/Onitsuka_Tiger_logo_black-white.png" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ONITSUKA TIGER DELEGACY &nbsp;&nbsp;</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                <div className="title is-4">$170
                </div>
             </div>
           </div>
         </div>
                   <div className="column">
                     <div className="Top">
                      <div className="card" style={{marginLeft:"60px"}}>
                       <div className="card-image" >
                       <figure className="image is-square">
                         <img src="https://asics.scene7.com/is/image/asics/ASI_TH711L_0190_S?$OT1$" alt="Image" style={{marginTop:"60px"}}/>
                       </figure>
                      </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="http://logos-download.com/wp-content/uploads/2016/12/Onitsuka_Tiger_logo_black-white.png" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ONITSUKA TIGER OK BASKETBALL LO RB &nbsp;&nbsp;</p>
                 <p className="subtitle is-6">MEN'S RUNNING SHOE</p>
               </div>
                 <div className="title is-4">$115
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
                         <img src="https://asics.scene7.com/is/image/asics/ASI_TH715L_0101_S?$OT1$" alt="Image" style={{marginTop:"60px"}}/>
                       </figure>
                      </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="http://logos-download.com/wp-content/uploads/2016/12/Onitsuka_Tiger_logo_black-white.png" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ONITSUKA TIGER LAWNSHIP 2.0</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$115
          
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
                         <img src="https://asics.scene7.com/is/image/asics/ASI_TH5K1L_4900_S?$OT1$" alt="Image" style={{marginTop:"60px"}}/>
                       </figure>
                      </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="http://logos-download.com/wp-content/uploads/2016/12/Onitsuka_Tiger_logo_black-white.png" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ONITSUKA TIGER GSM &nbsp;&nbsp;</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$140
            </div>
          </div>
        </div>
      </div>
                   <div className="columns" style={{marginLeft:"-1122px"}}>
                   <div className="Top">
                   <div className="card" style={{marginLeft:"0px"}}>
                   <div className="card-image" >
                     <figure className="image is-square">
                        <img src="https://asics.scene7.com/is/image/asics/ASI_TH6K6L_4901_S?$OT1$"   alt="Image" style={{marginTop:"60px"}}/>
                     </figure>
                    </div>
                  <div className="card-content" style={{marginTop:"60px"}}>
                  <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="http://logos-download.com/wp-content/uploads/2016/12/Onitsuka_Tiger_logo_black-white.png" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ONITSUKA TIGER LAWNSHIP &nbsp;&nbsp;</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                <div className="title is-4">$95
                </div>
             </div>
           </div>
         </div>
                     <div className="column" style={{marginRight:"0px"}}>
                     <div className="Top">
                       <div className="card" style={{marginLeft:"55px"}}>
                         <div className="card-image" >
                            <figure className="image is-square">
                            <img src="https://asics.scene7.com/is/image/asics/ASI_TH703N_9090_S?$OT1$" alt="Image" style={{marginTop:"60px"}}/>
                         </figure>
                      </div>
                    <div className="card-content" style={{marginTop:"60px"}}>
                    <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="http://logos-download.com/wp-content/uploads/2016/12/Onitsuka_Tiger_logo_black-white.png" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ONITSUKA TIGER MEXICO 66 KNIT</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$120
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
                             <img src="https://asics.scene7.com/is/image/asics/ASI_THL202_0146_S?$OT1$" alt="Image" style={{marginTop:"60px"}}/>
                         </figure>
                      </div>
                    <div className="card-content" style={{marginTop:"60px"}}>
                    <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="http://logos-download.com/wp-content/uploads/2016/12/Onitsuka_Tiger_logo_black-white.png" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ONITSUKA TIGER MEXICO 66 &nbsp;</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$115
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
                            <img src="https://asics.scene7.com/is/image/asics/ASI_TH3K0N_0201_S?$OT1$" alt="Image" style={{marginTop:"60px"}}/>
                         </figure>
                      </div>
                    <div className="card-content" style={{marginTop:"60px"}}>
                    <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="http://logos-download.com/wp-content/uploads/2016/12/Onitsuka_Tiger_logo_black-white.png" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">ONITSUKA TIGER MEXICO 66 SLIP-ON</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$75
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
          <button className="button is-primary" onClick={this.On2}> 2 </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="button is-primary is-active" > 3 </button>
        </p>

    </div>
    </div>
        );
    }
}