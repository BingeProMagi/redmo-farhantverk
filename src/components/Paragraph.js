import React from 'react';

const Paragraph = ({ children, classname }) => {
    if ( children ) {
        return (
            <p className={classname}>{children}</p>
        );
    } else {
        return (<p></p>);
    }
};

export default Paragraph;