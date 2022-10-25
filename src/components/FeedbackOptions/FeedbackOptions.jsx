import { default as PropTypes } from 'prop-types';
import { Button, FeedbackToolbar, Capitalized } from './FeedbackOptions.styled';

export function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  return (
    <>
      <h2>Please leave feedback</h2>
      <FeedbackToolbar>
        {options.map(key => {
          return (
            <Button
              type="button"
              key={key}
              data-type={key}
              onClick={onLeaveFeedback}
            >
              <Capitalized>{key}</Capitalized>
            </Button>
          );
        })}
      </FeedbackToolbar>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
