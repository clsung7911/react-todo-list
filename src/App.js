import './App.css';
import TOC from './Components/TOC';
import Header from './Components/Header';
import React, { Component } from 'react';
import Controls from './Components/Controls';
import CreateContents from './Components/CreateContents';
import ReadContents from './Components/ReadContents';
import UpdateContents from './Components/UpdateContents';

class App extends Component{
  constructor(props){
    super(props);
    this.max_contents_id = 3; // contents의 마지막 id값으로 -> 저 안에 추가할거라서... state에 넣지 않은 이유는 불필요해서 굳이 넣을 필요 음슴
    this.state = {
      mode:'welcome',
      selected_contents_id : 2,
      header:{title:'Hello', sub:'TodoList를 만들자'},
      contents: [
        {id:1, title:'TodoList_1', desc:'리액트 공부하기'},
        {id:2, title:'TodoList_2', desc:'리액트 응용하기'},
        {id:3, title:'TodoList_3', desc:'자바도 공부하기'}
      ],
      view:{title:'REACT!!', desc:'리액트 처음이당'}
    };
  }
  getReadContent(){
    let i = 0;
    while(i<this.state.contents.length){
      let data = this.state.contents[i];
      if(data.id === this.state.selected_contents_id){
        return data;
        //break;
      }
      i = i + 1;
    }
  }

  getContent(){
    let _title, _desc, _article, _content = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.view.title;
      _desc = this.state.view.desc;
      _article = <ReadContents title={_title} desc={_desc}></ReadContents>
    }else if(this.state.mode === 'read'){
      _content = this.getReadContent();
      _article = <ReadContents title={_content.title} desc={_content.desc}></ReadContents>
    }else if(this.state.mode === 'create'){
      _article = <CreateContents onSubmit={
        function(_title, _desc){
          //console.log(_title, _desc);
          // push - 원본 배열 자체를 변경
          // concat  - 원본 배열을 복제해서 복제한 배열을 변경
          // let _contents = this.state.contents.concat({id:this.max_contents_id, title:_title, desc: _desc});
          // this.setState({
          //   contents: _contents
          // });
          // 여기에 얕은복사/깊은복사 한번 고민해보기
          // 배열 복제는 Array.from(array)
          // 객체 복제는 Obejct.assign(obj)
          //this.max_contents_id = this.max_contents_id + 1;
          let _id = this.max_contents_id + 1;
          let newContents = Array.from(this.state.contents); // this.state.contents 배열과 똑같이 보이는 배열을 새롭게 만들지만 둘이 다름
          newContents.push({id: _id, title:_title, desc: _desc});
          this.setState({
            contents: newContents,
            mode : 'read',
            selected_contents_id : this.max_contents_id
          });
        }.bind(this)}></CreateContents>
    }else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContents data={_content} onSubmit={
        function(_id, _title, _desc){
          let _contents = Array.from(this.state.contents);
          let i = 0;
          while(i<_contents.length){
            if(_contents[i].id === _id){
              _contents[i] = {
                id : _id,
                title : _title,
                desc : _desc
              };
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents : _contents,
            mode : 'read'
          });
        }.bind(this)
      }></UpdateContents>
    }
    return _article;
  }
  render(){
    return (
      <div className='App'>
        <Header className="header"
          title={this.state.header.title} 
          sub={this.state.header.sub}
          onChangePage = {function (){
            this.setState({
              mode : 'welcome'
          });
          }.bind(this)}
        >
        </Header>
        <TOC className="toc"
          onChangePage={function(id){
            this.setState({
              mode : 'read',
              selected_contents_id : Number(id) 
            });
          }.bind(this)}
          data={this.state.contents}></TOC>
        <Controls className='controls'
          onChangeMode={function(_mode){
            if(_mode === 'delete'){
              if(window.confirm('really?')){
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while(i < _contents.length){
                  if(_contents[i].id === this.state.selected_contents_id){
                    _contents.splice(i,1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode:'welcome',
                  contents:_contents
                });
              }
            } else {
              this.setState({
                mode:_mode
              });
            }
          }.bind(this)}>
          </Controls>
          {this.getContent()}
      </div>
    );
  }
}

export default App;
