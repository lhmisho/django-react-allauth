import React from 'react';
import axios from 'axios';
import Articles from '../Components/Articles';
import CustomForm from '../Components/Form'

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}
const BASE_URL = "http://127.0.0.1:8000/api";

class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    articles: res.data
                })
                // console.log(this.state)
            })
    }

    render() {
        return (
            <div>
                <Articles data={this.state.articles}/>
                <br />
                <h2>Create a new article</h2>
                <CustomForm requestType="post" articleID={null} buttonText="Create"/>
            </div>
        )
    }
}

export default ArticleList;