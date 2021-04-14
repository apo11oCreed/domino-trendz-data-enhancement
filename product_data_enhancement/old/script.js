(function () {
  "use strict";

  var sizesEntireList = [
      "Extra Large",
      "Large",
      "Medium",
      "Small",
      "Extra Small",
      "King",
      "Standard",
      "18x18",
      "16x16",
      "One Size fits most",
    ],
    sizesProductObj = {
      book_ipad_sleeve: ["Extra Large", "Medium", "Small"],
      bouffant_scrub_cap: ["One Size fits most"],
      custom_french_seam_pillow_cases: ["King", "Standard"],
      domino_fitted_mask: ["Extra Large","Large","Medium","Small","Extra Small"],
      harlequin_clutch: ["Large", "Medium", "Small"],
      key_lanyard: ["Large", "Small"],
      long_hair_scrub_cap: ["One Size fits most"],
      pleated_masks: ["Large", "Medium", "Small", "Extra Small"],
      reading_pocket_pillows: ["18x18", "16x16"],
      scrub_caps: ["One Size fits most"],
      scrub_tops: ["Extra Large", "Large", "Medium", "Small", "Extra Small"],
      tear_drop_coin_purse: ["Large", "Small"],
      zippy_clutch: ["Large", "Medium", "Small"],
    },
    sizesProductsObjIncompatible={};

  $(document).ready(function () {
    var dropdownTitles = $('[data-hook="options-dropdown-title"]'),
      dropdownMenuParentSizes,
      dropdownMenuParentProducts,
      dropdownMenuParentProductsSelect,
      originalClasses = "",
      style = document.createElement("style"),
      dataMobile = $('[data-mobile="true"]').length ? true : false;

    $(style).html(cssBuilder(sizesProductObj,dataMobile));
    $(style).attr("id", "sizeHiderStyles");
    $("body").append(style);

    for (var i = 0; i < dropdownTitles.length; i++) {

      // if this is the sizes menu...
      if ($(dropdownTitles[i]).html().indexOf("Sizes") != -1) {

        // target the sizes menu parent
        dropdownMenuParentSizes = $(dropdownTitles[i]).siblings("div")[0];

        originalClasses = $(dropdownMenuParentSizes).attr("class");

        $(dropdownMenuParentSizes).attr("data-size-enabled", false);

        // else if this is the product menu...
      } else if ($(dropdownTitles[i]).html().indexOf("Product") != -1) {

        // target the product menu parent
        dropdownMenuParentProducts = $(dropdownTitles[i]).siblings("div")[0];

        // find the product menu options if data-mobile is true
        dropdownMenuParentProductsSelect = $(dropdownMenuParentProducts).find(
          '[data-mobile="true"] select'
        );
      }
    }

    if (dataMobile) {

        console.log(sizesProductsObjIncompatible);

      // when product menu options change...
      $(dropdownMenuParentProductsSelect).on("change", function () {

        // remove sizes classes if present
        $(dropdownMenuParentSizes).attr("class", originalClasses);

        switch ($("option:selected", dropdownMenuParentProductsSelect).text()) {
          case "Select":
            $(dropdownMenuParentSizes).attr("data-size-enabled", false);
            break;
          case "Book/iPad Sleeve":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["book_ipad_sleeve"]);
            break;
          case "Bouffant Scrub Cap":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["bouffant_scrub_cap"]);
            break;
          case "Custom French Seam Pillow Cases":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["custom_french_seam_pillow_cases"]);
            break;
          case "Domino Fitted Mask":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["domino_fitted_mask"]);
            break;
          case "Harlequin Clutch":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["harlequin_clutch"]);
            break;
          case "Key Lanyard":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["key_lanyard"]);
            break;
          case "Long Hair Scrub Cap":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["long_hair_scrub_cap"]);
            break;
          case "Pleated Mask":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["pleated_masks"]);
            break;
          case "Reading Pocket Pillows":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["reading_pocket_pillows"]);
            break;
          case "Scrub Caps":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["scrub_caps"]);
            break;
          case "Scrub Tops":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["scrub_tops"]);
            break;
          case "Tear Drop Coin Purse":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["tear_drop_coin_purse"]);
            break;
          case "Zippy Clutch":
            $(dropdownMenuParentSizes).attr("data-size-enabled", true);
            optionHider(sizesProductsObjIncompatible["zippy_clutch"]);
            break;
          default:
            break;
        }

      });
    } else {
      $("body").on(
        "DOMSubtreeModified",
        dropdownMenuParentProducts,
        function () {
          //console.log("dropdownMenuParentProducts modified");

          $(dropdownMenuParentSizes).attr("class", originalClasses);

          switch ($(dropdownMenuParentProducts).text()) {
            case "Select":
              console.log("dataMobile is false");
              $(dropdownMenuParentSizes).attr("data-size-enabled", false);
              break;
            case "Book/iPad Sleeve":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("book_ipad_sleeve");
              console.log("dataMobile is false");
              break;
            case "Bouffant Scrub Cap":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("bouffant_scrub_cap");
              console.log("dataMobile is false");
              break;
            case "Custom French Seam Pillow Cases":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("custom_french_seam_pillow_cases");
              console.log("dataMobile is false");
              break;
            case "Domino Fitted Mask":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("domino_fitted_mask");
              console.log("dataMobile is false");
              break;
            case "Harlequin Clutch":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("harlequin_clutch");
              console.log("dataMobile is false");
              break;
            case "Key Lanyard":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("key_lanyard");
              console.log("dataMobile is false");
              break;
            case "Long Hair Scrub Cap":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("long_hair_scrub_cap");
              console.log("dataMobile is false");
              break;
            case "Pleated Mask":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("pleated_masks");
              console.log("dataMobile is false");
              break;
            case "Reading Pocket Pillows":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("reading_pocket_pillows");
              console.log("dataMobile is false");
              break;
            case "Scrub Caps":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("scrub_caps");
              console.log("dataMobile is false");
              break;
            case "Scrub Tops":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("scrub_tops");
              console.log("dataMobile is false");
              break;
            case "Tear Drop Coin Purse":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("tear_drop_coin_purse");
              console.log("dataMobile is false");
              break;
            case "Zippy Clutch":
              $(dropdownMenuParentSizes).attr("data-size-enabled", true);
              $(dropdownMenuParentSizes).addClass("zippy_clutch");
              console.log("dataMobile is false");
              break;
            default:
              break;
          }
        }
      );
    }
  });

  function optionHider(incompatibleArray){

    var options=$('[data-mobile="true"] option');

    console.log(options);
    
            $.each(options,function(option){

                console.log('options[option]');
                console.log(options[option]);
                console.log('');

                console.log('incompatibleArray');
                console.log(incompatibleArray);
                console.log('');

                $(options[option]).css("display", "block");

                for(var x=0;x<incompatibleArray.length;x++){

                    console.log('incompatibleArray[x] = ' + incompatibleArray[x] + ' $(options[option]).text() = ' + $(options[option]).text());

                    if($(options[option]).text()==incompatibleArray[x]){
        
                        $(options[option]).css("display", "none");

                    }
                }
    
            });
  }

  function cssBuilder(sizesObj,ismobile) {
    var css = "";

    for (var product in sizesObj) {
        var incompatibleArray=[],
        obj={};

        obj[product]=[];

      for (var i = 0; i < sizesEntireList.length; i++) {

        if (sizesObj[product].indexOf(sizesEntireList[i]) == -1) {

            incompatibleArray.push(sizesEntireList[i]);

        }

      }

      for(var x=0;x<incompatibleArray.length;x++){

        var sizeCss = "";

        if(incompatibleArray.length==1){

            sizeCss +="." + product + ' [title="' + incompatibleArray[x] + '"]{display:none;}';

        } else if (x != incompatibleArray.length - 1) {

            sizeCss += "." + product + ' [title="' + incompatibleArray[x] + '"],';

          } else {

            sizeCss +="." + product + ' [title="' + incompatibleArray[x] + '"]{display:none;}';

          }

            css += sizeCss;

      }

      sizesProductsObjIncompatible[product]=incompatibleArray;

    }

    return (
      css +
      '[data-size-enabled="false"]{pointer-events: none;opacity: 0.25;}[data-size-enabled="true"]{pointer-events: initial;opacity: 1.0;}'
    );
  }
})();
