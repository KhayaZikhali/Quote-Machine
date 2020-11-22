/* eslint-disable no-lone-blocks */
import React from 'react';
import './App.css';

function Create(props){
    return (
        <div>
            <h1>{props}</h1>
        </div>
    )
};

const quotes =[

  {"author": "Makac",
   "quote" : "alteration insipidity impression by travelling reasonable up motionless. Of regard warmth by unable sudden garden ladies. No kept hung am size spot no."
  },
  {"author" : "orbit","quote" :  "Likewise led and dissuade rejoiced welcomed husbands boy. Do listening on he suspected resembled. Water would still if to. Position boy required law moderate was may. "},
  {"author" : " Apex","quote" :  "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing." },
  {"author" : "Mild","quote" :  "Is so moments on chamber pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe service arrived civilly add all. Acuteness allowance an at eagerness favourite in extensive exquisite ye. " },
  {"author" : " Beanie", "quote" :  "So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having. " },
  
]

function rando(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var time = quotes[rando(quotes.length)];
   
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       time
      }
    }
    render() {
      return (
        <div className="body">
          <h1>{this.state.quote}</h1>
        <div className="quote">
      <p> {this.state.time.author}</p>  
          <h1>
            Khaya
          </h1>
        </div>
        </div>
      );
    }
  };
    
export {
    Create ,
    MyComponent
}
