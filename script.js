document.addEventListener("DOMContentLoaded", () => {
    const loginBox = document.querySelector(".loginbox");
    const login = document.querySelector(".login");
    const startQuiz = document.querySelector(".start");
    const candinateData = document.querySelector(".candinate");
    const quizPage = document.querySelector(".quizpage")
    startQuiz.addEventListener("click", () => {
        if (loginBox.value === "") {
            alert("Please enter your name");
        } else {
            const candinate = loginBox.value;
            candinateData.textContent = `Welcome ${candinate}.Thanks For Participating.`;
            quizPage.classList.remove("hidden");
            login.classList.add("hidden")
        }
    })
    
    
    const quizQues = [
        {
            question: "Which field does NOT receive a Nobel Prize?",
            a: "Physics",
            b: "Mathematics",
            c: "Literature",
            d: "Peace",
            answer: "a"
        },
        {
            question: "Who invented the World Wide Web?",
            a: "Alang Turing",
            b: "Tim Berners-Lee",
            c: "Steve Jobs",
            d: "Bill Gates",
            answer: "b"
        },
        {
            question: "What is the atomic number of Hydrogen in the periodic table?",
            a: "1",
            b: "2",
            c: "3",
            d: "4",
            answer: "a"
        },
        {
            question: "How often does a leap year occur?",
            a: "Every 2 years",
            b: "Every 3 years",
            c: "Every 4 years",
            d: "Every 5 years",
            answer: "c"
        },
        {
            question: "What is the official currency of Bangladesh?",
            a: "Dollar",
            b: "Taka",
            c: "Riyal",
            d: "Euro",
            answer: "b"
        },
        {
            question: "Which Year Javascript was Invented?",
            a: "1996",
            b: "1995",
            c: "1999",
            d: "1994",
            answer: "b"
        },
        {
            question: "What does NASA stand for?",
            a: "National Aeronautics and Space Administration",
            b: "North American Space Agency",
            c: "New Age Science Association",
            d: "Natural Astronomy and Space Association",
            answer: "a"
        },
        {
            question: "How many digits are used in the binary number system?",
            a: "2",
            b: "3",
            c: "4",
            d: "5",
            answer: "a"
        },
        {
            question: "How many digits are used in the binary number system?",
            a: "2",
            b: "3",
            c: "4",
            d: "5",
            answer: "a"
        },
        {
            question: "Which HTML tag is used to define an unordered list?",
            a: "<ul>",
            b: "<ol>",
            c: "<li>",
            d: "<list>",
            answer: "a"
        },
        {
            question: "What does CSS stand for?",
            a: "Computer Style Sheets",
            b: "Cascading Style Sheets",
            c: "Colorful Style Sheets",
            d: "Creative Style Syntax",
            answer: "b"
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            a: "//",
            b: "/* */",
            c: "#",
            d: "<!-- -->",
            answer: "a"
        },
        {
            question: "Which method is used to add an element at the end of an array?",
            a: "shift()",
            b: "unshift()",
            c: "push()",
            d: "pop()",
            answer: "c"
        },
        {
            question: "What type of Scope Javascript Has?",
            a: "Block",
            b: "Global",
            c: "Lexical",
            d: "All of them",
            answer: "d"
        },
        {
            question: "Which company developed JavaScript?",
            a: "Microsoft",
            b: "Apple",
            c: "Sun Microsystems",
            d: "Netscape",
            answer: "d"
        },
        {
            question: "What does '===' mean in JavaScript?",
            a: "Assignment operator",
            b: "Strict equality",
            c: "Comparison with type coercion",
            d: "Inequality",
            answer: "b"
        },
        {
            question: "Which HTML tag is used to include JavaScript code?",
            a: "<script>",
            b: "<javascript>",
            c: "<js>",
            d: "<code>",
            answer: "a"
        },
        {
            question: "How do you declare a variable in JavaScript?",
            a: "var",
            b: "int",
            c: "String",
            d: "letvar",
            answer: "a"
        },
        {
            question: "What does the DOM stand for?",
            a: "Document Object Model",
            b: "Data Object Manager",
            c: "Document Oriented Markup",
            d: "Digital Output Module",
            answer: "a"
        },
        {
            question: "Which CSS property is used to change text color?",
            a: "text-style",
            b: "font-color",
            c: "color",
            d: "text-color",
            answer: "c"
        }
    ];

    console.log(quizQues.length)
    let CurrentQues = 0;
    const quizQuestion = document.querySelectorAll(".questions")
    const quiztxt = document.querySelector(".questiontxt")
    const quesContainer = document.querySelector(".question-container");
    const quizContainer = document.querySelector(".Quiz-container");
    const submitBtn = document.querySelector(".submitbtn");
    const checkBtn = document.querySelectorAll(".checkbtn")
    const a = document.querySelector(".a");
    const b = document.querySelector(".b");
    const c = document.querySelector(".c");
    const d = document.querySelector(".d");

   const questionNumber = document.querySelector(".questionnumber");
    let questionnumber= 1;
    
    function currentQuiz() {
        questionNumber.textContent = `Question Number ${questionnumber}`;
        if (quizQues && CurrentQues !== undefined && quizQues[CurrentQues]) {
            const quizData = quizQues[CurrentQues];
            quiztxt.innerHTML = quizData.question;
            a.innerText = quizData.a;
            b.innerText = quizData.b;
            c.innerText = quizData.c;
            d.innerText = quizData.d;
        } else {
            console.error("Cannot load quiz data. Check quizQues and CurrentQues.");
            // Handle the case where data cannot be loaded (e.g., show an error message to the user)
        }
    }
    currentQuiz();

    let correctAnswer = 0;

    let wrongAnswer = 0;

    quizQuestion.forEach((ques) => {
        ques.addEventListener("click", () =>{
            const questionAttr = ques.getAttribute("id")
            console.log(questionAttr)
            const quesAnswer = quizQues[CurrentQues]
            const correctAns = quesAnswer.answer;
            
            if(questionAttr === correctAns){
              correctAnswer++;
              console.log(`correct answer ${correctAnswer}`)
              ques.classList.add("bg-yellow-400", "rounded-md");
              setTimeout(() => {
              ques.classList.remove("bg-yellow-400");
              } , 700)
            } else {
                ques.classList.add("bg-yellow-400", "rounded-md");
              setTimeout(() => {
              ques.classList.remove("bg-yellow-400");
              } , 700);
              wrongAnswer++;
              console.log(`wrong answer ${wrongAnswer}`);
            }
        })
    })

    submitBtn.addEventListener("click", () => {
        currentQuiz();

        CurrentQues++;
        questionnumber++;

        if (CurrentQues < quizQues.length) {
            currentQuiz()
        } else {
            quesContainer.innerText = "";
            quizContainer.classList.add("flex", "flex-col", "jusitfy-center", "items-center", "gap-4")
            quizContainer.innerHTML = `<p class ="text-2xl font-medium">Oops! All Questions Has End Up</p>
        <p class ="text-xl font-medium">Correct Answers :${correctAnswer}</p>
        <p class ="text-xl font-medium">Wrong Answers :${wrongAnswer}</p>`;
        }
    });
})