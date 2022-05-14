// class App extends React.Component {
//     render() {
//       return <Toolbar theme="dark" />;
//     }
//   }
  
//   function Toolbar(props) {
//     // Компонент Toolbar должен передать проп "theme" ниже,
//     // фактически не используя его. Учитывая, что у вас в приложении
//     // могут быть десятки компонентов, использующих UI-тему,
//     // вам придётся передавать проп "theme" через все компоненты.
//     // И в какой-то момент это станет большой проблемой.
//     return (
//       <div>
//         <ThemedButton theme={props.theme} />
//       </div>
//     );
//   }
  
//   class ThemedButton extends React.Component {
//     render() {
//       return <Button theme={this.props.theme} />;
//     }
//   }





// // Контекст позволяет передавать значение глубоко
// // в дерево компонентов без явной передачи пропсов
// // на каждом уровне. Создадим контекст для текущей
// // UI-темы (со значением "light" по умолчанию).
// const ThemeContext = React.createContext('light');

// class App extends React.Component {
//   render() {
//     // Компонент Provider используется для передачи текущей
//     // UI-темы вниз по дереву. Любой компонент может использовать
//     // этот контекст и не важно, как глубоко он находится.
//     // В этом примере мы передаём "dark" в качестве значения контекста.
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// // Компонент, который находится в середине,
// // больше не должен явно передавать тему вниз.
// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   // Определяем contextType, чтобы получить значение контекста.
//   // React найдёт (выше по дереву) ближайший Provider-компонент,
//   // предоставляющий этот контекст, и использует его значение.
//   // В этом примере значение UI-темы будет "dark".
//   static contextType = ThemeContext;
//   render() {
//     return <Button theme={this.context} />;
//   }
// }





{/* <Page user={user} avatarSize={avatarSize} />
// ... который рендерит ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... который рендерит ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... который рендерит ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link> */}


// function Page(props) {
//     const user = props.user;
//     const userLink = (
//       <Link href={user.permalink}>
//         <Avatar user={user} size={props.avatarSize} />
//       </Link>
//     );
//     return <PageLayout userLink={userLink} />;
//   }
  
//   // Теперь, это выглядит так:
//   <Page user={user} avatarSize={avatarSize}/>
//   // ... который рендерит ...
//   <PageLayout userLink={...} />
//   // ... который рендерит ...
//   <NavigationBar userLink={...} />
//   // ... который рендерит ...
//   {props.userLink}


// function Page(props) {
//     const user = props.user;
//     const content = <Feed user={user} />;
//     const topBar = (
//       <NavigationBar>
//         <Link href={user.permalink}>
//           <Avatar user={user} size={props.avatarSize} />
//         </Link>
//       </NavigationBar>
//     );
//     return (
//       <PageLayout
//         topBar={topBar}
//         content={content}
//       />
//     );
//   }



// const MyContext = React.createContext(defaultValue);
// // state = { value: { some: 'asdasd', some2: 'aaaaa'} };
// {/* <MyContext.Provider value={this.state.value}></MyContext.Provider> */}
// <MyContext.Provider value={''}></MyContext.Provider>

// class MyClass extends React.Component {
//     componentDidMount() {
//         let value = this.context;
//         /* выполнять побочный эффект на этапе монтирования, используя значение MyContext */
//     }
//     componentDidUpdate() {
//         let value = this.context;
//         /* */
//     }
//     componentWillUnmount() {
//         let value = this.context;
//         /* */
//     }
//     render() {
//       let value = this.context;
//       /* отрендерить что-то, используя значение MyContext */
//     }
// }
// MyClass.contextType = MyContext;


// class MyClass extends React.Component {
//     static contextType = MyContext;
//     render() {
//         let value = this.context;
//         /* отрендерить что-то, используя значение MyContext */
//     }
// }

// <MyContext.Consumer>
//     {value => /* отрендерить что-то, используя значение MyContext */}
// </MyContext.Consumer>

// const MyContext = React.createContext(/* некоторое значение */);
// MyContext.displayName = 'MyDisplayName';

// <MyContext.Provider> // "MyDisplayName.Provider" в DevTools
// <MyContext.Consumer> // "MyDisplayName.Consumer" в DevTools


// export const themes = {
//     light: {
//         foreground: '#000000',
//         background: '#eeeeee',
//     },
//     dark: {
//         foreground: '#ffffff',
//         background: '#222222',
//     },
// };

// export const ThemeContext = React.createContext(
//     themes.dark // значение по умолчанию
// );

// import {ThemeContext} from './theme-context';

// class ThemedButton extends React.Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;
//     return (
//       <button
//         {...props}
//         style={{backgroundColor: theme.background}}
//       />
//     );
//   }
// }
// ThemedButton.contextType = ThemeContext;

// export default ThemedButton;

// import {ThemeContext, themes} from './theme-context';
// import ThemedButton from './themed-button';

// // Промежуточный компонент, который использует ThemedButton
// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//     };

//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//   }

//   render() {
//     // ThemedButton внутри ThemeProvider использует
//     // значение светлой UI-темы из состояния, в то время как
//     // ThemedButton, который находится вне ThemeProvider,
//     // использует тёмную UI-тему из значения по умолчанию
//     return (
//       <Page>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme} />
//         </ThemeContext.Provider>
//         <Section>
//           <ThemedButton />
//         </Section>
//       </Page>
//     );
//   }
// }

// ReactDOM.render(<App />, document.root);




// // Контекст UI-темы, со светлым значением по умолчанию
// const ThemeContext = React.createContext('light');

// // Контекст активного пользователя
// const UserContext = React.createContext({
//   name: 'Guest',
// });

// class App extends React.Component {
//   render() {
//     const {signedInUser, theme} = this.props;

//     // Компонент App, который предоставляет начальные значения контекстов
//     return (
//       <ThemeContext.Provider value={theme}>
//         <UserContext.Provider value={signedInUser}>
//           <Layout />
//         </UserContext.Provider>
//       </ThemeContext.Provider>
//     );
//   }
// }

// function Layout() {
//   return (
//     <div>
//       <Sidebar />
//       <Content />
//     </div>
//   );
// }

// // Компонент, который может использовать несколько контекстов
// function Content() {
//   return (
//     <ThemeContext.Consumer>
//       {theme => (
//         <UserContext.Consumer>
//           {user => (
//             <ProfilePage user={user} theme={theme} />
//           )}
//         </UserContext.Consumer>
//       )}
//     </ThemeContext.Consumer>
//   );
// }


class Mouse extends React.PureComponent {
    /// ...
}

class MouseTRacker extends React.Component {
    render() {
        return (
            <div>
            <Mouse render={mouse => (
                <Cat mouse={mouse} />
            )} />
            </div>
        );
    }
}