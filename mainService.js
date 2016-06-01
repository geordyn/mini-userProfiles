angular.module("userProfiles").service("mainService", function() {

var data = [{
    "id": 1,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
},
{
    "id": 2,
    "first_name": "lucille",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
},
{
    "id": 3,
    "first_name": "oscar",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
}];


this.getUsers = function() {
    return data.slice(); // this sends back a COPY of the data array to the getUsers function in the controller,not the original data array.
}

this.removeUser = function(idx){
    data.splice(idx, 1); // removes the user at the given index # we passed in from the ctrl function
    return data.slice();// we need to send back a copy of the changed data array to the ctrl since we deleted a user. If you don't return anything, $scope.users will disappear and equal 'nothing' since we reassigned $scope.users to equal what this function returns.
}






// service ends
});
