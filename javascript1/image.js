const sliderImg = document.getElementById('imageChange');

function slider() {
    let i =1;
    setInterval(()=>{        
            sliderImg.src= `../images1/sliderImage${i}.png`
            console.log(`../images1/sliderImage${i}.png`)
            if(i>=7) {
                i=1;
            } else {
                i++;
            }
              
    }, 2000)
}