import GeckoPage1 from '../assets/reading/gecko/Gecko1.png';
import GeckoPage2 from '../assets/reading/gecko/Gecko2.png';
import GeckoPage3 from '../assets/reading/gecko/Gecko3.png';
import GeckoPage4 from '../assets/reading/gecko/Gecko4.png';
import GeckoPage5 from '../assets/reading/gecko/Gecko5.png';
import GeckoPage6 from '../assets/reading/gecko/Gecko6.png';
import AntPage1 from '../assets/reading/ants/Ants1.png';
import AntPage2 from '../assets/reading/ants/Ants2.png';
import AntPage3 from '../assets/reading/ants/Ants3.png';
import AntPage4 from '../assets/reading/ants/Ants4.png';
import AntPage5 from '../assets/reading/ants/Ants5.png';
import AntPage6 from '../assets/reading/ants/Ants6.png';

export default {
  gecko: {
    pages: [
      GeckoPage1,
      GeckoPage2,
      GeckoPage3,
      GeckoPage4,
      GeckoPage5,
      GeckoPage6,
      GeckoPage4,
      GeckoPage5,
      GeckoPage6,
    ],
    cutOff: 6,
    questions: [
      {
        page: 6,
        position: 'top-60 left-3',
        question: 'Where is the gecko?',
        answers: ['In the forest', 'In a room', 'At the beach'],
        correctAnswer: 1,
      },
      {
        page: 7,
        position: 'top-60 left-3',
        question: 'What is the gecko doing?',
        answers: ['Crawling', 'Swimming', 'Flying'],
        correctAnswer: 0,
      },
      {
        page: 8,
        position: 'top-10 left-3',
        question: 'How many geckos are there?',
        answers: ['4', '6', '10'],
        correctAnswer: 0,
      },
    ],
  },
  ant: {
    pages: [
      AntPage1,
      AntPage2,
      AntPage3,
      AntPage4,
      AntPage5,
      AntPage6,
      AntPage3,
      AntPage4,
      AntPage5,
      AntPage6,
    ],
    cutOff: 6,
    questions: [
      {
        page: 6,
        position: 'top-5 left-10',
        question: 'How many ants are there?',
        answers: ['4', '6', '10'],
        correctAnswer: 1,
      },
      {
        page: 7,
        position: 'top-5 left-10',
        question: 'What are the ants doing?',
        answers: ['Swimming', 'Marching', 'Flying'],
        correctAnswer: 1,
      },
      {
        page: 8,
        position: 'top-5 left-10',
        question: 'Where are the ants?',
        answers: ['In a garden', 'In a house', 'In a tree'],
        correctAnswer: 0,
      },
      {
        page: 9,
        position: 'top-5 left-10',
        question: 'How do Chiya and Ant feel?',
        answers: ['Sad', 'Angry', 'Happy'],
        correctAnswer: 2,
      },
    ],
  },
};