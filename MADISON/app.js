const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('odd');
const body = document.body;


const theme = localStorage.getItem('theme')
const isSolar = localStorage.getItem('isSolar')

if (theme){
    body.classList.add(theme)
    isSolar && body.classList.add('odd')
}
darkButton.onclick = () => {
    body.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark')
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light')
};

solarButton.onclick = () => {
    if (body.classList.contains('odd')){
        body.classList.remove('odd')
        solarButton.style.cssText = `
            color: #fff565;
        `
        solarButton.innerText = 'solarize'
        localStorage.removeItem('isSolar')
    }
    else{
        solarButton.style.cssText = `
            color: #0582a2;
        `
        body.classList.add("odd")
        solarButton.innerText = 'normalize'
        localStorage.setItem('isSolar', true)
    }
};