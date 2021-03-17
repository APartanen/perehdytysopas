
import React from 'react'


const Alateksti = (props) => {

 
    const alateksti = props.alateksti
    



return ( 

<div>
{alateksti.map(teksti =>
  <p key={teksti.id}>{teksti.teksti}</p>
)}

</div>


)
}
export default Alateksti