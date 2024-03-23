import type {Property} from 'csstype';
import styled from 'styled-components';

import type { Color, Typography } from '../styles/variables';

const _Text = styled.span<{
  $color: string;
  $flexGrow?: Property.FlexGrow;
  $flexShrink?: Property.FlexShrink;
  $typography: string;
  $weight: string;
}>`
  ${({ $typography }) => $typography};
  color: ${({ $color }) => $color};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  font-weight: ${({ $weight }) => $weight};
`;

type Props = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  color: Color;
  flexGrow?: Property.FlexGrow;
  flexShrink?: Property.FlexShrink;
  id?: string;
  typography: Typography;
  weight?: 'bold' | 'normal';
};

export const Text: React.FC<Props> = ({
  as,
  children,
  color,
  flexGrow,
  flexShrink,
  id,
  typography,
  weight = 'normal',
}) => {
  return (
    <_Text
      $color={color}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $typography={typography}
      $weight={weight}
      as={as}
      id={id}
    >
      {children}
    </_Text>
  );
};
