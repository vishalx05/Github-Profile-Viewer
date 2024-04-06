

let user=document.getElementById('userId')

async function fetchUser(username){
    let response=await fetch(`https://api.github.com/users/${username}`)
    let result=await response.json();
    displayuser(result)
}
document.getElementById('btn').addEventListener('click',()=>{
    let userId=user.value;
    document.getElementById('userProfile').innerHTML=`<div class="🤚">
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="🌴"></div>
	<div class="👍"></div>
</div>`;

    fetchUser(userId)


})


function displayuser(result){
    const {
        avatar_url,
        name,
        followers,
        bio,
        following,
        public_repos,
        html_url
    }=result

    if(!avatar_url){
        document.getElementById('userProfile').innerHTML=`<h1>User not Found</h1>`
        return

    }
    if(!bio){
        bio=''
    }

                document.getElementById('userProfile').innerHTML=`
                <div class="userInfo">
                <img src="${avatar_url}" alt="" class="userImage">
                <div class="userDetail">
                    <p class="userName">${name}</p>
                    <p class="userBio">${bio}</p>
                </div>
            </div>
            <div class="userFollow">
                <div class="Follwer">
                    <div class="repo">
                        <p>Follwer</p>
                        <p>${followers}</p>
                    </div>
                    <div class="repo">
                        <p>following</p>
                        <p>${following}</p>
                    </div>
                    <div class="repo">
                        <p>Repo</p>
                        <p>${public_repos}</p>
                    </div>
                </div>
                <a href=${html_url} target='_blank' class="visitProfile">
                <div class="visitProfile">Visit Profile</div>
                </a>
            </div>



            `
}