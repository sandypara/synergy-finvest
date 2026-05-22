import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import BusinessPage from './pages/business';
import PartnersPage from './pages/partners';
import ContactPage from './pages/contact';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';

// Use the production 404 page by default. The dev-only PageNotFound
// module may not be present in some setups, which causes type errors
// during compilation, so avoid importing it here.
const NotFoundPage = ProdNotFoundPage;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/business',
    element: <BusinessPage />,
  },
  {
    path: '/partners',
    element: <PartnersPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export type Path = '/' | '/about' | '/business' | '/partners' | '/contact';
export type Params = Record<string, string | undefined>;
