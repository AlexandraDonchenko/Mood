import { FC } from 'react';
import React from 'react';
import { Entry } from './../../types';
import './sentiment-analysis.css';
import Moment from 'moment';

interface Props {
  entries: Entry[];
}
const SentimentAnalysis: React.FC<Props> = ({ entries }) => {
  function convertToNum(el: string) {
    return el === 'Positive' ? 1 : el === 'Negative' ? -1 : 0;
  }
  const arr = entries.slice(1);

  const sentiments = arr.map((entry) => {
    let number: number = 0;
    const senArr = entry.sentiment;
    senArr?.forEach((element) => {
      number = number + convertToNum(element);
    });
    if (senArr) {
      return {
        date: entry.date,
        sentriment: number / senArr.length,
      };
    } else return null;
  });
  return (
    <div className="outerBox">
      <div className="last-analysis">
        YOUR SENTIMENT ANALYSIS FOR LAST 14 DAYS
      </div>
      <div className="inner-box">
        {sentiments.map((item) => {
          return (
            <div>
              <div
                className={
                  item !== null && item.sentriment > 0 ? 'goodDay' : 'badDay'
                }
              >
                <div className="date-in-bubble">
                  {Moment(item !== null ? item.date : null).format('DD.MM ')}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SentimentAnalysis;
