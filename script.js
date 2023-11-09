function calcular(){
    let num1 = document.querySelector('#num1')
    let num2 = document.querySelector('#num2')
    
    let res = document.querySelector('#res')

    if (num1.value.length == 0 || num2.value.length == 0){
        window.alert(`[ERRO] Campos vazios! Verifique novamente`)
    }else{
        var numero1 = Number(num1.value)
        let numero2 = Number(num2.value)
        let ope = document.getElementsByName('cal')
        

        if(ope[0].checked){
            numero1 = numero1 + numero2
        }else if(ope[1].checked){
            numero1 = numero1 - numero2
        }else if (ope[2].checked){
            numero1 = numero1 * numero2
        }else if(ope[3].checked){
            numero1 = numero1 / numero2
        }
    }

    res.innerHTML = `O resultado é ${numero1}`;
    document.querySelector('#res').style.fontSize="2rem"
    

}