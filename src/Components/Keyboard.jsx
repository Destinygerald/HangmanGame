const style = {
	wrapper: "grid grid-cols-5",
	wordContainer: "text-[18px] font-medium bg-transparent border-[2px] mb-[8px] ml-[8px] border-black border-solid h-[32px] w-[32px] text-center hover:bg-blue-300 hover:text-white",
	wordInactive: "text-[18px] bg-red text-white  opacity-30 font-medium bg-transparent border-[2px] mb-[8px] ml-[8px] border-black border-solid h-[32px] w-[32px] text-center",
	wordActive: "text-[18px]   font-medium bg-[#0033ff] text-white border-[2px] mb-[8px] ml-[8px] border-black border-solid h-[32px] w-[32px] text-center",
	cancel: "text-[18px]  opacity-30 font-medium bg-transparent border-[2px] mb-[8px] ml-[8px] border-black border-solid h-[32px] w-[32px] text-center"
}

const Keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] ;

const Keyboard = ({addLetters, guessedLetters, wordToGuess}) => {



	function checkWord(e){

		if(wordToGuess.includes(e) && guessedLetters.includes(e)){
			return style.wordActive
		}
		else if(!wordToGuess.includes(e) && guessedLetters.includes(e)){
			return style.wordInactive;
		}
		else if(!wordToGuess.split('').every((e) => guessedLetters.includes(e)) && guessedLetters.filter(e => !wordToGuess.includes(e)).length > 5 ){
			// console.log(wordToGuess, e)
			return style.cancel
		}
		else if(wordToGuess.split('').every((e) => guessedLetters.includes(e)) && guessedLetters.filter(e => wordToGuess.includes(e))){
			// console.log(wordToGuess, e)
			return style.cancel
		}
		else{
			return style.wordContainer
		}
	}

	function disableButton(e){
		if(guessedLetters.includes(e)){
			return true;
		}
		else if(!wordToGuess.split('').every((e) => guessedLetters.includes(e)) && guessedLetters.filter(e => !wordToGuess.includes(e)).length > 5 ){
			return true;
		}
		else if(wordToGuess.split('').every((e) => guessedLetters.includes(e)) && guessedLetters.filter(e => wordToGuess.includes(e))){
			// console.log(wordToGuess, e)
			return true;
		}

		else{
			return false;
		}
	}

	return(
		<div className={style.wrapper}>
			{
				Keys.map((key, idx) => (
					<button key={idx} className={checkWord(key)} onClick={()=>addLetters({key})} disabled={guessedLetters.includes({key})} disabled={disableButton({key})}>
						{key}
					</button>
				))
			}
		</div>
	)
}

export default Keyboard;
