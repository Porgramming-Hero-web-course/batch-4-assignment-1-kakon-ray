"use strict";
{
    const calculateShapeArea = (obj) => {
        if (obj.shape === 'circle') {
            return (obj.radius * obj.radius) * Math.PI;
        }
        else if (obj.shape === 'rectangle') {
            return obj.width * obj.height;
        }
        else {
            return 0;
        }
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
