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
