
$('.col-md-4').mouseover(function(){
$(this).css({'opacity': .4});
});


$('.col-md-4').mouseout(function(){
$(this).css({'opacity': 1});
});

$('.col-md-4').click(function(){
$(this).css({'opacity': .3});
});





$('.down-arrow').on('click' ,function(){
  console.log('hi')
    window.scrollTo(0, '1000');
    $('.down-arrow').hide();
    $('.up-arrow').show();
});

$('.up-arrow').on('click' ,function(){
  console.log('hi')
    window.scroll(0, '0');
    $('.down-arrow').show();
    $('.up-arrow').hide();
});


var app = angular.module('myApp', []);
app.controller('NyCtrl', function($scope, $http){
  $http.get(
    'http://api.nytimes.com/svc/topstories/v1/home.json?api-key=0777b6458e84f233684ccfb6e2269743:8:72633462'
    ).success(function(data){
      // console.log(data.results)
      $scope.sections = data.results;
    });
});


app.controller('WeatherCtrl', function($scope, $http){
$http.get('http://api.openweathermap.org/data/2.5/weather?q=NewYork&units=imperial')
.success(function(data)
{
  // console.log(data.main)
  $scope.stuffs = data.main;


});
});

app.controller('NprCtrl', function($scope, $http){
$http.get('http://api.npr.org/list?id=3013&output=JSON')
.success(function(data)
{

  $scope.items = data


});
});

app.controller('TwitterCtrl', function($scope, $http){
$http.get('/users/wired')
.success(function(data)
{

  // console.log(data)
  $scope.articles = data;


});
});

app.controller('ViceCtrl', function($scope, $http){
$http.get('/users/topnews')
.success(function(data)
{

  // console.log(data)
  $scope.articles = data;


});
});

app.controller('SportsCtrl', function($scope, $http){
$http.get('http://api.football-data.org/alpha/soccerseasons/398/leagueTable',
   {
    headers: {'X-Auth-Token': '536116ae2b534006a8b1be1d6dd80e9e'}
  })
.success(function(data)
{
  console.log('hi')
  console.log(data.standing)
  $scope.stats = data.standing;


});
});






