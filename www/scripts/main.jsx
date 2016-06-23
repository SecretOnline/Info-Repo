import React from 'react';
import ReactDOM from 'react-dom';
import CategoryCard from './components/CategoryCard';
import CategoryCardList from './components/CategoryCardList';
import CategoryListPage from './components/CategoryListPage';
import CategoryPage from './components/CategoryPage';
import CategorySpotlightPage from './components/CategorySpotlightPage';
import ElementCard from './components/ElementCard';
import ElementCardList from './components/ElementCardList';
import ElementPage from './components/ElementPage';
import ElementSpotlight from './components/ElementSpotlight';
import ElementSpotlightPage from './components/ElementSpotlightPage';
import InfoCard from './components/InfoCard';
import InfoCardList from './components/InfoCardList';
import InfoPage from './components/InfoPage';
import InfoSpotlight from './components/InfoSpotlight';
import InfoSpotlightPage from './components/InfoSpotlightPage';
import LinkCard from './components/LinkCard';
import LinkGroup from './components/LinkGroup';
import LinkGroupList from './components/LinkGroupList';
import LinkPage from './components/LinkPage';
import RepoApp from './components/RepoApp';
import RepoFooter from './components/RepoFooter';
import RepoHeader from './components/RepoHeader';
import RepoHome from './components/RepoHome';
import RepoNav from './components/RepoNav';
import RepoNotFound from './components/RepoNotFound';
import helper from './helper';

var catPromise = repo.get('https://nmsdb-55119.firebaseio.com/categories.json')
  .then(JSON.parse);
var infoPromise = repo.get('https://nmsdb-55119.firebaseio.com/info.json')
  .then(JSON.parse);
var resourcePromise = repo.get('https://nmsdb-55119.firebaseio.com/resources.json')
  .then(JSON.parse);
var linkPromise = repo.get('https://nmsdb-55119.firebaseio.com/links.json')
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
      component: repo.RepoApp,
      indexRoute: {
        component: repo.RepoHome
      },
      childRoutes: [
        {
          path: '/info',
          component: repo.InfoPage,
          info: results[1]
        },
        {
          path: '/info/:info',
          component: repo.InfoSpotlightPage,
          info: results[1]
        },
        {
          path: '/categories',
          component: repo.CategoryPage,
          info: results[1],
          categories: results[0]
        },
        {
          path: '/categories/:category',
          component: repo.CategoryListPage,
          info: results[1],
          categories: results[0]
        },
        {
          path: '/categories/:category/:info',
          component: repo.CategorySpotlightPage,
          info: results[1],
          categories: results[0]
        },
        {
          path: '/elements',
          component: repo.ElementPage,
          elements: results[2]
        },
        {
          path: '/elements/:element',
          component: repo.ElementSpotlightPage,
          elements: results[2]
        },
        {
          path: '/links',
          component: repo.LinkPage,
          links: results[3]
        },
        {
          path: '*',
          component: repo.RepoNotFound
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
