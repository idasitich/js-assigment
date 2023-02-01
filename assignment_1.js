//Mathematical Shapes

const myCircleRadio = 4;
const myTriangleSides = { first: 5, second: 6, third:7} ;

//find the area of a triangle

// const triangleArea = (a, b, c) =>{

// }

//circumference and area of a circle

const circleProducts = (radio) => {
    const circumference = 2 * radio * Math.PI ; //2 pi rad
    const area = radio * radio * Math.PI; //r2 pi

    return {
        circumference,
        area,
    }
}



const thisCircleProducts = () => circleProducts(myCircleRadio);

console.log(thisCircleProducts());



const circumference = thisCircleProducts().circumference;
const area = thisCircleProducts().area;

console.log('only circumference', circumference);

console.log('that is what out method returns', circleProducts(3));
console.log('thats what thisCircleProduct returns', thisCircleProducts());