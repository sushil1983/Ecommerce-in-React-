
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
var foo = null


export default class WdHeader extends React.Component {
  render() {
      return(
		  <div>
        <section id="wdHeader" className="d-flex align-items-center mob-sticky">
    	<div className="container">
    		<div className="row">
    		    {/* <!-- =========================
					Mobile Menu 
				============================== --> */}
    		    <div className="order-2 order-sm-1 col-2 col-sm-2 col-md-4 d-block d-lg-none">
                    <div className="accordion-wrapper hide-sm-up">
                        <a href="#" className="mobile-open"><i className="fa fa-bars" ></i></a>
                    

                        <ul id="mobilemenu" className="accordion">
                           {/* <!-- <li className="mob-logo"><a href="index.html"><img src="img/logo.png" alt=""></a></li>--> */}
                            <li><a className="closeme" href="#"><i className="fa fa-times" ></i></a></li>
                            <li className="mob-logo"><a href="index.html"><img src="img/logo.png" alt=""/></a></li>
                            <li>
                                <div className="link">Home<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu font-sky">
                                    <li><a href="index.html">Home one</a></li>
                                    <li><a href="index-01-02.html">Home one Fullwidth</a></li>
                                    <li><a href="index-second-home.html">Home two</a></li>
                                    <li><a href="index-third-home.html">Home three</a></li>
                                    <li><a href="magazine.html">Home Page Magazine </a></li>
                                </ul>
                            </li>
                            <li>
                                <div className="link">Comparison Product <i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu font-sky">
                                    <li><a href="compare-products.html">Comparison Product</a></li>
                                    <li><a href="compare-products-single.html">Compare Products Single</a></li>
                                    <li><a href="compare-products-choose-market.html">Compare Products Choose Market</a></li>
                                    
                                </ul>
                            </li>
                            <li>
                                <div className="link ">shop<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu">
                                    <li><a href="shop-left-sidebar.html">Shop Page</a></li>
                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                    <li><a href="shop-left-sidebar-full-grid.html">Shop Left Sidebar Full Grid</a></li>
                                    <li><a href="shop-right-sidebar-full-grid.html">Shop Right Sidebar Full Grid</a></li>
                                    <li><a href="product-details.html">Product Details</a></li>
                                    <li><a href="product-details-scroll.html">Product Details v2</a></li>
                                    <li><a href="wishlist.html">Wishlist View</a></li>
                                </ul>
                            </li>

                            <li>
                                <div className="link">megamenu<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu ">
                                  <li><a href="shop-left-sidebar.html">Visual Phones</a></li>
					              <li><a href="shop-left-sidebar.html">Chinese phones</a></li>
					              <li><a href="shop-left-sidebar.html">Google Phones</a></li>
					              <li><a href="shop-left-sidebar.html">Video cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Top Cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Cheap Cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Best Cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Luxury Cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Simple Cameras</a></li>
                                  <li><a href="shop-left-sidebar.html">Phone Electronice</a></li>
					              <li><a href="shop-left-sidebar.html">Phone Appereances</a></li>
					              <li><a href="shop-left-sidebar.html">Visual Phones</a></li>
					              <li><a href="shop-left-sidebar.html">Chinese phones</a></li>
					              <li><a href="shop-left-sidebar.html">Google Phones</a></li>
					              <li><a href="shop-left-sidebar.html">Cheap Phones</a></li>
					              <li><a href="shop-left-sidebar.html">Luxury phones</a></li>
					              <li><a href="shop-left-sidebar.html">Simple phones</a></li>
                                  <li><a href="shop-left-sidebar.html">Camera Electronice</a></li>
					              <li><a href="shop-left-sidebar.html">Camera Appereances</a></li>
					              <li><a href="shop-left-sidebar.html">DSLR</a></li>
					              <li><a href="shop-left-sidebar.html">Video cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Top Cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Cheap Cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Best Cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Luxury Cameras</a></li>
					              <li><a href="shop-left-sidebar.html">Simple Cameras</a></li>
                                </ul>
                                
                            </li>
                            <li>
                                <div className="link">Reviews<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu">
                                    <li><a href="product-details-review-history.html">Product History</a></li>
                                    <li><a href="product-details-single-review.html">Single Review</a></li>
                                    <li><a href="review-left-sidebar.html">Review Left Sidebar</a></li>
                                    <li><a href="review-right-sidebar.html">Review Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li>
                                <div className="link">Blog<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu">
                                    <li><a href="blog-full-grid.html">Blog Full Grid</a></li>
                                    <li><a href="blog-two-grid.html">Blog Two Grid</a></li>
                                    <li><a href="blog-three-grid.html">Blog Three Grid</a></li>
                                    <li><a href="blog-four-grid.html">Blog Four Grid</a></li>
                                    <li><a href="blog-four-grid-left-sidebar.html">Blog Four Grid Left Sidebar</a></li>
                                    <li><a href="blog-four-grid-right-sidebar.html">Blog Four Grid Right Sidebar</a></li>
                                    <li><a href="single-blog-with.html">Single Blog</a></li>
                                    <li><a href="single-blog-with-add.html">Single Blog With Add</a></li>
                                </ul>
                            </li>
                            <li className="out-link"><a className="" href="contact-us.html">Contact</a></li>
                            <li className="out-link"><a className="" href="coupon.html">Coupon</a></li>

                        </ul>
                        
                    </div>
    		    </div>
				    
    			<div className="order-1 order-sm-2  col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2">
    				<div className="blrub-logo">
	    				<a href="index.html">
	    					<img src="img/logo.png" alt="Logo"/>
	    				</a>
    				</div>
    			</div>

			{/* 	<!-- =========================
					 Search Box  Show on large device
				============================== --> */}
				<div className="col-12 order-lg-2 col-md-5 col-lg-6 col-xl-5 d-none d-lg-block">
				    <div className="input-group wd-btn-group header-search-option">
                        <input type="text" className="form-control blurb-search" placeholder="Search ..." aria-label="Search for..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-secondary wd-btn-search" type="button">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </span>
                    </div>
				</div>
{/* 
				<!-- =========================
					 Login and My Acount 
				============================== --> */}
				<div className="order-3 order-sm-3 col-10 col-sm-6 col-lg-4 col-md-4 col-xl-5">
					{/* <!-- =========================
						 User Account Section
					============================== --> */}
                        <div className="acc-header-wraper">
						    <div className="account-section">
								<button className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg2">
									<i className="fa fa-sign-in" aria-hidden="true"></i><span>Login/Register</span> 
								</button>

								<div className="modal fade bd-example-modal-lg2" tabindex="-1" role="dialog" aria-hidden="true">
									<div className="modal-dialog modal-lg">
										<div className="modal-content">
											<div className="container">
												<div className="row text-left">
													<div className="col-md-12 p0">

														<div className="modal-tab-section wd-modal-tabs">
															<ul className="nav nav-tabs wd-modal-tab-menu text-center" id="myTab" role="tablist">
																<li className="nav-item">
																	<a className="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-expanded="true">Login</a>
																</li>
																<li className="nav-item">
																	<a className="nav-link" id="sign-up-tab" data-toggle="tab" href="#sign-up" role="tab" aria-controls="sign-up">Sign up</a>
																</li>
															</ul>
															<div className="tab-content" id="myTabContent">
																<div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">

																<div className="row">
																	<div className="col-md-6 p0 brand-description-area">
																		<img src="img/login-img-1.jpg" className="img-fluid" alt=""/>
																		<div className="brand-description">
																			<div className="brand-logo">
																				<img src="img/logo.png" alt="Logo"/>
																			</div>
																			<div className="modal-description">
																				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
																			</div>
																			<ul className="list-unstyled">
																				<li className="media">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																				<li className="media my-4">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																				<li className="media">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="col-md-12 col-lg-6 p0">
																		<div className="login-section text-center">
																			<div className="social-media">
																				<a href="#" className="facebook-bg"><i className="fa fa-facebook" aria-hidden="true"></i> Login</a>
																				<a href="#" className="twitter-bg"><i className="fa fa-twitter" aria-hidden="true"></i> Login</a>
																				<a href="#" className="google-bg"><i className="fa fa-google-plus" aria-hidden="true"></i> Login</a>
																			</div>
																			<div className="login-form text-left">
																				<form>
																					<div className="form-group">
																						<label for="exampleInputEmail-login">User name</label>
																						<input type="text" className="form-control" id="exampleInputEmail-login" placeholder="John mist |"/>
																					</div>
																					<div className="form-group">
																						<label for="exampleInputPassword-login-pass-2">Password</label>
																						<input type="password" className="form-control" id="exampleInputPassword-login-pass-2" placeholder="*** *** ***"/>
																					</div>
																					<button type="submit" className="btn btn-primary wd-login-btn">LOGIN</button>

																					<div className="form-check">
																						<label className="form-check-label">
																							<input type="checkbox" className="form-check-input"/>
																							Save this password
																						</label>
																					</div>
																					
																					<div className="wd-policy">
																						<p>
																							By Continuing. I conferm that i have read and userstand the <a href="#">terms of uses</a> and <a href="#">Privacy Policy</a>. 
																							Don’t have an account? <a href="#" className="black-color"><strong><u>Sign up</u></strong></a>
																						</p>
																					</div>
																				</form>
																			</div>
																		</div>
																	</div>
																</div>

																</div>
																<div className="tab-pane fade" id="sign-up" role="tabpanel" aria-labelledby="sign-up-tab">

																<div className="row">
																	<div className="col-md-6 p0 brand-login-section">
																		<img src="img/login-img-2.jpg" className="img-fluid" alt=""/>
																		<div className="brand-description">
																			<div className="brand-logo">
																				<img src="img/logo.png" alt="Logo"/>
																			</div>
																			<div className="modal-description">
																				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
																			</div>
																			<ul className="list-unstyled">
																				<li className="media">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																				<li className="media my-4">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																				<li className="media">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="col-md-6 p0">
																		<div className="sign-up-section text-center">
																			<div className="login-form text-left">
																				<form>
																					<div className="form-group">
																						<label for="exampleInputname1">First name</label>
																						<input type="text" className="form-control" id="exampleInputname1" placeholder="First Name"/>
																					</div>
																					<div className="form-group">
																						<label for="exampleInputname2">Last name</label>
																						<input type="text" className="form-control" id="exampleInputname2" placeholder="Last Name"/>
																					</div>
																					<div className="form-group">
																						<label for="exampleInputEmail-sign-up">Email</label>
																						<input type="text" className="form-control" id="exampleInputEmail-sign-up" placeholder="Enter you email ..."/>
																					</div>
																					<div className="form-group">
																						<label for="exampleInputPassword-login-pass">Password</label>
																						<input type="password" className="form-control" id="exampleInputPassword-login-pass" placeholder="*** *** ***"/>
																					</div>
																					<button type="submit" className="btn btn-primary wd-login-btn">Sign Up</button>
																					
																					<div className="wd-policy">
																						<p>
																							By Continuing. I conferm that i have read and userstand the <a href="#">terms of uses</a> and <a href="#">Privacy Policy</a>. 
																							Don’t have an account? <a href="#" className="black-color"><strong><u>Sign up</u></strong></a>
																						</p>
																					</div>
																				</form>
																			</div>
																		</div>
																	</div>
																</div>

																</div>
															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="serch-wrapper">
                                <div className="search">
                                    <input className="search-input" placeholder="Search" type="text"/>
                                    <a href="javascript:void(0)"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
						

						
							<div className="header-cart">
							    <a href="coupon.html" className="coupon-save"><i className="fa fa-star-o" aria-hidden="true"></i>
							    <span className="count">5</span>
							    </a>
							    
								<a className="header-wishlist" href="wishlist.html">
									<i className="fa fa-heart-o" aria-hidden="true"></i>
									<span className="count">8</span>
								</a>
								<div className="dropdown wd-compare-btn">
								  <button className="btn btn-secondary dropdown-toggle compare-btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    <i className="fa fa-balance-scale"></i>

								  </button>
								  <span className="count">9</span>
								  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
								  	<div className="wd-item-list">
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-1.jpg" alt="cart-img"/>
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-2.jpg" alt="cart-img"/>
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-1.jpg" alt="cart-img"/>
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-2.jpg" alt="cart-img"/>
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									  	<div className="media">
											<img className="d-flex mr-3" src="img/cart-img-1.jpg" alt="cart-img"/>
											<div className="media-body">
												<h6 className="mt-0 list-group-title">Voyage Yoga Bag</h6>
												<div className="rating">
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
													<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
												</div>
												<div className="cart-price">$59</div>
											</div>
										</div>
									</div>
								  	<div className="media text-center">
										<a href="compare-products.html" className="btn btn-primary go-compare-page">Compare 
										<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
									</div>
								  </div>
								</div>
							</div>
				    </div>
						
				</div>
            </div>
    	</div>
    </section>
	<section id="main-menu" className="sticker-nav">
    	<div className="container">
    		<div className="row">
    			<div className="col-2 col-md-6 col-lg-12 ">
					<div className="menu-container wd-megamenu">
                        <div className="menu">
                            <ul className="wd-megamenu-ul">
                                <li><a href="index.html" className="main-menu-list"><i className="fa fa-home" aria-hidden="true"></i> Home <i className="fa fa-angle-down angle-down" aria-hidden="true"></i></a>
                                    <ul className="single-dropdown">
                                        <li><a href="index.html">Home Page 1</a></li>
                                        <li><a href="index-01-02.html">Home page 1 Fullwidth</a></li>
                                        <li><a href="index-second-home.html">Home Page 2</a></li>
                                        <li><a href="index-third-home.html">Home Page 3</a></li>
                                        <li><a href="magazine.html">Home Page Magazine</a></li>
                                    </ul>
                                </li>
                                <li><a href="compare-products.html" className="main-menu-list">Comparison Product <i className="fa fa-angle-down angle-down" aria-hidden="true"></i></a>
                                    <ul className="single-dropdown">
                                        <li><a href="compare-products.html">Comparison Product</a></li>
                                        <li><a href="compare-products-single.html">Compare Products Single</a></li>
                                        <li><a href="compare-products-choose-market.html">Compare Products Choose Market</a></li>
                                        <li><a href="contact-us.html">Contact us</a></li>
                                    </ul>
                                </li>
                                <li><a href="shop-left-sidebar.html" className="main-menu-list">Shop <i className="fa fa-angle-down angle-down" aria-hidden="true"></i></a>
                                    <ul className="single-dropdown">
                                        <li><a href="shop-left-sidebar.html">Shop Page</a></li>
                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li><a href="shop-left-sidebar-full-grid.html">Shop Left Sidebar Full Grid</a></li>
                                        <li><a href="shop-right-sidebar-full-grid.html">Shop Right Sidebar Full Grid</a></li>
                                        <li><a href="product-details.html">Product Details</a></li>
                                        <li><a href="product-details-scroll.html">Product Details v2</a></li>
                                        <li><a href="wishlist.html">Wishlist View</a></li>
                                    </ul>
                                </li>
                                <li className="pos-inherit"><a href="shop-left-sidebar.html" className="main-menu-list ">Shortcode <i className="fa fa-angle-down angle-down" aria-hidden="true"></i></a>
                                    <ul className="single-dropdown megamenu">
                                        <li><a href="#" className="menu-subtitle">Shortcode One</a>
                                            <ul className="sub-menu-list">
                                                <li><a href="blurb-blog.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i> blurb-blog</a></li>
                                                <li><a href="blurb-call-to-action.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-call-to-action</a></li>
                                                <li><a href="blurb-carousel.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-carousel</a></li>
                                                <li><a href="blurb-compare-products.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-compare-products</a></li>
                                                <li><a href="blurb-footer.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-footer</a></li>
                                                <li><a href="blurb-counterup.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb Count up</a></li>
                                                <li><a href="404.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>404 page</a></li>
                                                
                                            </ul>
                                        </li>
                                        <li><a href="#" className="menu-subtitle">Shortcode Two</a>
                                            <ul className="sub-menu-list">
                                                
                                                <li><a href="blurb-product.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-product</a></li>
                                                <li><a href="blurb-reveiw.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-reveiw</a></li>
                                                <li><a href="blurb-service.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-service</a></li>
                                                <li><a href="blurb-widgetstyle-1.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-1</a></li>
                                                <li><a href="blurb-social.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb social icon</a></li>
                                                <li><a href="blurb-subscribe.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb Subscribe</a></li>
                                                <li><a href="coming-soon.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Coming Soon</a></li>
                                                
                                            </ul>
                                        </li>
                                        <li><a href="#" className="menu-subtitle">Shortcode three</a>
                                            <ul className="sub-menu-list">
                                                <li><a href="blurb-widgetstyle-2.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-2</a></li>
                                                <li><a href="blurb-widgetstyle-3.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-3</a></li>
                                                <li><a href="blurb-widgetstyle-4.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-4</a></li>
                                                <li><a href="blurb-widgetstyle-5.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-5</a></li>
                                                <li><a href="blurb-widgetstyle-6.html"><i className="fa fa-angle-double-right" aria-hidden="true"></i>blurb-widgetstyle-6</a></li>
                                                
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="product-details-scroll.html" className="add-img"><img src="img/nav-img-1.jpg" className="figure-img img-fluid" alt="Product Img"/></a>
                                            <a href="product-details-scroll.html" className="add-img"><img src="img/nav-img-2.jpg" className="figure-img img-fluid" alt="Product Img"/></a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="review-left-sidebar.html" className="main-menu-list">REVIEWS</a>
                                    <ul className="single-dropdown">
                                        <li><a href="product-details-review-history.html">Product History</a></li>
                                        <li><a href="product-details-single-review.html">Single Review</a></li>
                                        <li><a href="review-left-sidebar.html">Review Left Sidebar</a></li>
                                        <li><a href="review-right-sidebar.html">Review Right Sidebar</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog-four-grid-left-sidebar.html" className="main-menu-list">Blog <i className="fa fa-angle-down angle-down" aria-hidden="true"></i></a>
                                    <ul className="single-dropdown">
                                        <li><a href="blog-full-grid.html">Blog Full Grid</a></li>
                                        <li><a href="blog-two-grid.html">Blog Two Grid</a></li>
                                        <li><a href="blog-three-grid.html">Blog Three Grid</a></li>
                                        <li><a href="blog-four-grid.html">Blog Four Grid</a></li>
                                        <li><a href="blog-four-grid-left-sidebar.html">Blog Four Grid Left Sidebar</a></li>
                                        <li><a href="blog-four-grid-right-sidebar.html">Blog Four Grid Right Sidebar</a></li>
                                        <li><a href="single-blog-with.html">Single Blog</a></li>
                                        <li><a href="single-blog-with-add.html">Single Blog With Add</a></li>
                                    </ul>
                                </li>
                                <li><a href="coupon.html" className="main-menu-list">Coupon</a></li>
                                
                            </ul>
                        </div>
					</div>
    			</div>
				<div className="col-6 col-md-4 col-lg-5 text-right ext-right p0  d-none ">
					<div className="account-and-search">
						<div className="account-section">
							<button className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
								<i className="fa fa-sign-in" aria-hidden="true"></i>
							</button>

							<div className="modal wd-ph-modal fade bd-example-modal-lg" tabindex="-1" aria-hidden="true">
								<div className="modal-dialog modal-lg">
									<div className="modal-content">
										<div className="container">
											<div className="row text-left">
												<div className="col-md-12 p0">

													<div className="modal-tab-section wd-modal-tabs">
														<ul className="nav nav-tabs wd-modal-tab-menu text-center" id="myTab-account" role="tablist">
															<li className="nav-item">
																<a className="nav-link active" id="login-tab-2" data-toggle="tab" href="#login-2" role="tab" aria-controls="login-2" aria-expanded="true">Login</a>
															</li>
															<li className="nav-item">
																<a className="nav-link" id="sign-up-tab-2" data-toggle="tab" href="#sign-up-2" role="tab" aria-controls="sign-up-2">Sign up</a>
															</li>
														</ul>
														<div className="tab-content" id="myTabContent-account">
															<div className="tab-pane fade show active" id="login-2" role="tabpanel" aria-labelledby="login-tab-2">

																<div className="row">
																	<div className="col-md-6 p0 brand-description-area">
																		<img src="img/login-img-1.jpg" className="img-fluid" alt=""/>
																		<div className="brand-description">
																			<div className="brand-logo">
																				<img src="img/logo.png" alt="Logo"/>
																			</div>
																			<div className="modal-description">
																				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
																			</div>
																			<ul className="list-unstyled">
																				<li className="media">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																				<li className="media my-4">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																				<li className="media">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="col-12 col-md-12 col-lg-6 p0">
																		<div className="login-section text-center">
																			<div className="social-media ph-social-media">
																				<a href="#" className="facebook-bg"><i className="fa fa-facebook" aria-hidden="true"></i> Login</a>
																				<a href="#" className="twitter-bg"><i className="fa fa-twitter" aria-hidden="true"></i> Login</a>
																				<a href="#" className="google-bg"><i className="fa fa-google-plus" aria-hidden="true"></i> Login</a>
																			</div>
																			<div className="login-form text-left">
																				<form>
																					<div className="form-group">
																						<label for="exampleInputEmail1">User name</label>
																						<input type="text" className="form-control" id="exampleInputEmail1" placeholder="John mist |"/>
																					</div>
																					<div className="form-group">
																						<label for="exampleInputPassword1">Password</label>
																						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="*** *** ***"/>
																					</div>
																					<button type="submit" className="btn btn-primary wd-login-btn">LOGIN</button>

																					<div className="form-check">
																						<label className="form-check-label">
																							<input type="checkbox" className="form-check-input"/>
																							Save this password
																						</label>
																					</div>
																					
																					<div className="wd-policy">
																						<p>
																							By Continuing. I conferm that i have read and userstand the <a href="#">terms of uses</a> and <a href="#">Privacy Policy</a>. 
																							Don’t have an account? <a href="#" className="black-color"><strong><u>Sign up</u></strong></a>
																						</p>
																					</div>
																				</form>
																			</div>
																		</div>
																	</div>
																</div>

															</div>
															<div className="tab-pane fade" id="sign-up-2" role="tabpanel" aria-labelledby="sign-up-tab-2">

																<div className="row">
																	<div className="col-md-12 p0 brand-login-section">
																		<img src="img/login-img-2.jpg" className="img-fluid" alt=""/>
																		<div className="brand-description">
																			<div className="brand-logo">
																				<img src="img/logo.png" alt="Logo"/>
																			</div>
																			<div className="modal-description">
																				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teoccaecvoluptatem.</p>
																			</div>
																			<ul className="list-unstyled">
																				<li className="media">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																				<li className="media my-4">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																				<li className="media">
																					<i className="fa fa-check" aria-hidden="true"></i>
																					<div className="media-body">
																						Lorem ipsum dolor sit amet, consecadipisicing 
																						elit, sed do eiusmod teoccaecvoluptatem.
																					</div>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="col-12 col-md-12 col-lg-6 p0">
																		<div className="sign-up-section text-center">
																			<div className="login-form text-left">
																				<form>
																					<div className="form-group">
																						<label for="exampleInputname-login-in">First name</label>
																						<input type="text" className="form-control" id="exampleInputname-login-in" placeholder="First Name"/>
																					</div>
																					<div className="form-group">
																						<label for="exampleInputname-login-in-2">Last name</label>
																						<input type="text" className="form-control" id="exampleInputname-login-in-2" placeholder="Last Name"/>
																					</div>
																					<div className="form-group">
																						<label for="exampleInputEmail-login-in">Email</label>
																						<input type="text" className="form-control" id="exampleInputEmail-login-in" placeholder="Enter you email ..."/>
																					</div>
																					<div className="form-group">
																						<label for="exampleInputPassword-login-in">Password</label>
																						<input type="password" className="form-control" id="exampleInputPassword-login-in" placeholder="*** *** ***"/>
																					</div>
																					<button type="submit" className="btn btn-primary wd-login-btn">Sign Up</button>
																					
																					<div className="wd-policy">
																						<p>
																							By Continuing. I conferm that i have read and userstand the <a href="#">terms of uses</a> and <a href="#">Privacy Policy</a>. 
																							Don’t have an account? <a href="#" className="black-color"><strong><u>Sign up</u></strong></a>
																						</p>
																					</div>
																				</form>
																			</div>
																		</div>
																	</div>
																</div>

															</div>
														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
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
