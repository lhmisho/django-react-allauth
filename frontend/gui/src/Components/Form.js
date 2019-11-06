import React from 'react'
import axios from 'axios'
import {Button, Form, Input} from 'antd';

const BASE_URL = "http://127.0.0.1:8000/api/";
class CustomForm extends React.Component {


    changeHandler = (event) => {
        // console.log(event)
    }

    handleSubmit = (event, requestType, articleID) => {
        event.preventDefault()
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        
        switch (requestType){
            case 'post':
                return axios.post(`${BASE_URL}`,{
                        title: title,
                        content: content
                    })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))

            case 'put':
                return axios.put(`${BASE_URL}${articleID}/`,{
                        title: title,
                        content: content
                    })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
        }
    }
    render() {

        return (
            <div>
                <Form onSubmit={(event) => this.handleSubmit(event, this.props.requestType, this.props.articleID)}>
                    <Form.Item label="Title">
                        <Input name="title" placeholder="input title" onChange={this.changeHandler.bind(this)} />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="input content"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{this.props.buttonText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm;