import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//Импортируем компоненты для каждой страницы
//Страница - Главная
// И каталог
import { Main, Catalog } from './pages/'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Header, Footer } from './components/'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/catalog",
    element: <Catalog />
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
