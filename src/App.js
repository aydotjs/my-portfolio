import React, { useContext } from 'react';
import Intro from './components/intro/intro.jsx'
import About from './components/about/about.jsx'
import ProductList from './components/productList/ProductList.jsx';
import Contact from './components/contact/contact.jsx';
import Toggle from './components/toggle/toggle.jsx';
import { ThemeContext } from './context.js';

function App(){
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
    <div style={{backgroundColor:darkMode ? "#222" : "white",color:darkMode ? "white" : "black"}}>
        <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
       
    </div>
    );
}
export default App;