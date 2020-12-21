import React, { Component } from 'react';

class Controls extends Component{
    render(){
        return(
            <ul>
                <li><a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>CREATE</a></li>
                <li><a href="/">UPDATE</a></li>
                <li><a href="/">DELETE</a></li>
            </ul>
        );
    }
}

export default Controls;