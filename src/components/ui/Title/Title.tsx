import { Typography } from '@mui/material';
import { PageTitleType } from 'constants/pages';

interface TitleProps {
  titleText: PageTitleType;
}

function Title({ titleText }: TitleProps) {
  return (
    <Typography
      component='h1'
      position='relative'
      fontFamily='var(--font-primary)'
      fontSize='var(--font-40)'
      fontWeight='700'
      lineHeight='var(--line-height-52)'
      color='var(--white-main)'
      sx={{
        paddingBottom: 'var(--spacing-24)',
        marginTop: '156px',
        zIndex: 100,
      }}
    >
      {titleText}
    </Typography>
  );
}
export default Title;
