type CircleArea = {
  shape: "circle";
  radius: number;
};
type RectangleArea = {
  shape: "rectangle";
  width: number;
  height: number;
};
type CircleOrRectangle = CircleArea | RectangleArea;
const calculateShapeArea = (a: CircleOrRectangle) => {
  if ("radius" in a) {
    return Math.PI * a.radius * a.radius;
  } else if ("height" in a) {
    return a.width * a.height;
  } else {
    return 0;
  }
};

// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });
// console.log(rectangleArea);
// console.log(circleArea);
