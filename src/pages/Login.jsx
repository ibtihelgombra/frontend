// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  './Login.css'

const Login = () => {
  const [formData,setFormData] = useState({
    username :'',
    email:'',
    password:''
  }) 


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const changeHandler = (e) => {
    setFormData({...formData ,[e.target.name] : e.target.value })
  }
 

  const login = async () => {

    console.log('login function execute' , formData)
    let responseData ;
    await fetch ('http://localhost:4000/login' ,{
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
    
    <div className="login-container">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="password">Mot de passe </label>
          <input
            type="password"
            id="password"
            name='password'
            value={formData.password}
            onChange={changeHandler}
            required
          />
        </div>
        <button type="submit" onClick={()=> login()}>Se connecter</button>
         <p className="error"></p>
      </form>
      <p>Vous n'avez pas de compte ? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default Login;
