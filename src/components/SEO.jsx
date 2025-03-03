// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
}) => {
  // Set defaults if values aren't provided
  const siteTitle = title || 'Agent Alpha | Data Pipeline Solutions';
  const siteDescription = description || 'End-to-end data pipeline solutions and data engineering services by Justin Gupta, P.E.';
  const siteUrl = canonical || 'https://agentalpha.ai/';
  const siteImage = ogImage || 'https://agentalpha.ai/og-image.png';

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
    </Helmet>
  );
};

export default SEO;