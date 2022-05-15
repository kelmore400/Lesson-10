import React from "react";
import { Menu } from "../components/Menu";

export const themes = {
    light: {
      foreground: '#000000',
      background: 'linear-gradient(#3471b8, #91b0eb)',
    },
    dark: {
      foreground: '#ffffff',
      background: 'linear-gradient(#141e30, #243b55)',
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
          background: theme.background,
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
      document.body.style.background = this.state.theme.background;
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