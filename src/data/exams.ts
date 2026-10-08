export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctOptionId: string;
}

export interface Exam {
  id: string;
  title: string;
  subject: string;
  questionCount: number;
  durationMinutes: number;
  questions: Question[];
}

export const exams: Exam[] = [
  {
    id: "ex_1",
    title: "General Knowledge Mastery",
    subject: "General Knowledge",
    questionCount: 10,
    durationMinutes: 10,
    questions: [
      {
        id: "q_1_1",
        text: "What is the capital of France?",
        options: [
          { id: "o_1", text: "London" },
          { id: "o_2", text: "Berlin" },
          { id: "o_3", text: "Paris" },
          { id: "o_4", text: "Madrid" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_1_2",
        text: "Who wrote 'Romeo and Juliet'?",
        options: [
          { id: "o_1", text: "Charles Dickens" },
          { id: "o_2", text: "William Shakespeare" },
          { id: "o_3", text: "Mark Twain" },
          { id: "o_4", text: "Jane Austen" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_1_3",
        text: "Which planet is known as the Red Planet?",
        options: [
          { id: "o_1", text: "Earth" },
          { id: "o_2", text: "Mars" },
          { id: "o_3", text: "Jupiter" },
          { id: "o_4", text: "Venus" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_1_4",
        text: "What is the largest mammal in the world?",
        options: [
          { id: "o_1", text: "Elephant" },
          { id: "o_2", text: "Blue Whale" },
          { id: "o_3", text: "Giraffe" },
          { id: "o_4", text: "Great White Shark" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_1_5",
        text: "In which year did the Titanic sink?",
        options: [
          { id: "o_1", text: "1912" },
          { id: "o_2", text: "1905" },
          { id: "o_3", text: "1898" },
          { id: "o_4", text: "1923" },
        ],
        correctOptionId: "o_1",
      },
      {
        id: "q_1_6",
        text: "What is the smallest country in the world?",
        options: [
          { id: "o_1", text: "Monaco" },
          { id: "o_2", text: "Vatican City" },
          { id: "o_3", text: "San Marino" },
          { id: "o_4", text: "Liechtenstein" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_1_7",
        text: "Who painted the Mona Lisa?",
        options: [
          { id: "o_1", text: "Vincent van Gogh" },
          { id: "o_2", text: "Pablo Picasso" },
          { id: "o_3", text: "Leonardo da Vinci" },
          { id: "o_4", text: "Claude Monet" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_1_8",
        text: "What is the currency of Japan?",
        options: [
          { id: "o_1", text: "Yuan" },
          { id: "o_2", text: "Won" },
          { id: "o_3", text: "Yen" },
          { id: "o_4", text: "Ringgit" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_1_9",
        text: "Which element has the chemical symbol 'O'?",
        options: [
          { id: "o_1", text: "Gold" },
          { id: "o_2", text: "Oxygen" },
          { id: "o_3", text: "Osmium" },
          { id: "o_4", text: "Oganesson" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_1_10",
        text: "How many continents are there on Earth?",
        options: [
          { id: "o_1", text: "5" },
          { id: "o_2", text: "6" },
          { id: "o_3", text: "7" },
          { id: "o_4", text: "8" },
        ],
        correctOptionId: "o_3",
      },
    ],
  },
  {
    id: "ex_2",
    title: "Basic Mathematics",
    subject: "Mathematics",
    questionCount: 10,
    durationMinutes: 15,
    questions: [
      {
        id: "q_2_1",
        text: "What is 15 + 28?",
        options: [
          { id: "o_1", text: "42" },
          { id: "o_2", text: "43" },
          { id: "o_3", text: "45" },
          { id: "o_4", text: "53" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_2_2",
        text: "What is the square root of 144?",
        options: [
          { id: "o_1", text: "10" },
          { id: "o_2", text: "12" },
          { id: "o_3", text: "14" },
          { id: "o_4", text: "16" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_2_3",
        text: "Solve for x: 2x - 5 = 11",
        options: [
          { id: "o_1", text: "8" },
          { id: "o_2", text: "3" },
          { id: "o_3", text: "16" },
          { id: "o_4", text: "6" },
        ],
        correctOptionId: "o_1",
      },
      {
        id: "q_2_4",
        text: "What is 7 multiplied by 8?",
        options: [
          { id: "o_1", text: "54" },
          { id: "o_2", text: "56" },
          { id: "o_3", text: "62" },
          { id: "o_4", text: "64" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_2_5",
        text: "What is 20% of 150?",
        options: [
          { id: "o_1", text: "20" },
          { id: "o_2", text: "25" },
          { id: "o_3", text: "30" },
          { id: "o_4", text: "35" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_2_6",
        text: "What is the area of a rectangle with length 5 and width 4?",
        options: [
          { id: "o_1", text: "9" },
          { id: "o_2", text: "18" },
          { id: "o_3", text: "20" },
          { id: "o_4", text: "40" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_2_7",
        text: "Which of the following is a prime number?",
        options: [
          { id: "o_1", text: "15" },
          { id: "o_2", text: "21" },
          { id: "o_3", text: "27" },
          { id: "o_4", text: "29" },
        ],
        correctOptionId: "o_4",
      },
      {
        id: "q_2_8",
        text: "What is the value of pi to two decimal places?",
        options: [
          { id: "o_1", text: "3.12" },
          { id: "o_2", text: "3.14" },
          { id: "o_3", text: "3.16" },
          { id: "o_4", text: "3.18" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_2_9",
        text: "What is 100 divided by 4?",
        options: [
          { id: "o_1", text: "20" },
          { id: "o_2", text: "25" },
          { id: "o_3", text: "30" },
          { id: "o_4", text: "50" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_2_10",
        text: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        options: [
          { id: "o_1", text: "20" },
          { id: "o_2", text: "24" },
          { id: "o_3", text: "32" },
          { id: "o_4", text: "64" },
        ],
        correctOptionId: "o_3",
      },
    ],
  },
  {
    id: "ex_3",
    title: "Science Fundamentals",
    subject: "Science",
    questionCount: 10,
    durationMinutes: 10,
    questions: [
      {
        id: "q_3_1",
        text: "What is the powerhouse of the cell?",
        options: [
          { id: "o_1", text: "Nucleus" },
          { id: "o_2", text: "Mitochondria" },
          { id: "o_3", text: "Ribosome" },
          { id: "o_4", text: "Endoplasmic Reticulum" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_3_2",
        text: "What gas do plants absorb from the atmosphere?",
        options: [
          { id: "o_1", text: "Oxygen" },
          { id: "o_2", text: "Nitrogen" },
          { id: "o_3", text: "Carbon Dioxide" },
          { id: "o_4", text: "Hydrogen" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_3_3",
        text: "What is the chemical formula for water?",
        options: [
          { id: "o_1", text: "H2O" },
          { id: "o_2", text: "CO2" },
          { id: "o_3", text: "O2" },
          { id: "o_4", text: "NaCl" },
        ],
        correctOptionId: "o_1",
      },
      {
        id: "q_3_4",
        text: "At what temperature does water boil (in Celsius)?",
        options: [
          { id: "o_1", text: "50" },
          { id: "o_2", text: "90" },
          { id: "o_3", text: "100" },
          { id: "o_4", text: "120" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_3_5",
        text: "Which planet is closest to the sun?",
        options: [
          { id: "o_1", text: "Venus" },
          { id: "o_2", text: "Earth" },
          { id: "o_3", text: "Mars" },
          { id: "o_4", text: "Mercury" },
        ],
        correctOptionId: "o_4",
      },
      {
        id: "q_3_6",
        text: "What is the hardest natural substance on Earth?",
        options: [
          { id: "o_1", text: "Gold" },
          { id: "o_2", text: "Iron" },
          { id: "o_3", text: "Diamond" },
          { id: "o_4", text: "Quartz" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_3_7",
        text: "What force keeps us on the ground?",
        options: [
          { id: "o_1", text: "Magnetism" },
          { id: "o_2", text: "Friction" },
          { id: "o_3", text: "Gravity" },
          { id: "o_4", text: "Inertia" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_3_8",
        text: "What part of the plant conducts photosynthesis?",
        options: [
          { id: "o_1", text: "Root" },
          { id: "o_2", text: "Stem" },
          { id: "o_3", text: "Leaf" },
          { id: "o_4", text: "Flower" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_3_9",
        text: "How many bones are in the adult human body?",
        options: [
          { id: "o_1", text: "198" },
          { id: "o_2", text: "206" },
          { id: "o_3", text: "212" },
          { id: "o_4", text: "250" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_3_10",
        text: "What is the state of matter of the sun?",
        options: [
          { id: "o_1", text: "Solid" },
          { id: "o_2", text: "Liquid" },
          { id: "o_3", text: "Gas" },
          { id: "o_4", text: "Plasma" },
        ],
        correctOptionId: "o_4",
      },
    ],
  },
  {
    id: "ex_4",
    title: "English Grammar",
    subject: "English",
    questionCount: 10,
    durationMinutes: 10,
    questions: [
      {
        id: "q_4_1",
        text: "Which of the following is a noun?",
        options: [
          { id: "o_1", text: "Run" },
          { id: "o_2", text: "Beautiful" },
          { id: "o_3", text: "Quickly" },
          { id: "o_4", text: "Happiness" },
        ],
        correctOptionId: "o_4",
      },
      {
        id: "q_4_2",
        text: "Identify the verb in the sentence: 'The cat slept on the mat.'",
        options: [
          { id: "o_1", text: "cat" },
          { id: "o_2", text: "slept" },
          { id: "o_3", text: "on" },
          { id: "o_4", text: "mat" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_4_3",
        text: "What is the plural of 'child'?",
        options: [
          { id: "o_1", text: "childs" },
          { id: "o_2", text: "childes" },
          { id: "o_3", text: "children" },
          { id: "o_4", text: "childrens" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_4_4",
        text: "Which word is an adjective?",
        options: [
          { id: "o_1", text: "Blue" },
          { id: "o_2", text: "Jump" },
          { id: "o_3", text: "Carefully" },
          { id: "o_4", text: "They" },
        ],
        correctOptionId: "o_1",
      },
      {
        id: "q_4_5",
        text: "Choose the correct spelling:",
        options: [
          { id: "o_1", text: "Accomodation" },
          { id: "o_2", text: "Accommodation" },
          { id: "o_3", text: "Acomodation" },
          { id: "o_4", text: "Accomodation" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_4_6",
        text: "What is the past tense of 'go'?",
        options: [
          { id: "o_1", text: "goed" },
          { id: "o_2", text: "goes" },
          { id: "o_3", text: "went" },
          { id: "o_4", text: "gone" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_4_7",
        text: "Which of the following is a preposition?",
        options: [
          { id: "o_1", text: "And" },
          { id: "o_2", text: "Under" },
          { id: "o_3", text: "Because" },
          { id: "o_4", text: "Oh" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_4_8",
        text: "Select the synonym for 'Happy'",
        options: [
          { id: "o_1", text: "Sad" },
          { id: "o_2", text: "Angry" },
          { id: "o_3", text: "Joyful" },
          { id: "o_4", text: "Tired" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_4_9",
        text: "What punctuation mark is used to end a question?",
        options: [
          { id: "o_1", text: "Period" },
          { id: "o_2", text: "Comma" },
          { id: "o_3", text: "Exclamation mark" },
          { id: "o_4", text: "Question mark" },
        ],
        correctOptionId: "o_4",
      },
      {
        id: "q_4_10",
        text: "Identify the pronoun: 'She is reading a book.'",
        options: [
          { id: "o_1", text: "She" },
          { id: "o_2", text: "is" },
          { id: "o_3", text: "reading" },
          { id: "o_4", text: "book" },
        ],
        correctOptionId: "o_1",
      },
    ],
  },
  {
    id: "ex_5",
    title: "Computer Basics",
    subject: "Computer Basics",
    questionCount: 10,
    durationMinutes: 10,
    questions: [
      {
        id: "q_5_1",
        text: "What does CPU stand for?",
        options: [
          { id: "o_1", text: "Central Process Unit" },
          { id: "o_2", text: "Computer Personal Unit" },
          { id: "o_3", text: "Central Processing Unit" },
          { id: "o_4", text: "Central Processor Unit" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_5_2",
        text: "Which of these is an input device?",
        options: [
          { id: "o_1", text: "Monitor" },
          { id: "o_2", text: "Printer" },
          { id: "o_3", text: "Keyboard" },
          { id: "o_4", text: "Speaker" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_5_3",
        text: "What does RAM stand for?",
        options: [
          { id: "o_1", text: "Random Access Memory" },
          { id: "o_2", text: "Read Access Memory" },
          { id: "o_3", text: "Run All Memory" },
          { id: "o_4", text: "Random Active Memory" },
        ],
        correctOptionId: "o_1",
      },
      {
        id: "q_5_4",
        text: "Which of the following is an operating system?",
        options: [
          { id: "o_1", text: "Microsoft Word" },
          { id: "o_2", text: "Google Chrome" },
          { id: "o_3", text: "Windows 11" },
          { id: "o_4", text: "Intel" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_5_5",
        text: "What does HTML stand for?",
        options: [
          { id: "o_1", text: "Hyper Text Markup Language" },
          { id: "o_2", text: "High Tech Modern Language" },
          { id: "o_3", text: "Hyperlink and Text Markup Language" },
          { id: "o_4", text: "Home Tool Markup Language" },
        ],
        correctOptionId: "o_1",
      },
      {
        id: "q_5_6",
        text: "What is the brain of the computer?",
        options: [
          { id: "o_1", text: "Hard Drive" },
          { id: "o_2", text: "CPU" },
          { id: "o_3", text: "Motherboard" },
          { id: "o_4", text: "RAM" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_5_7",
        text: "Which of these is used to browse the internet?",
        options: [
          { id: "o_1", text: "Microsoft Excel" },
          { id: "o_2", text: "Mozilla Firefox" },
          { id: "o_3", text: "Notepad" },
          { id: "o_4", text: "Adobe Photoshop" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_5_8",
        text: "1 Gigabyte (GB) is equal to:",
        options: [
          { id: "o_1", text: "1024 Megabytes (MB)" },
          { id: "o_2", text: "1000 Megabytes (MB)" },
          { id: "o_3", text: "1024 Kilobytes (KB)" },
          { id: "o_4", text: "1000 Kilobytes (KB)" },
        ],
        correctOptionId: "o_1",
      },
      {
        id: "q_5_9",
        text: "What is a URL?",
        options: [
          { id: "o_1", text: "A computer virus" },
          { id: "o_2", text: "A web address" },
          { id: "o_3", text: "An email client" },
          { id: "o_4", text: "A hardware component" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_5_10",
        text: "Which shortcut is used for 'Copy' in Windows?",
        options: [
          { id: "o_1", text: "Ctrl + X" },
          { id: "o_2", text: "Ctrl + V" },
          { id: "o_3", text: "Ctrl + C" },
          { id: "o_4", text: "Ctrl + Z" },
        ],
        correctOptionId: "o_3",
      },
    ],
  },
  {
    id: "ex_6",
    title: "Logical Reasoning",
    subject: "Reasoning",
    questionCount: 10,
    durationMinutes: 15,
    questions: [
      {
        id: "q_6_1",
        text: "Look at this series: 2, 6, 18, 54, ... What number should come next?",
        options: [
          { id: "o_1", text: "108" },
          { id: "o_2", text: "148" },
          { id: "o_3", text: "162" },
          { id: "o_4", text: "216" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_6_2",
        text: "Odometer is to mileage as compass is to:",
        options: [
          { id: "o_1", text: "Speed" },
          { id: "o_2", text: "Hiking" },
          { id: "o_3", text: "Needle" },
          { id: "o_4", text: "Direction" },
        ],
        correctOptionId: "o_4",
      },
      {
        id: "q_6_3",
        text: "Which word does NOT belong with the others?",
        options: [
          { id: "o_1", text: "Tulip" },
          { id: "o_2", text: "Rose" },
          { id: "o_3", text: "Bud" },
          { id: "o_4", text: "Daisy" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_6_4",
        text: "Window is to pane as book is to:",
        options: [
          { id: "o_1", text: "Novel" },
          { id: "o_2", text: "Glass" },
          { id: "o_3", text: "Cover" },
          { id: "o_4", text: "Page" },
        ],
        correctOptionId: "o_4",
      },
      {
        id: "q_6_5",
        text: "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
        options: [
          { id: "o_1", text: "20" },
          { id: "o_2", text: "22" },
          { id: "o_3", text: "23" },
          { id: "o_4", text: "26" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_6_6",
        text: "Cup is to coffee as bowl is to:",
        options: [
          { id: "o_1", text: "Dish" },
          { id: "o_2", text: "Soup" },
          { id: "o_3", text: "Spoon" },
          { id: "o_4", text: "Food" },
        ],
        correctOptionId: "o_2",
      },
      {
        id: "q_6_7",
        text: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies.",
        options: [
          { id: "o_1", text: "True" },
          { id: "o_2", text: "False" },
          { id: "o_3", text: "Cannot be determined" },
          { id: "o_4", text: "None of the above" },
        ],
        correctOptionId: "o_1",
      },
      {
        id: "q_6_8",
        text: "Which number should come next in this series? 10, 17, 26, 37, ...",
        options: [
          { id: "o_1", text: "46" },
          { id: "o_2", text: "52" },
          { id: "o_3", text: "50" },
          { id: "o_4", text: "56" },
        ],
        correctOptionId: "o_3",
      },
      {
        id: "q_6_9",
        text: "Pen is to poet as needle is to:",
        options: [
          { id: "o_1", text: "Thread" },
          { id: "o_2", text: "Button" },
          { id: "o_3", text: "Sewing" },
          { id: "o_4", text: "Tailor" },
        ],
        correctOptionId: "o_4",
      },
      {
        id: "q_6_10",
        text: "Look at this series: 8, 22, 8, 28, 8, ... What number should come next?",
        options: [
          { id: "o_1", text: "9" },
          { id: "o_2", text: "29" },
          { id: "o_3", text: "32" },
          { id: "o_4", text: "34" },
        ],
        correctOptionId: "o_4",
      },
    ],
  },
];
