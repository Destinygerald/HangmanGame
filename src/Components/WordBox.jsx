const style = {
	wrapper: "flex w-full",
	wordContainer: "text-[20px] font-bold bg-transparent border-b-[3px] ml-[8px] border-b-black border-b-solid h-[32px] w-[32px] text-center",
	wordContainer2: "text-red-700",
	//wordUnguessed: "text-[20px] text-opacity-0 text-blue-800 font-bold bg-transparent border-b-[3px] ml-[8px] border-b-black border-b-solid h-[32px] w-[32px] text-center"
}



const WordBox = ({wordToGuess, guessedLetters}) => {

	const word = wordToGuess.split('')

	function wordLimit(e){
		// console.log(word)
		// console.log(word.includes(e))
		// console.log(guessedLetters.filter((e) => !word.includes(e.word)) );
		if(!wordToGuess.split('').every((e) => guessedLetters.includes(e)) && guessedLetters.filter(e => !wordToGuess.split('').includes(e)).length >= 6 )
		{
			return style.wordContainer2;
		}
		else if(guessedLetters.includes(e.word)){
			return '';
		}
		else{
			return 'hidden';
		}
	}


	return(
		<div className={style.wrapper}>
			{ wordToGuess.split('').map((word, idx) => (
					<div className={style.wordContainer} key={idx}>
						<span className={wordLimit({word})}> {word} </span>
					</div>
			))
			}
		</div>
	)
}

export default WordBox;
