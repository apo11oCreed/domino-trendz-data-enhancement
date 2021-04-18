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

                var price,
                oneSizeFitsMost;

                switch (collectionsArray[collections]) {
                    case 'Scrub Cap':
                        price = '20.0';
                        oneSizeFitsMost=' One size fits most.';
                        break;
                    case 'Scrub Caps':
                        price = '20.0';
                        oneSizeFitsMost=' One size fits most.';
                        break;
                    case 'Zippy Clutch':
                        price = '40.0';
                        break;
                    case 'Begonia Bag':
                        price = '60.0';
                        break;
                    case 'Bouffant Scrub Cap':
                        oneSizeFitsMost=' One size fits most.';
                        break;
                    case 'Long Hair Scrub Cap':
                        oneSizeFitsMost=' One size fits most.';
                        break;
                    default:
                        price=data[item].price;
                        oneSizeFitsMost='';
                        break;
                }

                if(collections!=0){

                    var newProduct = new Object();

                    newProduct.handleId=handleId + counter++;
                    newProduct.fieldType=data[item].fieldType;
                    newProduct.name=data[item].name + ' ' + collectionsArray[collections];
                    newProduct.description=productSizeObj[collectionsArray[collections]]=="One Size fits most" ? data[item].description + " One Size fits most.":data[item].description;
                    newProduct.productImageUrl=data[item].productImageUrl;
                    newProduct.collections=collectionsArray[collections];
                    newProduct.sku=data[item].sku;
                    newProduct.ribbon=data[item].ribbon;
                    newProduct.price=data[item].price;
                    newProduct.surcharge=data[item].surcharge;
                    newProduct.visible=data[item].visible;
                    newProduct.discountMode=data[item].discountMode;
                    newProduct.discountValue=data[item].discountValue;
                    newProduct.inventory=data[item].inventory;
                    newProduct.weight=data[item].weight;
                    newProduct.productOptionName1=productSizeObj[collectionsArray[collections]]=="One Size fits most" || collectionsArray[collections]=='Scrub Cap' || collectionsArray[collections]=='Scrub Caps' || collectionsArray[collections]=='Bouffant Scrub Cap'|| collectionsArray[collections]=='Long Hair Scrub Cap'?'trash':'Sizes';
                    newProduct.productOptionType1=productSizeObj[collectionsArray[collections]]=="One Size fits most" || collectionsArray[collections]=='Scrub Cap' || collectionsArray[collections]=='Scrub Caps' || collectionsArray[collections]=='Bouffant Scrub Cap'|| collectionsArray[collections]=='Long Hair Scrub Cap'?'trash':'DROP_DOWN';
                    newProduct.productOptionDescription1=productSizeObj[collectionsArray[collections]]=="One Size fits most"?'trash':productSizeObj[collectionsArray[collections]];
                    newProduct.productOptionName2="trash";
                    newProduct.productOptionType2="trash";
                    newProduct.productOptionDescription2="trash";
                    newProduct.productOptionName3="trash";
                    newProduct.productOptionType3="trash";
                    newProduct.productOptionDescription3="trash";
                    newProduct.productOptionName4="trash";
                    newProduct.productOptionType4="trash";
                    newProduct.productOptionDescription4="trash";
                    newProduct.productOptionName5="trash";
                    newProduct.productOptionType5="trash";
                    newProduct.productOptionDescription5="trash";
                    newProduct.productOptionName6="trash";
                    newProduct.productOptionType6="trash";
                    newProduct.productOptionDescription6="trash";
                    newProduct.additionalInfoTitle1="trash";
                    newProduct.additionalInfoDescription1="trash";
                    newProduct.additionalInfoTitle2="trash";
                    newProduct.additionalInfoDescription2="trash";
                    newProduct.additionalInfoTitle3="trash";
                    newProduct.additionalInfoDescription3="trash";
                    newProduct.additionalInfoTitle4="trash";
                    newProduct.additionalInfoDescription4="trash";
                    newProduct.additionalInfoTitle5="trash";
                    newProduct.additionalInfoDescription5="trash";
                    newProduct.additionalInfoTitle6="trash";
                    newProduct.additionalInfoDescription6="trash";
                    newProduct.customTextField1=data[item].customTextField1;
                    newProduct.customTextCharLimit1=data[item].customTextCharLimit1;
                    newProduct.customTextMandatory1=data[item].customTextMandatory1;
                    newProduct.customTextField2=data[item].customTextField2;
                    newProduct.customTextCharLimit2=data[item].customTextCharLimit2;
                    newProduct.customTextMandatory2=data[item].customTextMandatory2;

                    newData.push(newProduct);
                    
                } else {

                    var newProduct = new Object();

                    newProduct.handleId=data[item].handleId;
                    newProduct.fieldType=data[item].fieldType;
                    newProduct.name=data[item].name + ' ' + collectionsArray[collections];
                    newProduct.description=productSizeObj[collectionsArray[collections]]=="One Size fits most" ? data[item].description + " One Size fits most.":data[item].description;
                    newProduct.productImageUrl=data[item].productImageUrl;
                    newProduct.collections=collectionsArray[0];
                    newProduct.sku=data[item].sku;
                    newProduct.ribbon=data[item].ribbon;
                    newProduct.price=data[item].price;
                    newProduct.surcharge=data[item].surcharge;
                    newProduct.visible=data[item].visible;
                    newProduct.discountMode=data[item].discountMode;
                    newProduct.discountValue=data[item].discountValue;
                    newProduct.inventory=data[item].inventory;
                    newProduct.weight=data[item].weight;
                    newProduct.productOptionName1=productSizeObj[collectionsArray[collections]]=="One Size fits most" || collectionsArray[collections]=='Scrub Cap' || collectionsArray[collections]=='Scrub Caps' || collectionsArray[collections]=='Bouffant Scrub Cap'|| collectionsArray[collections]=='Long Hair Scrub Cap'?'trash':'Sizes';
                    newProduct.productOptionType1=productSizeObj[collectionsArray[collections]]=="One Size fits most" || collectionsArray[collections]=='Scrub Cap' || collectionsArray[collections]=='Scrub Caps' || collectionsArray[collections]=='Bouffant Scrub Cap'|| collectionsArray[collections]=='Long Hair Scrub Cap'?'trash':'DROP_DOWN';
                    newProduct.productOptionDescription1=productSizeObj[collectionsArray[0]]=="One Size fits most"?'trash':productSizeObj[collectionsArray[0]];
                    newProduct.productOptionName2="trash";
                    newProduct.productOptionType2="trash";
                    newProduct.productOptionDescription2="trash";
                    newProduct.productOptionName3="trash";
                    newProduct.productOptionType3="trash";
                    newProduct.productOptionDescription3="trash";
                    newProduct.productOptionName4="trash";
                    newProduct.productOptionType4="trash";
                    newProduct.productOptionDescription4="trash";
                    newProduct.productOptionName5="trash";
                    newProduct.productOptionType5="trash";
                    newProduct.productOptionDescription5="trash";
                    newProduct.productOptionName6="trash";
                    newProduct.productOptionType6="trash";
                    newProduct.productOptionDescription6="trash";
                    newProduct.additionalInfoTitle1="trash";
                    newProduct.additionalInfoDescription1="trash";
                    newProduct.additionalInfoTitle2="trash";
                    newProduct.additionalInfoDescription2="trash";
                    newProduct.additionalInfoTitle3="trash";
                    newProduct.additionalInfoDescription3="trash";
                    newProduct.additionalInfoTitle4="trash";
                    newProduct.additionalInfoDescription4="trash";
                    newProduct.additionalInfoTitle5="trash";
                    newProduct.additionalInfoDescription5="trash";
                    newProduct.additionalInfoTitle6="trash";
                    newProduct.additionalInfoDescription6="trash";
                    newProduct.customTextField1=data[item].customTextField1;
                    newProduct.customTextCharLimit1=data[item].customTextCharLimit1;
                    newProduct.customTextMandatory1=data[item].customTextMandatory1;
                    newProduct.customTextField2=data[item].customTextField2;
                    newProduct.customTextCharLimit2=data[item].customTextCharLimit2;
                    newProduct.customTextMandatory2=data[item].customTextMandatory2;

                    newData.push(newProduct);

                }
                
            });
            
        }
    }

    html=JSON.stringify(newData);

$('#App').html(html);
}

