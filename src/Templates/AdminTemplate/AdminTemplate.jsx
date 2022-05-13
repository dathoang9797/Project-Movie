import HeaderAdmin from '@Layouts/Admin/HeaderAdmin';
import SidebarAdmin from '@Layouts/Admin/SidebarAdmin';
import { localService } from '@Services/LocalStorageService';
import { messageApp, showWarning } from '@Utils/Common';
import { Layout } from 'antd';
import React, { useEffect, useLayoutEffect } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { AdminTemplateCSS } from './AdminTemplate.style';
import ButtonScrollTop from '@Components/ButtonScrollTop';

function AdminTemplate({ Component, ...restRoute }) {
  const userInfo = localService.getUserInfo();
  const { pathname } = useLocation();
  const urlAdminUser = process.env.REACT_APP_LINK_ADMIN_USER_MANAGER;
  const urlAdminRoom = process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER;
  const urlAdminLocation = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER;
  const urlSignIn = process.env.REACT_APP_LINK_SIGN_IN;
  const urlHome = process.env.REACT_APP_LINK_HOME;
  const urlAdminTicket = process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER;
  const urlAdminEvaluate = process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER;
  const typeAdmin = process.env.REACT_APP_NGUOI_DUNG_ADMIN;
  const { Container } = AdminTemplateCSS;
  const { messageAuthorization } = messageApp;

  useEffect(() => window.scrollTo(0, 0));

  useLayoutEffect(() => {
    const domAdminTemPlate = document.getElementById('admin-template');
    if (domAdminTemPlate) {
      if (
        pathname === urlAdminUser ||
        pathname === urlAdminRoom ||
        pathname === urlAdminLocation ||
        pathname === urlAdminTicket ||
        pathname === urlAdminEvaluate
      ) {
        domAdminTemPlate.style.minWidth = '345px';
        return;
      }
      domAdminTemPlate.style.minWidth = 'unset';
    }
  }, [pathname, urlAdminEvaluate, urlAdminLocation, urlAdminRoom, urlAdminTicket, urlAdminUser]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const antLayoutSiderTrigger = document.querySelector('.ant-layout-sider-trigger');
      const sideBar = document.querySelector('#side-bar');
      const buttonScrollTop = document.querySelector('#scroll-top');

      if (antLayoutSiderTrigger && sideBar) {
        if (
          pathname === urlAdminUser ||
          pathname === urlAdminRoom ||
          pathname === urlAdminLocation ||
          pathname === urlAdminTicket ||
          pathname === urlAdminEvaluate
        ) {
          if (!window.scrollX) {
            antLayoutSiderTrigger.style.opacity = 1;
            antLayoutSiderTrigger.style.visibility = 'visible';
            sideBar.style.overflow = '';
            buttonScrollTop.classList.add('fade-in');
            return;
          }
          antLayoutSiderTrigger.style.opacity = 0;
          antLayoutSiderTrigger.style.visibility = 'hidden';
          buttonScrollTop.classList.remove('fade-in');
          sideBar.style.overflow = 'hidden';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, urlAdminEvaluate, urlAdminLocation, urlAdminRoom, urlAdminTicket, urlAdminUser]);

  useEffect(() => {
    if (userInfo && userInfo.type !== typeAdmin) {
      setTimeout(() => {
        showWarning(messageAuthorization);
      }, 500);
    }
  }, [messageAuthorization, typeAdmin, userInfo]);

 
  const handleRender = () => {
    switch (true) {
      case !userInfo: {
        return <Redirect to={urlSignIn} />;
      }

      case userInfo.type !== typeAdmin: {
        return <Redirect to={urlHome} />;
      }

      default:
        return null;
    }
  };

  return (
    <>
      {handleRender() || (
        <Route
          {...restRoute}
          render={(propsRoute) => (
            <Container>
              <Layout className='min-h-screen'>
                <SidebarAdmin />
                <Layout id='admin-template'>
                  <HeaderAdmin />
                  <Component {...propsRoute} />
                  <ButtonScrollTop className='fade-in' />
                </Layout>
              </Layout>
            </Container>
          )}
        />
      )}
    </>
  );
}

export default AdminTemplate;
