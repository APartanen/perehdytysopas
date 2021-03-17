import React from "react";
//import TextServices from './services/TextServices'
//import React, { useState, useEffect   } from 'react'
import Teksti from '../Teksti'

const Etusivu =() => {

//const [tekstit, setTekstit] = useState([])
//taulukoitu teksti. Ei tarvitse joka kerta käynnistää serveriä kun haluaa käynnistää projektin.
const teksti = [
  {id: 1,
    otsikko: "lorem ipsum dolor sit amet",
    alatekstit: [ 
    {id: 2,
                    teksti: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {id:3,
                    teksti: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    ]
  },{id: 2,
    otsikko: "lorem ipsum dolor sit amet",
    alatekstit: [ 
    {id: 3,
                    teksti: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {id:4,
                    teksti: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    ]
  }
]

/** useEffect hakee tekstit db.jsonista, lisää import React, { useState, useEffect   } from 'react' 
useEffect(() => {      
TextServices
.getTekstit()      
.then(response => {      
  setTekstit(response.data)    
})
}, [])
*/

    return (
      <div className="align-middle">
        <h1>Etusivu</h1>
        <Teksti tekstit = {teksti} />
      </div>
    );
  
}

export default Etusivu;
