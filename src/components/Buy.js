import  React from 'react'
const Buy = ({about, ratings, price, delievery, imageP, id}) => {
    return (
        <div style={{color:'white', fontWeight:'bolder', margin:'10px'}}>
        <p><img src={imageP} alt='' style={{//position: 'relative',
    //top:'20%',
    //left:'50%',
    width: '20%',
    //height: '20%',
    margin:'5px',
    border: '5px solid rgb(198, 130, 238)',
    borderRadius:' 20px 20px 20px 20px' }}/></p>
            <p>Description: {about}</p>
            <p>Ratings: {ratings}</p>
            <p>Price: {price}</p>
            <p>Delievered By: {delievery}</p>
            </div>
    )
}

export default Buy
