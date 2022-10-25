import { useState, memo } from 'react';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import { Section } from '../Section';
import { Container, PieChartBox, StatBox } from './App.styled';
import { PieChart } from 'react-minimal-pie-chart';

export function App() {
  const [good, incGood] = useState(0);
  const [neutral, incNeutral] = useState(0);
  const [bad, incBad] = useState(0);

  const changeState = evt => {
    const key = evt.currentTarget.dataset.type;
    if (key === 'good') {
      incGood(prevState => prevState + 1);
      return;
    }
    if (key === 'bad') {
      incBad(prevState => prevState + 1);
      return;
    }
    incNeutral(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) {
      return 0;
    }
    return Math.round((100 * good) / countTotalFeedback());
  };

  const PieChartMemo = memo((props) => {
    const { data } = props;
    return (
      <PieChart
        data={data}
        animate
        label={({ dataEntry }) =>
          dataEntry.value ? dataEntry.value : ''
        }
        labelStyle={() => ({
          fill: 'black',
          fontSize: '7px',
          fontFamily: 'sans-serif',
        })}
        reveal={99}
        labelPosition={90}
      />
    );
  });

  return (
    <Container>
      <Section title="Feedback options">
        <FeedbackOptions
          options={["good","bad","neutral"]}
          onLeaveFeedback={changeState}
        />
      </Section>
      <Section title="Statistics">
        <StatBox>
          <div>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </div>
          {countTotalFeedback() > 0 && (
            <PieChartBox>
              <PieChartMemo
                data={[
                  { title: 'good', value: good, color: 'lightgreen' },
                  { title: 'bad', value: bad, color: 'tomato' },
                  { title: 'neutral', value: neutral, color: 'lightblue' },
                ]}
              />
            </PieChartBox>
          )}
        </StatBox>
      </Section>
    </Container>
  );
}
