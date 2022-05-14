import React from 'react';
import { renderRoutes } from "react-router-config";
import { ModalProvider } from './context/modal';
import { ModalRoot } from './components/Modal';
import { routes } from './routes';
import styles from './App.module.scss'


class App extends React.Component {
  render () {
    return (
      <div className={styles.App}>
        <ModalProvider>
          {renderRoutes(routes)}
          <ModalRoot />
        </ModalProvider>
      </div>
    );
  }
}

export default App;
