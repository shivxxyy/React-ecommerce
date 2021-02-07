import {React} from 'react'
import {Link} from 'react-router-dom'
const KarolBagh = ({marketname, description, imageUrl}) => {
  
    return (
        <div>
             <h2><Link to='/Buy' style={{textDecoration:'none', color:'#ff4d4d', margin:'5px'}}>{marketname}</Link></h2>
            <img src={imageUrl} alt='' style={{//position: 'relative',
    //top:'20%',
    //left:'50%',
    width: '20%',
    //height: '20%',
    margin:'5px',
    border: '5px solid rgb(198, 130, 238)',
    borderRadius:' 20px 20px 20px 20px' }}/>
            <p style={{color:'white',
             fontWeight:'bolder',
             display:'flex',
             flexDirection:'column',
             position:'absolute',
             left:'25%',
            top:'18%',
           width:'45%'}}>
            The combination of style, intricacy, opulence and master craftsmanship is what defines the bespoke bridal lehenga collection by Kala Shree. Preferred as the best bridal lehenga shop in Delhi specially in Karol Bagh, Kala Shree is the ultimate shopping paradise when it comes to shop for your dream wedding lehenga.
            </p>
            <p style={{color:'white',
             display:'flex',
             flexDirection:'column',
             position:'absolute',
             left:'25%',
            top:'70%',
            fontWeight:'bolder',
           width:'45%',}}>
            This store is quite huge and they make apparel from natural fabrics such as cotton, silk, and linen only. From dresses and tunics to saris and heavier suits, they do everything. Their collection is priced a bit higher than the other options in Fashion Street, but considering it's a slow fashion brand, we feel it's worth it.
            </p>
        </div>
    )
}

export default KarolBagh
