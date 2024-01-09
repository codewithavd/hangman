import { useCallback, useEffect, useState } from 'react'
import words from "./wordList.json"
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import './App.css'

function App() {
  function getWord(){
    return words[Math.floor(Math.random() * words.length)]
  
  }
  const[wordToGuess ,setWordToGuess ] = useState(getWord())

  const[guessedLetters, setGuessedLetters] = useState<string[]>([]);
const incorrecterLetters = guessedLetters.filter( letter => !wordToGuess.includes(letter))

const isLoser = incorrecterLetters.length >= 6
const isWinner = wordToGuess.split("").every(letter=> guessedLetters.includes(letter))

const addGuessedLetters = useCallback((letter:string) => {
  if(guessedLetters.includes(letter) || isWinner || isLoser)return 

  setGuessedLetters(currentLetters =>[...currentLetters,letter])

},[guessedLetters,isWinner,isLoser])

useEffect(()=> {
const handler = (e:KeyboardEvent)=>{
  const key = e.key
  if(!key.match(/^[a-z]$/)) return 

  e.preventDefault()
  addGuessedLetters(key)
}
document.addEventListener('keypress',handler)
return()=>{
  document.removeEventListener('keypress',handler)
}
},[guessedLetters]) 

useEffect(()=> {
const handler = (e:KeyboardEvent)=>{
  const key = e.key
  if(key !== "Enter") return 

e.preventDefault()
setGuessedLetters([])
  setWordToGuess(getWord()) }
document.addEventListener('keypress',handler)
return()=>{
  document.removeEventListener('keypress',handler)

}},[]) 


  return (
   <>
   <div className="mainPage">
   <h1 className='titleGame'>
    Welcome to hangman game.
    </h1>

    {isWinner && "winner! Emter to try again" }
    {isLoser && "Nice try - Enter to try again"}
    <HangmanDrawing numberOfGuesses = {incorrecterLetters.length}/>
    <HangmanWord 
    reveal={isLoser}
    wordToGuess={wordToGuess} guessedLetters={guessedLetters}/>
    <div style={{alignSelf:"stretch"}}>

    <Keyboard 
    disable = {isWinner || isLoser}
    activeLetters = {guessedLetters.filter(letter =>{
      wordToGuess.includes(letter)
    })}
    inactiveLetters = {incorrecterLetters}
    addGuessedLetters= {addGuessedLetters}
    />
    </div>
    </div>
   </>
  )
}

export default App
