import React from 'react' 
import {withRouter} from 'react-router'

const Location = ({location}) => (
    <div>Вы находитесь в "{location.pathname}"</div>
)

const LocationWithRouter = withRouter(Location);

export default LocationWithRouter;