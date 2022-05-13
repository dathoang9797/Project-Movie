import React from 'react';
import { quanLyViTriSelector } from '@Redux/Selector/QuanLyViTriSelector';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { capitalize } from '@Utils/Common';
import { LocationManagerProfileCSS } from './LocationManagerProfilePage.styles';
import { Redirect } from 'react-router';

function LocationManagerProfilePage() {
  const urlLocationsManager = process.env.REACT_APP_LINK_ADMIN_LOCATIONS_MANAGER;
  const { ContainerCSS, ContentCSS, ImageCSS, ProfileCSS, DescCSS, TitleCSS } =
    LocationManagerProfileCSS;
  const { selectChiTietViTri } = quanLyViTriSelector;
  const chiTietViTri = useSelector(selectChiTietViTri, _.isEqual);
  const isHasChiTietViTri = _.isEmpty(chiTietViTri);
  const { image, province, name, country, valueate } = chiTietViTri;
  
  return isHasChiTietViTri ? (
    <Redirect to={urlLocationsManager} />
  ) : (
    <ContainerCSS>
      <ContentCSS>
        <ImageCSS alt={image} src={image} />
        <ProfileCSS>
          <TitleCSS>{name}</TitleCSS>
          <DescCSS>
            <div>
              <span>
                <span>{capitalize(province)}: </span>
                <span>{province}</span>
              </span>
            </div>
            <div>
              <span>
                <span>{capitalize(country)}: </span>
                <span>{country}</span>
              </span>
            </div>
            <div>
              <span>
                <span>Valueate: </span>
                <span>{valueate}</span>
              </span>
            </div>
          </DescCSS>
        </ProfileCSS>
      </ContentCSS>
    </ContainerCSS>
  );
}

export default LocationManagerProfilePage;
