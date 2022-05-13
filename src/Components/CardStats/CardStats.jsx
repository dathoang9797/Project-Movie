import React from 'react';
import { CartStatsCSS } from './CardStats.styles';

function CardStats(props) {
  const { Container, Content, Item, ItemIcon, ItemTitle } = CartStatsCSS;
  const { statSubtitle, statTitle, StatIconName, statIconColor } = props;
  return (
    <Container>
      <Content>
        <Item>
          <ItemTitle>
            <h1>{statSubtitle}</h1>
            <span>{statTitle}</span>
          </ItemTitle>
          <ItemIcon statIconColor={statIconColor}>
            <div>
              <StatIconName />
            </div>
          </ItemIcon>
        </Item>
      </Content>
    </Container>
  );
}

export default React.memo(CardStats);
