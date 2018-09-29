 const aNum = prompt('Enter a');
 const bNum = prompt('Enter b');
 const cNum = prompt('Enter c');
 let descr= bNum*bNum-4*aNum*cNum;
 const xSingle = ((-bNum+Math.sqrt(descr))/(2*aNum));

function SolvEq( bNum, descr, aNum, xFirst, xSecond, xSingle) {
if (descr ===0) 

{ alert(xSingle);
 }
else if (descr<0){
alert('Equation doesn`t have solution' );
}
else {
    let xFirst = ((-bNum+Math.sqrt(descr))/(2*aNum));
    let xSecond = ((-bNum-Math.sqrt(descr))/(2*aNum)); 
    return 'x1 = ' + xFirst + 'x2 = ' +  xSecond;
}
}
 

    
