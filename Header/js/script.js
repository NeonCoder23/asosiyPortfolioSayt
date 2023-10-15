// Setting Color Site
document.querySelector(".settingClr").onclick = () => {

    document.querySelector('.clrs').classList.toggle("block");
    
}


function colorTxt() {
    // Step 2: Add event listener to the color selector
    const colorSelector = document.querySelectorAll('.clrs li');
    let colorList = ['#00ff00','#f0ffff','#ffff00','#f00f00','#00ffff','#ffa500','#008080']
    colorSelector.forEach((clrSelector, i) => {
        clrSelector.addEventListener('click', function() {
            // Step 3: Retrieve the selected color value
            const selectedColor = colorList[i];
        
            // Step 4: Select elements with the "special-text" class
            const specialTextElements = document.querySelectorAll('.clr');
            specialTextElements.forEach(function(element) {
                element.style.color = selectedColor;
          });
        });
    })
}

// Aside open 
function aside() {
    const btn = document.querySelector('.menu');
    const btnClosed = document.querySelector('.fa-close');
    const navigation = document.querySelector('.aside');
    const navigationItems = document.querySelectorAll('.aside a');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        navigation.classList.toggle('active')
    })


    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            btn.classList.remove('active');
            navigation.classList.remove('active');
        })
    })
    btnClosed.addEventListener('click', () => {
        navigation.classList.remove('active');
    })
}

function goToPages() {
    const boshSahifa = document.querySelector('#boshSahifa')
    const loyihalar = document.querySelector('#loyihalar')
    const kodlar = document.querySelector('#kodlar')
    const aloqa = document.querySelector('#aloqa')
    const xizmat = document.querySelector('#xizmat')

    aloqa.addEventListener('click', () => {
        window.location.href = "/Aloqa Page/index.html";
    })
}
// Already All Funtions
function startFunctions() {
    // screenDarkMode()
    aside()
    colorTxt()
    goToPages()
}
startFunctions()