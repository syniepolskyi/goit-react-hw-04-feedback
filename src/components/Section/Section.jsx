import { default as PropTypes } from 'prop-types';
import { SectionStyled } from './Section.styled';

export function Section(props) {
  const { title, children } = props;
  return <SectionStyled data-title={title}>{children}</SectionStyled>;
}

Section.propTypes = {
  title: PropTypes.string,
};
