import React from 'react'
import {Link} from 'react-router-dom'

const KamlaNagar = ({marketname, imageUrl}) => {
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
            top:'30%',
           width:'45%'}}>Right next 45 the G-9 Teen store, this store is (obviously) a sister concern. While the kind of stuff you'll find here is quite similar (casual, colourful, cool prints), they also have a good amount of basic, solid-coloured and patterned shirts you could check out. All the stuff here too is menswear, but women who like to shop in the men's section (all of us!) will find some cool stuff here.</p>
           <p style={{color:'white',
             display:'flex',
             flexDirection:'column',
             position:'absolute',
             left:'25%',
            top:'110%',
            fontWeight:'bolder',
           width:'45%',}}>
           We have no idea why we did not discover this store earlier, because this is a clear winner for us. From Pink Floyd tour merch, to Star Wars t-shirts, to even really funny fridge magnets and patches, this store is literally heaven for anyone who loves pop-culture. They have got apparel for both men and women, and most of their stuff is kind of neutral. They have even got a lot of reasonably priced denims.
           </p>
        </div>
    )
}

export default KamlaNagar
