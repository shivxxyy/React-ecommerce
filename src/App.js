import {React,useState} from "react"
import {BrowserRouter as Router, Route, Switch,Link, useHistory, browserHistory} from 'react-router-dom'
import Janpath from "./components/Janpath"
import KamlaNagar from "./components/KamlaNagar"
import KarolBagh from "./components/KarolBagh"
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Error from './components/Error'
import Buy from './components/Buy'
import Form from './components/Form'
function App() {
  const PAGE_BUY= 'buy'
  const PAGE_CART= 'cart'
  const [knagar] = useState([
    {
        marketname:"Gteen",
        description:"Right next to the G-9 Teen store, this store is (obviously) a sister concern. While the kind of stuff you'll find here is quite similar (casual, colourful, cool prints), they also have a good amount of basic, solid-coloured and patterned shirts you could check out. All the stuff here too is menswear, but women who like to shop in the men's section (all of us!) will find some cool stuff here.",
        imageUrl:"https://imgmediagumlet.lbb.in/media/2019/06/5d0c8ece80d10c72d8cb30a6_1561104078847.jpg?fm=webp&w=750&h=500&dpr=2"
        
    },
    {
        marketname:"Fashion Garage",
        description:'We have no idea why we did not discover this store earlier, because this is a clear winner for us. From Pink Floyd tour merch, to Star Wars t-shirts, to even really funny fridge magnets and patches, this store is literally heaven for anyone who loves pop-culture. They have got apparel for both men and women, and most of their stuff is kind of neutral. They have even got a lot of reasonably priced denims.',
        imageUrl:"https://imgmediagumlet.lbb.in/media/2019/06/5d0c8f5180d10c72d8cb35bd_1561104209510.jpg?fm=webp&w=750&h=500&dpr=2"
    }
])
const [kbagh]=useState([
  {
    marketname:"Kala Shree",
    description:"The combination of style, intricacy, opulence and master craftsmanship is what defines the bespoke bridal lehenga collection by Kala Shree. Preferred as the best bridal lehenga shop in Delhi specially in Karol Bagh, Kala Shree is the ultimate shopping paradise when it comes to shop for your dream wedding lehenga.",
    imageUrl:"https://discountlooker.com/img/Delhi/Kala-Shree-Karol-Bagh-Delhi_1.jpg"
  },
  {
    marketname:"Indifusion",
    description:"This store is quite huge and they make apparel from natural fabrics such as cotton, silk, and linen only. From dresses and tunics to saris and heavier suits, they do everything. Their collection is priced a bit higher than the other options in Fashion Street, but considering it's a slow fashion brand, we feel it's worth it.",
    imageUrl:"https://imgmediagumlet.lbb.in/media/2019/06/5d0c906380d10c72d8cb3c73_1561104483627.jpg?fm=webp&w=750&h=500&dpr=2"
  }
])
const [jpath]= useState([
  {
    marketname:"Street Market",
    description:"Recommended For: The Janpath Street Market is reminiscent of Sarojini, but here, you’re more likely to find slightly more on-point, trendier clothes, from beautiful flowy pants and dark glasses to denim shirts and jumpsuits to sailor-print sneakers. You’ve got to bring your best bargaining game here.",
    imageUrl:"https://imgmedia.lbb.in/media/2017/07/597767e4a5fac2666ed20158_594abe48c3eb7d0fde701a43_1500997604989.jpg"
  },
  {
    marketname:"Gujrati Market",
    description:"Recommended For: Gujarati craftsmen and women selling brightly coloured bags, pillowcases, bed sheets, umbrellas, kurtas and shirts embroidered with mirrors and even more colour. There are some Afghani earrings and rings to look forward to as well! Take note, the market is in a lane right next to the metro station.",
    imageUrl:"https://res.cloudinary.com/purnesh/image/upload/f_auto/v1497019322/bag02.jpg"
  }
])
const [buy]=useState([
  {
      id:1,
      about:" Classic Polo Men's Regular Fit Polos",
      ratings:"4.3",
      price:"Rs.499",
      delievery:"datex",
      imageP:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQunMxrhAkWM30DyUoqpgIAuHBizGu2PutUfA&usqp=CAU"
    },
    {
      id:2,
      about:"Van Heusen Athleisure Men's Solid Regular Fit T-Shirt",
      ratings:"4.4",
      price:"Rs.599",
      delievery:"datey",
      imageP:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqGDZk3bIg8PCXFtBqirkLchDEfOznXpSBLA&usqp=CAU"
    },
    {
      id:3,
      about:"Allen Solly Men's Polo",
      ratings:"4.1",
      price:"Rs.399",
      delievery:"datez",
      imageP:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLBIqhTrnvcL-tc1M4n2hFwDItwqz5bJusYw&usqp=CAU"
    }
])
const [cart, setCart]=useState([])
const [page, setPage]= useState(PAGE_BUY)


const addToCart=(product)=>{
  console.log('added!!')
  setCart([...cart, {...product}])
}

const removeFromCart=(productToRemove)=>{
  setCart(cart.filter((product)=> product!==productToRemove))
}

const navigateTo=(nextPage)=>{
  setPage(nextPage)
}

const renderBuy=()=>(

     <div>
    {
      buy.map((product, index)=>(
        <div key={index}>
        <Buy about={product.about} ratings={product.ratings} price={product.price} delievery={product.delievery}
          imageP={product.imageP} />
          <Link to="/Form">
          <button style={{backgroundColor: '#008CBA',padding:'5px 12px',
                 borderRadius:'8px',margin:'5px',fontWeight:'bolder',
                 border:'2px solid green', cursor:'pointer'}}>Buy Now</button>
                 </Link>
          
          <button style={{backgroundColor: '#008CBA',padding:'5px 12px',
        borderRadius:'8px',margin:'10px',fontWeight:'bolder',
        border:'2px solid green', cursor:'pointer'
        }} onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
      )) 
    }
    </div>
  

)
const renderCart=()=>(
  <>
    {
      cart.map((product, index)=>(
        <div key={index}>
        <Buy about={product.about} ratings={product.ratings} price={product.price} delievery={product.delievery}
          imageP={product.imageP}/>
              <button style={{backgroundColor: '#008CBA',padding:'5px 12px',
        borderRadius:'8px',margin:'5px',fontWeight:'bolder',
        border:'2px solid green',cursor:'pointer'}} onClick={()=>removeFromCart(product)}>Remove</button>
        </div>
      )) 
    }
    </>
)


  return (
    <div>
    {/*<h1>hello world</h1>*/}
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path='/'>
          <Home />
        </Route>
    <Route path='/KamlaNagar'>
    {
      knagar.map(nagar=>(
    <KamlaNagar marketname={nagar.marketname} description={nagar.description} imageUrl={nagar.imageUrl}/>
      ))
    }
    </Route>
    <Route path='/KarolBagh'>
    {
      kbagh.map(bagh=>(
        <KarolBagh marketname={bagh.marketname} description={bagh.description} imageUrl={bagh.imageUrl}/>
      ))
    }
    </Route>
    <Route path='/Janpath'>
    {
      jpath.map(path=>(
        <Janpath marketname={path.marketname} description={path.description} imageUrl={path.imageUrl}/>
      ))
    }
    </Route>
    <Route path='/Buy'>
    <button style={{backgroundColor: '#008CBA',padding:'5px 12px',
        borderRadius:'8px',margin:'5px',fontWeight:'bolder',
        border:'2px solid green',cursor:'pointer'}} onClick={()=> navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>
    <button style={{backgroundColor: '#008CBA',padding:'5px 12px',
        borderRadius:'8px',margin:'5px',fontWeight:'bolder',
        border:'2px solid green',cursor:'pointer'}} onClick={()=> navigateTo(PAGE_BUY)}>View Products</button>
    {page === PAGE_BUY && renderBuy()}
    {page === PAGE_CART && renderCart()}
    </Route>
    <Route path='/Form'>
      <Form/>
    </Route>
    <Route path='*'>
    <Error/>
    </Route>
    </Switch>
    </Router>
   
    </div>
  );
}


export default App;
