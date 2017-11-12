import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TopBar, Content } from 'Components/Layout/styles';
import Icon from 'Components/Icon';
import {
  BackgroundImage,
  Details,
  Champion,
  ChampionAvatar,
  Statistics,
  SecondaryTitle,
  Phases,
  Phase
} from './styles';

import { findChampion, toCapitalize, getMinutes } from './utils';

class DetailPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      item: findChampion(this.props.data, this.props.match.params.id),
    };
  }

  render() {
    const { champion } = this.state.item;
    const { details } = this.props;
    return (
      <div>
        <TopBar>
          <Link to={`/`}>
            <h1>
              <Icon type="backArrow" /> {champion.name} SPI
            </h1>
          </Link>
        </TopBar>
        <Content>
          <BackgroundImage
            style={{ backgroundImage: `url(${champion.background_url})` }}
          />
          <Details>
            <Champion>
              <ChampionAvatar>
                <img src={champion.image_url} alt={champion.name} />
              </ChampionAvatar>
            </Champion>
            <Statistics>
              <SecondaryTitle>Game Time SPI for {champion.name}</SecondaryTitle>
              <Phases>
                {details.game_phases.map(phase => (
                  <Phase>
                    <h4>{toCapitalize(phase.game_phase)}</h4>
                    <h4>{getMinutes(phase.game_phase)}</h4>
                    <h3>{phase.value}</h3>
                  </Phase>
                ))}
              </Phases>
            </Statistics>
          </Details>
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

export default connect(mapStateToProps)(DetailPage);
