function move(className, label, length){
    var width = 10;
    let fill = setInterval(frame, 20);
    function frame(){
        if (width >= length){
            clearInterval(fill);
        }else{
            width++;
            className.style.width = width + '%';
            label.innerHTML = width * 1 + '%';
        }
    }
}
window.onload = ()=>{
        className = document.getElementsByClassName("upper__skills-list__myProgress__myBar")
        label = document.getElementsByClassName("upper__skills-list__myProgress__myBar__label"),
        move(className[0], label[0], 80);
        move(className[1], label[1], 75);
        move(className[2], label[2], 60);
        move(className[3], label[3], 50);
        move(className[4], label[4], 45);
        move(className[5], label[5], 65);
    }
