import React from 'react'
import {Link} from 'react-router-dom'

const Janpath = ({marketname, description, imageUrl}) => {
    return (
        <div>
            <h2><Link to='/Buy' style={{textDecoration:'none', color:'#ff4d4d', margin:'5px'}}>{marketname}</Link></h2>
            <img src={imageUrl} alt=''  style={{//position: 'relative',
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
            top:'22%',
           width:'45%'}}>
            Recommended For: The Janpath Street Market is reminiscent of Sarojini, but here, you’re more likely to find slightly more on-point, trendier clothes, from beautiful flowy pants and dark glasses to denim shirts and jumpsuits to sailor-print sneakers. You’ve got to bring your best bargaining game here.
            </p>
            <p style={{color:'white',
             display:'flex',
             flexDirection:'column',
             position:'absolute',
             left:'25%',
            top:'70%',
            fontWeight:'bolder',
           width:'45%',}}>
            Recommended For: Gujarati craftsmen and women selling brightly coloured bags, pillowcases, bed sheets, umbrellas, kurtas and shirts embroidered with mirrors and even more colour. There are some Afghani earrings and rings to look forward to as well! Take note, the market is in a lane right next to the metro station.
            </p>
        </div>
    )
}

export default Janpath
