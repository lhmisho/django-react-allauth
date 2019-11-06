import React from 'react'
import {Route} from "react-router-dom";
import ArticleList from './Containers/ArticleListView'
import ArticleDetail from './Containers/ArticleDetailsView'
import Login from "./Containers/Login";
import Signup from './Containers/Signup';

const BaseRoute = () =>(
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/article/:articleID' component={ArticleDetail} />
        <Route exact path='/login/' component={Login} />{ " "}
        <Route exact path='/signup/' component={Signup} />{ " "}
    </div>
)
export default BaseRoute