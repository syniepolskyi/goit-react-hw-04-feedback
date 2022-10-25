import { default as PropTypes } from 'prop-types';

export function Notification(props) {
  const { message } = props;
  return <>{message}</>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
