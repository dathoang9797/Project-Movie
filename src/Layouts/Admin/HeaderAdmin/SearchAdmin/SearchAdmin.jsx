import { SearchOutlined } from '@ant-design/icons';
import { searchSelector } from '@Redux/Selector/SearchSelect';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchAdminCSS } from './SearchAdmin.styles';

function SearchAdmin({ content, dispatchAction }) {
  const dispatch = useDispatch();
  const { selectSearchState } = searchSelector;
  const searchValue = useSelector(selectSearchState);
  const { Container, Content, Input, Item } = SearchAdminCSS;

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(dispatchAction(value));
  };

  return (
    <Container>
      <Content>
        <Item>
          <SearchOutlined />
          <Input
            type='text'
            placeholder=' '
            name='search'
            childrenProps={content}
            onChange={handleChange}
            value={searchValue}
          />
        </Item>
      </Content>
    </Container>
  );
}

export default SearchAdmin;
