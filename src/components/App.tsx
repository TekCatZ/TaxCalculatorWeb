import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import { sentryCreateBrowserRouter } from '~/configs/sentry.config.ts'

import About from '~/components/About'
import Home from '~/components/Home'
import Page404 from '~/components/Page404'
import ErrorBoundary from '~/components/ErrorBoundary'

const router = sentryCreateBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '*',
    element: <Page404 />
  }
])

const App = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
