import * as  React from 'react'; //gunakan * as sebagai module default
import { createRoot } from 'react-dom/client';
 //di react 18 > penggunaan ReactDOM sudah tidak dipakai atau disarankan, gunakan createRoot
import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
  