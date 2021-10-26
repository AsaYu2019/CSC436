import UserBar from './UserBar';
import React, {useState}from 'react';
import Header from './Header';
import {ThemeContext, StateContext} from './Contexts';
import ChangeTheme from './ChangeTheme';

function App() {
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
})
  return (
    <div>
        <ThemeContext.Provider value = {theme}>
          <Header text = "My Blog"/>
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <UserBar />
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
