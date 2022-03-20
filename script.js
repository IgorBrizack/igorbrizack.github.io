let themes = [{
    themeName: 'darkMode',
    color: 'white',
    backgroundColor: 'black'
},{
    themeName: 'ligthMode',
    color: 'black',
    backgroundColor: 'white'  
}];


const buttonLight = document.getElementById('lightButton');
buttonLight.addEventListener('click', ligthModeFunction);

function ligthModeFunction (){
    if(localStorage.getItem('Theme') == ('Theme', themes[0].themeName)){
        localStorage.setItem('Theme', themes[1].themeName)
        console.log('1')
    } else {
        localStorage.setItem('Theme', themes[0].themeName)
        console.log('2')
    }
}

function defaultTheme(){
    localStorage.setItem('Theme', themes[0].themeName);
    
    
}
