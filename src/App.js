import React  from 'react'



 import './App.css';
  import './css/animate.css'
 
 import "./css/font-awesome.min.css"
 
 
 import "./css/owl.theme.default.min.css"
 import "./css/animate.min.css"
 import "./css/megamenu.css"
 import './css/style.css'
 import './css/bootstrap.min.css'

 
 import MainLoadingJS from './components/MainLoadingJS'
   


 import WdHeader from './components/WdHeader'

 import Counter from './components/Counter'
import CopyRight from './components/CopyRight'
import Header from './components/Header'
import SliderSection from './components/SliderSection'
import CartOut from './components/CartOut' 
import ChooseCategory from './components/ChooseCategory'
import AmazonTopDeals from './components/AmazonTopDeals'
import ProductView from './components/ProductView'
import Review from './components/Review'
import BestRateditem from './components/BestRateditem'
import Footer from './components/Footer'
import Weekly from './components/Weekly'

class  App extends React.Component {
	render(){
  return (
    <div>
		<span className ="p"> </span>
		
		<WdHeader />
		
		 <Header />

		 
		<CartOut />		
		<SliderSection />
		
		
		<ChooseCategory />
		
		<AmazonTopDeals />
		
		<ProductView /> 
		
		<Review />
		
		<BestRateditem />
		
		<Weekly />
		
		
		<Counter />
		

	
	
	<Footer />
	
	<MainLoadingJS />
	
	<CopyRight />
	
   

 
</div>

	
)
}
}

export default App;
