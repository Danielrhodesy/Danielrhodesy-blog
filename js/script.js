$(document).ready(function() {
    $('.blog1-page').hide(function(){

    })
    // $('#animsition-mainpage').animsition();


// -------------------
// Animsition through pages
// -------------------

// function hideBlogs() {
//     $(document).ready(function(){
//         $('.blog1-page').hide(function(){

//         })
//     })
// }



function animsitionCode (blogNum, newPage, newPageGrid){



    $(blogNum).click(function(){
        $('.main').fadeOut(200, function(){
            $('.main').hide(function(){
                $(newPage).fadeIn(200)
                    $(newPageGrid).css("display", "grid")
            })
        })
    });
};

animsitionCode('#blog1id', '.blog1-page', '.blog1-page-grid')
animsitionCode('#blog2id', '.blog1-page', '.blog1-page-grid')
animsitionCode('#blog3id', '.blog1-page', '.blog1-page-grid')


function backAnimsitionCode (){
    $('#backButton').click(function(){
        $('.blog1-page').fadeOut(function(){
            $('.grid-container-main').hide(function(){
                $('.main').fadeIn(400, function(){
                    console.log('fade in working');
                    
                })
            })
        })
    });
};

backAnimsitionCode()




//   function animsitionCode (clicked, divA, divB, divC) {
//     $(clicked).click(function(){
//       $(divA).fadeOut(function(){
//         $(divB).hide(function(){
//           $(divC).fadeIn(400, function(){

//           createMap()

//           });
//         });
//       });
//     });
//   };

// animsitionCode('.here-button', '#mainpage-div', '#mainpage-div', '#page2-div')
// animsitionCode('.ph-button', '#page2-div', '#page2-div', '#page3-div')
// animsitionCode('.m-button', '#page4-div', '#page4-div', '#page5-div')









})


