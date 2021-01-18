import { FC } from 'react';
import { Entry } from './../../types';

interface Props {
  entries: Entry[];
}
const SentimentAnalysis: React.FC<Props> = ({ entries }) => {
  function convertToNum(el: string) {
    return el === 'Positive' ? 1 : el === 'Negative' ? -1 : 0;
  }

  const sentiments = entries.map((entry) => {
    let number: number = 0;
    const senArr = entry.sentiment;
    senArr?.forEach((element) => {
      console.log(element);
      number = number + convertToNum(element);
    });
    if (senArr)
      return {
        date: entry.date,
        sentriment: number / senArr.length,
      };
  });
  console.log(sentiments);
  return <div>HELLLLLOOOOO</div>;
};

export default SentimentAnalysis;
