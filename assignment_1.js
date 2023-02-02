//Mathematical Shapes
//square
const squareDiagonal = side => side*Math.sqrt(2);

const triangleArea = (a,b,c) => {
    const s = (a + b + c )/2;
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return s, area;
};

const circleAreaAndCircleCircumference = (radio) => {
    const circumference = 2 * radio * Math.PI ; //2 pi rad
    const area = radio * radio * Math.PI; //r2 pi
    console.log(`the area of a circle with a radio of 4 is ${area} and the circumference is ${circumference}`);
    return {
        circumference,
        area,
    }
};

const thiscircleAreaAndCircleCircumference = () => circleAreaAndCircleCircumference(4);

const littleAssignments = () => {
    console.log(`the diagonal of a square where the length of each side is 9, is ${squareDiagonal(9)}`);
    console.log(`the area of a triangle where the length of three of its sides are 5,6,7 is ${triangleArea(5,6,7)}`);
    thiscircleAreaAndCircleCircumference();
}

littleAssignments();