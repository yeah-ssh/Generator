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

        fetch('https://v2.jokeapi.dev/joke/Any')
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
      fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const randomIndex = Math.floor(Math.random() * data.length); 
      const randomQuote = data[randomIndex];
  
      console.log(randomQuote);
      const quoteContent = document.querySelector('.quote-content');
      quoteContent.innerHTML = `<p>${randomQuote.text}</p><p>- ${randomQuote.author}</p>`;
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
   
    
    clearAll();
    
   
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
        riddles
      };
       
