import './index.css';
import 'react-multi-carousel/lib/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from '@unsignd/uuuui';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import styled from 'styled-components';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { News } from './pages/News';
import { Gallery } from './pages/Gallery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const router = createBrowserRouter([
  {
    element: (
      <Container>
        <Header />
        <Outlet />
      </Container>
    ),
    errorElement: (
      <Container>
        <Header />
      </Container>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about_us',
        element: <About />,
      },
      {
        path: '/what_we_do',
        element: <Projects />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider theme="light">
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
