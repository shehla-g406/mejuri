// slick-slider-fade announcement-bar

$('.bar-box-aa').slick({
  dots: false,
  autoplay: true,
  infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});



// mbl-slick-slider-fade announcement-bar

$('.mbl-bar2').slick({
  dots: false,
  autoplay: true,
  infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});



// desktop-search-icon
$('.ic-1a').click(function () {
  $(".list-box-4").show();
  console.log("c----");
});


$('.ic-4').click(function () {
  $(".list-box-4").hide();
  console.log("c----");
});



// desk-top-popup

$(".list-6").click(function () {
  $(".main-popup-box").show();
  $("body").css("overflow", "hidden");
  console.log("c----");

});


$(".ic-5").click(function () {
  $(".main-popup-box").hide();
  $("body").css("overflow", "auto");
  console.log("c----");

});


$(".list-8").click(function () {
  $(".main-popup-box").show();
  $("body").css("overflow", "hidden");
  console.log("c----");

});


// mbl-sidebar

$(".ic-3").click(function () {
  $(".col-AA").hide();
  $(".mbl-sidebar").css("left", "0");
  $("body").css("overflow", "hidden");
  $("body").css("display", "block");
  console.log("c---");
});


$(".ic-3b").click(function () {
  $(".mbl-sidebar").css("left", "-100%");
  $("body").css("overflow", "auto");
  console.log("c---");
});



// mbl-sidebar-menu

$(".ic-3c").click(function () {
  // $(" .col-AA ").slideToggle();
  $(this).next(".col-AA").slideToggle();
  $(this).toggleClass("fa-plus");
  $(this).toggleClass("fa-minus");
  console.log("c---");
});



// mbl-search-icon

$('.mbl-menu-list-c .col-2 .ic-3a').click(function () {
  $(".mbl-menu-list-2").show();
  console.log("c----");
});


$('.ic-4a').click(function () {
  $(".mbl-menu-list-2").hide();
  console.log("c----");
});



// desktop-cart-bag and mbl-cart-bag

$(".list-9 .ic-2").click(function () {
  $(".list-box-9").show();
  $(".promo-b").hide();
  $(".pricing-b").hide();
  $(".total-b").hide();
  $(".empty-box-main").show();
  $(".overlay-list-9").show();
  $(".list-box-9").css("right", "0");
  $("body").css("overflow", "hidden");
  console.log("c---");
});


$(".ic-22").click(function () {
  $(".list-box-9").hide();
  $(".overlay-list-9").hide();
  $(".list-box-9").css("right", "-100%");
  $("body").css("overflow", "auto");
  $(".mbl-list-box-9").hide();
  $(".mbl-list-box-9").css("right", "-100%");
  $("body").css("overflow", "auto");
  console.log("c---");
});


// mbl-cart-bag

$(".list-9 .ic-3aaa").click(function () {
  $(".mbl-list-box-9").show();
  $(".mbl-list-box-9").css("right", "0");
  $("body").css("overflow", "hidden");
  console.log("c---");
});




// slick-slider

