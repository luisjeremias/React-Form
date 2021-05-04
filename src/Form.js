import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 350px;
  height: 550px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0px 0px 9px #999;
  form {
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      padding-top: 15px;
      font-size: 16px;
      color: #555;
    }
    a {
      text-decoration: none;
      color: #555;
      &:hover {
        color: #444;
      }
    }
    small {
      color: #ff3838;
    }
    button {
      width: 270px;
      height: 40px;
      background-color: #78ff5c;
      border: 1px solid #444;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      color: #444;
      cursor: pointer;
      &:hover {
        background-color: #65ff45;
      }
    }
  }
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f1f1f1;
  font-size: 23px;
  width: 100%;
  height: 50px;
  border-radius: 5px 5px 0px 0px;
  background-color: #444;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  input {
    width: 270px;
    height: 35px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    border: 0;
    outline: 0;
    transition:all ease 2s;
    &:focus {
      border: 1px solid #444;
    }
    
  }
`;
const Form = () =>{
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cPassword,setCPassword] = useState('');
  const [error,setError] = useState({});
  const handleSubmit = (e) =>{
e.preventDefault();
if(!name.trim()){
  setError({name:'Name is blank!'});
  return;
}
if (!email.trim()) {
  setError({ email: "Email is blank!" });
   return;
} else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
  setError({email:'E-Mail is not valid!'});
   return;
}
if(!password.trim()){
  setError({
    password:'Password is blank!'
  });
   return;
}

if(!cPassword.trim()){
  setError({cpassword:'Password is blank!'});
   return;
}else if(cPassword !== password){
  setError({cpassword:'The passwords not match!'});
   return;
}
setError({});
  }
  return (
    <>
      <Container>
        <Head>SIGN UP</Head>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <label>
              Name:
              <br />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="Name"
              ></input>
            </label>
            {error.name && <small>{error.name}</small>}
          </InputContainer>
          <InputContainer>
            <label>
              E-Mail:
              <br />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              ></input>
            </label>
            {error.email && <small>{error.email}</small>}
          </InputContainer>
          <InputContainer>
            <label>
              Password:
              <br />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
              ></input>
            </label>
            {error.password && <small>{error.password}</small>}
          </InputContainer>
          <InputContainer>
            <label>
              Confirm Password:
              <br />
              <input
                onChange={(e) => setCPassword(e.target.value)}
                value={cPassword}
                type="password"
                name="cpassword"
              ></input>
            </label>
            {error.cpassword && <small>{error.cpassword}</small>}
          </InputContainer>
          <button>SIGN UP</button>
          <h3>
            {" "}
            You have account? <a href="#">Loggin</a>
          </h3>
        </form>
      </Container>
    </>
  );
}

export default Form;