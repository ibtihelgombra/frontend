import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './siignup.css'
const Siignup = () => {
    const [formData,setFormData] = useState({
        username :'',
        email:'',
        password:''
      }) 

      const changeHandler = (e) => {
        setFormData({...formData ,[e.target.name] : e.target.value })
      }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add signup logic here
    };

    const signup = async () => {
        console.log('signup function execute',formData)
    
        let responseData ;
        await fetch ('http://localhost:4000/signup' ,{
          method:'POST',
          headers:{
            'Accept':'application/json',
             'Content-Type':'application/json'
          },
          body:JSON.stringify(formData),
    
        }).then((response)=> response.json()).then((data) => responseData = data)
    
        if(responseData.success){
          localStorage.setItem('auth-token',responseData.token)
          window.location.replace('/');
        }else{
          alert(responseData.error);
      
        }
    
    
      }
    
  
    return (
      <div className="signup-container">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="name"
              id="name"
              name='name'
              value={formData.name}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              value={formData.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name='password'
              value={formData.password}
              onChange={changeHandler}
              required
            />
          </div>
         
          <button type="submit" onClick={()=> signup()}>s'inscrire</button>
        </form>
        <p>Vous avez déjà un compte ? <Link to="/login">Se connecter</Link></p>
      </div>
    );
  };


export default Siignup;




