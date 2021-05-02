var productSizeObj = {
    "Domino Fitted Mask":{
            oneSizeFitsMost: false,
            specialOrder: false,
            productVersionSizes: [
                {
                size: "Extra Large",
                price: "0"
                },
                {
                size: "Large",
                price: "0"
                },
                {
                size: "Medium",
                price: "0"
                },
                {
                size: "Small",
                price: "0"
                },
                {
                size: "Extra Small",
                price: "12.0"
                }
            ]},
            "Pleated Masks":{
      oneSizeFitsMost: false,
      specialOrder: false,
      productVersionSizes: [
        {
          size: "Large",
          price: "0"
        },
        {
          size: "Medium",
          price: "0"
        },
        {
          size: "Small",
          price: "0"
        },
        {
          size: "Extra Small",
          price: "12.0"
        }
      ]
    },
    "Harlequin Clutch":{
      oneSizeFitsMost: false,
      specialOrder: false,
      productVersionSizes: [
        {
          size: "Large",
          price: "10.0"
        },
        {
          size: "Medium",
          price: "5.0"
        },
        {
          size: "Small",
          price: "30.0"
        }
      ]
    },
    "Zippy Clutch":{
      oneSizeFitsMost: false,
      specialOrder: false,
      productVersionSizes: [
        {
          size: "Large",
          price: "10.0"
        },
        {
          size: "Medium",
          price: "5.0"
        },
        {
          size: "Small",
          price: "30.0"
        }
      ]
    },
    "Scrub Cap":{
      oneSizeFitsMost: true,
      specialOrder: false,
      productVersionSizes: []
    },
    "Scrub Caps":{
      oneSizeFitsMost: true,
      specialOrder: false,
      productVersionSizes: []
    },
    "Bouffant Scrub Cap":{
      oneSizeFitsMost: true,
      specialOrder: false,
      productVersionSizes: []
    },
    "Long Hair Scrub Cap":{
      oneSizeFitsMost: true,
      specialOrder: false,
      productVersionSizes: []
    },
    "Book/iPad Sleeve":{
      oneSizeFitsMost: false,
      specialOrder: false,
      productVersionSizes: [
        {
          size: "Extra Large",
          price: "10.0"
        },
        {
          size: "Medium",
          price: "5.0"
        },
        {
          size: "Small",
          price: "30.0"
        }
      ]
    },
    "Key Lanyard":{
      oneSizeFitsMost: false,
      specialOrder: false,
      productVersionSizes: [
        {
          size: "Large",
          price: "4.0"
        },
        {
          size: "Small",
          price: "8.0"
        }
      ]
    },
    "Tear Drop Coin Purse":{
      oneSizeFitsMost: false,
      specialOrder: false,
      productVersionSizes: [
        {
          size: "Large",
          price: "4.0"
        },
        {
          size: "Small",
          price: "10.0"
        }
      ]
    },
    "Begonia Bag":{
      oneSizeFitsMost: true,
      specialOrder: false,
      productVersionSizes: [
        {
          size: "One size fits most",
          price: "60.0"
        }
      ]
    },
    "Custom French Seam Pillow Cases":{
      oneSizeFitsMost: false,
      specialOrder: true,
      productVersionSizes: [
        {
          size: "King",
          price: "0.0"
        },
        {
          size: "Standard",
          price: "0.0"
        }
      ]
    },
    "Scrub Tops":{
      oneSizeFitsMost: false,
      specialOrder: true,
      productVersionSizes: [
        {
          size: "Extra Large",
          price: "0.0"
        },
        {
          size: "Large",
          price: "0.0"
        },
        {
          size: "Medium",
          price: "0.0"
        },
        {
          size: "Small",
          price: "0.0"
        },
        {
          size: "Extra Small",
          price: "0.0"
        }
      ]
    },
    "Reading Pocket Pillow":{
      oneSizeFitsMost: false,
      productVersionSizes: [
        {
          size: "18x18",
          price: "0.0"
        },
        {
          size: "16x16",
          price: "0.0"
        }
      ]
    }
},
  newData = [];

