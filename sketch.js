

let currentColor = 'white'





function setup() {
    createCanvas(1200,800);
    strokeWeight(2)


    // textSize(60);
    // fill(255);
    // textSize(60);
    fill(0);




    // back wall
    background(140);
    // background(255);

    fill(255);
    rect(550+5,250+5, 290,190);



    noStroke();



    // fill(50)
    // text(key, 600-10-10-10, 250+10);



    //text message on screen
    let s = 'Click pencil to draw, rubber to erase, button to check time';
    fill(50);
    text(s, 600-10-10-10, 250+10, 280, 100); // Text wraps within text box

    createButton("light")
    //clock
    fill(255)
    rect(800,470,100,40,5)
    fill(100)
    rect(820-10,480-5,80,30,5)
    fill('red')
    rect(880,465-5,10,10,1)

}

function book(x,y,width,c){
    fill(c);
    rect(x,y,width,100);
    fill(255);
    rect(x+5,y+10,25,10);
}

function pencil(x,y,color1){
    fill(color1);
    triangle(x,y,x-12,y+30,x+12,y+30)
    fill(80);
    rect(x-6,y+30,12,50);

}

let inputText = []

function draw() {
    //text
    // fill(0);
    // text( key, 600-40, 300,200,100);

    // arc(800,510,50,40)

    // if(mouseIsPressed){
    //     print("sss")
    // }



    if (keyIsPressed === true){
        append(inputText,key)
    }
    print(inputText)
    fill(0);
    let message = join(inputText,",")
    text( message, 600-40, 300,100,100);
    text(key, 20, 75); // Draw at coordinate (20,75)



    // fill(0)
    // rect(800,510,50,50)

    // ceilling
    fill(170);
    rect(0,0, width,40);

    // floor/baseboard
    fill(160);
    rect(0,height-100, width,100);
    fill(110);
    rect(0,height-110, width,10);

    // table
    fill(180);
    rect(width/2-600/2, height-400+50+20+20+20, 600,20);     // top
    rect(width/2-520/2, height-380+50+20+20+20, 520,30);     // apron
    rect(width/2-520/2, height-350+50+20+20+20, 20,200);     // L leg
    rect(width/2+520/2-20, height-350+50+20+20+20, 20,200);  // R leg

    fill(110);                                   // feet
    rect(width/2-520/2, height-150+50+20+20+20,20,10);
    rect(width/2+480/2, height-150+50+20+20+20,20,10);

    fill(160);                                   // shadow
    rect(width/2-520/2, height-380+50+20+20+20, 520,10);

    // short bench
    fill(200);
    rect(width/2+300, height-280+70+30+10, 140,20);   // top
    rect(width/2+300, height-260+70+30+10, 20,120);   // L leg
    rect(width/2+420, height-260+70+30+10, 20,120);   // R leg

    fill(234,218,162);                       // pad
    rect(width/2+300,height-300+70+30+10, 140,20);

    fill(110);                              // feet
    rect(width/2+300,height-150+70+30+10, 20,10);
    rect(width/2+420,height-150+70+30+10, 20,10);

    fill(180);                              // shadow
    rect(width/2+300, height-260+70+30+10, 20,10);
    rect(width/2+420, height-260+70+30+10, 20,10);

    // long bench
    fill(200);
    rect(width/2-180*2, height-140*2+110,200*2,10*2);   // top
    rect(width/2-180*2, height-140*2+110,10*2,70*2);    // L leg
    rect(width/2+10*2, height-130*2+110, 10*2,60*2);    // R leg

    fill(234,218,162);                       // pad
    rect(width/2-180*2, height-150*2+110,200*2,10*2);

    fill(110);                              // feet
    rect(width/2-180*2,height-75*2+110, 10*2,5*2);
    rect(width/2+10*2, height-75*2+110, 10*2,5*2);

    fill(180);                              // shadow
    rect(width/2-180*2,height-130*2+110, 10*2,5*2);
    rect(width/2+10*2, height-130*2+110, 10*2,5*2);

    // lamp
    fill(255,40);                   // some light
    ellipse(width/2,150, 50,50);
    fill(255,30);                   // some more
    ellipse(width/2,150, 60,60);
    fill(255,20);                   // and more
    ellipse(width/2,150, 70,70);
    fill(255,10);                   // and more
    ellipse(width/2,150, 80,80);

    fill(255,150);                  // bulb
    ellipse(width/2,150, 40,40);

    fill(30);                       // cord
    rect(width/2-2,0, 4,100);

    fill(60);                       // shade
    rect(width/2-75,100, 150,50);


    //frame leg left
    fill(60);                       // shade
    rect(640,450, 20,60,0,0,10,10);

    //frame right left
    fill(60);                       // shade
    rect(740,450, 20,60,0,0,10,10);

    //frame bottom bar
    fill(60);                       // shade
    rect(660,470, 80,10);


    //frame top
    fill(60);
    rect(550,250, 300,5,5);
    //frame left
    fill(60);
    rect(550,250, 5,200,5);
    //frame right
    fill(60);
    rect(850-5,250, 5,200,5);
    //frame bottom
    fill(60);
    rect(550,450-5, 300,5,5);



    //filefolder
    let c = color(254,95,85)
    let c1 = color(214,209,17)
    let c2 = color(199,239,207)
    book(330,410,35,c)
    book(330+35,410,35,c1)
    book(330+70,410,35,c2)

    pencil(520-10-10-10-10-10-10,430,'red')
    pencil(520-10-10-10-10-10-10+24+5,430,'green')
    pencil(520-10-10-10-10-10-10+48+10,430,'blue')




    if (mouseIsPressed == true) {
        stroke(currentColor);
        //second x
        if ((mouseX>=550 && mouseX<=850) &&(mouseY>=250 && mouseY<=450) && (pmouseX>=550 && pmouseX<=850) &&(pmouseY>=250 && pmouseY<=450)     ){
            line(mouseX, mouseY, pmouseX, pmouseY);

        }
        noStroke();

        // if ((mouseX>=800 && mouseX<=850) &&(mouseY>=460 && mouseY<=510)){
        //     background(0)
        // }



    }

    if (mouseIsPressed) {
        //here
        if (mouseX > (460-12) && mouseX < (460+12) && mouseY > (430) && mouseY < (430+80)) {
            currentColor = 'red';
        } else if (mouseX > (489-12) && mouseX < (489+12) && mouseY > 430 && mouseY < (430+80)) {
            currentColor = 'green';
        } else if (mouseX > (518-12) && mouseX < (518+12) && mouseY > 430 && mouseY < (430+80)) {
            currentColor = 'blue';
        }
        else if (mouseX > 560 && mouseX < 600 && mouseY > (485) && mouseY < (485+25)) {
            // background(255);
            setup()
        }
        else if (mouseX > (880-10) && mouseX < (885+10) && mouseY > (460-10) && mouseY < (465+10)) {
            // background(255);
            setup()
            let h = hour();
            let min = minute();
            // let sec = second();
            textSize(18)
            fill('white')
            text(  h+':'+min, 810+15, 475+10+10);            // currentTime()
        }
    }

    // //name the button
    // textSize(20);
    // text('Red', 108, 132);

    //eraser
    fill(255)
    rect(500+20+20+20,440+20+20+5,40,13,10,10,0,0)
    fill('darkblue')
    rect(500+20+20+20-4,440+20+20+5+13,40+8,12)





}

