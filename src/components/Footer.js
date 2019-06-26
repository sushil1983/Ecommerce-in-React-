import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
<div>


<footer className="footer wow fadeInUp animated footer-3" data-wow-delay="900ms">
    	<div className="container-fluid custom-width">
    		<div className="row">
    			<div className="col-md-12 col-lg-2">
    				{/* <!-- ===========================
    						Footer About
    					 =========================== --> */}
    				<div className="footerAbout">
    					<a href="index.html" className="footer-about-logo">
    						<img src="img/logo.png" alt="Logo"/>
    					</a>
	    				<div className="footerDescription">
	    					<p>Lorem ipsum dolor sit amet, anim id est laborum. Sed ut perspconsectetur, adipisci vam aliquam qua.</p>
	    				</div>
	    				<div className="wb-social-media">
						<a href="#" className="bh"><i className="fa fa-behance"></i></a>
						<a href="#" className="fb"><i className="fa fa-facebook-official"></i></a>
						<a href="#" className="db"><i className="fa fa-dribbble"></i></a>
						<a href="#" className="gp"><i className="fa fa-google-plus"></i></a>
						<a href="#" className="vn"><i className="fa fa-vine"></i></a>
						<a href="#" className="yt"><i className="fa fa-youtube-play"></i></a>
					</div>
    				</div>
    			</div>
    			<div className="col-6 col-md-3 col-lg-2 footer-nav">
    				{/* <!-- ===========================
    						Festival Deals
    					 =========================== --> */}
    				<h6 className="footerSubtitle">Festival Deals</h6>
    				<ul>
    					<li><a href="index.html"> Home </a></li>
    					<li><a href="compare-products.html">Comparison Product </a></li>
    					<li><a href="shop-left-sidebar.html">Shop </a></li>
    					<li><a href="review-left-sidebar.html">Reviews</a></li>
    					<li><a href="blog-four-grid-left-sidebar.html">Blog</a></li>
    				</ul>
    			</div>
    			<div className="col-6 col-md-3 col-lg-2 footer-nav">
    				{/* <!-- ===========================
    						Top Stores
    					 =========================== --> */}
    				<div className="storesList">
	    				<h6 className="footerSubtitle">Top Stores</h6>
	    				<ul>
	    					<li><a href="shop-left-sidebar.html">Affiliate Market 1</a></li>
	    					<li><a href="shop-left-sidebar.html">Affiliate Market 2</a></li>
	    					<li><a href="shop-left-sidebar.html">Affiliate Market 3</a></li>
	    					<li><a href="shop-left-sidebar.html">Affiliate Market 4</a></li>
	    					<li><a href="shop-left-sidebar.html">Affiliate Market 5</a></li>
	    					
	    				</ul>
    				</div>
    			</div>
    			<div className="col-6 col-md-3 col-lg-2 footer-nav">
    				{/* <!-- ===========================
    						Need Help ?
    					 =========================== --> */}
    				<h6 className="footerSubtitle">Need Help ?</h6>
    				<ul>
    					<li><a href="product-details-scroll.html">Getting Started</a></li>
    					<li><a href="contact-us.html">Contact Us</a></li>
    					<li><a href="product-details-scroll.html">FAQ's</a></li>
    					<li><a href="product-details-scroll.html">Press</a></li>
    					<li><a href="product-details-scroll.html">Product Feed</a></li>
    					<li><a href="product-details-scroll.html">Best Rated Product</a></li>
    					<li><a href="product-details-scroll.html">Feature product</a></li>
    				</ul>
    			</div>
    			<div className="col-6 col-md-3 col-lg-2 footer-nav">
    				{/* <!-- ===========================
    						About
    					 =========================== --> */}
    				<h6 className="footerSubtitle">About</h6>
	    				<ul>
	    					<li><a href="conditions.html">Privacy</a></li>
	    					<li><a href="conditions.html">Return Policy</a></li>
	    					<li><a href="conditions.html">Order &#38; Return</a></li>
	    					<li><a href="conditions.html">Terms &#38; Conditions</a></li>
	    				</ul>
    			</div>
    			<div className="col-12 col-md-12 col-lg-2">
    				<h6 className="footerSubtitle">Newsletter Signup</h6>
    				<p className="newsletterContent">By subscribing to our mailing list you will always be update with the latest news from us.</p>
    				<div className="newsletterForm">
						<form>
							<div className="formGroup">
								<input type="text" className="form-control newsletter-input" placeholder="Enter your email"/>
							</div>
							<button type="submit" className="btn btn-primary newsletter-btn">Join us</button>
						</form>
    				</div>
    			</div>
    		</div>
    	</div>
    </footer>
	</div>

);
  }
}

