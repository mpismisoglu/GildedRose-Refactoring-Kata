import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {

  it('CommonItem', () => {
    const gildedRose = new GildedRose([new Item('Common1', 10, 40),
                                       new Item('Common2', 1, 40),
                                       new Item('Common3', 0, 40),
                                       new Item('Common4', 0, 2),
                                       new Item('Common5', 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(39);
    expect(items[1].quality).toBe(39);
    expect(items[2].quality).toBe(38);
    expect(items[3].quality).toBe(0);
    expect(items[4].quality).toBe(0);
  });

  it('Sulfuras', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  it('Conjured', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 0, 30),
                                       new Item('Conjured', 5, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(28)
    expect(items[1].quality).toBe(28);
  });

  it('Aged', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 50),
                                       new Item('Aged Brie', 5, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it('Backstage passes', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 25, 30),
                                       new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30),
                                       new Item('Backstage passes to a TAFKAL80ETC concert', 9, 30),
                                       new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30),
                                       new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30),
                                       new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)]);

    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(31);
    expect(items[1].quality).toBe(32);
    expect(items[2].quality).toBe(32);
    expect(items[3].quality).toBe(33);
    expect(items[4].quality).toBe(33);
    expect(items[5].quality).toBe(0);
  });
});
