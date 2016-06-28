import CategoryListPage from './components/CategoryListPage.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import CategorySpotlightPage from './components/CategorySpotlightPage.jsx';
import ElementPage from './components/ElementPage.jsx';
import ElementSpotlightPage from './components/ElementSpotlightPage.jsx';
import InfoPage from './components/InfoPage.jsx';
import InfoSpotlightPage from './components/InfoSpotlightPage.jsx';
import LinkPage from './components/LinkPage.jsx';
import RepoApp from './components/RepoApp.jsx';
import RepoHome from './components/RepoHome.jsx';
import RepoNotFound from './components/RepoNotFound.jsx';
import SearchPage from './components/SearchPage.jsx';
import SearchResultPage from './components/SearchResultPage.jsx';
import SearchSpotlightPage from './components/SearchSpotlightPage.jsx';
import helper from './helper.jsx';

function initRepo() {
  if (Promise) {
    var catPromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/categories.json')
      .then(JSON.parse);
    var infoPromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/info.json')
      .then(JSON.parse);
    var resourcePromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/resources.json')
      .then(JSON.parse);
    var linkPromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/links.json')
      .then(JSON.parse);
    Promise.all([catPromise, infoPromise, resourcePromise, linkPromise])
      .then(replaceCategories)
      .then(createRouterConfig)
      .then(renderRoutes)
      .then(() => {
        ReactRouter.browserHistory.listen((state) => {
          if (state.action === 'PUSH') {
            helper.changeCanonical(state.pathname);
          }
        });
        helper.changeCanonical(window.location.pathname);
      });
  } else {
    throw new Error('Promise is not defined');
  }
}

function replaceCategories(arrays) {
  // Replace category names with category objects
  arrays[1].forEach((info) => {
    info.categories.forEach((cat, index) => {
      info.categories[index] = arrays[0].find((item) => {
        return item.title === cat;
      }) || info.categories[index];
    });
  });

  return arrays;
}

function createRouterConfig(results) {
  return {
    path: '/',
    component: RepoApp,
    indexRoute: {
      component: RepoHome
    },
    childRoutes: [
      {
        path: '/info',
        component: InfoPage,
        info: results[1]
      },
      {
        path: '/info/:info',
        component: InfoSpotlightPage,
        info: results[1]
      },
      {
        path: '/categories',
        component: CategoryPage,
        info: results[1],
        categories: results[0]
      },
      {
        path: '/categories/:category',
        component: CategoryListPage,
        info: results[1],
        categories: results[0]
      },
      {
        path: '/categories/:category/:info',
        component: CategorySpotlightPage,
        info: results[1],
        categories: results[0]
      },
      {
        path: '/elements',
        component: ElementPage,
        elements: results[2]
      },
      {
        path: '/elements/:element',
        component: ElementSpotlightPage,
        elements: results[2]
      },
      {
        path: '/links',
        component: LinkPage,
        links: results[3]
      },
      {
        path: '/search',
        component: SearchPage
      },
      {
        path: '/search/:search',
        component: SearchResultPage,
        info: results[1]
      },
      {
        path: '/search/:search/:info',
        component: SearchSpotlightPage,
        info: results[1]
      },
      {
        path: '*',
        component: RepoNotFound
      }
    ]
  }
}

function renderRoutes(routes) {
  return ReactDOM.render(
    <ReactRouter.Router history={ReactRouter.browserHistory}>
      {routes}
    </ReactRouter.Router>,
    document.querySelector('.repo-container')
  );
}

initRepo();
