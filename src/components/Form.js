import React, { useState } from 'react';

const Form = ({about}) => {
  const [person, setPerson] = useState({ firstName: '', email: '', phone: '' ,address: ''});
  const [people] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const submitButton=()=>{
    console.log('hi')
  }

//  const history= useHistory()
/*  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.phone && person.address) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', phone: '', address: '' });
    }
  };*/
 // const submitButton=(event)=>{
   // 
     //console.log(`${about} bought`)
     //event.preventDefault()
  //}
  return (
    <>
      <article className='form' style={{ textAlign:'center',
      margin:'50px auto',border:'5px solid rgb(198, 130, 238)', borderRadius:'20px',
      width:'680px'
      }}>
        <form style={{padding:'5px'}}>
          <div className='form-control'>
            <label htmlFor='firstName' style={{fontWeight:'bolder',color:'rgb(198,130,238)'}}>Name  </label>
            <input style={{width:'35%', margin:'20px',border:'2px solid rgb(198,130,238)', borderRadius:'2px'}}
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email' style={{fontWeight:'bolder',color:'rgb(198,130,238)'}}>Email  </label>
            <input style={{width:'35%',margin:'20px',border:'2px solid rgb(198,130,238)', borderRadius:'2px'}}
              type='string'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='phone' style={{fontWeight:'bolder',color:'rgb(198,130,238)'}}>Phone  </label>
            <input style={{width:'35%', margin:'20px',border:'2px solid rgb(198,130,238)', borderRadius:'2px',
            }}
              type='string'
              id='phone'
              name='phone'
              value={person.phone}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
              <label htmlFor='address' style={{fontWeight:'bolder',color:'rgb(198,130,238)'}}>Address  </label>
              <input style={{width:'35%', margin:'20px',border:'2px solid rgb(198,130,238)', borderRadius:'2px'}}
              type='string' id='address' name='address' value={person.address} onChange={handleChange}/>
          </div>
          <button style={{border:'2px solid rgb(198,130,238)',borderRadius:'10px', cursor:
          'pointer', width:'10%', padding:'5px',
          fontWeight:'bolder',background:'aqua'}} type='submit' className='btn' onSubmit={()=> submitButton()}>
            Proceed
          </button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, firstName, email, phone, address } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{address}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Form
