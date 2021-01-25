import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import boxImage from '../../assets/menu_box.png';

function Menu() {

    function clickMouth(mouth){
        console.log(mouth);
    }
   
    return(

        <div className="container" >
            <div className="box-menu">
                <div className="btn-bar">
                    <Link className="btn-mounth" to='/Mission/1' /> 
                    <Link className="btn-mounth" to='/Mission/2' /> 
                    <Link className="btn-mounth" to='/Mission/3' /> 
                    <Link className="btn-mounth" to='/Mission/4' />  
                    <Link className="btn-mounth" to='/Mission/5' /> 
                    <Link className="btn-mounth" to='/Mission/6' /> 
                    <Link className="btn-mounth" to='/Mission/7' /> 
                    <Link className="btn-mounth" to='/Mission/8' /> 
                    <Link className="btn-mounth" to='/Mission/9' /> 
                    <Link className="btn-mounth" to='/Mission/10' /> 
                    <Link className="btn-mounth" to='/Mission/11' /> 
                    <Link className="btn-mounth" to='/Mission/12' /> 
                </div>

            </div>
           
        </div>


    );

}

export default Menu;