var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ];

var Cat = function(data){
  this.clickCount = ko.observable(0);
  this.firstName = ko.observable(data.name);
  this.lastName = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc)
  this.imgAttribution = ko.observable(data.imgAttribution)
  
  this.fullName = ko.computed(function () {
    return this.firstName() + " " + this.lastName();
  }, this);
  this.catLevel = ko.computed(function () {
    var clicks = this.clickCount();
    if (clicks < 1) {
      return "Newborn";
    }
    else if (clicks < 3) {
      return "Infant";
    }
    else if (clicks < 10) {
      return "Child";
    }
    else if (clicks < 20) {
      return "Teen";
    }
    else if (clicks < 40) {
      return "Adult";
    }
    else {
      return "Superman";
    }
  }, this);
  this.nickNames = data.nickNames;
}

var ViewModel = function () {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  })
  
  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.changeCat = function(){
    self.currentCat(this);
  };
}

ko.applyBindings(new ViewModel);