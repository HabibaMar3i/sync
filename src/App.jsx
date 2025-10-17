import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import MainLayout from './layouts/MainLayout/MainLayout'
import FeedPage from './pages/FeedPage/FeedPage'
import PostDetails from './pages/PostDetails/PostDetails'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <AuthLayout />, children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> }
      ]
    },
    {
      path: '', element: <MainLayout />, children: [
        { index: true, element: <FeedPage /> },
        { path: 'post-details', element: <PostDetails /> },
        { path: 'profile', element: <ProfilePage /> }
      ]
    },
    { path: '*', element: <NotFoundPage /> }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
