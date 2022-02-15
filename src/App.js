import './App.css';
import beach from './beach3.png';

function App() {
  return (
    <div className="App">
      <div className="blender__div">
        <img className="blender__image" alt="beach" src={beach} />
      </div>

      <div className="message__div">
        <h1 className="header__h1">
          Happy Valentines Day, 써니!
        </h1>
        <p className="content__p">
          I know you'd rather get letters than receive flowers so instead of sending you a postcard or a traditional letter, I made a website instead (I'm playing to my strengths lol).
        </p>
        <p className="content__p">
        I hope you're doing well in Las Vegas. I'm sure you're still having so much fun despite how busy you are. Are you still icing and taping your ankle? I'm still worried that I made you walk too much during your visit.
        </p>
        <p className="content__p">
        Only a month or so before we go on a date again! Can't wait to go to the beach with you. I miss you!
        </p>
        <p className="content__p">
          Dom
        </p>
        <p className="content__p">
          P.S. I was tempted to write all this in Korean but Google Translate is too formal. Therefore, not cool lol. See you soon!
        </p>
      </div>
    </div>
  );
}

export default App;
