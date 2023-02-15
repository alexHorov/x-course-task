import { Link, useMatch } from "react-router-dom";
import PropTypes from 'prop-types';
import React from 'react';
const CustomLink=({children, to, ...props})=>{
    const match = useMatch(to);
    return (
        <Link to={to} style={{color: match ? "red": "black"}}  {...props}>
            {children}
        </Link>
    )
}

export{CustomLink}


CustomLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};
