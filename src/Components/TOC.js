import React, { Component } from "react";

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){ // 기존 props 와 새로운 props를 비교해서 render함수가 실행되고 안되고를 정해줄 수 있음
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }

    render() {
        let list = [];
        let data = this.props.data;
        let i = 0;

        while(i< data.length){
            list.push(<li key={data[i].id}>
                <a 
                    href={"/content/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>{data[i].title}</a></li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        );
    }
}

export default TOC;