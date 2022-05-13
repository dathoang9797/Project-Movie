import React from 'react';
import { SearchMapCSS } from './SearchMap.styles';
import { CheckOutlined } from '@ant-design/icons';

function SearchMap() {
  const { Move, Container, MoveContentSearch, MoveLabel, MoveSpan } = SearchMapCSS;

  return (
    <Container>
      <Move>
        <MoveLabel>
          <MoveSpan>
            <input type='checkbox' defaultChecked />
            <CheckOutlined />
          </MoveSpan>
          <MoveContentSearch>
            <span>Search as I move the map</span>
          </MoveContentSearch>
        </MoveLabel>
      </Move>
    </Container>
  );
}

export default SearchMap;
