import React from 'react'

const Familiar = () => {
  return (
    <section className='mainHome__infoFamilia'>
    <div className='mainHome__infoFamiliaContainer container'>
        <h2>¿Sufre de violecia doméstica?</h2>
        <p>Elabore un plan de seguridad por si la situación de violencia empeorase para usted o sus hijos. Por ejemplo: </p>
        <ul className='mainHome__infoFamiliaBox'>
            <li>Localice a un vecino, amigo, conocido, compañero de trabajo o un refugio al que acudir en caso de que tenga que abandonar su casa de forma inmediata.</li>
            <li>Planifique cómo salir de casa de forma segura y cómo llegar a ese lugar previsto (por ejemplo, el transporte).</li>
            <li>Tenga preparadas unas pocas cosas básicas (por ejemplo, documentos de identidad, teléfono, dinero, medicamentos y ropa) y una lista de números de teléfono para emergencias.</li>
            <li>Si es posible, establezca una forma secreta de comunicarse con un vecino de confianza para que pueda venir en su ayuda en caso de emergencia.</li>
        </ul>
    </div>
    </section>
  )
}

export default Familiar