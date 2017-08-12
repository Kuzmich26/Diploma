
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
var first = angular.element(document.getElementById("firstImpr"));
function contactMe(){

  first.addClass("blur");

};


//var first = document.getElementById("firstImpr");
var second = document.getElementById("contact");
alert(first);
//function contactMe(){

  //first.classList.add("blur");
  //second.classList.remove("hidden");

//};
function dismiss(){
    first.classList.remove("blur")
    second.classList.add("hidden");
  }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5IFBsdWdpbnNcclxuICovXHJcblxyXG5cclxuXHJcbnZhciBteUFwcCA9IGFuZ3VsYXIubW9kdWxlKCdBbWljb011bHRpcGFnZScsIFsnbmdSb3V0ZSddKTtcclxuXHJcblxyXG5teUFwcC5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcclxuICAkcm91dGVQcm92aWRlclxyXG5cclxuICAgIC53aGVuKCcvaG9tZScsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdIb21lQ3RybCdcclxuICB9KVxyXG5cclxuXHJcbiAgLndoZW4oJy9hYm91dCcsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYWJvdXQuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnQWJvdXRDdHJsJ1xyXG4gIH0pXHJcblxyXG5cclxuICAud2hlbignL3NlcnZpY2VzJywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICdzZXJ2aWNlcy5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6ICdzZXJ2aWNlc0N0cmwnXHJcbiAgfSlcclxuXHJcbiAgLndoZW4oJy9tZWRpYScsIHtcclxuICAgIHRlbXBsYXRlVXJsOiAnbWVkaWEuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnbWVkaWFDdHJsJ1xyXG4gIH0pXHJcbiAgLndoZW4oJy9uZXdzJywge1xyXG4gICAgdGVtcGxhdGVVcmw6ICduZXdzLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogJ25ld3NDdHJsJ1xyXG4gIH0pXHJcblxyXG5cclxuICAud2hlbignL2NvbnRhY3QnLCB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3QuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiAnQ29udGFjdEN0cmwnXHJcbiAgfSlcclxuXHJcbiAgLm90aGVyd2lzZSh7XHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ0hvbWVDdHJsJ1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxudmFyIGZpcnN0ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyc3RJbXByXCIpKTtcclxuZnVuY3Rpb24gY29udGFjdE1lKCl7XHJcblxyXG4gIGZpcnN0LmFkZENsYXNzKFwiYmx1clwiKTtcclxuXHJcbn07XHJcblxyXG5cclxuLy92YXIgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpcnN0SW1wclwiKTtcclxudmFyIHNlY29uZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcclxuYWxlcnQoZmlyc3QpO1xyXG4vL2Z1bmN0aW9uIGNvbnRhY3RNZSgpe1xyXG5cclxuICAvL2ZpcnN0LmNsYXNzTGlzdC5hZGQoXCJibHVyXCIpO1xyXG4gIC8vc2Vjb25kLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcblxyXG4vL307XHJcbmZ1bmN0aW9uIGRpc21pc3MoKXtcclxuICAgIGZpcnN0LmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpXHJcbiAgICBzZWNvbmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICB9Il0sImZpbGUiOiJjdXN0b20uanMifQ==
