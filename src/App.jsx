import { createContext, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import { ThemeProvider } from '@mui/material';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState("dark")

  const toggleTheme = () =>{
    setTheme((curr)=> (curr ==="light" ? "dark" : "light"));
  }
  return (
<ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}> 
     <header><Header/></header> 
     <section><Hero/></section>
     <section><About/></section>
     <section><Services/></section> 
     <section><Projects/></section> 
     <section><Contact/></section> 
     
     <footer><Footer/></footer>
    </div>
</ThemeContext.Provider>
  );
}

export default App;
