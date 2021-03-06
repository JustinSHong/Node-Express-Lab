import React, { Component } from "react";
// material components
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";
// styles
import "../styles/Post.css";

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: this.props.post
		};
	}

	render() {
		const { title, contents } = this.state.post;
		// console.log("POST PROPS: ", this.props);
		// console.log("POST STATE: ", this.state);
		return (
			<Card className="Post">
				<CardHeader>
					<CardTitle title={contents} />
				</CardHeader>
				<CardText>{title}</CardText>
			</Card>
		);
	}
}

export default Post;
