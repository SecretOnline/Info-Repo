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

var catPromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/categories.json')
  .then(JSON.parse);
var infoPromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/info.json')
  .then(JSON.parse);
var resourcePromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/resources.json')
  .then(JSON.parse);
var linkPromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/links.json')
  .then(JSON.parse);
Promise.all([catPromise, infoPromise, resourcePromise, linkPromise])
  .then((results) => {
    // Replace category names with category objects
    results[1].forEach((info) => {
      info.categories.forEach((cat, index) => {
        info.categories[index] = results[0].find((item) => {
          return item.title === cat;
        }) || info.categories[index];
      });
    });

    return results;
  })
  .then((results) => {

    var routerConf = {
      path: '/',
      component: RepoApp,
      indexRoute: {
        component: RepoHome
      },
      childRoutes: [
        {
          path: '/info',
          component: InfoPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical('info');
          },
          info: results[1]
        },
        {
          path: '/info/:info',
          component: InfoSpotlightPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical(`info/${params.info}`);
          },
          info: results[1]
        },
        {
          path: '/categories',
          component: CategoryPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical('categories');
          },
          info: results[1],
          categories: results[0]
        },
        {
          path: '/categories/:category',
          component: CategoryListPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical(`categories/${params.category}`);
          },
          info: results[1],
          categories: results[0]
        },
        {
          path: '/categories/:category/:info',
          component: CategorySpotlightPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical(`categories/${params.category}/${params.info}`);
          },
          info: results[1],
          categories: results[0]
        },
        {
          path: '/elements',
          component: ElementPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical('elements');
          },
          elements: results[2]
        },
        {
          path: '/elements/:element',
          component: ElementSpotlightPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical(`elements/${params.element}`);
          },
          elements: results[2]
        },
        {
          path: '/links',
          component: LinkPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical('links');
          },
          links: results[3]
        },
        {
          path: '/search',
          onEnter: ({params}, redirect) => {
            helper.changeCanonical('search');
          },
          component: SearchPage
        },
        {
          path: '/search/:search',
          component: SearchResultPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical(`search/${params.search}`);
          },
          info: results[1]
        },
        {
          path: '/search/:search/:info',
          component: SearchSpotlightPage,
          onEnter: ({params}, redirect) => {
            helper.changeCanonical(`search/${params.search}/${params.info}`);
          },
          info: results[1]
        },
        {
          path: '*',
          onEnter: ({params}, redirect) => {
            helper.changeCanonical('404');
          },
          component: RepoNotFound
        }
      ]
    }

    ReactDOM.render(
      <ReactRouter.Router history={ReactRouter.browserHistory}>
        {routerConf}
      </ReactRouter.Router>,
      document.querySelector('.repo-container')
    );
  });
