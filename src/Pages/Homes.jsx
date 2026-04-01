import Categories from "../Components/Categories/Categories";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import AllProduct from "../Components/Product/AllProduct";
// import Product from "../Components/Product/Product";
import ProductCard from "../Components/ProductCard";
function Home({ cart, setCart }){

    return(
       <>
        <Navbar/>
        <div>
        <Hero/>
        </div>
       <Categories/>

       <AllProduct cart={cart} setCart={setCart} />

       {/* <Product/> */}
        {/* {products.map((item)=>(
            <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            />
        ))} */}
         
         <Footer/>
       </>
    )
    }
    export default Home;
    {/* <ProductCard/> */}
    {/* <ProductCard firstName="Pawan" lastName="Singh"/>
    <ProductCard firstName="Rahul" lastName="Rai"/>*/}
