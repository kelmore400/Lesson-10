import React from "react";
import { Menu } from "../components/Menu";

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
  
export const ThemeContext = React.createContext(
    themes.dark
  );


export class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{
          backgroundColor: theme.background,
        }}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

export class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      if (this.state.theme.background === "#eeeeee") {
        document.body.classList.add(`light`);
        document.body.classList.remove(`dark`);
      } else {
        document.body.classList.add(`dark`);
        document.body.classList.remove(`light`);
      }
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    return (
        <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        </div>
    );
  }
}