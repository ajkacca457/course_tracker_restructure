import React from 'react';
import { FallingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='loading text-center w-25 rounded'>
            <FallingLines
                color="#0040ff"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading' />
        </div>
    );
};

export default Loading;