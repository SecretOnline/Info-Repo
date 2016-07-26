import {
  InfoSpotlight,
  InfoCardList
} from '../components';
import helper from '../helper';

export default class CategoryListPage extends React.Component {
  render() {
    var category = this.props.route.categories.find((cat) => {
      return this.props.routeParams.category === helper.modTitle(cat.title);
    });

    var categoryList;
    if (category) {
      categoryList = this.props.route.info.filter((info) => {
        if (info.categories) {
          return info.categories.find((cat) => {
            return cat.title === category.title;
          });
        } else {
          return false;
        }
      });
    }

    var content = [];

    if (!category) {
      var spotlight = {
        title: 'Category Not Found',
        text: [
          'Unfortunately, we weren\'t able to find the category you listed',
          'If you came from outside the Information Repository, please check the URL and make sure it\'s valid'
        ],
        spoiler: true
      }
      content.push(<InfoSpotlight key="spotlight" data={spotlight} />)
    } else {
      content.push(<h1 key="list-title">Category: {category.title}</h1>);
      content.push(<InfoCardList key="list" info={categoryList} link={'/categories/' + encodeURIComponent(helper.modTitle(category.title))} />);
    }

    content.push(<h2 key="nav-title">Other</h2>)
    content.push(
      <div key="back" className="card">
        <ReactRouter.Link to="/categories">
          <div className="header">
            <h3 className="card-title">Back to Categories</h3>
          </div>
        </ReactRouter.Link>
      </div>
    );

    return (
      <div className="page category-page">
        {content}
      </div>
    );
  }
}
