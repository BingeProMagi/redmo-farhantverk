import React from 'react';

const Heading = ({ children, classname }) => {
    if ( children ) {
        return (
            <h1 className={classname}>{children}</h1>
        );
    } else {
        return (<h1></h1>);
    }
};

export default Heading;