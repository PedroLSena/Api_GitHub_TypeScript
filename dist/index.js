var api = 'https://api.github.com/users/PedroLSena';
var res = document.getElementById("resp");
var title = document.getElementById('title');
var userList = [];
var er = {
    mesage: 'erro ao encontar usuario'
};
fetch(api).then(function (resp) { return resp.json(); }).catch(function (e) { return console.error(er.mesage); }).then(function (data) {
    var userLogin = data.login;
    var userId = data.id;
    var userName = data.name;
    var userBio = data.bio;
    var userPublic = data.public_repos;
    var userRepos = data.repos_url;
    userData(userLogin, userId, userName, userBio, userPublic, userRepos);
});
fetch(api).then(function (resp) { return resp.json(); }).catch(function (e) { return console.error(er.mesage); }).then(function (data) {
    var userRepos = data.repos_url.name;
    console.log(userRepos);
});
function userData(userLogin, userId, userName, userBio, userPublic, userRepos) {
    var user = { userLogin: userLogin, userId: userId, userName: userName, userBio: userBio, userPublic: userPublic, userRepos: userRepos };
    userList.push(user);
    showUserData(userList);
}
showUserData(userList);
function showUserData(userList) {
    userList.forEach(function (i) {
        title.innerText += 'Dados do usuario';
        res.innerText += "Login name: ".concat(i.userLogin, " \n Id: ").concat(i.userId, " \n User name: ").concat(i.userName, " \n Bio: ").concat(i.userBio, " \n Public: ").concat(i.userPublic, " \n Ropositorios: ").concat(i.userRepos, " \n");
    });
}
