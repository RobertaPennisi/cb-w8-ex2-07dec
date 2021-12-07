import rpMonogram from './rpMonogram.jpg';
import './App.css';

function App() {
  return (
    
      <body>
        <header className="App-header">
          <img src={rpMonogram} className="App-logo" alt="logo" />
          <h1>Roberta Pennisi</h1>
        </header>
        <main>

          <div className="App-Description">
            <h2>Descrizione</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <div className="App-Boxes">

              <div className="App-Box">
                <h2>Experience</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>

              <div className="App-Box">
                <h2>Languages</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>

              <div className="App-Box">
                <h2>Hobbies</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>

          </div>

          <div className="App-Form">
            <h2>Contacts</h2>
            <form>
              <label for="name">Name</label>
              <input type="text" placeholder="Name" name="name" id="name"></input>
              <label for="surname">Surname</label>
              <input type="text" placeholder="Surname" name="surname" id="surname"></input>
              <label for="message">Message</label>
              <textarea placeholder="Scrivi qui il tuo messaggio" name="message" id="message"></textarea>
              <button>Submit</button>
            </form>
          </div>

        </main>
        <footer>
          <a href="mailto:info@robertapennisi.it">info@robertapennisi.it</a>
        </footer>
      </body>

  );
}

export default App;
