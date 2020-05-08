import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () =>{
        console.log('123');
        alert(123)
        
    }
    showMessRest = (title) =>{
        alert(title);
    }
    render() {
        
        return (
            <div>
                {/* cách 1 Định nghĩa funtion trực tiếp */}
                <button id="btn" onClick={function(){
                    alert('hello cyberSoft')
                }}>Click me</button>

                {/* cách 2 Định nghĩa bằng arrow funtion */}
                
                <button id="btn" onClick={()=>{
                    this.showMessRest('hahaha')
                }}>Click me</button>



                <button onClick={this.showMess}>Show Mess</button>
            </div>
        )
    }
}
