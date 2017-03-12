angular.module("myChats").controller("mainCtrl", function($scope, mainSrvc, $interval){

  $scope.chatAppName = "Terror Chat";

  //Dummy data to show what the chat messages should look like
  // to work with the frontend
  // TODO Remove once server is integrated;

  $scope.addChat = function(chat){
    // TODO Call service to add chats
      mainSrvc.addChats(chat)
  }

  function getChats(){
    // TODO Tell service to get chats
    mainSrvc.getChats()
    .then((res) => {
      $scope.chats = res.data;
    })
  }

  $scope.deleteChats = function(){
    // TODO Tell service to delete all chats
    mainSrvc.deleteChats()
  }

  // Gets initial chats
  getChats();

  // Set up repeating call to get chats
  $interval(getChats, 3000);

  $scope.setScreenname = function(screenname){
    mainSrvc.setScreenname(screenname);
  }

})
