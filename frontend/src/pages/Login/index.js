import React, {useState} from 'react';
import './styles.css';

import Api from '../../services/api.js';

import { Button } from 'react-bootstrap';
import backImage from '../../assets/login_comp.png';
import boxImage from '../../assets/login_box.png';

var bodyStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + backImage + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };


  

function Login(){

    const [isWrong, setIsWrong] = useState(false);


    function handleLogin(e){
        e.preventDefault();
    }


    return(
        <div className="container" >
            <div className="background"style={bodyStyle}>

                <div className="formulario">
                    <form action="" className="form-container" onSubmit={handleLogin}>
                        <div className="campo">
                            <div className="linha-texto">Batalhão</div>
                            <input type="text" placeholder="Nome do Batalhão"  />                            
                        </div>

                        <div className="campo">
                            <div className="linha-texto">Senha</div>
                            <input type="text" placeholder="Password"  />                            
                        </div>

                        <button type="submit" class="btn-circle btn-login">Entrar</button>                    
                        
                    </form>
                </div>               
            </div>
           
        </div>
       
        
    );
}

export default Login;