import './bootstrap';

import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

// require('./bootstrap');
// require('alpinejs');
import { createRoot } from 'react-dom/client';
import App from "./Layouts/App";
const root = createRoot(document.getElementById('app'));
root.render(<App />);
