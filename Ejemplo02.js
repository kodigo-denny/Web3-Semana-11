class Color{
    colorName

    constructor(colorName){
        this.colorName = colorName
    }
}

class Rojo extends Color{
    constructor(){
        super("Rojo")
    }
}

class Azul extends Color{
    constructor(){
        super("Azul")
    }
}

class Verde extends Color{
    constructor(){
        super("Verde")
    }
}

class Figura{
    color
    figuraName

    constructor(color, figuraName){
        this.color = color
        this.figuraName = figuraName
    }

    dibujar(){
        console.log(this.figuraName + " de color: " + this.color.colorName)
    }
}

class Circulo extends Figura{
    constructor(color){
        super(color, "Circulo")
    }
}

class Cuadrado extends Figura{
    constructor(color){
        super(color, "Cuadrado")
    }
}

class Triangulo extends Figura{
    constructor(color){
        super(color, "Triangulo")
    }
}

class Rectangulo extends Figura{
    constructor(color){
        super(color, "Rectangulo")
    }
}