import {
  InfoSpotlight,
  InfoCardList
} from '../components';
import helper from '../helper';

export default class CategorySpotlightPage extends React.Component {
  render() {
    var category = this.props.route.categories.find((cat) => {
      return this.props.routeParams.category === helper.modTitle(cat.title);
    });

    var spotlight = this.props.route.info.find((info) => {
      return this.props.routeParams.info === helper.modTitle(info.title);
    });
    var highlighted = [];

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

    if (this.props.location.hash) {
      highlighted = this.props.location.hash
        .substr(1)
        .split(',')
        .map((item) => {
          try {
            return Number.parseInt(item);
          } catch (e) {
            return null;
          }
        })
        .filter((item) => {
          return item !== null;
        });
    }

    if (!category) {
      spotlight = {
        title: 'Category Not Found',
        text: [
          'Unfortunately, we weren\'t able to find the category you listed',
          'If you came from outside the Information Repository, please check the URL and make sure it\'s valid'
        ],
        spoiler: true
      }
    } else if (!spotlight) {
      spotlight = {
        title: 'Info Not Found',
        text: [
          'Unfortunately, we weren\'t able to find any information on what you were looking for',
          'If you came from outside the Information Repository, please check the URL and make sure it\'s valid'
        ],
        spoiler: true
      }
    }

    var content = [
      <InfoSpotlight key="spotlight" data={spotlight} link="/info" highlighted={highlighted} />
    ];

    if (categoryList && categoryList.length) {
      content.push(<h2 key="list-title">Category: {category.title}</h2>);
      content.push(<InfoCardList key="list" info={categoryList} link={`/categories/${encodeURIComponent(helper.modTitle(category.title))}`} />)
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
      <div class="page category-page">
        {content}
      </div>
    );
  }
}
