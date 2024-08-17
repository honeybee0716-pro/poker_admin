import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
// layouts
import AuthClassicLayout from 'src/layouts/auth/classic';
// components
import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// JWT
const JwtLoginPage = lazy(() => import('src/pages/auth/login'));
// const JwtRegisterPage = lazy(() => import('src/pages/auth/register'));

export const authRoutes = [

  {
    path: 'auth',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: 'login',
        element: <LoginLayout />,
      },
      // {
      //   path: 'register',
      //   element: (
      //     <AuthClassicLayout title="Manage the job more effectively with Minimal">
      //       <JwtRegisterPage />
      //     </AuthClassicLayout>
      //   ),
      // },
    ],
  },
];

function LoginLayout() {
  const { t } = useTranslation();

  return (
    <AuthClassicLayout title={t('label.welcome')}>
      <JwtLoginPage />
    </AuthClassicLayout>
  );
}