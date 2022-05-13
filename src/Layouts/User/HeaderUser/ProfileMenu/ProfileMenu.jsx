import { VectorSVG } from '@Assets/Svgs';
import { quanLyNguoiDungSelector } from '@Redux/Selector/QuanLyNguoiDungSelector';
import { quanLyNguoiDungAction } from '@Redux/Reducers/QuanLyNguoiDungSlice';
import { localService } from '@Services/LocalStorageService';
import _ from 'lodash';
import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileMenuCSS } from './ProfileMenu.styles';
import { useHistory } from 'react-router-dom';

function ProfileMenu() {
  const { AccountSVG, HamburgerSVG, GlobeSVG } = VectorSVG;
  const [visible, setVisible] = useState(false);
  const { updateUserInfo } = quanLyNguoiDungAction;
  const dispatch = useDispatch();
  const history = useHistory();
  const typeAdmin = process.env.REACT_APP_NGUOI_DUNG_ADMIN;
  const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
  const urlSignUp = process.env.REACT_APP_LINK_SIGN_UP;
  const urlProfile = process.env.REACT_APP_LINK_PROFILE;
  const urlDashBoard = process.env.REACT_APP_LINK_ADMIN_DASH_BOARD;
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const { selectUserInfo } = quanLyNguoiDungSelector;
  const userInfoStore = useSelector(selectUserInfo);
  const userInfo = localService.getUserInfo();
  const {
    Container,
    AccountMenu,
    BecomeHost,
    BurgerMenu,
    ChooseLanguage,
    PopupItemUserProfile,
    UserProfile,
    ButtonLogout,
  } = ProfileMenuCSS;

  const handleVisible = () => setVisible(!visible);

  useLayoutEffect(() => {
    const handleOnScroll = () => setVisible(false);
    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, []);

  const handleRenderAvatar = () => {
    if (!_.isEmpty(userInfoStore) && userInfoStore?.avatar) {
      return <img src={userInfoStore.avatar} alt={userInfoStore.avatar} />;
    }
    if (userInfo && userInfo.avatar) {
      return <img src={userInfo.avatar} alt={userInfo.avatar} />;
    }
    return <AccountSVG />;
  };

  const handleRenderTypeAdmin = () => {
    if (!_.isEmpty(userInfoStore) && userInfoStore?.type) {
      return userInfoStore.type;
    }
    if (userInfo && userInfo.type) {
      return userInfo.type;
    }
    return null;
  };

  const handleLogOut = () => {
    localService.removeUserInfo();
    dispatch(updateUserInfo({}));
    history.push(urlHome);
  };

  const contentPopupProfile = userInfo ? (
    <>
      {typeAdmin === handleRenderTypeAdmin() ? (
        <PopupItemUserProfile to={urlDashBoard}>DashBoard</PopupItemUserProfile>
      ) : null}
      <PopupItemUserProfile to={urlHome}> Home</PopupItemUserProfile>
      <PopupItemUserProfile to={urlProfile} onClick={handleVisible}>
        Profile
      </PopupItemUserProfile>
      <ButtonLogout to={urlHome} onClick={handleLogOut}>
        Logout
      </ButtonLogout>
      <hr />
      <PopupItemUserProfile to={'/'}>Host Your Home</PopupItemUserProfile>
      <PopupItemUserProfile to={'/'}>Host Your Experience</PopupItemUserProfile>
      <PopupItemUserProfile to={'/'}>Help</PopupItemUserProfile>
    </>
  ) : (
    <>
      <PopupItemUserProfile to={urlHome}> Home</PopupItemUserProfile>
      <PopupItemUserProfile to={urlSignIn}>Sign In</PopupItemUserProfile>
      <PopupItemUserProfile to={urlSignUp}>Sign Up</PopupItemUserProfile>
      <hr />
      <PopupItemUserProfile to={'/'}>Host Your Home</PopupItemUserProfile>
      <PopupItemUserProfile to={'/'}>Host Your Experience</PopupItemUserProfile>
      <PopupItemUserProfile to={'/'}>Help</PopupItemUserProfile>
      <hr />
    </>
  );

  return (
    <Container>
      <BecomeHost>Become a host</BecomeHost>
      <ChooseLanguage>
        <div>
          <HamburgerSVG />
        </div>
      </ChooseLanguage>

      <UserProfile
        trigger='click'
        visible={visible}
        onVisibleChange={(visible) => setVisible(visible)}
        placement='bottomRight'
        overlayClassName='wrapper-userprofile-popup'
        content={contentPopupProfile}
      >
        <button>
          <BurgerMenu>
            <GlobeSVG />
          </BurgerMenu>
          <AccountMenu>{handleRenderAvatar()}</AccountMenu>
        </button>
      </UserProfile>
    </Container>
  );
}

export default React.memo(ProfileMenu);
