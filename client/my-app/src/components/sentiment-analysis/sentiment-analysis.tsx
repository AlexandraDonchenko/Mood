import { FC } from 'react';
import React from 'react';
import { Entry } from './../../types';
import Moment from 'moment';
import ApexCharts from 'react-apexcharts'
import styles from './Sentiment-analysis.module.css'


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
        sentiment: number / senArr.length,
      };
    } else return null;
  });
  let goodDays = 0; 
  let badDays = 0;
  let neutralDays = 0;
  if (sentiments!==null) {
    sentiments.map(entry => {
    if(entry && entry.sentiment === 0) neutralDays = neutralDays+1;
    if(entry && entry.sentiment > 0) goodDays = goodDays+1;
    if(entry && entry.sentiment < 0) badDays = badDays+1;
    if(entry && entry.sentiment ===undefined )return null;
  })}
  const graph = {
    series: [goodDays, badDays, neutralDays],
    options: {
      labels: ['Good days', 'Bad days', 'Neutral days'],
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '50px',
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


};


  return (
    <div className="outerBox">
      <div className={styles.text}>
        YOUR SENTIMENT ANALYSIS FOR LAST 14 DAYS
      </div>
      <div>
      <ApexCharts height='200px'  options={graph.options} series={graph.series} type="donut" />
      </div>
    </div>
  );
};

export default SentimentAnalysis;
