
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './assets/app.css';
import Header from './components/header';
import MainContent from './components/maincontent';


export default function App (){
    return (
        <div>
          <div className="container-fluid">
                <Header />
                <MainContent />
          </div>
        </div>)
}