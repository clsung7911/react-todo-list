import React, { Component } from "react";


class CreateContents extends Component{
    render(){
        debugger;
        return (
            <article>
                <h2>CREATE</h2>
                <form>
                    <input type="text" name="title" placeholder="title"/>
                    <input type="text" name="description" placeholder="description"/>
                    <input type="submit" />
                </form>
            </article>
        );
    }
}

export default CreateContents;