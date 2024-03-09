import React from 'react'
import balazs_profil from "../images/balazs_profil.jpg";
import NavBar from "../components/NavBar";
import "./panzio.css"

const Panzio = () => {
  return (
    <>
      <NavBar />
      <div className='panzio_box'>
        <h1>Panzio</h1>
        <div className='balazs_box clearfix'>
          <img src={balazs_profil} />
          <p>
            Családias környezetben, napi többszöri séta, nyáron hűsölés a patakban. 24 órás felügyelet, állatorvosi kapcsolatokkal.<br></br>
            Igény esetén kutyakozmetikai szolgáltatás is kérhető, kedvence szállítása is megoldható.<br></br>
            Lehetőséget biztositunk az elfoglalt gazdiknak, hogy “lepasszolják” a kedvencüket napközben, ilyenkor mi gondoskodunk róla, hogy a kutyus aktivan és hasznosan töltse a szabadidejét, kisebb-nagyobb csoportban labdázunk, sétálunk, medencézünk, lemegyünk a patakhoz vagy csak felügyeljük, hogy a kutyák közösen játszanak egy jót és fejlesszék a szociális készségeiket. Fáradt, jól lemozgatott és boldog kutyákat adunk vissza a nap végén.<br></br>
            Természetesen a sok móka mellett alapokat is elsajátítanak, mint a csoportos fektetès, ültetés, behívás...
          </p>
        </div>
      </div>
    </>
  )
}

export default Panzio