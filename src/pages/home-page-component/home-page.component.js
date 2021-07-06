import React from 'react';

const HomePage = (props) => {

    //functional component of React
    return(
        <div className="HomePage">
            <p>This is the home page component</p>
            <p>{props.name}</p>
        </div>
    )

}

export default HomePage;