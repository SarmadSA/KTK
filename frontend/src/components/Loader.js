import React from 'react';
import ContentLoader from "react-content-loader"

const Loader = props => (
    <ContentLoader
        height={160}
        width={300}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        {...props}
    >
        <rect x="34" y="298" rx="4" ry="4" width="100" height="13" />
        <rect x="262" y="302" rx="4" ry="4" width="50" height="8" />
        <rect x="17" y="71" rx="5" ry="5" width="304" height="108" />
        <rect x="54" y="230" rx="4" ry="4" width="219" height="13" />
        <rect x="33" y="200.45" rx="4" ry="4" width="271" height="14.43" />
        <rect x="54" y="250" rx="4" ry="4" width="219" height="13" />
        <rect x="152.34" y="289.07" rx="0" ry="0" width="90" height="33" />
        <rect x="51.34" y="338.07" rx="0" ry="0" width="233.28" height="36.9" />
    </ContentLoader>
);

export default Loader;