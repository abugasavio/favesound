import React from 'react';

function App({children}) {
    return <div>{children}</div>
}

App.propTypes = {
    children: React.PropTypes.func.isRequired
};

export default App;