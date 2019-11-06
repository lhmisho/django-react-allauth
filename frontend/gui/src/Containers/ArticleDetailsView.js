import React from 'react';
import axios from 'axios';
import {Card} from 'antd';
import CustomForm from '../Components/Form'

const BASE_URL = "http://127.0.0.1:8000/api";

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {

        const articleID = this.props.match.params.articleID;
        axios.get(`${BASE_URL}/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                })
                // console.log(this.state)
                // console.log(this.props)
            })
    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <br />
                <CustomForm formData={this.state.article} requestType="put" articleID={this.props.match.params.articleID} buttonText="update"/>
            </div>
        )
    }
}

export default ArticleDetail;