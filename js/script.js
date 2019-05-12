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
animsitionCode('#blog5id', '.blog5-page', '.blog5-page-grid', '110vw')
animsitionCode('#blog6id', '.blog6-page', '.blog6-page-grid', '180vw')

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
backAnimsitionCode('#backButton5', '.blog5-page')
backAnimsitionCode('#backButton6', '.blog6-page')








})