$(document).ready(function () {
  $.getJSON(
    "../product_data_enhancement/csv/catalog_products_01.json",
    function (data) {
      return data;
    }
  ).then(function (data) {
    productNecromancer(data);
  });
});

// Necromancer creates a new product for every product listed as an option
function productNecromancer(data) {

  var html = "";

  // For each of the products in the product list...
  for (var item in data) {

    // Create empty array to store arrays of multiple collections
    var collectionsArray = [];

    // For properties in product
    for (var props in data[item]) {

      // If the property is empty, set value to 'trash'
      if (data[item][props] == "") {

        data[item][props] = "trash";

      }

    }

    // If the product collection property holds value contains a semicolon...
    if (data[item].collection.indexOf(";") != -1) {

      // Store the original product property handleId
      var handleId = data[item].handleId,

      // Counter variable will start the id incrementor for any new products created from splitting of collections
        counter = 0;

        // Split each collection listed into a collections array
      collectionsArray = data[item].collection.split(";");

      $.each(collectionsArray, function (collections) {

        var oneSizeFitsMost,
        collection=collectionsArray[collections],
        newProduct;

        oneSizeFitsMost=productSizeObj[collection].oneSizeFitsMost;

        if (collections != 0) {

          newProduct = new Object();

          newProduct.handleId = handleId + counter++;
          newProduct.fieldType = data[item].fieldType;
          newProduct.name =
            data[item].name + " " + collection;
          newProduct.description =
            productSizeObj[collection] ==
            "One Size fits most"
              ? data[item].description + " One Size fits most."
              : data[item].description;
          newProduct.productImageUrl = data[item].productImageUrl;
          newProduct.collections = collection;
          newProduct.sku = data[item].sku;
          newProduct.ribbon = data[item].ribbon;
          newProduct.price = oneSizeFitsMost == false?productSizeObj[collection].productVersionSizes[0].price:data[item].price;
          newProduct.surcharge = data[item].surcharge;
          newProduct.visible = data[item].visible;
          newProduct.discountMode = data[item].discountMode;
          newProduct.discountValue = data[item].discountValue;
          newProduct.inventory = data[item].inventory;
          newProduct.weight = data[item].weight;
          newProduct.productOptionName1 =
            productSizeObj[collection] ==
              "One Size fits most" ||
            collection == "Scrub Cap" ||
            collection == "Scrub Caps" ||
            collection == "Bouffant Scrub Cap" ||
            collection == "Long Hair Scrub Cap"
              ? "trash"
              : "Sizes";
          newProduct.productOptionType1 =
            productSizeObj[collection] ==
              "One Size fits most" ||
            collection == "Scrub Cap" ||
            collection == "Scrub Caps" ||
            collection == "Bouffant Scrub Cap" ||
            collection == "Long Hair Scrub Cap"
              ? "trash"
              : "DROP_DOWN";
          newProduct.productOptionDescription1 = oneSizeFitsMost == false?productSizeObj[collection].productVersionSizes[0].size:data[item].productOptionDescription1;
          newProduct.productOptionName2 = "trash";
          newProduct.productOptionType2 = "trash";
          newProduct.productOptionDescription2 = "trash";
          newProduct.productOptionName3 = "trash";
          newProduct.productOptionType3 = "trash";
          newProduct.productOptionDescription3 = "trash";
          newProduct.productOptionName4 = "trash";
          newProduct.productOptionType4 = "trash";
          newProduct.productOptionDescription4 = "trash";
          newProduct.productOptionName5 = "trash";
          newProduct.productOptionType5 = "trash";
          newProduct.productOptionDescription5 = "trash";
          newProduct.productOptionName6 = "trash";
          newProduct.productOptionType6 = "trash";
          newProduct.productOptionDescription6 = "trash";
          newProduct.additionalInfoTitle1 = "trash";
          newProduct.additionalInfoDescription1 = "trash";
          newProduct.additionalInfoTitle2 = "trash";
          newProduct.additionalInfoDescription2 = "trash";
          newProduct.additionalInfoTitle3 = "trash";
          newProduct.additionalInfoDescription3 = "trash";
          newProduct.additionalInfoTitle4 = "trash";
          newProduct.additionalInfoDescription4 = "trash";
          newProduct.additionalInfoTitle5 = "trash";
          newProduct.additionalInfoDescription5 = "trash";
          newProduct.additionalInfoTitle6 = "trash";
          newProduct.additionalInfoDescription6 = "trash";
          newProduct.customTextField1 = data[item].customTextField1;
          newProduct.customTextCharLimit1 = data[item].customTextCharLimit1;
          newProduct.customTextMandatory1 = data[item].customTextMandatory1;
          newProduct.customTextField2 = data[item].customTextField2;
          newProduct.customTextCharLimit2 = data[item].customTextCharLimit2;
          newProduct.customTextMandatory2 = data[item].customTextMandatory2;

          newData.push(newProduct);

          if(oneSizeFitsMost == false){
              
            variantNecromancer(newProduct,collection);

          }

        } else {

          newProduct = new Object();

          newProduct.handleId = data[item].handleId;
          newProduct.fieldType = data[item].fieldType;
          newProduct.name =
            data[item].name + " " + collection;
          newProduct.description =
            productSizeObj[collection] ==
            "One Size fits most"
              ? data[item].description + " One Size fits most."
              : data[item].description;
          newProduct.productImageUrl = data[item].productImageUrl;
          newProduct.collections = collectionsArray[0];
          newProduct.sku = data[item].sku;
          newProduct.ribbon = data[item].ribbon;
          newProduct.price = data[item].price;
          newProduct.surcharge = data[item].surcharge;
          newProduct.visible = data[item].visible;
          newProduct.discountMode = data[item].discountMode;
          newProduct.discountValue = data[item].discountValue;
          newProduct.inventory = data[item].inventory;
          newProduct.weight = data[item].weight;
          newProduct.productOptionName1 = productSizeObj[collection] == "One Size fits most" ||
            collection == "Scrub Cap" ||
            collection == "Scrub Caps" ||
            collection == "Bouffant Scrub Cap" ||
            collection == "Long Hair Scrub Cap"
              ? "trash"
              : "Sizes";
          newProduct.productOptionType1 =
            productSizeObj[collection] ==
              "One Size fits most" ||
            collection == "Scrub Cap" ||
            collection == "Scrub Caps" ||
            collection == "Bouffant Scrub Cap" ||
            collection == "Long Hair Scrub Cap"
              ? "trash"
              : "DROP_DOWN";
          newProduct.productOptionDescription1 =
            productSizeObj[collectionsArray[0]] == "One Size fits most"
              ? "trash"
              : productSizeObj[collectionsArray[0]];
          newProduct.productOptionName2 = "trash";
          newProduct.productOptionType2 = "trash";
          newProduct.productOptionDescription2 = "trash";
          newProduct.productOptionName3 = "trash";
          newProduct.productOptionType3 = "trash";
          newProduct.productOptionDescription3 = "trash";
          newProduct.productOptionName4 = "trash";
          newProduct.productOptionType4 = "trash";
          newProduct.productOptionDescription4 = "trash";
          newProduct.productOptionName5 = "trash";
          newProduct.productOptionType5 = "trash";
          newProduct.productOptionDescription5 = "trash";
          newProduct.productOptionName6 = "trash";
          newProduct.productOptionType6 = "trash";
          newProduct.productOptionDescription6 = "trash";
          newProduct.additionalInfoTitle1 = "trash";
          newProduct.additionalInfoDescription1 = "trash";
          newProduct.additionalInfoTitle2 = "trash";
          newProduct.additionalInfoDescription2 = "trash";
          newProduct.additionalInfoTitle3 = "trash";
          newProduct.additionalInfoDescription3 = "trash";
          newProduct.additionalInfoTitle4 = "trash";
          newProduct.additionalInfoDescription4 = "trash";
          newProduct.additionalInfoTitle5 = "trash";
          newProduct.additionalInfoDescription5 = "trash";
          newProduct.additionalInfoTitle6 = "trash";
          newProduct.additionalInfoDescription6 = "trash";
          newProduct.customTextField1 = data[item].customTextField1;
          newProduct.customTextCharLimit1 = data[item].customTextCharLimit1;
          newProduct.customTextMandatory1 = data[item].customTextMandatory1;
          newProduct.customTextField2 = data[item].customTextField2;
          newProduct.customTextCharLimit2 = data[item].customTextCharLimit2;
          newProduct.customTextMandatory2 = data[item].customTextMandatory2;

          newData.push(newProduct);

          if(oneSizeFitsMost == false){
              
            variantNecromancer(newProduct,collection);

          }

        }

      });
    }
  }

  html = JSON.stringify(newData);

  $("#App").html(html);
}

