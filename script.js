console.log("it works")

// save value on local storage
let theme = localStorage.getItem('theme')
if (theme==null){
    setheme('light')
} else {
    setheme(theme)
}



let themedots = document.getElementsByClassName("theme-dot")


for(var i=0; themedots.length > i; i++){
    themedots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log("Option clicked", mode)
        setheme(mode)
    })
}

function setheme(mode){
    
    if(mode == 'light'){
        document.getElementById("profile-pic").src = "images/Ava.png"
        document.getElementById("theme-style").href = "default.css"
        
        
    }
    if(mode == 'blue'){
        document.getElementById("profile-pic").src = "images/AvatarBlue.png"
        document.getElementById("theme-style").href = "blue.css"
        
    }
    if(mode == 'green'){
        document.getElementById("profile-pic").src = "images/AvatarGreen.png"
        document.getElementById("theme-style").href = "green.css"

    }
    if(mode == 'purple'){
        document.getElementById("profile-pic").src = "images/AvatarPurple.png"
        document.getElementById("theme-style").href = "purple.css"
    }

    localStorage.setItem('theme', mode)
}