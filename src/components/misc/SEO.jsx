import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata.hook';

const SEO = ({ pageTitle, children }) => {
  const { title } = useSiteMetadata();
  const seo = {
    title: pageTitle || title,
  }
  return (
    <>
      <title id='title'>{seo.title}</title>
      {children}
    </>
  );
}

export default SEO;