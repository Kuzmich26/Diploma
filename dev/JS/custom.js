
/*!
 *                                                              jQuery Plugins
 */



var myApp = angular.module('AmicoMultipage', ['ngRoute']);


myApp.config(function($routeProvider) {
  $routeProvider

    .when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  })


  .when('/about', {
    templateUrl: 'about.html',
    controller: 'AboutCtrl'
  })


  .when('/services', {
    templateUrl: 'services.html',
    controller: 'servicesCtrl'
  })

  .when('/media', {
    templateUrl: 'media.html',
    controller: 'mediaCtrl'
  })
  .when('/news', {
    templateUrl: 'news.html',
    controller: 'newsCtrl'
  })


  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'ContactCtrl'
  })

  .otherwise({
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });

});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5IFBsdWdpbnNcclxuICovXHJcblxyXG5cclxuXHJcbnZhciBteUFwcCA9IGFuZ3VsYXIubW9kdWxlKCdBbWljb011bHRpcGFnZScsIFsnbmdSb3V0ZSddKTtcclxuXHJcblxyXG5teUFwcC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAkcm91dGVQcm92aWRlclxyXG5cclxuICAgIC53aGVuKCcvaG9tZScsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdIb21lQ3RybCdcclxuICB9KVxyXG5cclxuXHJcbiAgLndoZW4oJy9hYm91dCcsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYWJvdXQuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnQWJvdXRDdHJsJ1xyXG4gIH0pXHJcblxyXG5cclxuICAud2hlbignL3NlcnZpY2VzJywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlcy5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdzZXJ2aWNlc0N0cmwnXHJcbiAgfSlcclxuXHJcbiAgLndoZW4oJy9tZWRpYScsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnbWVkaWEuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnbWVkaWFDdHJsJ1xyXG4gIH0pXHJcbiAgLndoZW4oJy9uZXdzJywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICduZXdzLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogJ25ld3NDdHJsJ1xyXG4gIH0pXHJcblxyXG5cclxuICAud2hlbignL2NvbnRhY3QnLCB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3QuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnQ29udGFjdEN0cmwnXHJcbiAgfSlcclxuXHJcbiAgLm90aGVyd2lzZSh7XHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ0hvbWVDdHJsJ1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vc2hvd2luZyB0aGUgY29udGFjdCBmb3JtXHJcbnZhciBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyc3RJbXByXCIpO1xyXG52YXIgc2Vjb25kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xyXG4vL2FsZXJ0KGZpcnN0KTtcclxuZnVuY3Rpb24gY29udGFjdE1lKCkge1xyXG5cclxuICBmaXJzdC5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKTtcclxuICBzZWNvbmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaXNtaXNzKCkge1xyXG4gIGZpcnN0LmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpXHJcbiAgc2Vjb25kLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbn07XHJcblxyXG5cclxuLy9wb3N0IG9uIHNlcnZlclxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZSgpIHtcclxuICB2YXIgbWVzc2FnZSA9IHt9O1xyXG4gIG1lc3NhZ2UubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XHJcbiAgbWVzc2FnZS5lbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlO1xyXG4gIG1lc3NhZ2UubWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzJykudmFsdWU7XHJcblxyXG4gIHZhciB4aHJTZW5kID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gIHhoclNlbmQub3BlbignUE9TVCcsICdtZXNzYWdlcy5qc29uJywgdHJ1ZSk7XHJcbiAgeGhyU2VuZC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcclxuICB4aHJTZW5kLnNlbmQobWVzc2FnZSk7XHJcbiAgeGhyU2VuZC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHsgLy9DYWxsIGEgZnVuY3Rpb24gd2hlbiB0aGUgc3RhdGUgY2hhbmdlcy5cclxuICAgIGlmICh4aHJTZW5kLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHJTZW5kLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgYWxlcnQoeGhyU2VuZC5yZXNwb25zZVRleHQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbi8vcmVzcG9uc2Ugb2Ygc2VydmVyXHJcbmZ1bmN0aW9uIGxvYWRNZXNzYWdlKCkge1xyXG5cclxuICB2YXIgeGhyQW5zd2VyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gIHhockFuc3dlci5vcGVuKCdHRVQnLCAnbWVzc2FnZXMuanNvbicsIHRydWUpO1xyXG5cclxuXHJcbiAgeGhyQW5zd2VyLnNlbmQoKTtcclxuXHJcblxyXG4gIHhockFuc3dlci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh4aHJBbnN3ZXIucmVhZHlTdGF0ZSAhPSA0KSByZXR1cm47XHJcblxyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICfQk9C+0YLQvtCy0L4hJztcclxuXHJcbiAgICBpZiAoeGhyQW5zd2VyLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgLy8g0L7QsdGA0LDQsdC+0YLQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgICAgIGFsZXJ0KHhockFuc3dlci5zdGF0dXMgKyAnOiAnICsgeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g0LLRi9Cy0LXRgdGC0Lgg0YDQtdC30YPQu9GM0YLQsNGCXHJcbiAgICAgIGFsZXJ0KHhockFuc3dlci5yZXNwb25zZVRleHQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn0iXSwiZmlsZSI6ImN1c3RvbS5qcyJ9
