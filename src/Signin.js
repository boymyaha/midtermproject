import React, { Component } from 'react';
import './bulma.css';
import './App.css';
import {App} from './App';
import {Signin2} from './Signin2';
import {Signin3} from './Signin3';

export class Signin extends Component {

    On2 = (event) =>
    {
      this.props.ChangeScene("Signin2")
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
                      <img src="http://images.nike.com/is/image/DotCom/PDP_HERO/875943_001_A_PREM/air-max-90-ultra-2-flyknit-mens-shoe.jpg "   alt="Image" style={{marginTop:"60px"}}/>
                    </figure>
                </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/736x/2c/f9/88/2cf98843269d379279509eddd6ec33c6.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">NIKE AIR MAX 90 ULTRA 2.0 FLYKNIT</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                <div className="title is-4">$160
                </div>
             </div>
           </div>
         </div>
                   <div className="column">
                     <div className="Top">
                      <div className="card" style={{marginLeft:"60px"}}>
                       <div className="card-image" >
                       <figure className="image is-square">
                         <img src="http://images.nike.com/is/image/DotCom/PDP_HERO/849559_010_A_PREM/air-max-2017-mens-running-shoe.jpg" alt="Image" style={{marginTop:"60px"}}/>
                       </figure>
                      </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/736x/2c/f9/88/2cf98843269d379279509eddd6ec33c6.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">NIKE AIR MAX 2017 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                 <p className="subtitle is-6">MEN'S RUNNING SHOE</p>
               </div>
                 <div className="title is-4">$190
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
                         <img src="http://images.nike.com/is/image/DotCom/PDP_COPY/875695_600/air-max-90-ultra-2-essential-mens-shoe.jpg" alt="Image" style={{marginTop:"60px"}}/>
                       </figure>
                      </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/736x/2c/f9/88/2cf98843269d379279509eddd6ec33c6.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">NIKE AIR MAX 90 ULTRA 2.0 ESSENTIAL</p>
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
                      <div className="card" style={{marginLeft:"40px"}}>
                       <div className="card-image" >
                       <figure className="image is-square">
                         <img src="http://images.nike.com/is/image/DotCom/PDP_COPY/876005_003/air-max-90-ultra-2-se-mens-shoe.jpg" alt="Image" style={{marginTop:"60px"}}/>
                       </figure>
                      </div>
              <div className="card-content" style={{marginTop:"60px"}}>
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/736x/2c/f9/88/2cf98843269d379279509eddd6ec33c6.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">NIKE AIR MAX 90 ULTRA 2.0 SE</p>
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
                        <img src="http://images.nike.com/is/image/DotCom/PDP_HERO/875942_100_A_PREM/air-max-1-ultra-2-flyknit-mens-shoe.jpg"   alt="Image" style={{marginTop:"60px"}}/>
                     </figure>
                    </div>
                  <div className="card-content" style={{marginTop:"60px"}}>
                  <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/736x/2c/f9/88/2cf98843269d379279509eddd6ec33c6.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">NIKE AIR MAX 1 ULTRA 2.0 FLYKNIT</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                <div className="title is-4">$180
                </div>
             </div>
           </div>
         </div>
                     <div className="column" style={{marginRight:"0px"}}>
                     <div className="Top">
                       <div className="card" style={{marginLeft:"55px"}}>
                         <div className="card-image" >
                            <figure className="image is-square">
                            <img src="http://images.nike.com/is/image/DotCom/PDP_HERO/537384_068_A_PREM/air-max-90-essential-mens-shoe.jpg" alt="Image" style={{marginTop:"60px"}}/>
                         </figure>
                      </div>
                    <div className="card-content" style={{marginTop:"60px"}}>
                    <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/736x/2c/f9/88/2cf98843269d379279509eddd6ec33c6.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">NIKE AIR MAX 90 ESSENTIALE</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$110
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
                             <img src="http://images.nike.com/is/image/DotCom/PDP_HERO/384664_113_A_PREM/air-jordan-6-retro-mens-shoe.jpg" alt="Image" style={{marginTop:"60px"}}/>
                         </figure>
                      </div>
                    <div className="card-content" style={{marginTop:"60px"}}>
                    <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/736x/2c/f9/88/2cf98843269d379279509eddd6ec33c6.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">AIR JORDAN 6 RETRO &nbsp;</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$190
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
                            <img src="http://images.nike.com/is/image/DotCom/PDP_HERO/876070_600_A_PREM/air-max-zero-essential-mens-shoe.jpgg" alt="Image" style={{marginTop:"60px"}}/>
                         </figure>
                      </div>
                    <div className="card-content" style={{marginTop:"60px"}}>
                    <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://s-media-cache-ak0.pinimg.com/736x/2c/f9/88/2cf98843269d379279509eddd6ec33c6.jpg" alt="Image"/>
                    </figure>
                 </div>
               </div>
                 <div className="media-content">
                 <p className="title is-4">NIKE AIR MAX ZERO ESSENTIA</p>
                 <p className="subtitle is-6">MEN'S SHOE</p>
               </div>
                 <div className="title is-4">$130
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
          <button className="button is-primary  is-active"> 1 </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="button is-primary" onClick={this.On2}> 2 </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="button is-primary" onClick={this.On3}> 3 </button>
        </p>

    </div>
    </div>
        );
    }
}