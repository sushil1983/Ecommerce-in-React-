
import React from 'react';
var foo = null


export default class WdHeader extends React.Component {
  render() {
      return(
<div>
					 
					
{/* <div class="preloader" styles ="{{'backgroundImage: `url(${Background})`}}" ></div> */}
            <section id="wd-header-top">
    	     <div class="container-fluid custom-width">
    		<div class="row">
                <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3"> 
                     <div class="wb-social-media">
						<a href="#" onClick={foo} class="bh"><i class="fa fa-behance"></i></a>
						<a href="#" onClick={foo} class="fb"><i class="fa fa-facebook-official"></i></a>
						<a href="#" onClick={foo} class="db"><i class="fa fa-dribbble"></i></a>
						<a href="#" onClick={foo} class="gp"><i class="fa fa-google-plus"></i></a>
						<a href="#" onClick={foo} class="vn"><i class="fa fa-vine"></i></a>
						<a href="#" onClick={foo} class="yt"><i class="fa fa-youtube-play"></i></a>
					</div>
                </div>    
                <div class="col-sm-12 col-md-4 col-lg-5 col-xl-6 d-none d-md-block">
			    	<div class="offer-text text-center">
			    		<p class="text-uppercase">upto 50% off to all virtual products</p>
			    	</div>
			    </div>
                <div class="col-6 col-sm-6 col-md-4  col-lg-3 col-xl-3">
			    	<div class="language-and-currency-btn">
			
						<img src="img/flag-icon.jpg" alt="flag-icon"/>
						<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
						  <div class="btn-group" role="group">
						    <button id="btnGroupDrop3" type="button" class="btn btn-secondary wd-btn-country dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						      English
						    </button>
						    <div class="dropdown-menu wd-btn-country-list" aria-labelledby="btnGroupDrop3">
						      <a class="dropdown-item" href="#" ><img src="img/flag-icon-2.png" alt="flag-icon"/> Bangla</a>
						      <a class="dropdown-item" href="#" ><img src="img/flag-icon-3.png" alt="flag-icon"/> Spanish</a>
						    </div>
						  </div>
						</div>
					
						<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
						  <div class="btn-group" role="group">
						    <button id="btnGroupDrop4" type="button" class="btn btn-secondary wd-btn-language dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						      Currency
						    </button>
						    <div class="dropdown-menu wd-btn-language-list" aria-labelledby="btnGroupDrop4">
						      <a class="dropdown-item" href="#" onClick={foo}>&#36; Dollar</a>
						      <a class="dropdown-item" href="#" onClick={foo}>&#163; Pound</a>
						      <a class="dropdown-item" href="#" onClick={foo}>&#8364; Euro</a>
						    </div>
						  </div>
						</div>
					</div>
			    </div>
                </div>
    	</div>
    </section>

    
</div>          

)}}
