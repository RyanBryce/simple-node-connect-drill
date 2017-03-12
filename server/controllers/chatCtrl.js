var chats = [{
  screenname:"Mr Wiggles",
  message:"I canz sit still"
},{
  screenname:"Mr Loud",
  message:"I canz use my inside voice"
},{
  screenname:"Mr Author",
  message:"I canz write childrenz books"
}];
module.exports = {

  getChats:function(req, res){
    // TODO write getChats
    res.send(chats);
  },
  postChats:function(req, res){
    // TODO write postChats
    var chat = {}

    chat = req.body.message;
    chat.screenname = req.session.screenname
    chats.push(chat);
    res.send(chats);
  },
  deleteChats:function(req, res){
    // TODO write deleteChats
    chats =[];
    res.send(chats);
  }
}
