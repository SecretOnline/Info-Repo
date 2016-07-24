import CategoryListPage from './pages/CategoryListPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import CategorySpotlightPage from './pages/CategorySpotlightPage.jsx';
import ElementAllPage from './pages/ElementAllPage.jsx';
import ElementPage from './pages/ElementPage.jsx';
import ElementSpotlightPage from './pages/ElementSpotlightPage.jsx';
import InfoAllPage from './pages/InfoAllPage.jsx';
import InfoPage from './pages/InfoPage.jsx';
import InfoSpotlightPage from './pages/InfoSpotlightPage.jsx';
import LinkGroupPage from './pages/LinkGroupPage.jsx';
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
      .then(organiseResults)
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

function replaceCategories(data) {
  // Replace category names with category objects
  data.info.forEach((info) => {
    info.categories.forEach((cat, index) => {
      info.categories[index] = data.categories.find((item) => {
        return item.title === cat;
      }) || info.categories[index];
    });
  });

  return data;
}

function organiseResults(results) {
  return {
    categories: results[0],
    info: results[1],
    elements: results[2],
    links: results[3]
  };
}

function createRouterConfig(data) {
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
      info: data.info
    }, {
      path: '/info/all',
      component: InfoAllPage,
      info: data.info
    }, {
      path: '/info/:info',
      component: InfoSpotlightPage,
      info: data.info
    }, {
      path: '/categories',
      component: CategoryPage,
      info: data.info,
      categories: data.categories
    }, {
      path: '/categories/:category',
      component: CategoryListPage,
      info: data.info,
      categories: data.categories
    }, {
      path: '/categories/:category/:info',
      component: CategorySpotlightPage,
      info: data.info,
      categories: data.categories
    }, {
      path: '/elements',
      component: ElementPage,
      elements: data.elements
    }, {
      path: '/elements/all',
      component: ElementAllPage,
      elements: data.elements
    }, {
      path: '/element',
      onEnter: (state, redirect) => {
        redirect('/elements');
      }
    }, {
      path: '/element/:element',
      component: ElementSpotlightPage,
      elements: data.elements
    }, {
      path: '/links',
      component: LinkPage,
      links: data.links
    }, {
      path: '/links/:group',
      component: LinkGroupPage,
      links: data.links
    }, {
      path: '/search',
      component: SearchPage
    }, {
      path: '/search/:search',
      component: SearchResultPage,
      info: data.info
    }, {
      path: '/search/:search/:info',
      component: SearchSpotlightPage,
      info: data.info
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
