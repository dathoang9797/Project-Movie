import { CarryOutOutlined, DashboardOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { VectorSVG } from '@Assets/Svgs';
import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GiTicket } from 'react-icons/gi';
import { IoLocationOutline } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';
import { SiderBarCSS } from './SidebarAdmin.styles';

function Siderbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [widthCollapsed, setWidthCollapsed] = useState(50);
  const [trigger, setTrigger] = useState('');
  const { pathname } = useLocation();
  const { LogoSVG, CloseIconSVG } = VectorSVG;
  const { Menus, SiderBar, BuggerSiderBar } = SiderBarCSS;
  const urlHome = process.env.REACT_APP_LINK_HOME;

  const onCollapse = (collapsed) => {
    const domAntLayout = document.querySelector('.ant-layout');
    const domButtonSideCloseIcon = document.querySelector('#bugger-sider-close-icon');
    if (!collapsed) {
      domAntLayout.classList.add('opacity');
      if (domButtonSideCloseIcon) {
        domButtonSideCloseIcon.classList.add('opened');
        domButtonSideCloseIcon.style.background = 'white';
      }
      setCollapsed(collapsed);
      return;
    }
    if (domButtonSideCloseIcon) {
      domButtonSideCloseIcon.classList.remove('opened');
      domButtonSideCloseIcon.style.background = 'transparent';
    }
    domAntLayout.classList.remove('opacity');
    setCollapsed(collapsed);
  };

  const items = [
    {
      label: <NavLink to={process.env.REACT_APP_LINK_ADMIN_DASH_BOARD}>DashBoard</NavLink>,
      icon: <DashboardOutlined />,
      key: process.env.REACT_APP_LINK_ADMIN_DASH_BOARD,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_USER_MANAGER}>Quản lý người dùng</NavLink>
      ),
      icon: <UsergroupAddOutlined />,
      key: process.env.REACT_APP_LINK_ADMIN_USER_MANAGER,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER}>
          Quản lý thông tin vị trí
        </NavLink>
      ),
      icon: <IoLocationOutline />,
      key: process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER}>Quản lý phòng cho thuê</NavLink>
      ),
      icon: <CarryOutOutlined />,
      key: process.env.REACT_APP_LINK_ADMIN_ROOM_MANAGER,
    },
    {
      label: (
        <NavLink to={process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER}>Quản lý đánh giá</NavLink>
      ),
      icon: <AiFillLike />,
      key: process.env.REACT_APP_LINK_ADMIN_EVALUATE_MANAGER,
    },
    {
      label: <NavLink to={process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER}>Quản lý Vé</NavLink>,
      icon: <GiTicket />,
      key: process.env.REACT_APP_LINK_ADMIN_TICKETS_MANAGER,
    },
  ];

  return (
    <>
      <SiderBar
        collapsible
        collapsed={collapsed}
        id='side-bar'
        width={230}
        collapsedWidth={widthCollapsed}
        onBreakpoint={(broken) => {
          if (broken) {
            setWidthCollapsed(0);
            setTrigger(
              <BuggerSiderBar id='bugger-sider-close-icon'>
                <CloseIconSVG />
              </BuggerSiderBar>
            );
          } else {
            setWidthCollapsed(50);
            setTrigger('');
          }
        }}
        onCollapse={onCollapse}
        breakpoint='lg'
        trigger={trigger}
      >
        <div>
          <NavLink to={urlHome}>
            <LogoSVG />
          </NavLink>
        </div>
        <Menus defaultSelectedKeys={[pathname]} mode='inline' items={items} />
      </SiderBar>
    </>
  );
}

export default React.memo(Siderbar);
