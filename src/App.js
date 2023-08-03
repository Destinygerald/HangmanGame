import Hangman from "./Components/Hangman";
import WordBox from "./Components/WordBox";
import Keyboard from "./Components/Keyboard";
import { useState, useEffect } from "react";
import './App.css';
import Word from "./Components/Static";

const style = {
  wrapper: "w-full flex justify-center h-screen py-[40px]",
  content: "flex flex-col mx-auto mx-0 space-y-[40px] items-center",
  middle: "self-stretch justify-center",
  text: "text-[16px] font-medium"
}

function App() {

  const [wordToGuess, setWordToGuess] = useState(Word[Math.round(Math.random() * Word.length - 1)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  
  useEffect(() => {
    const handler = (e) => {
      const key = e.key;

      if(!key.match(/^[a-zA-Z]$/)) return;
      if(guessedLetters.filter(key => !wordToGuess.includes(key)).length >= 6) return;
      if (wordToGuess.split('').every((key) => guessedLetters.includes(key))) return;
           
      e.preventDefault();
      addGuessedLetter(e);
    }
    //console.log("key.toUpperCase()");

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  },[guessedLetters])

  function addGuessedLetter(e){
    let key = e.key.toUpperCase();
    if(guessedLetters.includes(key)){
      return;
    }
    console.log(key)
    setGuessedLetters([...guessedLetters, key])
  }

  function win(){
    if (wordToGuess.split('').every((e) => guessedLetters.includes(e))){
      return ''
    }
    else{
      return 'hidden';
    }
  }

  function lose(){
    if (guessedLetters.filter(e => !wordToGuess.includes(e)).length >= 6 ){
      return ''
    }
    else{
      return 'hidden';
    }
  }  

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.text}>
          <span className={win()}>You won, refresh to play again</span>
          <span  className={lose()}>You lost, refresh to try again</span>
          </div>
        <Hangman guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <div className={style.middle}>
          <WordBox wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
        </div>
        <div className={style.middle}>
          <Keyboard addLetters={addGuessedLetter} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        </div>
      </div>
    </div>
  );
}

export default App;