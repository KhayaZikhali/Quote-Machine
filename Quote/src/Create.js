/* eslint-disable no-lone-blocks */
import React from 'react';
import './App.css';



{/*Quoetes to be addded to the screen */}
const quotes =[             
  {"author": "Marilyn Monroe",
   "quote" : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." },
  {"author" : "Oscar Wilde",
  "quote" :  "Be yourself, everyone else is already taken."},
  {"author" : "Albert Einstein",
  "quote" :  "Two things are infinite: the universe and human stupidity, I'm not sure about the universe."
  },
  {"author" : "Frank Zappa",  "quote" : "So many books so little time"},
  {"author" : "Marcus Tullius Caesero",  "quote" : "A room without books is like a body wihout a soul"},
  {"author" : "Bernard M Baruch",  "quote" : "Be who you are and say what you feel because those who mind don't matter and those who matter don't mind"},
  {"author" : "Dr Suess",  "quote" : "You know you're in love  when you can't fall asleep because reality is finally better than your dreams."},
  {"author" : "Mae West",  "quote" : "You only live once , but if you do it right once is enough"},
  {"author" : " ",  "quote" : "In three words I can sum up all that I have learned about life ,  It Goes On"},
  {"author" : " Albert Camus",  "quote" : "Don't walk in front of me , I may not follow. Don't walk behind me, I may not lead. Walk beside me , just be my friend"},
  {"author" : "Mark Twain",  "quote" : "If you tell the truth ,you won't have to remember anything"},
  {"author" : "Maya Angelou  ",  "quote" : "I've learned that people won't rememebr what you said, only how you made them feel"},
  {"author" : "Oscar Wilde",  "quote" : "To live is the rarest thing in the world, most people exist"},
  {"author" : "Mahatma Gandhi",  "quote" : "Live as if you were to die tomorrow, learn as if you were to live forever"},
  {"author" : "Martin Luther King Jr",  "quote" : "Darkness cannot drive out darkness only light can do that.   Hate cannot get rid of hate only love can that"},
  {"author" : " Stephen Chbosky",  "quote" : "We accept the love we think we deserve"},
  {"author" : "Ralph Waldo Emmerson",  "quote" : " To be yourself in a world that is constantly trying to make you into something else is the true accomplisment"},
  {"author" : "H. Jackson Brown Jr",  "quote" : "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."},
  {"author" : " Narcotics Anonymous ",  "quote" : " Insanity is doing the same thing, over and over again, but expecting different results."},
  {"author" : " Rob Siltanen ",  "quote" : " Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do"},
  {"author" : " Oscar Wilde ",  "quote" : "I am so clever that sometimes I don't understand a single word of what I am saying. "},
  {"author" : " Oscar Wilde",  "quote" : " Always forgive your enemies; nothing annoys them so much."},
  {"author" : "Elbert Hubbard ",  "quote" : "A friend is someone who knows all about you and still loves you "},
  {"author" : " C. S. Lewis",  "quote" : "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . . "},
  {"author" : " Marilyn Monroe ",  "quote" : "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together "},
  {"author" : "Luis Sepúlveda,  ",  "quote" : "It was the purest love without purpose other than love itself. Without tenure or jealousy "},
  {"author" : "L.C. Conn ",  "quote" : "I am me, a unique individual who aspires to be happier than she already is "},
  {"author" : "Israelmore Ayivor",  "quote" : "Never be anxious about maintaining the position you occupy. Be anxious about maintaining your good character and you will never lose your leadership influence! "},
  {"author" : "A.A. Milne  ",  "quote" : "'Friendship', said Christopher Robin,  'is a very comforting thing to have.'"},
  {"author" : "H G Wells  ",  "quote" : "Now they stumbled in the shackles of humanity, lived in a fear that never died, fretted by a law they could not understand; their mock-human existence began in an agony, was one long internal struggle, one long dread of Moreau - and for what? It was the wantonness that stirred me "},
  {"author" : "Isaac Asimov,  ",  "quote" : "THERE IS AS YET INSUFFICIENT DATA FOR A MEANINGFUL ANSWER. "},
  {"author" : " Jean-Paul Sartre  ",  "quote" : "There may be more beautiful times, but this one is ours. "},
  {"author" : "Mark Twain  ",  "quote" : "Never put off till tomorrow what may be done day after tomorrow just as well. "},
  {"author" : "Patty McCord ",  "quote" : "trying new things, making mistakes, beginning again, and seeing good results "},
  {"author" : "Nelson Mandela  ",  "quote" : "The greatest glory in living lies not in never falling, but in rising every time we fall. "},
  {"author" : "Walt Disney",  "quote" : "The way to get started is to quit talking and begin doing "},
  {"author" : "Steve Jobs",  "quote" : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking "},
  {"author" : "Oprah  ",  "quote" : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough "},
  {"author" : "John Lennon",  "quote" : "Life is what happens when you're busy making other plans. "},
  {"author" : "Robert Louis Stevenson  ",  "quote" : "Don't judge each day by the harvest you reap but by the seeds that you plant "},
  {"author" : "Helen Keller  ",  "quote" : "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart "},
  {"author" : "Ralph Waldo Emerson  ",  "quote" : "Do not go where the path may lead, go instead where there is no path and leave a trai "},
  {"author" : "Mother Teresa  ",  "quote" : "Spread love everywhere you go. Let no one ever come to you without leaving happier "},
  {"author" : "Benjamin Franklin  ",  "quote" : "Tell me and I forget. Teach me and I remember. Involve me and I learn. "},
  {"author" : "Anne Frank  ",  "quote" : "Whoever is happy will make others happy too. "},
  {"author" : "Maya Angelou  ",  "quote" : "You will face many defeats in life, but never let yourself be defeated "},
  {"author" : "Abraham Lincoln  ",  "quote" : "In the end, it's not the years in your life that count. It's the life in your years."},
  {"author" : "Nelson Mandela  ",  "quote" : "The greatest glory in living lies not in never falling, but in rising every time we fall. "},
  {"author" : "Bob Marley  ",  "quote" : "Love the life you live. Live the life you love. "},
  {"author" : "Barack Obama ",  "quote" : "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. "},
  {"author" : "Oprah  ",  "quote" : "You know you are on the road to success if you would do your job and not be paid for it. "},
  {"author" : "Rosa Parks",  "quote" : "I have learned over the years that when one's mind is made up, this diminishes fear. "},
  {"author" : "Joshua Mqabuko Nyongolo Nkomo  ",  "quote" : "The hardest lesson of my life has come to me late. It is that a nation can win freedom without its people becoming free. "},
  {"author" : "Oprah  ",  "quote" : "You become what you believe "},
  {"author" : "Anne Frank  ",  "quote" : "How wonderful it is that nobody need wait a single moment before starting to improve the world. "},
  {"author" : "Khaya",  "quote" : " "},
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
        <div className="quote">
      <p>“ {this.state.time.quote} “</p>  
        </div>
       <button type="button" onClick="refreshPage()">New Quote</button>
        </div>
      );
    }
  };
    
  function Create(props){
    return (
        <div>
            <h1 className="thing">{time.author}</h1>
        </div>
    )
};

export {
    Create ,
    MyComponent
}
