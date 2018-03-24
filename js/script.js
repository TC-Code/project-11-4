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
var SamsungGalaxyS6 = new Phone("Samsung", "Galaxy S6", 899, "gold");
SamsungGalaxyS6.printInfo();
var OnePlusOne = new Phone("OnePlus", "One", 1650, "silver");
OnePlusOne.printInfo();
