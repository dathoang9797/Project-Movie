import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { VectorSVG } from '@Assets/Svgs';
import SearchAdmin from './SearchAdmin';
import { HeaderCSS } from '@Layouts/Admin/HeaderAdmin/HeaderAdmin.styles';
import { searchReducerAction } from '@Redux/Reducers/SearchSlice';
import { localService } from '@Services/LocalStorageService';
import { messageApp } from '@Utils/Common';
import { history } from '@Utils/Libs';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

function HeaderAdmin() {
  const userInfo = localService.getUserInfo();
  const { pathname } = useLocation();
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const urlProfile = process.env.REACT_APP_LINK_PROFILE;
  const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
  const urlUserManager = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  const urlRoomManager = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER;
  const urlLocationManager = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER;
  const urlEvaluateManager = process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER;
  const urlTicketsManager = process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER;
  const { setSearchValue } = searchReducerAction;
  const { AccountSVG } = VectorSVG;
  const {
    messagePlaceHolderSearchRoom,
    messagePlaceHolderSearchUser,
    messagePlaceHolderSearchLocation,
    messagePlaceHolderSearchEvaluate,
    messagePlaceHolderSearchTicket,
  } = messageApp;
  const { Container, Content, Dropdowns, Menu } = HeaderCSS;

  const handleLogOut = () => {
    localService.removeUserInfo();
    history.push(urlSignIn);
  };

  const items = [
    {
      label: 'Home',
      onClick: () => history.push(urlHome),
      icon: <AiOutlineHome />,
    },
    {
      label: 'Profile',
      onClick: () => history.push(urlProfile),
      icon: <UserOutlined />,
    },
    {
      label: ' LogOut',
      onClick: () => handleLogOut(),
      icon: <LogoutOutlined />,
    },
  ];

  const renderSearch = () => {
    switch (true) {
      case pathname === urlUserManager:
        return (
          <SearchAdmin content={messagePlaceHolderSearchUser} dispatchAction={setSearchValue} />
        );

      case pathname === urlRoomManager:
        return (
          <SearchAdmin content={messagePlaceHolderSearchRoom} dispatchAction={setSearchValue} />
        );

      case pathname === urlLocationManager:
        return (
          <SearchAdmin content={messagePlaceHolderSearchLocation} dispatchAction={setSearchValue} />
        );

      case pathname === urlEvaluateManager:
        return (
          <SearchAdmin content={messagePlaceHolderSearchEvaluate} dispatchAction={setSearchValue} />
        );

      case pathname === urlTicketsManager:
        return (
          <SearchAdmin content={messagePlaceHolderSearchTicket} dispatchAction={setSearchValue} />
        );
      default: {
        return null;
      }
    }
  };

  return (
    <Container>
      <Content>
        {renderSearch()}
        <Dropdowns
          placement='bottomRight'
          overlay={<Menu items={items} />}
          arrow={{ pointAtCenter: true }}
        >
          <button aria-label='Account' aria-haspopup='true'>
            {userInfo.avatar ? (
              <img
                className='w-10 h-10'
                src={userInfo.avatar}
                alt={userInfo.avatar}
                aria-hidden='true'
              />
            ) : (
              <AccountSVG className='w-8 h-8' />
            )}
          </button>
        </Dropdowns>
      </Content>
    </Container>
  );
}

export default React.memo(HeaderAdmin);
