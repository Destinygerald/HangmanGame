const style = {
	wrapper: "relative",
	bar1: "h-[5px] bg-black w-[100px]",
	bar2: "h-[250px] bg-black w-[5px]",
	bar3: "h-[5px] bg-black w-[150px] absolute left-[-80px]",
	bar4: "h-[20px] bg-black w-[5px] absolute top-0 left-[100px]",
	head: "bg-transparent border-solid border-[5px] border-black h-[40px] w-[40px] rounded-full absolute left-[82.5px] top-[20px]",
	body: "h-[70px] bg-black w-[5px] absolute left-[100px] top-[60px]",
	handL: "h-[5px] w-[50px] bg-black absolute left-[50px] top-[70px] rotate-45 origin-bottom-right",
	handR: "h-[5px] w-[50px] bg-black absolute left-[105px] top-[70px] origin-bottom-left rotate-[-45deg]",
	legL: "h-[5px] w-[50px] bg-black absolute left-[55px] top-[125px] rotate-[-60deg] origin-bottom-right",
	legR: "h-[5px] w-[50px] bg-black absolute left-[100px] top-[125px] rotate-[60deg] origin-bottom-left"
}

const HEAD = (	<div className={style.head} key="head" />	)
const TORSO = (	<div className={style.body} key="torso" />	)
const HAND_L = ( <div className={style.handL} key="left_hand" /> )
const HAND_R = ( <div className={style.handR} key="right_hand" /> )
const LEG_L = (	<div className={style.legL} key="left_leg" />	)
const LEG_R = (	<div className={style.legR} key="right_leg" />	)

const FULL_BODY = [HEAD, TORSO, HAND_L, HAND_R, LEG_L, LEG_R];


const Hangman = ({wordToGuess, guessedLetters}) => {


	return(
		<div className={style.wrapper}>
			<div className={style.bar1} />
			<div className={style.bar2} />
			<div className={style.bar3} />
			<div className={style.bar4} />
			{	
				FULL_BODY.slice(0,(guessedLetters.filter(word => !wordToGuess.includes(word)).length))
			} 
		</div>
	)
}

export default Hangman;