## HTML/CSS

When browser render the Dom, it will render each element as a rectangle box. This rectangle box is box model and it includes layers of content, padding, border and margin.

<br><br>

## Js

```
const sales = [
        { itemSold: "Football", price: 19.99, dateSold: "2018-04-07", id: "j_123" },
        { itemSold: "Trainers", price: 159.95, dateSold: "2018-03-02", id: "t_acds1" },
        { itemSold: "Cricket bat", price: 204.97, dateSold: "2018-04-05", id: "j_456"},
        { itemSold: "Rugby ball", price: 30.00, dateSold: "2017-04-22", id: "t_acds3" },
        { itemSold: "Hockey stick", price: 54.95, dateSold: "2017-03-19", id: "j_999" }
    ]

// 1.  Return the sum of the price of all properties as a single value.
const sum = sales.reduce((total, sale) => sale.price + total, 0)

// 2.  Return the items which were sold in 2017.
const soldItemsIn2017 = sales.filter(sale => new Date(sale.dateSold).getFullYear() === 2017 )

// 3.  Return an array of all of the itemsSold properties as strings, sorted alphabetically.
const itemsSold = sales.map(sale => sale.itemSold).sort()

// 4.  Using id as an argument, return the sale which matches the id.
const findSaleByIdWrapper = (sales) => (id) => sales.find(sale => sale.id === id);
const findSaleById = findSaleByIdWrapper(sales)

const targetSale = findSaleById('j_123')
```

<br><br>

## layout

To view the result, please use chrome to open the index.html in "build" folder
if it doesn't work, please run below command to host a server to view the result. Thanks

```
yarn && yarn start
```

The test demo implemented responsive layout. It can be tested by toggle the device toolbar in Chrome dev tool or just narrow the browser. A menu button will appear on top left and it can toggle the sidebar.
Other feature implemented includes a simple search bar.
