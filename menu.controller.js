app.controller("menuController", function($scope, $location) {
  $scope.go = function ( path ) {
    $location.path( path );
  };
});
