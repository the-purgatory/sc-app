import styled from 'styled-components/native';
import { space, color, layout, position, flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const FlexBox = styled.View`
  ${position}
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  display: flex;
`;

FlexBox.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color
};

export default FlexBox;
