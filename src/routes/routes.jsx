import App from '../App';
import Home from '../components/Home';
import { HydrateFallback } from '../components/common/HydrateFallback';
import RouteFallback from '../components/common/RouteFallback';

const routes = [
  {
    path: '/',
    Component: App,
    HydrateFallback: HydrateFallback,
    children: [
      { index: true, Component: Home },
      {
        path: 'about',
        lazy: {
          Component: async () => {
            // simulate 2 second delay
            await new Promise((res) => setTimeout(res, 2000));
            // Using default export from About.jsx
            return (await import('../components/About')).default;
          },
        },
        hydrateFallbackElement: (
          <RouteFallback message="Loading about page..." />
        ),
      },
    ],
  },
];

export { routes };
