import React from 'react'



export default class  SliderSection extends React.Component {
	render(){
  return (
    <div>


<section id="main-slider-section">
    	<div id="mainSlider" className="sliderBg2  owl-carousel owl-theme product-review slider-cat">
			<div className="item dFlex  sliderBg alignItemsCenter">
				<div className="containerFluid">
					<div className="row justifyContentEnd">
					
						<div className="slider-text col-sm-6  col-xl-4   col-md-6 order-2 order-sm-1">
							<h6 className="subTitle">Choose your favourite market</h6>
							<h1 className="sliderTitle"><strong className="highlights-text">Compare</strong> Best Prices</h1>
							<p className="sliderContent">Grabe it hurry.</p>
							<a href="shop-left-sidebar.html" className="btn btn-primary wd-shop-btn slider-btn">
								Go to store <i className="fa fa-arrow-right" aria-hidden="true"></i>
							</a>
						</div>
						<div className="col-sm-6  col-md-6 col-xl-6 order-1 order-sm-2 slider-img">
						    <img src="img/slider-img/slider3.png" alt=""/>
						</div>
					</div>
				</div>
			</div>
           <div className="item Dflex  sliderBg alignItemsCenter">
				<div className="containerFluid">
					<div className="row justifyContentEnd">
						<div className="sliderText  col-sm-6 col-xl-4    col-md-6">
							<h6 className="subTitle">Choose your favourite market</h6>
							<h1 className="sliderTitle"><strong className="highlights-text">Compare</strong> Best Prices</h1>
							<p className="sliderContent">Grabe it hurry.</p>
							<a href="shop-left-sidebar.html" className="btn btn-primary wd-shop-btn slider-btn">
								Go to store <i className="fa fa-arrow-right" aria-hidden="true"></i>
							</a>
						</div>
						<div className="col-sm-6 col-md-6 col-xl-6  slider-img fadeInDown animated">
						    <img src="img/slider-img/slider4.png" alt=""/>
						</div>
					</div>
				</div>
			</div>
    	</div>
</section>
	
</div>


);
}
}
