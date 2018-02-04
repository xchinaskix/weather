app.controller('oxfordCtrl', function ($scope, $http) {
  $http.get('pages/oxford/Oxford.json').success(function(data) {
    $scope.countries  = data ; 
	  //sorting data
	$scope.orderByField = 'yyyy';
    $scope.reverseSort = false;
	  //max t
	$scope.maxT = data.reduce(function(prev,cur) {
    return cur.tmax>prev.tmax?cur:prev;
},{tmax:-Infinity});
	  //min t
	$scope.minT = data.reduce(function(prev,cur) {
    return prev.tmin<cur.tmin?prev:cur;
},{tmin:Infinity});
	  //max rain
	 $scope.maxR = data.reduce(function(prev,cur) {
    return cur.rain>prev.rain?cur:prev;
},{rain:-Infinity});
	 //max sun
	 $scope.maxS = data.reduce(function(prev,cur) {
    return cur.sun>prev.sun?cur:prev;
},{sun:-Infinity});
  });
});





		




	