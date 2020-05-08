import React, { Component } from 'react'

export default class Databinding extends Component {
    render() {

        const title = 'cyberSoft';
        const hocVien = {ma:12, tenHV: 'nguyen van a'};
        const xuatThongTin = () =>{
            return <img src = "https://zicxa.com/hinh-anh/wp-content/uploads/2019/06/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-v%E1%BB%81-bi%E1%BB%83n-4.jpg" />
            
        }
        return (
            <div>
                <p id='txt'> {title}</p>
                <ul>
                    <li>
                        Tên: {hocVien.tenHV}
                    </li>
                    <li>
                        Mã: {hocVien.ma}
                    </li>
                </ul>
                <div className= "container">
                {xuatThongTin()}
            </div>
            </div>
           
        )
    }
}
