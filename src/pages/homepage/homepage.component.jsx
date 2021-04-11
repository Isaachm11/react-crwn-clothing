import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'

// Functional component
const HomePage = (props) => (
    <div className="homepage">
        <Directory />
    </div>
)

export default HomePage;