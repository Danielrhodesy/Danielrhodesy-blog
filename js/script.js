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



function animsitionCode (blogNum, newPage, newPageGrid, gridsize){



    $(blogNum).click(function(){
        $('.main').fadeOut(200, function(){
            $('.main').hide(function(){
                $(newPage).fadeIn(200)
                $(newPageGrid).css("display", "grid")
                $('.grid-container-size').css("height", gridsize, function(){
                    console.log('test')
                })
            })  
        })
    });
};

animsitionCode('#blog1id', '.blog1-page', '.blog1-page-grid', '70vw')
animsitionCode('#blog2id', '.blog2-page', '.blog2-page-grid', '115vw')
animsitionCode('#blog3id', '.blog3-page', '.blog3-page-grid', '110vw')
animsitionCode('#blog4id', '.blog4-page', '.blog4-page-grid', '110vw')


function backAnimsitionCode (backbtn, oldpage){
    $(backbtn).click(function(){
        $(oldpage).fadeOut(function(){
            $('.grid-container-main').hide(function(){
                $('.grid-container-size').css("height", "auto")
                $('.main').fadeIn(400)
              
               
            })
        })
    });
};

backAnimsitionCode('#backButton','.blog1-page')
backAnimsitionCode('#backButton2', '.blog2-page')
backAnimsitionCode('#backButton3', '.blog3-page')
backAnimsitionCode('#backButton4', '.blog4-page')




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


