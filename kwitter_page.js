//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCnDFVmkP_ZODbnfGWa7d8ccDOQfQBiKlI",
      authDomain: "kwitter-2-71b9d.firebaseapp.com",
      databaseURL: "https://kwitter-2-71b9d-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-71b9d",
      storageBucket: "kwitter-2-71b9d.appspot.com",
      messagingSenderId: "980029861947",
      appId: "1:980029861947:web:4b54e9bdfad834e2832c1e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

    function log_out() 
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "kwitter_room.html";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

      console.log(firebase_message_id);
      console.log(message_data);
      names = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ names +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();
