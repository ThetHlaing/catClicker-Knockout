var ViewModel = function(){
    this.clickCount = ko.observable(0);
    this.firstName = ko.observable("Teddy");
    this.lastName = ko.observable("Bear");
    this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg")
    this.imgAttribution = ko.observable("Thet Hlaing")
    this.incrementCounter = function(){
      this.clickCount(this.clickCount() + 1);
    };
    this.fullName = ko.computed(function(){
        return this.firstName() + " " + this.lastName();
    },this);
    this.catLevel = ko.computed(function(){
      if(this.clickCount() < 10)
      {
        return "Newborn";
      }
      else if(this.clickCount() < 30){
        return "Infant";
      }
      else{
        return "Teen";
      }
    },this)
}

ko.applyBindings(new ViewModel);