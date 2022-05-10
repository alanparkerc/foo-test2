import logo from './logo.svg';
import './App.css';

function App() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'foo-fighters-news.p.rapidapi.com',
      'X-RapidAPI-Key': '4b95e0a240msh26e181aa8751bc0p18a5b2jsnf8a511ffe1e8'
    }
  };
  
  fetch('https://foo-fighters-news.p.rapidapi.com/news', options)
    .then(response => response.json())
    .then(response => appendData(response))
    .catch(err => console.error(err));
    function appendData(data) {
      console.log(data);
      var mainContainer = document.getElementById("myData");
      for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'TITLE: ' + data[i].title + 'URL' + data[i].url;
        mainContainer.appendChild(div);
      }
    }
  return (
    <div className="App">
    <div id="myData"></div>
    </div>
  );
}

export default App;
