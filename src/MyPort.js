import React from 'react';

function MyPort() {
    return(
        <div className="container-fluid">
        <p id="portname">PORTFOLIO</p>
        <div className="row">
            <div className="col-sm-4">
                    <button type="button" className="btn btn-Dark" data-toggle="modal" data-target="#myModal">
    <img src="img/scrable.png" />
  </button>
  <p>Scrabble Game-JAVA</p>

  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">Scrabble Game</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
    
        <div className="modal-body">
          It is a Java-Fx application that count the score when user enter the word. User can not enter
          duplicate word. Each latters has points and usage limitation. When all words limit will over game will show total points.
        </div>
        
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>



            </div>


            <div className="col-sm-4">

                    <button type="button" className="btn btn-Dark" data-toggle="modal" data-target="#myEmployee">
    <img src="img/employee.png" />
  </button>
  <p>Employee Portal- PHP</p>

  <div className="modal" id="myEmployee">
    <div className="modal-dialog">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">Employee Portal</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
    
        <div className="modal-body">
           This is a Web application which designed in PHP. It recods all
           employees information and give the admin an authorithy to manuplate 
           the information. 
        </div>
        
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
                    </div>
            <div className="col-sm-4">

     <button type="button" className="btn btn-Dark" data-toggle="modal" data-target="#Isro">
    <img src="img/metero.jpg" />
  </button>
  <p>Online Meterological Data Display-Android</p>

  <div className="modal" id="Isro">
    <div className="modal-dialog">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">Online Meterological Data Display</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
    
        <div className="modal-body">
          It present an Android application that show meterological data 
          from Indian satellite like INSET-3D, INSET-3DR and KALPANA-1. It 
          also shows the alerts and latest news feeds about the ISRO.  
        </div>
        
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

                    </div>
        </div>

        <div className="row">
                <div className="col-sm-4">
                        <button type="button" className="btn btn-Dark" data-toggle="modal" data-target="#myModal1">
    <img src="img/dustbin.jpg" />
  </button>
  <p>Smart Dustbin-Arduino</p>

  <div className="modal" id="myModal1">
    <div className="modal-dialog">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">Smart Dustbin</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
    
        <div className="modal-body">
          Smart dustbin is an Arduino based project which operates on Ultrasonic
          sensor. If sensor detects objects in the range of 50 cm then dustbin
          automatically open it's cap.
        </div>
        
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

                    </div>


                <div className="col-sm-4">
                        <button type="button" className="btn btn-Dark" data-toggle="modal" data-target="#myModal2">
    <img src="img/todolist.png" />
  </button>
  <p>To-Do List-JavaScript</p>

  <div className="modal" id="myModal2">
    <div className="modal-dialog">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">TO-DO List</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
    
        <div className="modal-body">
          TO-DO list is a javaScript project. It allows a user to input numbers
          of tasks and application add into list of items. User can add, delete
          and check the list items.
        </div>
        
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

                    </div>


                <div className="col-sm-4"></div>

        </div>



        </div>
    );
}

export default MyPort;