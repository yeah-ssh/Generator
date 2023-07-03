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
       fetch('https://meme-api.com/gimme')
    .then(response => response.json())
    .then(data => {
      const memeContent = document.querySelector('.meme-content');
      memeContent.innerHTML = `<img src="${data.url}" alt="Meme" />`;
    })
    .catch(error => {
      console.log('Error:', error);
      
    });
   
    
    clearAll();
   
  }
  
  function showJoke() {

       fetch('https://v2.jokeapi.dev/joke/Any?format=txt') /
          .then(response => response.json())
          .then(data => {
            const jokeContent = document.querySelector('.joke-content');
            if (data.type === 'single') {
              jokeContent.innerHTML = `<p>${data.joke}</p>`;
            } else if (data.type === 'twopart') {
              jokeContent.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
            }
          })
          .catch(error => {
            console.log('Error:', error);
          });
      
    clearAll();
   
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
        quotes,
        riddles
      };
       
