import styled from 'styled-components/native';
import { space, color, layout, position, grid } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Grid = styled.View`
  ${position}
  ${space}
  ${layout}
  ${color}
  ${grid}
  display: flex;
`;

Grid.propTypes = {
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.grid
};

export default Grid;