function variantNecromancer(newProduct,collection) {

  var versionSizes=productSizeObj[collection].productVersionSizes;

      $.each(versionSizes, function (size) {

        if(size!=0){

          var newVariant = new Object();

          newVariant.handleId = newProduct.handleId; //
          newVariant.fieldType = 'Variant';
          newVariant.name = "trash";
          newVariant.description = "trash";
          newVariant.productImageUrl = "trash";
          newVariant.collections = "trash";
          newVariant.sku = "trash";
          newVariant.ribbon = "trash";
          newVariant.price = "trash";
          newVariant.surcharge = productSizeObj[collection].price; //
          newVariant.visible = newProduct.visible; //
          newVariant.discountMode = "trash";
          newVariant.discountValue = "trash";
          newVariant.inventory = newProduct.inventory; //
          newVariant.weight = "trash";
          newVariant.productOptionName1 = "trash";
          newVariant.productOptionType1 = "trash";
          newVariant.productOptionDescription1 = productSizeObj[collection].size; //
          newVariant.productOptionName2 = "trash";
          newVariant.productOptionType2 = "trash";
          newVariant.productOptionDescription2 = "trash";
          newVariant.productOptionName3 = "trash";
          newVariant.productOptionType3 = "trash";
          newVariant.productOptionDescription3 = "trash";
          newVariant.productOptionName4 = "trash";
          newVariant.productOptionType4 = "trash";
          newVariant.productOptionDescription4 = "trash";
          newVariant.productOptionName5 = "trash";
          newVariant.productOptionType5 = "trash";
          newVariant.productOptionDescription5 = "trash";
          newVariant.productOptionName6 = "trash";
          newVariant.productOptionType6 = "trash";
          newVariant.productOptionDescription6 = "trash";
          newVariant.additionalInfoTitle1 = "trash";
          newVariant.additionalInfoDescription1 = "trash";
          newVariant.additionalInfoTitle2 = "trash";
          newVariant.additionalInfoDescription2 = "trash";
          newVariant.additionalInfoTitle3 = "trash";
          newVariant.additionalInfoDescription3 = "trash";
          newVariant.additionalInfoTitle4 = "trash";
          newVariant.additionalInfoDescription4 = "trash";
          newVariant.additionalInfoTitle5 = "trash";
          newVariant.additionalInfoDescription5 = "trash";
          newVariant.additionalInfoTitle6 = "trash";
          newVariant.additionalInfoDescription6 = "trash";
          newVariant.customTextField1 = "trash";
          newVariant.customTextCharLimit1 = "trash";
          newVariant.customTextMandatory1 = "trash";
          newVariant.customTextField2 = "trash";
          newVariant.customTextCharLimit2 = "trash";
          newVariant.customTextMandatory2 = "trash";

          newData.push(newVariant);

        }

      });
    }
