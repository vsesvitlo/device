$(document).ready(function() {
 
 
$(document).on("click","#first-slide",function() {
	$(".slider-content-2").hide();
	$(".slider-content-3").hide();
	
	
});	

/*
1 Срабатывает ивент, что страница загрузилась
2 Вызывается функция, которая выставляет класс Активен слайдам, для которых нажата радиокнопка. Слайды, для которых радио не нажата - функция скрывает. В итоге получаем, что слайд 1 Активен, остальные скрыты после загрузки страницы
3 Функция смены классов вызывается каждый раз при клике на радиокнопки. Т.е. после загрузки пользователи кликает на радио 2, функция выдает класс Хидден слайду 1 и Активен слайду 2
*/
 /*
 $(function() { 
$("#first-slide").click(function(){
    $(".slider-content-2").hide();
	$(".slider-content-3").hide();
});
});


  $(function() { 
$("#second-slide").click(function(){
    $(".slider-content-1").hide();
	$(".slider-content-3").hide();
});
});


  $(function() { 
$("#third-slide").click(function(){
    $(".slider-content-1").hide();
	$(".slider-content-2").hide();
});
});




  $(function() { 
$("#delivery").click(function(){
    $(".info-text-2").hide();
	$(".info-text-3").hide();
});
});


  $(function() { 
$("#guarantee").click(function(){
    $(".info-text-1").hide();
	$(".info-text-3").hide();
});
});


  $(function() { 
$("#credit").click(function(){
    $(".info-text-1").hide();
	$(".info-text-2").hide();
});
});*/


  
  
  /*$(".radio").toggle(
  function(){$("radio"). hide("#first-slide")},
  function(){$("radio").()},
  function(){$("radio").({"color": "green"});
});
*/
 
