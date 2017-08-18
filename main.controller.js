app.controller("mainController", function($scope) {
  vm = $scope;
  ls = localStorage;

  vm.items = ls.items ? JSON.parse(ls.items) : [];
  vm.selectedItemId = ls.selectedItemId ? ls.selectedItemId : 0;

  vm.newItem = { name : '' };
  vm.newComment = '';

  vm.addItem = function(){
    if (vm.newItem.name === ''){
      return;
    }

    vm.newItem = {
      id: new Date(),
      name : vm.newItem.name,
      comments : []
    };

    vm.items.push(vm.newItem);
    vm.newItem = { name : '' };
    updateLS();
  };

  vm.deleteItem = function(item){
    vm.items.splice(vm.items.indexOf(item), 1);
    updateLS();
  };

  vm.selectItem = function (item) {
    vm.selectedItemId = vm.items.indexOf(item);
    ls.selectedItemId = vm.selectedItemId;
  };

  vm.addComment = function(event){
    if (event.keyCode !== 13){
      return;
    }
    vm.items[vm.selectedItemId].comments.push(vm.newComment);
    vm.newComment = '';
    updateLS();
  };

  function updateLS(){
    ls.items = JSON.stringify(vm.items);
  }
});
