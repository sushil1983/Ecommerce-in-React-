
import React from 'react';

export default class Header extends React.Component {
  render() {
      return(
<div>
         
    	
																

<section id="wd-header-top">
    <div className="containerFluid customidth">
        <div className="row">
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                {/* <!-- =========================
				        Social Media List
				    ============================== --> */}
                <div className="wb-social-media">
						<a href="#" className="bh"><i className="fa fa-behance"></i></a>
						<a href="#" className="fb"><i className="fa fa-facebook-official"></i></a>
						<a href="#" className="db"><i className="fa fa-dribbble"></i></a>
						<a href="#" className="gp"><i className="fa fa-google-plus"></i></a>
						<a href="#" className="vn"><i className="fa fa-vine"></i></a>
						<a href="#" className="yt"><i className="fa fa-youtube-play"></i></a>
					</div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-5 col-xl-6 d-none d-md-block">
                <div className="offer-text text-center">
                    <p className="text-uppercase">upto 50% off to all virtual products</p>
                </div>
            </div>

           {/*  <!-- =========================
                    Select Country and Language
                ============================== --> */}
            <div className="col-6 col-sm-6 col-md-4  col-lg-3 col-xl-3">
                <div className="language-and-currency-btn">

                    <img src="img/flag-icon.jpg" alt="flag-icon"/>
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop3" type="button" className="btn btn-secondary wd-btn-country dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						      English
						    </button>
                            <div className="dropdown-menu wd-btn-country-list" aria-labelledby="btnGroupDrop3">
                                <a className="dropdown-item" href="#"><img src="img/flag-icon-2.png" alt="flag-icon"/> Bangla</a>
                                <a className="dropdown-item" href="#"><img src="img/flag-icon-3.png" alt="flag-icon"/> Spanish</a>
                            </div>
                        </div>
                    </div>

                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop4" type="button" className="btn btn-secondary wd-btn-language dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						      Currency
						    </button>
                            <div className="dropdown-menu wd-btn-language-list" aria-labelledby="btnGroupDrop4">
                                <a className="dropdown-item" href="#">&#36; Dollar</a>
                                <a className="dropdown-item" href="#">&#163; Pound</a>
                                <a className="dropdown-item" href="#">&#8364; Euro</a>
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
                