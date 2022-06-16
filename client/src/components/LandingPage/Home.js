import React, { state, onSubmitClick, setState, Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import axios from "axios";
import Servicesection from './Servicesection';


class Home extends Component{
render() {
  state = {
    name: "SebiTest2",
    mail: "",
    nachricht: "",
  }


  onSubmitClick = () => {
    axios.post('http://localhost:5000/addAnfrage', {
      name: state.Name
    })
  }
  

  return (
    <div className='homepage'>
        <div className="landingsection">
            <img 
              className='landingpicture'
              src="./prototyp.png"
              alt=""
            />
        </div>
        <div className="servicessection">
          <h2 className='servheader'>PROGRAMMIERUNG & WEBENTWICKLUNG</h2>
          <Servicesection /> 
        </div>
        <div className='exampleproducts'>
          <h2 className='productheader'>Beispiel Produkte</h2>
          <canvas className='canv'></canvas>
          <canvas className='canv'></canvas>
          <canvas className='canv'></canvas>
          <canvas className='canv'></canvas>
        </div>
        <div className='formsection'>
         
            <input className='input' type="text" placeholder='Name*' value={state.Name} onChange={e => setState({
              name: e.target.value
            })} />
            <br />
            <input className='input' type="email" placeholder='E-Mail*' />
            <br />
            <textarea className='input' type="text" placeholder='Nachricht*' />
            <br />
             <input className='input' type="checkbox" /> 
             <p className='agbtext'>Hiermit bestätige ich das ich die <Link to='/agb'>AGBs</Link> gelesen habe.</p>
             <br />
            <button className='butin' onClick={() => onSubmitClick()}>Submit</button>
            <p>Wenn sie Fragen in der Webenticklung und Programmierung haben helfen wir ihnen gerne weiter.</p>
            <p>Nutzeh Sie unserer Kontaktformular für ein kostenloses Angebot.</p>
        </div>
        <div className="newseventsectipon">
          <h2 className='newsheader'>News & Events</h2>
          <button className='evbtn'>Events</button>
           <Link to="/blog"><button className='evbtn'>Blog</button></Link>
        </div>
    </div>
  )
}
}

export default Home;