import ReactDOM from 'react-dom/client';
import { Router } from './Router/appRouter';
import { BrowserRouter } from 'react-router-dom';
import { ResetStyles } from 'components/stylesReset'
import { FontsImport } from 'components/importFonts'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename='/temp/yazmeyaa/weatherapp'>
    <FontsImport />
    <ResetStyles />
    <Router />
  </BrowserRouter>
);
