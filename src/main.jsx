import CategoryCard from './components/CategoryCard.jsx';
import CategoryCardList from './components/CategoryCardList.jsx';
import CategoryListPage from './components/CategoryListPage.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import CategorySpotlightPage from './components/CategorySpotlightPage.jsx';
import ElementCard from './components/ElementCard.jsx';
import ElementCardList from './components/ElementCardList.jsx';
import ElementPage from './components/ElementPage.jsx';
import ElementSpotlight from './components/ElementSpotlight.jsx';
import ElementSpotlightPage from './components/ElementSpotlightPage.jsx';
import InfoCard from './components/InfoCard.jsx';
import InfoCardList from './components/InfoCardList.jsx';
import InfoPage from './components/InfoPage.jsx';
import InfoSpotlight from './components/InfoSpotlight.jsx';
import InfoSpotlightPage from './components/InfoSpotlightPage.jsx';
import LinkCard from './components/LinkCard.jsx';
import LinkGroup from './components/LinkGroup.jsx';
import LinkGroupList from './components/LinkGroupList.jsx';
import LinkPage from './components/LinkPage.jsx';
import RepoApp from './components/RepoApp.jsx';
import RepoFooter from './components/RepoFooter.jsx';
import RepoHeader from './components/RepoHeader.jsx';
import RepoHome from './components/RepoHome.jsx';
import RepoNav from './components/RepoNav.jsx';
import RepoNotFound from './components/RepoNotFound.jsx';
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
  .then(function(results) {
    // Replace category names with category objects
    results[1].forEach(function(info) {
      info.categories.forEach(function(cat, index) {
        info.categories[index] = results[0].find(function(item) {
          return item.title === cat;
        }) || info.categories[index];
      });
    });

    return results;
  })
  .then(function(results) {

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
          path: '*',
          component: RepoNotFound
        }
      ]
    }

    ReactDOM.render(
      <ReactRouter.Router history={ReactRouter.hashHistory}>
        {routerConf}
      </ReactRouter.Router>,
      document.querySelector('.repo-container')
    );
  });
