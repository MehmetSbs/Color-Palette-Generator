class colorAbstract {

    init(){

        for(var i = 1; i <= 4; i++){
            var str = this.hexGenerator();
            this.drawRect(i, str);
            this.drawCircle(i, str);
        }
    }

    drawRect(num, str){
        
        if (num == 1) {
            this.colorDiv1.style.backgroundColor = str;
            this.hexDiv1.innerHTML = str;
        }
        else if(num == 2) {
            this.colorDiv2.style.backgroundColor = str;
            this.hexDiv2.innerHTML = str;
        } 
        else if(num == 3) {
            this.colorDiv3.style.backgroundColor = str;
            this.hexDiv3.innerHTML = str;
        } 
        else if(num == 4) {
            this.colorDiv4.style.backgroundColor = str;
            this.hexDiv4.innerHTML = str;
        }
    }

    drawCircle(num, str){
        
        if (num == 1) {
            this.colorDiv1Circle.style.backgroundColor = str;
            this.hexDiv1Circle.innerHTML = str;
        }
        else if(num == 2) {
            this.colorDiv2Circle.style.backgroundColor = str;
            this.hexDiv2Circle.innerHTML = str;
        } 
        else if(num == 3) {
            this.colorDiv3Circle.style.backgroundColor = str;
            this.hexDiv3Circle.innerHTML = str;
        } 
        else if(num == 4) {
            this.colorDiv4Circle.style.backgroundColor = str;
            this.hexDiv4Circle.innerHTML = str;
        }
    }

    hexGenerator(){
        const hexaDecimals = ['0','1','2','3','4','5','6','7',
                            '8','9','A','B','C','D','E','F'];
        var hexCode = "#"+ hexaDecimals[Math.floor(Math.random() * hexaDecimals.length)]
        + hexaDecimals[Math.floor(Math.random() * hexaDecimals.length)]
        +hexaDecimals[Math.floor(Math.random() * hexaDecimals.length)]
        +hexaDecimals[Math.floor(Math.random() * hexaDecimals.length)]
        +hexaDecimals[Math.floor(Math.random() * hexaDecimals.length)]
        +hexaDecimals[Math.floor(Math.random() * hexaDecimals.length)];
        //console.log(hexCode);
        return hexCode;
    }

};