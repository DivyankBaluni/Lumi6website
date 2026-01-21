
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: number;
  question: string;
  options: string[];
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "During a team meeting, a colleague criticizes your proposal. How do you typically respond?",
    options: [
      "I immediately defend my idea and explain why it's correct",
      "I listen to the feedback, ask clarifying questions, and consider their perspective",
      "I feel hurt and withdraw from the conversation",
      "I dismiss their criticism as irrelevant"
    ],
    category: "Self-Awareness"
  },
  {
    id: 2,
    question: "When facing a tight deadline, you notice your stress levels rising. What do you do?",
    options: [
      "Push through and work longer hours",
      "Take a moment to breathe, prioritize tasks, and communicate with your team",
      "Panic and feel overwhelmed",
      "Ignore the stress and hope it goes away"
    ],
    category: "Self-Management"
  },
  {
    id: 3,
    question: "A team member seems upset but hasn't said anything. How do you approach this?",
    options: [
      "Wait for them to tell me what's wrong",
      "I notice their body language and check in with them privately",
      "Ignore it - it's not my problem",
      "Ask them directly in front of the team"
    ],
    category: "Social Awareness"
  },
  {
    id: 4,
    question: "Two team members are having a conflict. Your role is to:",
    options: [
      "Stay out of it",
      "Help them understand each other's perspectives and find common ground",
      "Take sides with the person I agree with",
      "Tell them to resolve it themselves"
    ],
    category: "Relationship Management"
  }
];

const InteractiveAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [scores, setScores] = useState<{ [key: string]: number }>({});

  const handleAnswerSelect = (optionIndex: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: optionIndex });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsReviewing(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinalSubmit = () => {
    calculateResults(answers);
    setShowResults(true);
  };

  const calculateResults = (ans: { [key: number]: number }) => {
    const categoryScores: { [key: string]: number } = {};
    questions.forEach((q) => {
      const answerIndex = ans[q.id];
      if (answerIndex !== undefined) {
        const score = answerIndex === 1 ? 4 : answerIndex === 0 ? 2 : answerIndex === 2 ? 1 : 3;
        categoryScores[q.category] = (categoryScores[q.category] || 0) + score;
      }
    });
    setScores(categoryScores);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setIsReviewing(false);
    setScores({});
  };

  if (showResults) {
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);

    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-rebuttl-lightBg to-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto animate-scale-in">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent mb-4">
                  Your EQ Assessment Results
                </h2>
                <div className="text-6xl font-bold text-rebuttl-blue mb-2">{percentage}%</div>
                <p className="text-gray-600">Overall Emotional Intelligence Score</p>
              </div>

              <div className="space-y-6 mb-8">
                {Object.entries(scores).map(([category, score]) => {
                  const maxCategoryScore = questions.filter(q => q.category === category).length * 4;
                  const categoryPercentage = Math.round((score / maxCategoryScore) * 100);

                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">{category}</span>
                        <span className="text-sm text-gray-600">{categoryPercentage}%</span>
                      </div>
                      <Progress value={categoryPercentage} className="h-3" />
                    </div>
                  );
                })}
              </div>

              <div className="bg-rebuttl-blue/10 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">What This Means</h3>
                <p className="text-gray-600 text-sm">
                  {percentage >= 75
                    ? "Excellent! You demonstrate strong emotional intelligence across key areas. Continue building on these strengths."
                    : percentage >= 50
                      ? "Good foundation! You have solid EQ skills with room for growth in specific areas."
                      : "Great start! Emotional intelligence is a skill that can be developed. Focus on self-awareness and empathy."}
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={resetAssessment}
                  variant="outline"
                  className="border-rebuttl-blue text-rebuttl-blue hover:bg-rebuttl-blue/10"
                >
                  Retake Assessment
                </Button>
                <Button
                  onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
                  className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white"
                >
                  Get Full Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (isReviewing) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rebuttl-lightBg">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Review Your Answers</h3>
              <div className="space-y-6 mb-8">
                {questions.map((q, idx) => (
                  <div key={q.id} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <p className="font-medium text-gray-900">{idx + 1}. {q.question}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-rebuttl-blue h-auto p-0 hover:bg-transparent underline"
                        onClick={() => {
                          setCurrentQuestion(idx);
                          setIsReviewing(false);
                        }}
                      >
                        Change
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600">
                      Selected: <span className="text-rebuttl-blue font-semibold">{q.options[answers[q.id]]}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => setIsReviewing(false)}
                  variant="outline"
                  className="border-gray-300"
                >
                  Back to Last Question
                </Button>
                <Button
                  onClick={handleFinalSubmit}
                  className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white"
                >
                  Submit & See Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const hasSelectedAnswer = answers[questions[currentQuestion].id] !== undefined;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rebuttl-lightBg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try Our EQ Assessment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a quick pulse on your emotional intelligence with our 4-question interactive trial.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-sm border-gray-100">
          <CardContent className="p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-rebuttl-blue">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">{questions[currentQuestion].category}</span>
              </div>
              <Progress value={progress} className="h-2 mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                {questions[currentQuestion].question}
              </h3>
            </div>

            <div className="space-y-3 mb-8">
              {questions[currentQuestion].options.map((option, idx) => {
                const isSelected = answers[questions[currentQuestion].id] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 group flex items-center gap-4 ${isSelected
                        ? 'border-rebuttl-blue bg-rebuttl-blue/5 text-rebuttl-blue ring-1 ring-rebuttl-blue/20'
                        : 'border-gray-100 bg-white hover:border-rebuttl-blue/30 text-gray-700'
                      }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-rebuttl-blue bg-rebuttl-blue' : 'border-gray-200'
                      }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                    </div>
                    <span className="font-medium">{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className="text-gray-500 hover:text-rebuttl-blue"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!hasSelectedAnswer}
                className={`px-8 py-2 rounded-full font-bold transition-all duration-300 ${isLastQuestion
                    ? 'bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple text-white shadow-lg hover:shadow-xl hover:scale-105'
                    : 'bg-rebuttl-blue text-white hover:bg-rebuttl-blue/90'
                  }`}
              >
                {isLastQuestion ? 'Review Answers' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractiveAssessment;
