angular.module("myChats").service("mainSrvc", function($http){

  this.setScreenname = function(screenname) {
    return $http({
      method: 'POST',
      url: '/api/screenname',
      data: {
        screenname
      }
    })
  }

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http({
      method: 'GET',
      url: '/api/chats'
    })
  }

  this.addChats = function(message){
    //TODO Call server to add to chats
  return $http({
    method: 'POST',
    url: '/api/chats',
    data:{
      message
    }
  })
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
    return $http({
      method: 'DELETE',
      url: '/api/chats',
    })
  }

});
