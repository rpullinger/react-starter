import App from './containers/App';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Page3 from './containers/Page3';
import FourZeroFour from './containers/FourZeroFour';

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Page1 },
    childRoutes: [
        { path: 'page1', component: Page1 },
        { path: 'page2', component: Page2 },
        { path: 'page3', component: Page3 },
        { path: '*', compoent: FourZeroFour }
    ]
}

export default routes;
