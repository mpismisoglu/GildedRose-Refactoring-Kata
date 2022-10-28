export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }


  updateQuality() {
    
    var spoilValue: number;

     this.items.map(item => {
      if (item.name == "Sulfuras, Hand of Ragnaros" || item.quality == 0 || item.quality == 50) 
        spoilValue = 0;
      
      else if (item.name == "Aged Brie") 
        spoilValue = 1;
      
      else if (item.name == "Backstage passes to a TAFKAL80ETC concert") 
        spoilValue = item.sellIn == 0 ? -item.quality : (item.sellIn <= 5 ? 3 : (item.sellIn <= 10 ? 2 : 1))
      
      else if (item.quality == 1) 
        spoilValue = -1;
      
      else 
        spoilValue = item.sellIn == 0 || item.name == "Conjured" ? -2 : -1  


      item.quality += spoilValue

      if (item.sellIn != 0) 
        item.sellIn --;
      
    });

    return this.items
  }
}
