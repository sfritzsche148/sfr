import React, { useState } from 'react';
import './Home.css';
import { BsLaptop, BsCode, BsFillHouseDoorFill } from 'react-icons/bs';
import { AiOutlineMobile, AiFillShopping } from 'react-icons/ai';
import { FaDatabase } from 'react-icons/fa';
import { GrTechnology, GrCheckboxSelected } from 'react-icons/gr';
import Popup from '../Popup/Popup';


function Servicesection() {

    const [WebPopup, setWebPopup] = useState(false);
    const [ProgramPopup, setProgramPopup] = useState(false);
    const [WebDesignPopup, setWebDesignPopup] = useState(false); 
    const [PortalePopup, setPortalePopup] = useState(false); 
    const [DatabasePopup, setDatabasePopup] = useState(false); 
    const [ShopifyPopup, setShopifyPopup] = useState(false); 

  return (
    <div>
        <ul className='servlist1'>
            <li onClick={() => setWebPopup(true)}><BsLaptop />Professionelle Webentwicklung</li>
            <Popup trigger={WebPopup} setTrigger={setWebPopup}>
                <h3>Professionelle Webentwicklung</h3>
                <img className='popuppic' src="prototyp.png" alt="" />
                <h4><GrTechnology />Häufig verwendete Technologien in der Webentwicklung</h4>
                <ul>
                    <ol><GrCheckboxSelected/>React JS</ol>
                    <ol><GrCheckboxSelected/>HTML</ol>
                    <ol><GrCheckboxSelected/>CSS</ol>
                    <ol><GrCheckboxSelected/>Javascript</ol>
                    <ol><GrCheckboxSelected/>MySQL</ol>
                    <ol><GrCheckboxSelected/>PHP</ol>
                </ul>


                <ul>
                    <ol><GrCheckboxSelected/>React JS</ol>
                    <ol><GrCheckboxSelected/>HTML</ol>
                    <ol><GrCheckboxSelected/>CSS</ol>
                    <ol><GrCheckboxSelected/>Javascript</ol>
                    <ol><GrCheckboxSelected/>MySQL</ol>
                    <ol><GrCheckboxSelected/>PHP</ol>
                </ul>

                <ul>
                    <ol><GrCheckboxSelected/>React JS</ol>
                    <ol><GrCheckboxSelected/>HTML</ol>
                    <ol><GrCheckboxSelected/>CSS</ol>
                    <ol><GrCheckboxSelected/>Javascript</ol>
                    <ol><GrCheckboxSelected/>MySQL</ol>
                    <ol><GrCheckboxSelected/>PHP</ol>
                </ul>
                <p>Bei Interesse oder Fragen können sie uns gerne eine Anfrage schicken</p>
            </Popup>

            <li onClick={() => setProgramPopup(true)}><BsCode />Individuelle Programmierung</li>
            <Popup trigger={ProgramPopup} setTrigger={setProgramPopup}>
                <h3>Individuelle Programmierung</h3>
            </Popup>

            <li onClick={() => setWebDesignPopup(true)}><AiOutlineMobile />Responsive Webdesign & UX/UI</li>
            <Popup trigger={WebDesignPopup} setTrigger={setWebDesignPopup}>
                <h3>Responisive Webdesign & UI/UX</h3>
                <p></p>
            </Popup>

        </ul>
        <ul className='servlist'>
            <li onClick={() => setPortalePopup(true)}><BsFillHouseDoorFill />Webseiten & Portale</li>
            <Popup trigger={PortalePopup} setTrigger={setPortalePopup}>
                <h3>My Portale Popup</h3>
            </Popup>

            <li onClick={() => setDatabasePopup(true)}><FaDatabase />Datenbanken</li>
            <Popup trigger={DatabasePopup} setTrigger={setDatabasePopup}>
                <h3>My Datenbanken Popup</h3>
            </Popup> 

            <li onClick={() => setShopifyPopup(true)}><AiFillShopping />Shopify-Online Shop</li>
            <Popup trigger={ShopifyPopup} setTrigger={setShopifyPopup}>
                <h3>My Shopify Popup</h3>
            </Popup>
        </ul>
    </div>
  )
}

export default Servicesection;