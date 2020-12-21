import React, { Component } from "react";


class CreateContents extends Component{
    render(){
        return (
            <article>
                <h2>CREATE</h2>
                <form action="/create-form" method="POST" onSubmit={
                    function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                    }.bind(this)
                }>
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <p><textarea name="desc" placeholder="desc"></textarea></p>
                    <p><input type="submit" /></p>
                </form>
            </article>
        );
    }
}

export default CreateContents;