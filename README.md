# Robotron
> Project developed during Alura's javaScript class with a new feature to change the color of the robot

![robotron](https://user-images.githubusercontent.com/104517812/180424384-a451e0cb-989d-4d87-b375-c9d8b6b4cd3d.png)(https://devcarolinealmeida.github.io/robotron/)

The final challenge of this project was to create a new feature to change the robot image using click events.

- The teacher has sugest to use <i>onclick="trocaImagem("Azul")</i> and:

```
function trocaImagem(cor){
   document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
}
```

:exclamation: But this way, every time you have to creat a new color, you have to create a new button too.

:point_right: Beacuse of that, I wanted to do a function using just one button to change the colors following the array list order.

:sparkles: Not a random sequence, but the exactly order proposed at the array list.

> And finally, after some work, I found a soluction using the logic with MOD (remainder of a division), which returns me one array index at a time, with each click, through the counter <i>(i = (i+1)%cores.length)</i>

```
let btnTrocaCor = document.getElementById("btn-cor");
let cores = ["amarelo", "vermelho", "branco", "preto", "azul", "rosa"];
let i = -1;

btnTrocaCor.addEventListener("click", (event) => {
    event.preventDefault()
    i = (i+1)%cores.length
    let imagem = document.querySelector(".robo")
    imagem.src = `./img/${cores[i]}.png`
})
```
