import React from 'react';
function ResultDisplay({sum}) {
    console.log('renderResult');
    
    return (
        <div className="input">
            {sum}
        </div>
    );
}

export default React.memo(ResultDisplay);