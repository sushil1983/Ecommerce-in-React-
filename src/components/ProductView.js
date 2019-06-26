import React from 'react';

export default class productView extends React.Component {
  render() {
    return (
<div>

<div className="product-view-modal modal fade bd-example-modal-lg-product-1" tabindex="-1" aria-hidden="true">
		<div className="modaldialog modallg">
			<div className="modal-content">

		    {/* <!-- ====================================
		        Product Details Gallery Section
		    ========================================= --> */}
			<div className="row">
				<div className="productGallery col-12 col-md-12 col-lg-6">
				    {/* <!-- ====================================
				        Single Product Gallery Section
				    ========================================= --> */}
				    <div className="row">
						<div className="col-md-12 productslierdetails">
							<div id="product-view-model" className="product-view owl-carousel owl-theme">
							    <div className="item">
							    	<img src="img/product-img/product-view-img-1.jpg" className="img-fluid" alt="Product img"/>
							    </div>
							    <div className="item">
							    	<img src="img/product-img/product-view-img-2.jpg" className="img-fluid" alt="Product img"/>
							    </div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-12 col-md-12 col-lg-6">
					<div className="productDetailsGallery">
						<div className="list-group">
							<h4 className="list-group-item-heading product-title">
								Vigo SP111-31N-P2GH Spin 1
							</h4>
							<div className="media">
								<div className="media-left media-middle">
									<div className="rating">
										<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
										<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
										<a href="#"><i className="fa fa-star active-color" aria-hidden="true"></i></a>
										<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
										<a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
									</div>
								</div>
								<div className="media-body">
									<p>3.7/5 <span className="product-ratings-text"> -1747 Ratings</span></p>
								</div>
							</div>
						</div>
						<div className="list-group content-list">
							<p><i className="fa fa-dot-circle-o" aria-hidden="true"></i> 100% Original product</p>
							<p><i className="fa fa-dot-circle-o" aria-hidden="true"></i> Manufacturer Warranty</p>
						</div>
					</div>
					<div className="productStore row">
						<div className="col-12 product-store-box">
							<div className="row">
								<div className="col-3 p0 store-border-img">
									<img src="img/product-store/product-store-img1.jpg" className="figure-img img-fluid" alt="Product img"/>
								</div>
								<div className="col-5 store-border-price text-center">
									<div className="price">
										<p>$234</p>
									</div>
								</div>
								<div className="col-4 store-border-button">
									<a href="#" className="btn btn-primary wd-shop-btn pull-right">
										Buy it now
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 product-store-box">
							<div className="row">
								<div className="col-3 p0 store-border-img">
									<img src="img/product-store/product-store-img2.jpg" className="figure-img img-fluid" alt="Product img"/>
								</div>
								<div className="col-5 store-border-price text-center">
									<div className="price">
										<p>$535</p>
									</div>
								</div>
								<div className="col-4 store-border-button">
									<a href="#" className="btn btn-primary wd-shop-btn pull-right red-bg">
										Buy it now
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 product-store-box">
							<div className="row">
								<div className="col-3 p0 store-border-img">
									<img src="img/product-store/product-store-img3.jpg" className="figure-img img-fluid" alt="Product img"/>
								</div>
								<div className="col-5 store-border-price">
									<span className="badge badge-secondary wd-badge text-uppercase">Best</span>
									<div className="price text-center">
										<p>$198</p>
									</div>
								</div>
								<div className="col-4 store-border-button">
									<a href="#" className="btn btn-primary wd-shop-btn pull-right orange-bg">
										Buy it now
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 product-store-box">
							<div className="row">
								<div className="col-3 p0 store-border-img">
									<img src="img/product-store/product-store-img4.jpg" className="figure-img img-fluid" alt="Product img"/>
								</div>
								<div className="col-5 store-border-price text-center">
									<div className="price">
										<p>$634</p>
									</div>
								</div>
								<div className="col-4 store-border-button">
									<a href="#" className="btn btn-primary wd-shop-btn pull-right green-bg">
										Buy it now
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 product-store-box">
							<div className="row">
								<div className="col-3 p0 store-border-img">
									<img src="img/product-store/product-store-img5.jpg" className="figure-img img-fluid" alt="Product img"/>
								</div>
								<div className="col-5 store-border-price text-center">
									<div className="price">
										<p>$234</p>
									</div>
								</div>
								<div className="col-4 store-border-button">
									<a href="#" className="btn btn-primary wd-shop-btn pull-right blue-bg">
										Buy it now
									</a>
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
	)}}