$('.sec-4a-main-box').slick({
  centerMode: false,
  //  centerPadding: '190px',
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i><span',
  nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i><span',
  responsive: [{
      breakpoint: 1030,
      settings: {
        arrows: true,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 772,
      settings: {
        arrows: true,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});



// quantity counter

var QtyInput = (function () {
  var $qtyInputs = $(".qty-input");

  if (!$qtyInputs.length) {
    return;
  }

  var $inputs = $qtyInputs.find(".product-qty");
  var $countBtn = $qtyInputs.find(".qty-count");
  var qtyMin = parseInt($inputs.attr("min"));
  var qtyMax = parseInt($inputs.attr("max"));

  $inputs.change(function () {
    var $this = $(this);
    var $minusBtn = $this.siblings(".qty-count--minus");
    var $addBtn = $this.siblings(".qty-count--add");
    var qty = parseInt($this.val());

    if (isNaN(qty) || qty <= qtyMin) {
      $this.val(qtyMin);
      $minusBtn.attr("disabled", true);
    } else {
      $minusBtn.attr("disabled", false);

      if (qty >= qtyMax) {
        $this.val(qtyMax);
        $addBtn.attr('disabled', true);
      } else {
        $this.val(qty);
        $addBtn.attr('disabled', false);
      }
    }
  });

  $countBtn.click(function () {
    var operator = this.dataset.action;
    var $this = $(this);
    var $input = $this.siblings(".product-qty");
    var qty = parseInt($input.val());

    if (operator == "add") {
      qty += 1;
      if (qty >= qtyMin + 1) {
        $this.siblings(".qty-count--minus").attr("disabled", false);
      }

      if (qty >= qtyMax) {
        $this.attr("disabled", true);
      }
    } else {
      qty = qty <= qtyMin ? qtyMin : (qty -= 1);

      if (qty == qtyMin) {
        $this.attr("disabled", true);
      }

      if (qty < qtyMax) {
        $this.siblings(".qty-count--add").attr("disabled", false);
      }
    }

    $input.val(qty);
  });
})();

//  variables for products images titles and text

// $(document).ready(function () {
//   $(".btn-4-sec").click(function () {
//     var img = $(this).parents(".sec-4-card").find(".card-img").attr('src');
//     var title = $(this).parents(".sec-4-card").find(".sec-4-card-b h2").text();
//     var text = $(this).parents(".sec-4-card").find(".sec-4-card-b h3").text();
//     var price = $(this).parents(".sec-4-card").find(".sec-4-card-b h4").text();
//     console.log("Image---", img, "Title---", title, "text----", text, "Price---", price)

//   });
// });



$(document).ready(function () {
  $(".btn-4-sec").click(function () {
    $(".list-box-9").show();
    $(".promo-b").show();
    $(".pricing-b").show();
    $(".total-b").show();
    $(".overlay-list-9").show();
    $(".list-box-9").css("right", "0");
    $("body").css("overflow", "hidden");
    var img = $(this).parents(".sec-4-card").find(".card-img").attr('src');
    var title = $(this).parents(".sec-4-card").find(".sec-4-card-b h2").text();
    var text = $(this).parents(".sec-4-card").find(".sec-4-card-b h3").text();
    var price = $(this).parents(".sec-4-card").find(".sec-4-card-b h4").text();
    console.log("Image---", img, "Title---", title, "text----", text, "Price---", price)

   


  $(".your-bag-main").append(` <div class="your-bag">

        <div class="bag-a-box-1">
            <div class="bag-a-box-1a">
                <div class="bag-aa">
                    <img src="${img}" alt="">
                </div>
            </div>


            <div class="bag-a-box-2">
                <div class="bag-a-box-2a">
                    <div class="bag-aa">
                        <div class="title-bag-1">
                            <h2>${title}</h2>
                            <h3>${text}</h3>
                        </div>
                        <div class="price-bag-1">
                            <h4>${price}</h4>
                        </div>
                    </div>

                    <div class="bag-aa">
                        <div class="title-bag-2">
                            <div class="qty-input">
                                <button class="qty-count qty-count--minus" data-action="minus"
                                    type="button">-</button>
                                <input class="product-qty" type="number" name="product-qty"
                                    min="0" max="10" value="1">
                                <button class="qty-count qty-count--add" data-action="add"
                                    type="button">+</button>
                            </div>
                        </div>
                        <div class="title-bag-3">
                            <h2>Save For Later</h2>
                            <h3>Remove</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)

    emptycheck();
    
    });
  });


$(document).on("click", ".title-bag-3 h3", function () {
  $(this).closest(".your-bag").remove();
  emptycheck();
});



function emptycheck() {
  var lengthh = $('.your-bag').length;
  console.log("lengthh----", lengthh);
  if (lengthh > 0) {
    $(".empty-box-main").addClass("empty-box-show");
    $(".promo-b").removeClass("promo-box-show");
    $(".pricing-b").removeClass("pricing-box-show");
    $(".total-b").removeClass("total-box-show");    
  } else {
    $(".empty-box-main").removeClass("empty-box-show");
    $(".promo-b").addClass("promo-box-show");
    $(".pricing-b").addClass("pricing-box-show");
    $(".total-b").addClass("total-box-show");
  }
  $(".counter").html(lengthh);
}



$(document).on("click", ".title-bag-3 h2", function () {
  //  $('.your-bag').each(function () {
  // });
});


$(document).ready(function () {
  $(".promo-icon").click(function () {
    $(".promo-input-box").slideToggle();
    $(".promo-input-box").css("display", "flex")
    $(this).toggleClass("fa-plus");
    $(this).toggleClass("fa-minus");
    $(".pricing-box").slideToggle();
  });
});
