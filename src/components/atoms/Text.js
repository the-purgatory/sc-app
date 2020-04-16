import styled from 'styled-components/native';
import { typography, space, color } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Text = styled.Text`
	${typography}
	${space}
	${color}
`;

Text.propTypes = {
  ...propTypes.typography,
  ...propTypes.space,
  ...propTypes.color
};

export default Text;
