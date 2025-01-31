interface GameQuestionProps {
  question: string;
  letter: string;
}

export const GameQuestion = (props: GameQuestionProps) => {
  const { question, letter } = props;

  return (
    <section className="flex flex-col gap-8">
      <p className="text-2xl">{question}</p>
      <p className="text-7xl font-bold text-center uppercase">{letter}</p>
    </section>
  );
};
