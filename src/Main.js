import React from "react";
import './Main.css';
import wheatBasket from './images/wheat-basket.jpeg';
import rusticBread from './images/rustic-bread.png';
import wheatBread from './images/wheat-bread.png';
import breadRolls from './images/6-bread-rolls.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";

function Main() {
    
    return (
        <div className="main">
            <img className="main-img" src={wheatBasket} alt="Wheat Basket"/>
            <div className="main-details">
                <p className="main-details-header">Weekly<br/>
                    Bread Basket
                </p>
                <p className="main-details-description">Local, Fresh breads and baked goods. Toughtfully and<br/> 
                deliciously curated. Delivered safely to your doorstep.</p>
                <table className="table">
                    <tr>
                        <td className="bread"><img src={rusticBread} alt="Rustic Bread" className="rustic-bread"/><br/><h5>Rustic bread</h5></td>
                        <td className="bread"><img src={wheatBread} alt="Rustic Bread" className="rustic-bread"/><br/><h5>Wheat bread</h5></td>
                        <td className="bread"><img src={breadRolls} alt="Rustic Bread" className="rustic-bread"/><br/><h5>6 bread rolls</h5></td>
                        <td className="add-more bread"><FontAwesomeIcon icon={faCirclePlus} className="plus-icon"/><br/><h5>Add more</h5></td>
                    </tr>
                    <tr>
                        <td><hr /></td>
                        <td><FontAwesomeIcon icon={faWheatAwn} /></td>
                        <td><hr /></td>
                    </tr>
                    <tr className="subscription">
                        <p>500/- every 4 weeks</p>
                        <button type="submit" className="btn-subscribe">SUBSCRIBE</button>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Main;