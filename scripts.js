function clearAll() {
    const memeContainer = document.querySelector('.meme-content');
    const jokeContainer = document.querySelector('.joke-content');
    const quoteContainer = document.querySelector('.quote-content');
    const riddleContainer = document.querySelector('.riddle-content');
    
    memeContainer.innerHTML = '';
    jokeContainer.innerHTML = '';
    quoteContainer.innerHTML = '';
    riddleContainer.innerHTML = '';
  }
  
  function showMeme() {
    // Value is a string representing image URL
    const randomMemeUrl = getRandomData('memes');
    const container = document.querySelector('.meme-content');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', randomMemeUrl);
    
    clearAll();
    
    container.appendChild(newImg);
  }
  
  function showJoke() {
    // Value is a string representing the joke
    const randomJokeText = getRandomData('jokes');
    
    const newP = document.createElement('p');
    newP.textContent = randomJokeText;
    
    clearAll();
    
    document.querySelector('.joke-content').appendChild(newP);
  }
  
  function showQuote() {
    // Value should be in format: { quote: '', author: '' }
    const randomQuote = getRandomData('quotes');
    
    const quote = document.createElement('p');
    const author = document.createElement('p');
    quote.textContent = randomQuote.quote;
    author.textContent = "- " + randomQuote.author;
    
    clearAll();
    
    const container = document.querySelector('.quote-content'); 
    container.appendChild(quote);
    container.appendChild(author);
  }
  
  
  function showRiddle() {
    // Value should be in format: { question: '', answer: '' }
    const randomRiddle = getRandomData('riddles');
    
    const { question, answer } = randomRiddle;
    
    const questionElem = document.createElement('p');
    questionElem.textContent = question;
    
    const answerElem = document.createElement('p');
    answerElem.textContent = 'The answer is: ' + answer;
    answerElem.setAttribute('id', 'riddle-answer');
    answerElem.hidden = true;
    
    const container = document.querySelector('.riddle-content');
    
    clearAll();
    
    container.appendChild(questionElem);
    container.appendChild(answerElem);
  }
 
  function revealAnswers() {
    const riddleContainer = document.querySelector('.riddle-content');
    const riddle = riddleContainer.querySelector('p');
    const answer = document.querySelector('#riddle-answer');
    
    // console.log(answer.hidden);
    if (riddle && answer.hidden) {
      answer.hidden = false;
    } else if (riddle) {
      alert('The answer is already revealed!')
    } else {
      alert('There is no riddle to reveal the answer to!')
    }
    
  }
  
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }

  const jokes=['Why dont scientists trust atoms? Because they make up everything!','I used to play piano by ear, but now I use my hands.',
  'Why dont skeletons fight each other? They dont have the guts!',
  'I told my wife she should embrace her mistakes. She gave me a hug.',
  'I am reading a book about anti-gravity. Its impossible to put down!',
  'Why did the scarecrow win an award? Because he was outstanding in his field!',
  'I got a job at a bakery because I kneaded dough.',
  'I used to be a baker, but I could not make enough dough.',
  'I have a fear of speed bumps, but I am slowly getting over it.',
  'How do you catch a squirrel? Climb a tree and act like a nut!' ];
  
  const quotes = [
      { quote: 'The only way to do great work is to love what you do.', author: 'Steve Jobs'},
      { quote: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.', author: 'Abraham Lincoln' },
      { quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela' },
      { quote: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
      { quote: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
      { quote: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.', author: 'Albert Schweitzer' },
      { quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe', author: 'Albert Einstein' },
      { quote: 'The best way to predict the future is to create it.', author: 'Peter Drucker' },
      { quote: 'The only thing necessary for the triumph of evil is for good men to do nothing.', author: 'Edmund Burke' },
      { quote: 'The greatest glory is not in never falling, but in rising every time we fall.', author: 'Confucius' },
      { quote: 'You miss 100% of the shots you don\'t take', author: 'Wayne Gretzky' },
      { quote: 'Don\'t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
    ];
  
    const memes=[
      'https://images.indianexpress.com/2017/04/work-meme-12.jpg?w=630','https://images.indianexpress.com/2017/04/work-meme10.jpg?w=630','https://images.indianexpress.com/2017/04/work-meme1.jpg?w=630',
      'https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-30-632854d5bb609__700.jpg','https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-12-63283440474e0__700.jpg',
      'https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-66-6329c40882c19__700.jpg','https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-71-6329c64cc5683__700.jpg',
      'https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-1-632827c66b20c__700.jpg','https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-3-63282981225d3__700.jpg',
      'https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-74-6329c7917f219__700.jpg','https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-6-63282ce78be0b__700.jpg',
      'https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-13-6328359e920f9__700.jpg','https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-65-63282025e6bdf__700.jpg'
      
    ]
  
    const riddles = [
      { question: 'I am taken from a mine, and shut in a wooden case, from which I am never released. Yet I am used by almost every person. What am I?', answer: 'Pencil lead/graphite.' },
      { question: 'The more you take, the more you leave behind. What am I?', answer: 'Footsteps' },
      { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
      { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
      { question: 'I have a heart that doesn\'t beat. I have a home but I never sleep. I can take a man\'s house and build another\'s. And I love to play games with my many brothers. What am I?', answer: 'Deck of cards' },
      { question: 'What has to be broken before you can use it?', answer: 'Egg'},
      { question: 'The more you have of it, the less you see. What is it?',answer:'Darkness'}
    ];
    function rn(len) {
        return Math.floor(Math.random() * len);
      }
      
      const data = {
        memes,
        jokes,
        quotes,
        riddles
      };
       