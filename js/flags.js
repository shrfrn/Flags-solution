'use strict'

function toggletopFlag(elFlag) {
    const elFlags = document.querySelectorAll('.flag')
    for(var i = 0; i < elFlags.length; i++){
        elFlags[i].classList.remove('top-flag')
    }
    elFlag.classList.add('top-flag')
}