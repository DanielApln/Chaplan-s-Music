// Second slider
const productContainersSecond = [...document.querySelectorAll('.product-container-second')];
const nxtBtnSecond = [...document.querySelectorAll('.nxt-btn-second')];
const preBtnSecond = [...document.querySelectorAll('.pre-btn-second')];

productContainersSecond.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtnSecond[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtnSecond[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})// First slider
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
