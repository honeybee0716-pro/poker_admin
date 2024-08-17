import Typography from '@mui/material/Typography';
import Paper, { PaperProps } from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';
// ----------------------------------------------------------------------

interface Props extends PaperProps {
  query?: string;
}

export default function SearchNotFound({ query, sx, ...other }: Props) {

  const {t} = useTranslation();
  return query ? (
    <Paper
      sx={{
        bgcolor: 'unset',
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" gutterBottom>
        {t('label.not_found')}
      </Typography>

      <Typography variant="body2">
        {t('label.no_results_found_for')} &nbsp;
        <strong>&quot;{query}&quot;</strong>.
        <br /> {t('label.try_checking_for_typos_of_using_complete_words')}
      </Typography>
    </Paper>
  ) : (
    <Typography variant="body2" sx={sx}>
      {t('label.please_enter_keywords')}
    </Typography>
  );
}
