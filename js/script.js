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




function animsitionCode (){
    $('#blog1id').click(function(){
        $('.main').fadeOut(function(){
            $('.main').hide(function(){
                $('.blog1-page, grid-main').fadeIn(400, function(){
                    console.log('fade in working');
                    
                })
            })
        })
    });
};

animsitionCode()


function backAnimsitionCode (){
    $('#backButton').click(function(){
        $('.blog1-page').fadeOut(function(){
            $('.blog1-page').hide(function(){
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


