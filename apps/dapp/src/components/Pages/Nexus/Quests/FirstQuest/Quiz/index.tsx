import { useEffect, useState } from 'react';
import CollectSlide from './CollectSlide';
import FinalSlide from './FinalSlide';
import FirstSlide from './FirstSlide';
import { QuizQuestion, pickQuestions, QUIZ_QUESTIONS, QuizAnswer } from './questions';
import QuestionSlide from './QuestionSlide';

const NUMBER_OF_QUESTIONS = 10;

const PASSING_SCORE = 0.7;

type QuizAnswerState = {
  [key: string]: {
    answer: QuizAnswer;
    selectedAnswerIndex: number;
  };
};

const EMPTY_QUIZ_ANSWER_STATE: QuizAnswerState = {};

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([] as QuizQuestion[]);
  const [passed, setPassed] = useState(false);
  const [complete, setComplete] = useState(false);
  const [score, setScore] = useState(0);

  const [answers, setAnswers] = useState<QuizAnswerState>(EMPTY_QUIZ_ANSWER_STATE);

  useEffect(() => {
    setQuestions(pickQuestions(NUMBER_OF_QUESTIONS));
  }, []);

  const startQuizHandler = () => {
    setQuestionNumber(1);
  };

  const prevButtonHandler = () => {
    setQuestionNumber(questionNumber - 1);
  };

  const nextButtonHandler = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const submitButtonHandler = () => {
    console.debug(`---> Submit button clicked, calculating score`);
    const correctAnswers = Object.values(answers).filter((answer) => answer.answer.correct === true);
    setScore(correctAnswers.length / NUMBER_OF_QUESTIONS);
  };

  const quizAnswerHandler = (questionNumber: number, answer: QuizAnswer, selectedAnswerIndex: number) => {
    setAnswers({
      ...answers,
      [questionNumber]: {
        answer,
        selectedAnswerIndex,
      },
    });
  };

  const tryAgainButtonClickHandler = () => {
    // Reset state to beginning of quiz
    setComplete(false);
    setQuestions(pickQuestions(NUMBER_OF_QUESTIONS));
    setQuestionNumber(0);
    setAnswers(EMPTY_QUIZ_ANSWER_STATE);
  };

  useEffect(() => {
    console.debug(`---> User score: ${score}`);
    if (score >= PASSING_SCORE) {
      setPassed(true);
      setComplete(true);
    } else {
      setPassed(false);
      setComplete(true);
    }
  }, [score]);

  useEffect(() => {
    setComplete(false);
  }, []);

  return (
    <>
      {questionNumber === 0 && <FirstSlide startButtonClickHandler={startQuizHandler} />}
      {questionNumber > 0 && questionNumber <= NUMBER_OF_QUESTIONS && (
        <QuestionSlide
          key={`question${questionNumber}`}
          prevButtonClickHandler={prevButtonHandler}
          nextButtonClickHandler={nextButtonHandler}
          question={questions[questionNumber - 1]}
          questionNumber={questionNumber}
          totalQuestions={NUMBER_OF_QUESTIONS}
          answerHandler={quizAnswerHandler}
          initialSelectedAnswer={answers[questionNumber] && answers[questionNumber].selectedAnswerIndex}
        />
      )}
      {!complete && questionNumber > NUMBER_OF_QUESTIONS && (
        <FinalSlide backButtonClickHandler={prevButtonHandler} submitButtonClickHandler={submitButtonHandler} />
      )}
      {complete && <CollectSlide passed={passed} tryAgainButtonClickHandler={tryAgainButtonClickHandler} />}
    </>
  );
};

export default Quiz;