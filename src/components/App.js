import logo from '../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className='left'>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time.<br/>
        Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </section>
      <section className='right'>
        <div className='blueText'>
          <p>Try is free 7 days then $20/mo. thereafter</p>
        </div>
        <form>
          <label>
            <input type="text" name="firstName" placeholder="First Name"></input>
          </label>
          <label>
            <input type="text" name="lastName" placeholder="Last Name"></input>
          </label>
          <label>
            <input type="email" name="email" placeholder="Email Address"></input>
          </label>
          <label>
            <input type="password" name="password" placeholder="Password"></input>
          </label>
          <input type="submit" value="Claim your free trial" />
          <p>By clicking the button you agreeing to our Terms and Services</p>
        </form>
      </section>
    </div>
  );
}

export default App;
