import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TopBar, Content } from 'Components/Layout/styles'

// exportable
const findChampion = (champions, id) =>
  champions.find(item => item.champion.id === Number(id));

class DetailPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      item: findChampion(
        this.props.data,
        this.props.match.params.id
      )
    };
  }

  render() {
    const { champion } = this.state.item;
    return (
      <div>
        <TopBar>
          <Link to={`/`}>
            <h1>← {champion.name} SPI</h1>
          </Link>
        </TopBar>
        <Content>
        </Content>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    data: state.list.data,
    details: state.detail.data,
  };
}

export default connect(
  mapStateToProps
)(DetailPage);
