import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <nav>Meghívó</nav>
    <header>
      <h3>Kedves Testvérek, Barátok, Ismerősök!</h3>
      <h2>Szeretettel meghívunk benneteket az Egerszegi Keresztény Gyülekezet szervezésében megrendezésre kerülő istentiszteletre</h2>
    </header>
    <main>
      <section>
        <div>
          <h3>Vendégszolgáló</h3>
          {/* <h5>igehirdető</h5> */}
          <h1>Piszter Ervin</h1>
          <h6>Budapesti Autonóm Gyülekezet</h6>
        </div>
        <div>
          <img src="piszter_ervin3.jpg" width="400" alt="Piszter Ervin" />
        </div>
      </section>

      <section>
        <div>
          <h4>Időpont:</h4>
          <p>2023.szeptember 10. (vasárnap) 14:00</p>
          <h4>Az istentisztelet helye:</h4>
          <p>Zalaegerszeg, Závodszky István utca 1.</p>
          <p>(A volt nyomda irodáinak épülete.)</p>
        </div>
        <iframe src="https://www.google.com/maps/d/embed?mid=1nTBFfb81jiWnf4d_ts5xGph6yhtx14A&ehbc=2E312F" max-width="640" height="480"></iframe>
      </section>
    </main>

    <footer>
      <div id="footer-wrapper">
        <p>Azonképen sokan egy test vagyunk a Krisztusban, egyenként pedig egymásnak tagjai.</p>
        <p>Róm 12:5</p>
      </div>
    </footer>
    </>
  )
}

export default App
