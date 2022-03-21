let themes = [{
    themeName: 'darkMode',
    color: 'gray',
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
        let colorTheme = themes[1].color
        let colorBackground = themes[1].backgroundColor;
        console.log('1')
        colorWords(colorTheme);
        colorBackgroundFunction(colorBackground);
    } else {
        localStorage.setItem('Theme', themes[0].themeName);
        let colorTheme = themes[0].color
        let colorBackground = themes[0].backgroundColor;
        colorWords(colorTheme);
        colorBackgroundFunction(colorBackground);
        console.log('2')
    }
}

function colorWords(element){
    let content = document.getElementsByClassName('content')[0];
    console.log('content')
    content.style.color = element;
}

function colorBackgroundFunction(element){
    let content = document.getElementsByClassName('content')[0];
    console.log('content')
    content.style.backgroundColor = element;
}

function themeStorage(){
    if(localStorage.getItem('Theme') == ('Theme', themes[0].themeName)){
        localStorage.setItem('Theme', themes[0].themeName)
        let colorTheme = themes[0].color
        let colorBackground = themes[0].backgroundColor;
        console.log('1')
        colorWords(colorTheme);
        colorBackgroundFunction(colorBackground);
    } else {
        localStorage.setItem('Theme', themes[1].themeName);
        let colorTheme = themes[1].color
        let colorBackground = themes[1].backgroundColor;
        colorWords(colorTheme);
        colorBackgroundFunction(colorBackground);
        console.log('2')
    }
}

onload = themeStorage();



