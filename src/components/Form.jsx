import { useState } from "react";
import { useEffect } from "react";

const Form = ({login}) =>{

    const [userData,setuserData] = useState({
        email:'',
        password: ''
    })

    const handleChange= (event)=>{
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        })
     }

     const [errors,seterrors] = useState('')

     const validate = () => {
        if(userData.email.length > 35)seterrors("muchos caracteres")
        if(userData.email.length < 1)seterrors("ningun caracter")
        if (/\S+@\S+\.\S+/.test(userData.email)) {
            seterrors("");
        } else {
            seterrors("El email es invalido");
        }

        
      };
      useEffect(()=>{
        validate()
     }, [userData])

      const handlerSubmit = (event)=>{
        event.preventDefault();
       login(userData)
       
     };


        return(
            <form onSubmit={handlerSubmit}>
                <label>email</label>
                <input value={userData.email} type='text' name='email' onChange={handleChange} autoComplete="off" minlength="4"></input>
                {errors !== '' ? <p>{errors}</p> : ''}

                <label>password</label>
                <input value={userData.password} type='password' name='password' onChange={handleChange} pattern="[a-zA-Z0-9]+" minlength="4" maxlength="10"></input>
                <button type="submit" disabled={!userData.email}>enviar</button>
            </form>
        )
};
export default Form