function Phone(brand, model, price, color) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
}
Phone.prototype.printInfo = function() {
  console.log(
    "The phone is " +
      this.brand +
      " " +
      this.model +
      ", color is " +
      this.color +
      " and the price is " +
      this.price +
      " zł."
  );
};
var iPhone6S = new Phone("Apple", "iPhone 6S", 2250, "silver");
iPhone6S.printInfo();
var samsungGalaxyS6 = new Phone("Samsung", "Galaxy S6", 899, "gold");
samsungGalaxyS6.printInfo();
var onePlusOne = new Phone("OnePlus", "One", 1650, "silver");
onePlusOne.printInfo();
