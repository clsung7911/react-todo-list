import './App.css';
import TOC from './Components/TOC';
import Header from './Components/Header';
import React, { Component } from 'react';
import Controls from './Components/Controls';
import CreateContents from './Components/CreateContents';
import ReadContents from './Components/ReadContents';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      seleced_contents_id : 2,
      header:{title:'Hello', sub:'TodoList를 만들자'},
      contents: [
        {id:1, title:'TEST1', desc:'투두리스트1'},
        {id:2, title:'TEST2', desc:'투두리스트2'},
        {id:3, title:'TEST3', desc:'투두리스트3'}
      ],
      view:{title:'REACT!!', desc:'리액트 처음이당'}
    };
  }
  getReadContent(){
    let i = 0;
    while(i<this.state.contents.length){
      let data = this.state.contents[i];
      if(data.id === this.state.seleced_contents_id){
        return data;
        break;
      }
      i = i + 1;
    }
  }
  render(){
    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.view.title;
      _desc = this.state.view.desc;
      _article = <ReadContents title={_title} desc={_desc}></ReadContents>
    }else if(this.state.mode === 'read'){
      let _content = this.getReadContent();
      _article = <ReadContents title={_content.title} desc={_content.desc}></ReadContents>
    }else if(this.state.mode === 'create'){
      //_article = <CreateContents></CreateContents>
    }else if(this.state.mode === 'update'){
      // 업데이트 할 곳
    }else if(this.state.mode === 'delete'){
      
    }

    return (
      <div className='App'>
        <Header 
          title={this.state.header.title} 
          sub={this.state.header.sub}
          onChangePage = {function (){
            this.setState({
              mode : 'welcome'
          });
          }.bind(this)}
        >
        </Header>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode : 'read',
              seleced_contents_id : Number(id) 
            });
            debugger;
          }.bind(this)}
          data={this.state.contents}></TOC>
        <ReadContents title={_title} desc={_desc}></ReadContents>
        <Controls
          onChangeMode={function(_mode){
            if(_mode === 'delete'){
              console.log("뚠뚠");
            }else{
              this.setState({
                mode: _mode
              });
            }
          }.bind(this)}>
          </Controls>
      </div>
    );
  }
}

export default App;
