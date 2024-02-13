import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            posts: [] // Initialize posts state
        };
    }

    increaseCount = () => {
        // Use the updater function form of setState to ensure state updates correctly
        this.setState(prevState => ({
            count: prevState.count + 1
        }), () => {
            // Show an alert message when count increases by +1
            alert(`Count increased by +1. New count: ${this.state.count}`);
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                this.setState({ posts: data }); // Update the posts state
            })
        });
    }

    render() {
        return (
            <>
                <button type="button" className="btn btn-outline-info" onClick={this.increaseCount}>ClickOnMe</button>
                <div className='d-flex justify-content-center'>Counter: {this.state.count}</div>
                {/* Render posts using map function */}
                {this.state.posts.map((post, i) => {
                    return <div key={i}>{post.title}</div>; // Use a unique key for each element
                })}
            </>
        );
    }
}

export default Counter;
