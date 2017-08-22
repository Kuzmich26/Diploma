//showing the contact form
var first = document.getElementById("firstImpr");
var second = document.getElementById("contact");
//alert(first);
function contactMe() {

  first.classList.add("blur");
  second.classList.remove("hidden");

};

function dismiss() {
  first.classList.remove("blur")
  second.classList.add("hidden");
};


//post on server
function sendMessage() {
  var message = {};
  message.name = document.getElementById('name').value;
  message.email = document.getElementById('email').value;
  message.message = document.getElementById('mess').value;

  var xhrSend = new XMLHttpRequest();

  xhrSend.open('POST', 'messages.json', true);
  xhrSend.setRequestHeader('Content-Type');
  xhrSend.send(message);
  xhrSend.onreadystatechange = function() { //Call a function when the state changes.
    if (xhrSend.readyState == 4 && xhrSend.status == 200) {
      alert(xhrSend.responseText);
    }
  };
};
//response of server
function loadMessage() {

  var xhrAnswer = new XMLHttpRequest();

  xhrAnswer.open('GET', 'messages.json', true);


  xhrAnswer.send();


  xhrAnswer.onreadystatechange = function() {
    if (xhrAnswer.readyState != 4) return;

    button.innerHTML = 'Готово!';

    if (xhrAnswer.status != 200) {
      // обработать ошибку
      alert(xhrAnswer.status + ': ' + xhr.statusText);
    } else {
      // вывести результат
      alert(xhrAnswer.responseText);
    }

  }
}
