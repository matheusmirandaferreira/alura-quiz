import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/Screens/Quiz';
import db from '../../db.json';

function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen externalQuestions={db.questions} externalBg={db.bg} />
    </ThemeProvider>
  );
}

export default QuizDaGaleraPage;
