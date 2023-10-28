function converter(num: number) {
    let numberP: GLfloat = 3.14159;
    let area = numberP * num * num; 
    console.log(area.toFixed(2));
    
}

converter(5);