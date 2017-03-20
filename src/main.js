import React, { Component } from 'react';
import './bulma.css';
import './App.css';
import {Register} from './Register';
import {Forget} from './Forget';
import {Signin} from './Signin';
import {main} from './main';

export class Main extends Component {

  state = {
    email: "",
    password: "",
    bool:''
  }

  OnEmailChange = (event) =>
  {
    this.setState({email: event.target.value});
  }
  OnPasswordChange = (event) =>
  {
    this.setState({password: event.target.value});
  }
	OnRegister = (event) =>
	{
		this.props.ChangeScene("register");
	}
  OnForget = (event) =>
  {
    this.props.ChangeScene("Forget")
  }
  OnGuest = (event) =>
  {
    this.props.ChangeScene("Signin")
  }
  OnLogout = (event) =>
  {
    this.setState({
         bool:''
       });
  }
  On1 = (event) =>
  {
    this.setState({
         bool:'signInPage'
       });
  }
  On2 = (event) =>
  {
    this.setState({
         bool:'signInPage2'
       });
  }
  On3 = (event) =>
  {
     this.setState({
         bool:'signInPage3'
     });
  }
  OnSignin = (event) =>
  {
    if(this.state.email != "" &&
       this.state.password != "")
    {
       this.setState({
         bool:'signInPage'
       });
    }
  
  }
  

  render() {
    let {email} = this.state;
    if(this.state.bool == ''){
       var main = (
         
      <div className="App-header">        
        <form action="">
        <div className="columns">
              <div className="column">
                <h1 className="title"><font color="white">Sign  in</font></h1>
                  <label className="label"><font color="white">E-mail Address</font></label>
                  <p className="control">
                  <input className="input" type="text" placeholder="Username@hotmail.com" onChange={this.OnEmailChange} required/>
                  </p>
                  <label className="label"><font color="white">Password</font></label>
                  <p className="control">
                  <input className="input" type="Password" placeholder="Password" onChange={this.OnPasswordChange} required/>
                  </p>
                <p><b><a onClick={this.OnForget}><font color="white">Forget Password</font></a></b></p><br/>
              <p className="control">
              <button className="button is-primary" type="submit" onClick={this.OnSignin}>SIGN IN</button>&nbsp;&nbsp;&nbsp;
              <button className="button is-primary" onClick={this.OnRegister}>REGISTER</button>
            </p>
              </div>  
              <div className="column">
                <center>
                <a className="button">
                  <strong><a href="https://www.facebook.com/"><font color="white">Login Facebook</font></a></strong>
                </a>
              </center>
                <center>
                <b className="button">
                  <strong onClick={this.OnGuest}>Guest Login</strong>
                </b>
                </center>
              </div>  
            </div>
          </form>
        </div>
       );
      }








      if(this.state.bool == 'signInPage'){
        var signInPage = (
          <div>
          <h1 style={{textAlign:"right",marginRight:"80px",marginTop:"20px"}}>Username: {email}</h1>
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











      if(this.state.bool == 'signInPage2'){
        var signInPage2 = (
          <div>
          <h1 style={{textAlign:"right",marginRight:"80px",marginTop:"20px"}}>Username: {email}</h1>
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








      if(this.state.bool == 'signInPage3'){
        var signInPage3 = (
          <div>
          <h1 style={{textAlign:"right",marginRight:"80px",marginTop:"20px"}}>Username: {email}</h1>
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
          <button className="button is-primary  is-active" > 3 </button>
        </p>
        </div>
    </div>
        );
    }

    


    
    return (
      <div> 
        {main}
        {signInPage}
        {signInPage2}
        {signInPage3}
      </div>
    );
  }
}
