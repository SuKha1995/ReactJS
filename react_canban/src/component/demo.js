import React, { Component } from "react";

export default class demo extends Component {

    title = 'cyberSoft';
    //phuong thức render chứa nội dung giao diện của component
    render() {
        return (
            <div>
                <h3> demo component </h3>
                <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/"  />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
            </div>

        );
    }
}
