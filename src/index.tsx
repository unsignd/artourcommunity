import './index.css';
import 'react-multi-carousel/lib/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from '@unsignd/uuuui';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import styled from 'styled-components';

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
