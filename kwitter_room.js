
//ADD YOUR FIREBASE LINKS HERE
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

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



    function addRoom () 
    {
     room_name = document.getElementById("room_name").value;
     
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function log_out() 
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}