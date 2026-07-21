import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Check, X, Trophy, RotateCcw, Sparkles } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton } from "./ResponsiveSection";
import { useQuiz } from "./useDynamicData";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is Yogesh's primary area of expertise?",
    options: ["Web Development", "Data Science & AI", "Mobile Apps", "Cloud Computing"],
    correct: 1,
  },
  {
    id: 2,
    question: "Where did Yogesh complete his BSc in IT?",
    options: ["IIT Delhi", "DSVV Haridwar", "MIT Chennai", "BITS Pilani"],
    correct: 1,
  },
  {
    id: 3,
    question: "What is one of Yogesh's research interests?",
    options: ["Blockchain", "LLMs & RAG & Vision", "Quantum Computing", "Robotics"],
    correct: 1,
  },
  {
    id: 4,
    question: "What tool did Yogesh use for YOLOv8 research?",
    options: ["Google Cloud AI", "Microsoft Azure AI", "AWS SageMaker", "IBM Watson"],
    correct: 1,
  },
  {
    id: 5,
    question: "What is Yogesh's current role in 2026?",
    options: ["Software Engineer", "Data Scientist", "Lecturer @ Haridwar University", "Research Director"],
    correct: 2,
  },
];

export function Quiz() {
  const { score, attempts, saveScore, resetQuiz } = useQuiz("yogi_quiz");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = QUESTIONS[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);

    // Delay before next question
    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Quiz complete
        const finalScore = isCorrect ? score + 1 : score;
        saveScore(finalScore);
        setQuizComplete(true);
      }
    }, 1500);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizComplete(false);
  };

  return (
    <ResponsiveSection
      id="quiz"
      title="How Well Do You Know Yogi?"
      subtitle="Test your knowledge with this fun quiz!"
    >
      <div className="max-w-2xl mx-auto">
        <ResponsiveCard>
          {quizComplete ? (
            // Quiz Complete
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 sm:py-8"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gold/20 grid place-items-center mx-auto mb-4 sm:mb-6">
                <Trophy className="w-8 sm:w-10 h-8 sm:h-10 text-gold" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gradient mb-2">
                Quiz Complete!
              </h3>
              <p className="text-muted-foreground mb-6">
                You scored{" "}
                <span className="font-bold text-foreground">
                  {isCorrect ? score + 1 : score}
                </span>{" "}
                out of {QUESTIONS.length}
              </p>
              
              {attempts > 0 && (
                <p className="text-sm text-muted-foreground mb-6">
                  Best score: {score} | Attempts: {attempts}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <ResponsiveButton onClick={handleRestart}>
                  <RotateCcw className="w-4 h-4 mr-2 inline" />
                  Play Again
                </ResponsiveButton>
                <ResponsiveButton variant="secondary" onClick={resetQuiz}>
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Reset Score
                </ResponsiveButton>
              </div>
            </motion.div>
          ) : (
            // Question View
            <div>
              {/* Progress */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {QUESTIONS.length}
                </span>
                <span className="text-sm font-medium text-gold">
                  Score: {score}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 sm:h-2 rounded-full bg-secondary overflow-hidden mb-6 sm:mb-8">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple to-pink"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                    {question.question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3">
                    {question.options.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      const isCorrectAnswer = index === question.correct;
                      const showCorrect = showResult && isCorrectAnswer;
                      const showWrong = showResult && isSelected && !isCorrectAnswer;

                      return (
                        <motion.button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          disabled={selectedAnswer !== null}
                          className={`
                            w-full relative overflow-hidden rounded-xl p-3 sm:p-4 text-left transition-all
                            ${!selectedAnswer 
                              ? "hover:bg-secondary/70 cursor-pointer" 
                              : "cursor-default"
                            }
                            ${showCorrect ? "bg-green-500/20 ring-2 ring-green-500" : ""}
                            ${showWrong ? "bg-destructive/20 ring-2 ring-destructive" : ""}
                            ${isSelected && !showResult ? "ring-2 ring-primary" : ""}
                          `}
                          whileHover={!selectedAnswer ? { scale: 1.01 } : {}}
                          whileTap={!selectedAnswer ? { scale: 0.99 } : {}}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`
                              w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium
                              ${showCorrect ? "bg-green-500 text-white" : ""}
                              ${showWrong ? "bg-destructive text-white" : ""}
                              ${!showResult && isSelected ? "bg-primary text-white" : ""}
                              ${!isSelected && !showResult ? "bg-secondary" : ""}
                            `}>
                              {showCorrect ? (
                                <Check className="w-4 h-4" />
                              ) : showWrong ? (
                                <X className="w-4 h-4" />
                              ) : (
                                String.fromCharCode(65 + index)
                              )}
                            </div>
                            <span className="text-sm sm:text-base">{option}</span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </ResponsiveCard>
      </div>
    </ResponsiveSection>
  );
}