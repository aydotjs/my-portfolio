import React from 'react'
import App from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from './context';



ReactDOM.render(<BrowserRouter>
<ThemeProvider>
<App/>
</ThemeProvider>

</BrowserRouter>, document.getElementById('root'))