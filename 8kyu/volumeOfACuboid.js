/*
Bob needs a fast way to calculate the volume of a rectangular 
cuboid with three values: the length, width and height of the cuboid.

Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    
  }
}
*/

// Answer:
// I simply returned the multiplied values of length, width, and height
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}