import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { IconButton, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <IconButton>
        <CurrencyExchangeIcon sx={{
          scale: "1.5",
          margin: 2,
        }} />
      </IconButton>
    </Link>
  )
}