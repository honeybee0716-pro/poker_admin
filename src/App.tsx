// scrollbar
import 'simplebar-react/dist/simplebar.min.css';

// image
import 'react-lazy-load-image-component/src/effects/blur.css';

import 'src/assets/css/main.css';

// ----------------------------------------------------------------------
import { useTranslation } from 'react-i18next';
// routes
import Router from 'src/routes/sections';
// theme
import ThemeProvider from 'src/theme';
// hooks
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import SnackbarProvider from 'src/components/snackbar/snackbar-provider';
import { useEffect } from 'react';
// components
import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsProvider, SettingsDrawer } from 'src/components/settings';
import { ApiProvider } from './contexts/ApiContext';

// translation

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  const { i18n } = useTranslation();
  useEffect(() => {
    // Change the language to Korean on the first render
    i18n.changeLanguage('ko');
  }, [i18n]); // Empty dependency array ensures this runs only once
  return (
    <SettingsProvider
      defaultSettings={{
        themeMode: 'dark', // 'light' | 'dark'
        themeDirection: 'ltr', //  'rtl' | 'ltr'
        themeContrast: 'default', // 'default' | 'bold'
        themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
        themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
        themeStretch: false,
      }}
    >
      <ThemeProvider>
        <MotionLazy>
          <SnackbarProvider>
            <SettingsDrawer />
            <ProgressBar />
            <ApiProvider>
              <Router />
            </ApiProvider>
          </SnackbarProvider>
        </MotionLazy>
      </ThemeProvider>
    </SettingsProvider>
  );
}
