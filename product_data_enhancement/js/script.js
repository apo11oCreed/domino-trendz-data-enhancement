var productSizeObj={
        "Domino Fitted Mask":"Extra Large;Large;Medium;Small;Extra Small",

    "Pleated Masks":"Large;Medium;Small;Extra Small",

    "Harlequin Clutch":"Large;Medium;Small",

    "Zippy Clutch":"Large;Medium;Small",

    "Scrub Cap":"One Size fits most",

    "Bouffant Scrub Cap":"One Size fits most",

    "Long Hair Scrub Cap":"One Size fits most",

    "Book/iPad Sleeve":"Extra Large;Medium;Small",

    "Key Lanyard":"Large;Small",

    "Tear Drop Coin Purse":"Large;Small",

    "Custom French Seam Pillow Cases":"King;Standard",

    "Scrub Tops":"Extra Large;Large;Medium;Small;Extra Small",

    "Reading Pocket Pillow":"18x18;16x16"
},
newData=[];

console.log(productSizeObj);
console.log(productSizeObj["Domino Mask"]);

$(document).ready(function () {
    $.getJSON('../product_data_enhancement/csv/catalog_products_01.json',function(data){

        return data;

        }).then(function(data){

            necromancer(data);

        });
});

function necromancer(data){

    var html='',
    newData=[];

    for(var item in data){

        var collectionsArray=[];

        for(var props in data[item]){

            if(data[item][props]==''){
                data[item][props]='trash';
            }

        }

        if(data[item].collection.indexOf(';')!=-1){

            var handleId=data[item].handleId,
            counter=0;

            collectionsArray=data[item].collection.split(';');


            $.each(collectionsArray,function(collections){

                var price;

                switch (collectionsArray[collections]) {
                    case 'Scrub Cap':
                        price = '20.0';
                        break;
                    case 'Zippy Clutch':
                        price = '40.0';
                        break;
                    case 'Begonia Bag':
                        price = '60.0';
                    default:
                        price=data[item].price;
                        break;
                }

                if(collections!=0){

                    var newProduct = new Object();
                    newProduct.additionalInfoDescription1=data[item].additionalInfoDescription1;
                    newProduct.additionalInfoDescription2=data[item].additionalInfoDescription2;
                    newProduct.additionalInfoDescription3=data[item].additionalInfoDescription3;
                    newProduct.additionalInfoDescription4=data[item].additionalInfoDescription4;
                    newProduct.additionalInfoDescription5=data[item].additionalInfoDescription5;
                    newProduct.additionalInfoDescription6=data[item].additionalInfoDescription6;
                    newProduct.additionalInfoTitle1=data[item].additionalInfoTitle1;
                    newProduct.additionalInfoTitle2=data[item].additionalInfoTitle2;
                    newProduct.additionalInfoTitle3=data[item].additionalInfoTitle3;
                    newProduct.additionalInfoTitle4=data[item].additionalInfoTitle4;
                    newProduct.additionalInfoTitle5=data[item].additionalInfoTitle5;
                    newProduct.additionalInfoTitle6=data[item].additionalInfoTitle6;
                    newProduct.collections=collectionsArray[collections];
                    newProduct.customTextCharLimit1=data[item].customTextCharLimit1;
                    newProduct.customTextCharLimit2=data[item].customTextCharLimit2;
                    newProduct.customTextField1=data[item].customTextField1;
                    newProduct.customTextField2=data[item].customTextField2;
                    newProduct.customTextMandatory1=data[item].customTextMandatory1;
                    newProduct.customTextMandatory2=data[item].customTextMandatory2;
                    newProduct.description=data[item].description;
                    newProduct.discountMode=data[item].discountMode;
                    newProduct.discountValue=data[item].discountValue;
                    newProduct.fieldType=data[item].fieldType;
                    newProduct.handleIds=handleId + counter++;
                    newProduct.inventory=data[item].inventory;
                    newProduct.name=data[item].name + ' ' + collectionsArray[collections];
                    newProduct.price=price;
                    newProduct.productImageUrl=data[item].productImageUrl;
                    newProduct.productOptionDescription1=productSizeObj[collectionsArray[collections]];
                    newProduct.productOptionDescription2='trash';
                    newProduct.productOptionDescription3='trash';
                    newProduct.productOptionDescription4='trash';
                    newProduct.productOptionDescription5='trash';
                    newProduct.productOptionDescription6='trash';
                    newProduct.productOptionName1='Sizes';
                    newProduct.productOptionName2='trash';
                    newProduct.productOptionName3='trash';
                    newProduct.productOptionName4='trash';
                    newProduct.productOptionName5='trash';
                    newProduct.productOptionName6='trash';
                    newProduct.productOptionType1='DROP_DOWN';
                    newProduct.productOptionType2='trash';
                    newProduct.productOptionType3='trash';
                    newProduct.productOptionType4='trash';
                    newProduct.productOptionType5='trash';
                    newProduct.productOptionType6='trash';
                    newProduct.ribbon=data[item].ribbon;
                    newProduct.sku=data[item].sku;
                    newProduct.surcharge=data[item].surcharge;
                    newProduct.visible=data[item].visible;
                    newProduct.weight=data[item].weight;

                    newData.push(newProduct);
                    
                } else {

                    var newProduct = new Object();
                    newProduct.additionalInfoDescription1=data[item].additionalInfoDescription1;
                    newProduct.additionalInfoDescription2=data[item].additionalInfoDescription2;
                    newProduct.additionalInfoDescription3=data[item].additionalInfoDescription3;
                    newProduct.additionalInfoDescription4=data[item].additionalInfoDescription4;
                    newProduct.additionalInfoDescription5=data[item].additionalInfoDescription5;
                    newProduct.additionalInfoDescription6=data[item].additionalInfoDescription6;
                    newProduct.additionalInfoTitle1=data[item].additionalInfoTitle1;
                    newProduct.additionalInfoTitle2=data[item].additionalInfoTitle2;
                    newProduct.additionalInfoTitle3=data[item].additionalInfoTitle3;
                    newProduct.additionalInfoTitle4=data[item].additionalInfoTitle4;
                    newProduct.additionalInfoTitle5=data[item].additionalInfoTitle5;
                    newProduct.additionalInfoTitle6=data[item].additionalInfoTitle6;
                    newProduct.collections=collectionsArray[0];
                    newProduct.customTextCharLimit1=data[item].customTextCharLimit1;
                    newProduct.customTextCharLimit2=data[item].customTextCharLimit2;
                    newProduct.customTextField1=data[item].customTextField1;
                    newProduct.customTextField2=data[item].customTextField2;
                    newProduct.customTextMandatory1=data[item].customTextMandatory1;
                    newProduct.customTextMandatory2=data[item].customTextMandatory2;
                    newProduct.description=data[item].description;
                    newProduct.discountMode=data[item].discountMode;
                    newProduct.discountValue=data[item].discountValue;
                    newProduct.fieldType=data[item].fieldType;
                    newProduct.handleIds=handleId;
                    newProduct.inventory=data[item].inventory;
                    newProduct.name=data[item].name + ' ' + collectionsArray[collections];
                    newProduct.price=price;
                    newProduct.productImageUrl=data[item].productImageUrl;
                    newProduct.productOptionDescription1=productSizeObj[collectionsArray[0]];
                    newProduct.productOptionDescription2='trash';
                    newProduct.productOptionDescription3='trash';
                    newProduct.productOptionDescription4='trash';
                    newProduct.productOptionDescription5='trash';
                    newProduct.productOptionDescription6='trash';
                    newProduct.productOptionName1='Sizes';
                    newProduct.productOptionName2='trash';
                    newProduct.productOptionName3='trash';
                    newProduct.productOptionName4='trash';
                    newProduct.productOptionName5='trash';
                    newProduct.productOptionName6='trash';
                    newProduct.productOptionType1='DROP_DOWN';
                    newProduct.productOptionType2='trash';
                    newProduct.productOptionType3='trash';
                    newProduct.productOptionType4='trash';
                    newProduct.productOptionType5='trash';
                    newProduct.productOptionType6='trash';
                    newProduct.ribbon=data[item].ribbon;
                    newProduct.sku=data[item].sku;
                    newProduct.surcharge=data[item].surcharge;
                    newProduct.visible=data[item].visible;
                    newProduct.weight=data[item].weight;

                    newData.push(newProduct);

                }
                
            });
            
        }
    }

    html=JSON.stringify(newData);

$('#App').html(html);
}

