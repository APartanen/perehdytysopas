
import React from 'react'
import Otsikko from './Otsikko'
import Alateksti from './Alateksti'

const Teksti = (props) => {
const tekstit = props.tekstit


return ( 

<div>

{tekstit.map(teksti =>
  <div key = {teksti.id}> 
    
  <Otsikko otsikko={teksti.otsikko}/>
  <Alateksti alateksti = {teksti.alatekstit}/>
  </div>
)}
  

</div>










)
}
export default Teksti