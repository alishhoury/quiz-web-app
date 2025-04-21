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
    ],
    "Science": [
        {
            question: "What is H2O commonly known as?",
            answers: ["Salt", "Water", "Sugar"],
            correct: 1
        },
        {
            question: "What force keeps planets in orbit?",
            answers: ["Gravity", "Magnetism", "Friction"],
            correct: 0
        },
        {
            question: "What is the largest organ in the human body?",
            answers: ["Heart", "Brain", "Skin"],
            correct: 2
        }
    ],
    "History": [
        {
            question: "In which year did World War II end?",
            answers: ["1945", "1944", "1946"],
            correct: 0
        },
        {
            question: "Who was the first President of the United States?",
            answers: ["John Adams", "Thomas Jefferson", "George Washington"],
            correct: 2
        },
        {
            question: "Which empire built the Pyramids?",
            answers: ["Roman", "Greek", "Egyptian"],
            correct: 2
        }
    ]
    };

localStorage.setItem('quizData', JSON.stringify(quizzes));