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
                <p>Bei Interesse oder Fragen können sie uns gerne eine Anfrage schicken</p>
            </Popup>

            <li onClick={() => setProgramPopup(true)}><BsCode />Individuelle Programmierung</li>
            <Popup trigger={ProgramPopup} setTrigger={setProgramPopup}>
                <h3>Individuelle Programmierung</h3>
                <h4><GrTechnology/>In der Individuellen Programmierung wird häufig verwendet:</h4>
                <img className='popuppic' src="prototyp.png" alt="" />
                <ul>
                    <ol><GrCheckboxSelected/>React Native</ol>
                    <ol><GrCheckboxSelected/>Android Studio</ol>
                    <ol><GrCheckboxSelected/>XCode</ol>
                    <ol><GrCheckboxSelected/>Flutter</ol>
                </ul>
                <p>Bei Interesse oder Fragen können sie uns gerne eine Anfrage schicken</p>
            </Popup>

            <li onClick={() => setWebDesignPopup(true)}><AiOutlineMobile />Responsive Webdesign & UX/UI</li>
            <Popup trigger={WebDesignPopup} setTrigger={setWebDesignPopup}>
                <h3>Responisive Webdesign & UI/UX</h3>
                <h4><GrTechnology/>Häufig verwendete Software zum Designen:</h4>
                <img className='popuppic' src="prototyp.png" alt="" />
                <ul>
                    <ol><GrCheckboxSelected/>Figma</ol>
                    <ol><GrCheckboxSelected/>Adobe XD</ol>
                    <ol><GrCheckboxSelected/>Adobe Illustrator</ol>
                </ul>
                <p>Bei Interesse oder Fragen können sie uns gerne eine Anfrage schicken</p>
            </Popup>

        </ul>
        <ul className='servlist'>
            <li onClick={() => setPortalePopup(true)}><BsFillHouseDoorFill />Webseiten & Portale</li>
            <Popup trigger={PortalePopup} setTrigger={setPortalePopup}>
                <h3>Portale</h3>
                <h4><GrTechnology/>Häufig verwendete Technologien</h4>
                <img className='popuppic' src="prototyp.png" alt="" />
                <ul>
                    <ol><GrCheckboxSelected/>React Js</ol>
                    <ol><GrCheckboxSelected/>Flutter</ol>
                    <ol><GrCheckboxSelected/>HTML, Css</ol>
                    <ol><GrCheckboxSelected/>Javascript</ol>
                </ul>
                <p>Bei Interesse oder Fragen können sie uns gerne eine Anfrage schicken</p>
            </Popup>

            <li onClick={() => setDatabasePopup(true)}><FaDatabase />Datenbanken</li>
            <Popup trigger={DatabasePopup} setTrigger={setDatabasePopup}>
                <h3>Datenbanken</h3>
                <h4><GrTechnology/>Verwendete DBMS (DatenbankManagementSystem)</h4>
                <p>Bei Interesse oder Fragen können sie uns gerne eine Anfrage schicken</p>
                <img className='popuppic' src="prototyp.png" alt="" />
                <ul>
                    <ol><GrCheckboxSelected/>Microsoft Access</ol>
                    <ol><GrCheckboxSelected/>MySQL Workbench</ol>
                    <ol><GrCheckboxSelected/>Google Databases</ol>
                </ul>
                <p>Bei Interesse oder Fragen können sie uns gerne eine Anfrage schicken</p>
            </Popup> 

            <li onClick={() => setShopifyPopup(true)}><AiFillShopping />Shopify-Online Shop</li>
            <Popup trigger={ShopifyPopup} setTrigger={setShopifyPopup}>
                <h3>Shopify Online Shop</h3>
                <img className='popuppic' src="prototyp.png" alt="" />
                <h4><GrTechnology/>Programme:</h4>
                <ul>
                    <ol><GrCheckboxSelected/>Shopify</ol>
                    <ol><GrCheckboxSelected/>Plugins ihrer Wahl</ol>
                </ul>
                <p>Bei Interesse oder Fragen können sie uns gerne eine Anfrage schicken</p>
            </Popup>
        </ul>
    </div>
  )
}

export default Servicesection;