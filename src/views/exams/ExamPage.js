import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import '../../assets/css/examStyle.css'
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import {questions} from "./questions.js";


// const questions = useState();
const dashboardRoutes = []
const totalExamQuestions = 36

let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions


class Exams extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      questionNumber : this.state && this.state.questionNumber != 1 ? this.state.questionNumber : 1, //holds the current question number
      playerScore : this.state && this.state.playerScore ? this.state.playerScore : 0 , //holds the player score
      wrongAttempt : this.state && this.state.wrongAttempt ? this.state.wrongAttempt : 0, //amount of wrong answers picked by player
      indexNumber : this.state && this.state.indexNumber ? this.state.indexNumber : 0 ,//will be used in displaying next question
    };
    this.handleNextQuestion = this.handleNextQuestion.bind(this)
    this.closeScoreModal = this.closeScoreModal.bind(this)
  }

  componentDidMount() {
    this.NextQuestion(0);
  }

  render() {
    return (<div>
      <Header
        color='transparent'
        routes={dashboardRoutes}
        brand='Techno Powers'
        rightLinks={<HeaderLinks />}
        absolute
        changeColorOnScroll={{
          height: 400,
          color: "white",
      }}
      />
      <Parallax filter small image={require("assets/img/AR0035-pic3.jpg")}>
      </Parallax>
      <div style={{
        zIndex: '3',
        position: 'relative',
        background: '#FFFFFF',
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
          "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
         }}>
        <main>
          <h2>ICDL الإمتحان التجريبي - الرخصة الدولية لقيادة الحاسوب</h2>
            {/* <!-- creating a modal for when quiz ends --> */}
            <div className="modal-container" id="score-modal">
    
                <div className="modal-content-container">
    
                    <h1>إنتهاء الإمتحان</h1>
    
                    <div className="grade-details">
                        
                        <p>عدد الإجابات الخاطئة <span id="wrong-answers"></span></p>
                        <p>عدد الإجابات الصحيحة <span id="right-answers"></span></p>
                        <p>النتيجة<span id="grade-percentage"></span></p>
                        <p ><span id="remarks"></span></p>
                    </div>
    
                    <div className="modal-button-container">
                        <button onClick={this.closeScoreModal}>متابعة</button>
                    </div>
    
                </div>
            </div>
            {/* <!-- end of modal of quiz details--> */}
    
            <div className="game-quiz-container">
    
                <div className="game-details-container">
                    <h1>النتيجة <span id="player-score"></span> {this.state.playerScore} / {totalExamQuestions}</h1>
                    <h1>السؤال <span id="question-number"></span> {this.state.questionNumber} / {totalExamQuestions}</h1>
                </div>
    
                <div className="game-question-container">
                    <h1 id="display-question"></h1>
                </div>
    
                <div className="game-options-container">
    
                   <div className="modal-container" id="option-modal">
    
                        <div className="modal-content-container">
                             <h1>الرجاء اختيار سؤال</h1>
    
                             <div className="modal-button-container">
                                <button onClick={this.closeOptionModal}>المتابعة</button>
                            </div>
    
                        </div>
    
                   </div>
    
                    <span>
                        <input type="radio" id="option-one" name="option" className="radio" value="optionA" />
                        <label htmlFor="option-one" className="option" id="option-one-label"></label>
                    </span>
    
    
                    <span>
                        <input type="radio" id="option-two" name="option" className="radio" value="optionB" />
                        <label htmlFor="option-two" className="option" id="option-two-label"></label>
                    </span>
    
    
                    <span>
                        <input type="radio" id="option-three" name="option" className="radio" value="optionC" />
                        <label htmlFor="option-three" className="option" id="option-three-label"></label>
                    </span>
    
    
                    <span>
                        <input type="radio" id="option-four" name="option" className="radio" value="optionD" />
                        <label htmlFor="option-four" className="option" id="option-four-label"></label>
                    </span>
    
    
                </div>
    
                <div className="next-button-container">
                    <button onClick={this.handleNextQuestion}>السؤال التالي</button>
                </div>
    
            </div>
        </main>
      </div>
      </div>)
  }
  handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10 questions per session
    while (shuffledQuestions.length <=  totalExamQuestions) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
  }
  // function for displaying next question in the array to dom
  //also handles displaying players and quiz information to dom
  NextQuestion(index) {
    this.handleQuestions()
    const currentQuestion = shuffledQuestions[index] 
    console.log(currentQuestion,"currentQuestion",this.state.questionNumber)
    // document.getElementById("question-number").innerHTML = this.state.questionNumber
    // document.getElementById("player-score").innerHTML = this.state.playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
  }

  checkForAnswer() {
      const currentQuestion = shuffledQuestions[this.state.indexNumber] //gets current Question 
      const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
      const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
      let correctOption = null

      options.forEach((option) => {
          if (option.value === currentQuestionAnswer) {
              //get's correct's radio input with correct answer
              correctOption = option.labels[0].id
          }
      })

      //checking to make sure a radio input has been checked or an option being chosen
      if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
          document.getElementById('option-modal').style.display = "flex"
      }

      //checking if checked radio button is same as answer
      options.forEach((option) => {
          if (option.checked === true && option.value === currentQuestionAnswer) {
              document.getElementById(correctOption).style.backgroundColor = "lime"
              this.setState((prevState, props) => ({
                playerScore: prevState.playerScore + 1, //adding to player's score
                indexNumber: prevState.indexNumber + 1 //adding 1 to index so has to display next question..
              })); 
              //set to delay question number till when next question loads
              setTimeout(() => {
                this.setState((prevState, props) => ({
                  questionNumber: prevState.questionNumber + 1, 
                })); 
              }, 1000)
             
          }

          else if (option.checked && option.value !== currentQuestionAnswer) {
              const wrongLabelId = option.labels[0].id
              document.getElementById(wrongLabelId).style.backgroundColor = "#FF4433"
              document.getElementById(correctOption).style.backgroundColor = "lime"
              //adds 1 to wrong attempts 
              this.setState((prevState, props) => ({
                wrongAttempt: prevState.wrongAttempt + 1, //adding to player's score
                indexNumber: prevState.indexNumber + 1 //adding 1 to index so has to display next question..
              }), () => {
                //set to delay question number till when next question loads
                setTimeout(() => {
                  this.setState((prevState, props) => ({
                    questionNumber: prevState.questionNumber + 1, 
                  })); 
                }, 1000)
              })
          }
      })
  }
  //called when the next button is called
  handleNextQuestion() {
    this.checkForAnswer() //check if player picked right or wrong option
    this.unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (this.state.indexNumber < totalExamQuestions) {
            //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            this.NextQuestion(this.state.indexNumber)
        }
        else {
            this.handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        this.resetOptionBackground()
    }, 1000);
  }

  //sets options background back to null after display the right/wrong colors
  resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
  }

  // unchecking all radio buttons for next question(can be done with map or foreach loop also)
  unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
  }

  // function for when all questions being answered
  handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (this.state.playerScore <= 26) {
        remark = "للأسف لم تنجح ، حاول مرة أخرى"
        remarkColor = "#FF4433"
    }
    
    else if (this.state.playerScore >= 27) {
        remark = "ممتاز ، لقد نجخت في الإمتحان"
        remarkColor = "green"
    }
    const playerGrade = (this.state.playerScore / totalExamQuestions) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = this.state.wrongAttempt
    document.getElementById('right-answers').innerHTML = this.state.playerScore
    document.getElementById('score-modal').style.display = "flex"

  }
  //closes score modal, resets game and reshuffles questions
  closeScoreModal() {
    // setState() is asynchronous
    this.setState({
      questionNumber : 1, //holds the current question number
      indexNumber: 0, //will be used in displaying next question
      wrongAttempt : 0, //amount of wrong answers picked by player
      playerScore : 0 //will be used in displaying next question
    },() => {
      shuffledQuestions = []
      this.NextQuestion(this.state.indexNumber)
      document.getElementById('score-modal').style.display = "none"
    });
 
  }

  //function to close warning modal
  closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
  }

}


export default Exams;