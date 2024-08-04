const api: string = 'https://api.github.com/users/PedroLSena';

const res = document.getElementById("resp");
const title = document.getElementById('title');

let userList:any[] = [];

const er={
    mesage:'erro ao encontar usuario'
}
fetch(api).then((resp)=> resp.json()).catch((e)=> console.error(er.mesage)).then( data => {
    let userLogin:string = data.login;
    let userId:number = data.id
    let userName:string = data.name;
    let userBio:string= data.bio;
    let userPublic:number = data.public_repos;
    //let userRepos: [] = data.repos_url
    userData(userLogin, userId, userName, userBio, userPublic, /*userRepos*/);
}
);

// fetch(api).then((resp)=> resp.json()).catch((e)=> console.error(er.mesage)).then( data => {
//     let userRepos: string = data.repos_url.name;
//     console.log(userRepos);
// }
// );


function userData(userLogin: string, userId:number, userName:string, userBio: string, userPublic: number, /*userRepos:[]*/ ){
    let user = {userLogin, userId, userName, userBio, userPublic, /*userRepos*/}
    userList.push(user);
    showUserData(userList);
}

showUserData(userList);

function showUserData(userList:any[]){
    userList.forEach((i)=> {
        title.innerText+='Dados do usuario'
        res.innerText+= `Login name: ${i.userLogin} \n Id: ${i.userId} \n User name: ${i.userName} \n Bio: ${i.userBio} \n Public: ${i.userPublic} \n`
    })
}

