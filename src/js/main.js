import CategoryListPage from './pages/CategoryListPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import CategorySpotlightPage from './pages/CategorySpotlightPage.jsx';
import ElementAllPage from './pages/ElementAllPage.jsx';
import ElementPage from './pages/ElementPage.jsx';
import ElementSpotlightPage from './pages/ElementSpotlightPage.jsx';
import InfoAllPage from './pages/InfoAllPage.jsx';
import InfoPage from './pages/InfoPage.jsx';
import InfoSpotlightPage from './pages/InfoSpotlightPage.jsx';
import LinkPage from './pages/LinkPage.jsx';
import RepoAbout from './pages/RepoAbout.jsx';
import RepoApp from './layout/RepoApp.jsx';
import RepoIntro from './pages/RepoIntro.jsx';
import RepoHome from './pages/RepoHome.jsx';
import RepoNotFound from './pages/RepoNotFound.jsx';
import RepoProblem from './pages/RepoProblem.jsx';
import SearchPage from './pages/SearchPage.jsx';
import SearchResultPage from './pages/SearchResultPage.jsx';
import SearchSpotlightPage from './pages/SearchSpotlightPage.jsx';
import helper from './helper';

function initRepo() {
  // Use Promise as test for ES6 support
  if (typeof Promise !== 'undefined') {
    Promise.resolve()
      .then(() => {
        addLoadText('Gathering information...');
      })
      .then(makeRequests)
      .then(replaceCategories)
      .then(createRouterConfig)
      .then(renderRoutes)
      .catch((err) => {
        addLoadText(err, true);
      })
      .then(() => {
        ReactRouter.browserHistory.listen((state) => {
          if (state.action === 'PUSH') {
            helper.changeCanonical(state.pathname);
          }
        });
        helper.changeCanonical(window.location.pathname);
      });
  } else {
    // Include es6 shim
    var s = document.createElement('script');
    s.async = 1;
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.1/es6-shim.min.js';

    s.addEventListener('load', initRepo);

    document.head.appendChild(s);

    addLoadText('Getting your browser up to speed...');
  }
}

function addLoadText(text, err) {
  var el = document.querySelector('.loading-box');
  if (el) {
    var t = document.createElement('p');
    if (err) {
      t.classList.add('error');
      t.textContent = `ERROR: ${text}`;
    } else {
      t.textContent = text;
    }
    el.appendChild(t);
  }
}

function makeRequests() {
  var catPromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/categories.json')
    .then(JSON.parse);
  var infoPromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/info.json')
    .then(JSON.parse);
  var resourcePromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/resources.json')
    .then(JSON.parse);
  var linkPromise = helper.httpGet('https://nmsdb-55119.firebaseio.com/articles.json')
    .then(JSON.parse);
  return Promise.all([catPromise, infoPromise, resourcePromise, linkPromise]);
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
    childRoutes: [{
      path: '/about',
      component: RepoAbout
    }, {
      path: '/introduction',
      component: RepoIntro
    }, {
      path: '/problem',
      component: RepoProblem
    }, {
      path: '/info',
      component: InfoPage,
      info: results[1]
    }, {
      path: '/info/all',
      component: InfoAllPage,
      info: results[1]
    }, {
      path: '/info/:info',
      component: InfoSpotlightPage,
      info: results[1]
    }, {
      path: '/categories',
      component: CategoryPage,
      info: results[1],
      categories: results[0]
    }, {
      path: '/categories/:category',
      component: CategoryListPage,
      info: results[1],
      categories: results[0]
    }, {
      path: '/categories/:category/:info',
      component: CategorySpotlightPage,
      info: results[1],
      categories: results[0]
    }, {
      path: '/elements',
      component: ElementPage,
      elements: results[2]
    }, {
      path: '/elements/all',
      component: ElementAllPage,
      elements: results[2]
    }, {
      path: '/elements/:element',
      component: ElementSpotlightPage,
      elements: results[2]
    }, {
      path: '/links',
      component: LinkPage,
      links: results[3]
    }, {
      path: '/search',
      component: SearchPage
    }, {
      path: '/search/:search',
      component: SearchResultPage,
      info: results[1]
    }, {
      path: '/search/:search/:info',
      component: SearchSpotlightPage,
      info: results[1]
    }, {
      path: '*',
      component: RepoNotFound
    }]
  };
}

function renderRoutes(routes) {
  var router = React.createElement(ReactRouter.Router, {
    history: ReactRouter.browserHistory
  }, routes);
  return ReactDOM.render(router, document.querySelector('.repo-container'));
}

initRepo();
