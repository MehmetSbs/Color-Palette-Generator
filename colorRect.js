class colorRect{
    constructor(){
        this.canvas = document.getElementById("colorBox");
        this.context = this.canvas.getContext("2d");
    }

    init(){
        this.drawCanvas();
        this.drawRect(1,this.hexGenerator());
        this.drawRect(2,this.hexGenerator());
        this.drawRect(3,this.hexGenerator());
        this.drawRect(4,this.hexGenerator());
    }

    drawCanvas(){
        this.context.rect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "cyan";
        this.context.fill();
    }

    drawRect(num, str){
        this.context.fillStyle = str;
        if (num == 1) {
            this.context.fillRect(0, 0, 400, 100);
        }
        else if(num == 2) {
            this.context.fillRect(0, 100, 400, 100);
        } 
        else if(num == 3) {
            this.context.fillRect(0, 200, 400, 100);
        } 
        else if(num == 4) {
            this.context.fillRect(0, 300, 400, 100);
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
        console.log(hexCode);
        return hexCode;
    }
};