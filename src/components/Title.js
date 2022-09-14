import React from 'react';

const Title = ({ children, classname }) => {
    if ( children ) {
        return (
            <h2 className={classname}>{children}</h2>
        );
    } else {
        return (<h2></h2>);
    }
};

export default Title;