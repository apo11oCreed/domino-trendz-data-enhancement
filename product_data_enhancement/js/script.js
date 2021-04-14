var productSizeObj=[
    {
        "name":"Domino Mask",
        "sizes":"Extra Large;Large;Medium;Small;Extra Small"
},
{
    "name":"Pleated Mask",
    "sizes":"Large;Medium;Small;Extra Small"
},
{
    "name":"Harlequin Clutch",
    "sizes":"Large;Medium;Small"
},
{
    "name":"Zippy Clutch",
    "sizes":"Large;Medium;Small"
},
{
    "name":"Scrub Cap",
    "sizes":"One Size fits most"
},
{
    "name":"Bouffant Scrub Cap",
    "sizes":"One Size fits most"
},
{
    "name":"Long Hair Scrub Cap",
    "sizes":"One Size fits most"
},
{
    "name":"Book /Ipad Sleeve",
    "sizes":"Extra Large;Medium;Small"
},
{
    "name":"Key Lanyard",
    "sizes":"Large;Small"
},
{
    "name":"Tear Drop Coin Purses",
    "sizes":"Large;Small"
},
{
    "name":"Custom French Seam Pillow Cases",
    "sizes":"King;Standard"
},
{
    "name":"Scrub Tops",
    "sizes":"Extra Large;Large;Medium;Small;Extra Small"
},
{
    "name":"Reading Pocket Pillow",
    "sizes":"18x18;16x16"
}
],
test=$.getJSON('../conversions/csv/catalog_products_01.json',function(data){
    return data;
}).then(function(data){
    for(item in data){
        console.log(data[item].collection);
    }
})