import React, {Component} from 'react'
import { getTheNews } from '../api/getNews'
import CardToDisplay from '../card/index'
import '../css/home.css'
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from '../component/LoadingSpinner'

class NewsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // update: false,
      data: [],
      loading: true,
      hasMore: true,
    }
  }
  fetchMoreData = () => {
    if (this.state.data.length >= 100) {
      this.setState({ hasMore: false });
      return;
    }
 
    getTheNews().then((res) => {
      this.setState({
        data: this.state.data.concat(res)
      });
    }, 100);
  };

  componentDidMount() {
    getTheNews().then((res) => {
    this.setState({data: res, loading: false})}
    )
  }

  render(){
      return (
        <div className="Card-container">
          <InfiniteScroll className="infinite-scroller" 
            dataLength={this.state.data? this.state.data.length: 100}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={
              <div>
                <LoadingSpinner/>
              </div>
              }
            >
            {this.state.data.map(c => 
              <div className="card-align-flex">
                <CardToDisplay name={c.name} title={c.title} description={c.description} urlToImage={c.urlToImage} publishedAt={c.publishedAt} url={c.url}/>
              </div>
            )}
          </InfiniteScroll>
        </div>
      )
    }
}

export default NewsList
