import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Menu } from '../components/Menu';
import { ErrorBoundary } from '../components/ErrorBoundary';
import styles from '../App.module.scss';

export const MainLayout = props => {
  return (
    <ErrorBoundary>
      <div className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <nav className={styles.menuContainer}><Menu activeLinkClassName={styles.activeLink} /></nav>
        </aside>
        <main className={styles.mainLayout}>{renderRoutes(props.route.routes)}</main>
      </div>
    </ErrorBoundary>
  )
}