import { Route, Routes } from 'react-router-dom';
import './App.css';
import BodyfrontHeader from './frontend/components/BodyfrontHeader';
import  Footer  from './frontend/components/Footer';
import Header from './frontend/components/Header';
import CatalGullAhmed from './frontend/pages/CatalGullAhmed';
import Cataljdot from './frontend/pages/CatalJdot';
import CatalMobile from './frontend/pages/CatalMobile';
import Catalogues from './frontend/pages/Catalogues';
import CatalWatches from './frontend/pages/CatalWatches';
import  ProductDetail  from './frontend/pages/ProductDetail';
import ProductDetailJdot from './frontend/pages/ProductDetailJdot';
import ProductDetailMobile from './frontend/pages/ProductDetailMobile';
import ProductDetailnishat from './frontend/pages/ProductDetailnishat';
import ProductDetailWatch from './frontend/pages/ProductDetailWatch';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Shoppingcart  from './frontend/components/Shoppingcart';
import Signin from './frontend/pages/Signin';
import { Signup } from './frontend/pages/Signup';
import { ShippingAddress } from './frontend/pages/ShippingAddress';
import { Payment } from './frontend/pages/Payment';
import { Placeorder } from './frontend/pages/Placeorder';
import Thanks from './frontend/pages/Thanks';
import  OrderHistory  from './frontend/pages/OrderHistory';
import Uploadproduct from './frontend/pages/Uploadproduct';
import UpdateProduct from './frontend/pages/UpdateProduct';

function App() {
  return (
<>

            <ToastContainer position="bottom-center" limit={1} />
<div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
  <header>
  <Header />
  </header>  


  <main style={{flexGrow: 1}}>
  <Routes>
<Route  path='/' element={ <BodyfrontHeader />} />  
<Route  path='/catalogues' element={ <Catalogues/>} />  
<Route  path='/catalogues/:slug' element={ <ProductDetailnishat/>} />  
<Route  path='/catal-watches' element={ <CatalWatches/>} />  
<Route  path='/catal-watches/:slug' element={ <ProductDetailWatch/>} />  
<Route  path='/catal-gull-ahmed' element={ <CatalGullAhmed/>} />  
<Route  path='/catal-gull-ahmed/:slug' element={ <ProductDetail/>} />  
<Route  path='/catal-mobile' element={ <CatalMobile/>} />  
<Route  path='/catal-mobile/:slug' element={ <ProductDetailMobile/>} />  
<Route  path='/catal-jdot' element={ <Cataljdot/>} />  
<Route  path='/catal-jdot/:slug' element={ <ProductDetailJdot />} />  
<Route  path='/shopping-cart' element={ <Shoppingcart />} />  
<Route  path='/sign_in' element={ <Signin />} />  
<Route  path='/shipping-address' element={ <ShippingAddress />} />  
<Route  path='/payment' element={ <Payment />} />  
<Route  path='/placeorder' element={ <Placeorder />} />  
<Route  path='/sign_up' element={ <Signup />} />  
<Route  path='/check-out' element={ <Thanks />} />  
<Route  path='/user-history' element={ <OrderHistory />} />  
<Route  path='/upload-product' element={ <Uploadproduct />} />  
<Route  path='/update-product' element={ <UpdateProduct />} />  
{/* <Route  path='/update-product/:id' element={ <Editproduct />} />   */}
  </Routes>
  </main>
{/* <footer > */}
  <Footer />
{/* </footer> */}
</div>

</>
            );
}

export default App;
