const quizzes ={
    "General Knowledge": [
        {
            question: "What is the capital of France?",
            answers: ["London", "Paris", "Berlin"],
            correct: 1
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Venus", "Mars", "Jupiter"],
            correct: 1
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: ["Van Gogh", "Da Vinci", "Picasso"],
            correct: 1
        }
    ]
}
localStorage.setItem('quizData', JSON.stringify(quizzes));