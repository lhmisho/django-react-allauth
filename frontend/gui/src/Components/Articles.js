import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Icon, List} from 'antd';

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

const BASE_URL = "http://127.0.0.1:8000/api";
class Articles extends React.Component {
    render() {
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={this.props.data}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText type="star-o" text="156" key="list-vertical-star-o"/>,
                            <IconText type="like-o" text="156" key="list-vertical-like-o"/>,
                            <IconText type="message" text="2" key="list-vertical-message"/>,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar}/>}
                            title={<Link to={`/${item.id}`}>{item.title}</Link>}
                            description={item.description}
                        />
                        {item.content}
                        {/*<Button type="danger" onSubmit={this.deleteHandler(item.id)}>Delete</Button>*/}
                    </List.Item>
                )}
            />
        )
    }

}

export default Articles;