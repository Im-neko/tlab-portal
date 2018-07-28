import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import AuthService from "../service/AuthService";
// import * as env from "../environment/environment";
import Loader from "../common-component/Loader";
import Footer from "../common-component/Footer";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {loader: true}
    this.auth = new AuthService()
  }

  async componentWillMount () {
    await this.getTimeLine();
    this.setState({loader: false});
  }

  async getTimeLine() {
    try {
      const path = 'timeline'
      const res = await this.auth.get(path, {limit:10, page:1});
      this.setState({datas: res.data.articles})
    } catch(e) {
      console.log(e)
      this.setState({message: 'error'});
    }
  }

  render () {
    if (this.state.loader){
      return (
        <div className="timeline_container">
          <Loader isActive={this.state.loader}/>
        </div>
      );
    } else {
      let datas = []
      for (var i in this.state.datas) {
        const icon = this.state.datas[i].icon;
        const title = this.state.datas[i].title;
        const author = this.state.datas[i].author;
        datas.push(
          <div className="user_container" key={'articleCard_'+i}>
            <li>
              <Divider inset />
            </li>
            <ListItem>
              <Avatar>
                <img src={icon} className="icon" alt="user_icon" />
              </Avatar>
              <ListItemText primary={title} secondary={author} />
            </ListItem>
            <Footer />
          </div>
        );
      }
      return (
        <div className="timeline_container">
        <List>
          {datas}
          <li>
            <Divider inset />
          </li>
        </List>
        <Footer />
        </div>
      );
    }
  }
}
