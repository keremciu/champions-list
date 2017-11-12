import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TopBar, Content } from 'Components/Layout/styles'
import { ListItem, Avatar, ItemName, ItemNav } from './styles'
import Icon from 'Components/Icon'

class ListPage extends PureComponent {
  render() {
    return (
      <div>
        <TopBar>
          <h1>DojoMadness Code Challenge</h1>
        </TopBar>
        <Content>
          {this.props.data.map(item => (
            <Link to={`/${item.champion.id}`}>
              <ListItem>
                <Avatar>
                  <img src={item.champion.image_url} alt={item.champion.name} />
                </Avatar>
                <ItemName>
                  {item.champion.name}
                </ItemName>
                <ItemNav>
                  <Icon type='keyboardArrowRight' />
                </ItemNav>
              </ListItem>
            </Link>
          ))}
        </Content>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    data: state.list.data,
  };
}

export default connect(
  mapStateToProps
)(ListPage);
