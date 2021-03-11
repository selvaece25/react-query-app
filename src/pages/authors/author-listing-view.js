import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";


const truncate = (text) => {
  return text.length > 18 ? text.substring(0, 13) + '...' : text;
};

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 5%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 1.1rem;
  height: 100%;
  float: left;
  margin: 30px;
  color: #440a67;
  vertical-align: middle;
`;

const CardCoverImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 245px;
`;

const CardHeading = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.5rem !important;
  margin-bottom: 0 !important;
  font-size: 1rem;
`;

const CardFooterContainer = styled.div`
  text-align: left !important;
  padding-top: 0.5rem !important;
  margin-top: 0.5rem !important;
  border-top: 1px solid #dee2e6 !important;
`;

const CardLink = styled.div`
  color: #ae4ba8;
  float: left;
  font-size: 80%;
  font-weight: 400;
`;

const AuthorListView = memo(({ user }) => {
  const { picture, firstName, lastName, id } = user;
  const { t: translation  } = useTranslation();
  return (
    <CardContainer>
      <CardCoverImage src={picture} ></CardCoverImage>
      <CardHeading>{truncate(`${firstName} ${lastName}`)}</CardHeading>
      <CardFooterContainer>
        <CardLink>
          <Link className='nav-link' to={`/profile/${id}`}>
            { truncate(translation("viewAllPosts")) }
          </Link>
        </CardLink>
        <CardLink>
        <Link className='nav-link' to={`/profile/${id}`}>
        { truncate(translation("viewFullProfile")) }
          </Link>
        </CardLink>
      </CardFooterContainer>
    </CardContainer>
  );
});

export default AuthorListView;
