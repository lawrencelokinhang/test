import React, {Component} from 'react'
import moment from 'moment'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import '../css/card.css'

const avatar=  {
  backgroundColor: '#bdbdbd',
  fontColor: '#fafafa',
  position: 'static'
}

class CardToDisplay extends Component {
  constructor(props) {
    super(props)

    this.state={
      // update: false,
      data: [],
      loading: true
    }
  }
  
  render() {
    return (
      <a href={this.props.url} className="card-url">
        <Card className="card">
            <div className="title-container">
              <CardHeader 
                avatar={
                  <Avatar aria-label="recipe" style={avatar}>
                    {this.props.name.slice(0,1)}
                  </Avatar>
                }
                style={{textAlign: 'left'}}
                title={this.props.name}
                subheader={moment(this.props.publishedAt).format('YYYY-MM-DD hh:mm')}
                titleStyle={{fontSize: '2px'}}
              />
            </div>
            <CardMedia
              className="media"
              image={this.props.urlToImage}
              title={this.props.title}
            />
            <CardContent>
              <div className="title">
                {this.props.title}
              </div>
              <div className="Typography">
                {this.props.description}
              </div>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
        </Card>
      </a>
    );
  }
}

export default CardToDisplay