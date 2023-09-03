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
      <h2>Szeretettel meghívunk benneteket erre a Zalaegerszegi Keresztény Gyülekezet szervezésében megrendezésre kerülő eseményre</h2>
    </header>
    <main>
      <section>
        <div>
          <h3>Istentisztelet vendég szolgálóval</h3>
          <h5>igehirdető</h5>
          <h1>Piszter Ervin</h1>
          <h6>Budapesti Autonóm Gyülekezet</h6>
        </div>
        <div>
          <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/359723062_631191639114481_7049483367813628629_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=gMnTTtH6cnAAX9AAJlb&_nc_ht=scontent-vie1-1.xx&oh=00_AfBqI4-GURpZPERf36Aky4VDm2IuDEGi3XLrA-B4IbWG2A&oe=64F7FE0F" width="300" alt="Piszter Ervin" />
        </div>
      </section>

      <section>
        <div>
          <h4>Időpont:</h4>
          <p>2023.szeptember 10. (vasárnap) 14:00</p>
          <h4>Az istentistelet helye:</h4>
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
