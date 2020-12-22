import React, { Component } from 'react';

class Controls extends Component {
    render() {
        return (
            <ul className="ul2">
                <li><a href="/create" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>CREATE</a></li>
                <li><a href="/update" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>UPDATE</a></li>
                <li><input onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)} type="button" value="DELETE"></input></li>
            </ul>
        );
    }
}

export default Controls;