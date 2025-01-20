import { ReactNode, ElementType } from 'react';
import { SxProps, Typography } from '@mui/material';

interface TextProps {
  span?: boolean;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  children: ReactNode;
  sx?: SxProps;
}

function Text({
  span,
  children = '',
  color = 'var(--gray-text)',
  fontSize = 'var(--font-12)',
  lineHeight = 'var(--line-height-16)',
  sx = {},
}: TextProps) {
  const tag: ElementType = span ? 'span' : 'p';

  return (
    <Typography
      component={tag}
      fontFamily='var(--font-primary)'
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      sx={sx}
    >
      {children}
    </Typography>
  );
}
export default Text;
