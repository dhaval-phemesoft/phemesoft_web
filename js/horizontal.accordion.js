var $accordion_a_w_no_hover=8;
		$accordion_a=$('.accordion a'),
  	$accordion_a_w_hover=100-		$accordion_a_w_no_hover*$accordion_a.length+'%',
  	$accordion_a_w=100/$accordion_a.length;

$accordion_a.css('width',$accordion_a_w+'%');


$accordion_a.hover(function(){
  $accordion_a.css('width',$accordion_a_w_no_hover+'%');
  $(this).css('width',$accordion_a_w_hover);
},function(){
  $accordion_a.css('width',$accordion_a_w+'%');
});

// for knowbots
$('#accordion_item_inf_1').hover(
    function(){ $('.accordion_2').toggleClass('opecity_0'),$('.accordion_3').toggleClass('opecity_0'),$('.accordion_4').toggleClass('opecity_0'),$('.accordion_5').toggleClass('opecity_0'),$('.accordion_6').toggleClass('opecity_0')}
)
$('#accordion_item_inf_1').hover(
    function(){ $('#accordion_title_2').toggleClass('displaynoneForHome'),$('#accordion_title_3').toggleClass('displaynoneForHome'),$('#accordion_title_4').toggleClass('displaynoneForHome'),$('#accordion_title_5').toggleClass('displaynoneForHome'),$('#accordion_title_6').toggleClass('displaynoneForHome')}
)

// for virtual lab
$('#accordion_item_inf_2').hover(
    function(){ $('.accordion_1').toggleClass('opecity_0'),$('.accordion_3').toggleClass('opecity_0'),$('.accordion_4').toggleClass('opecity_0'),$('.accordion_5').toggleClass('opecity_0'),$('.accordion_6').toggleClass('opecity_0')}
)
$('#accordion_item_inf_2').hover(
    function(){ $('#accordion_title_1').toggleClass('displaynoneForHome'),$('#accordion_title_3').toggleClass('displaynoneForHome'),$('#accordion_title_4').toggleClass('displaynoneForHome'),$('#accordion_title_5').toggleClass('displaynoneForHome'),$('#accordion_title_6').toggleClass('displaynoneForHome')}
)

// for iceberg
$('#accordion_item_inf_3').hover(
    function(){ $('.accordion_1').toggleClass('opecity_0'),$('.accordion_2').toggleClass('opecity_0'),$('.accordion_4').toggleClass('opecity_0'),$('.accordion_5').toggleClass('opecity_0'),$('.accordion_6').toggleClass('opecity_0')}
)
$('#accordion_item_inf_3').hover(
    function(){ $('#accordion_title_1').toggleClass('displaynoneForHome'),$('#accordion_title_2').toggleClass('displaynoneForHome'),$('#accordion_title_4').toggleClass('displaynoneForHome'),$('#accordion_title_5').toggleClass('displaynoneForHome'),$('#accordion_title_6').toggleClass('displaynoneForHome')}
)

// for rich content development service
$('#accordion_item_inf_4').hover(
    function(){ $('.accordion_1').toggleClass('opecity_0'),$('.accordion_2').toggleClass('opecity_0'),$('.accordion_3').toggleClass('opecity_0'),$('.accordion_5').toggleClass('opecity_0'),$('.accordion_6').toggleClass('opecity_0')}
)
$('#accordion_item_inf_4').hover(
    function(){ $('#accordion_title_1').toggleClass('displaynoneForHome'),$('#accordion_title_2').toggleClass('displaynoneForHome'),$('#accordion_title_3').toggleClass('displaynoneForHome'),$('#accordion_title_5').toggleClass('displaynoneForHome'),$('#accordion_title_6').toggleClass('displaynoneForHome')}
)

// for smartbots
$('#accordion_item_inf_5').hover(
    function(){ $('.accordion_1').toggleClass('opecity_0'),$('.accordion_2').toggleClass('opecity_0'),$('.accordion_3').toggleClass('opecity_0'),$('.accordion_4').toggleClass('opecity_0'),$('.accordion_6').toggleClass('opecity_0')}
)
$('#accordion_item_inf_5').hover(
    function(){ $('#accordion_title_1').toggleClass('displaynoneForHome'),$('#accordion_title_2').toggleClass('displaynoneForHome'),$('#accordion_title_3').toggleClass('displaynoneForHome'),$('#accordion_title_4').toggleClass('displaynoneForHome'),$('#accordion_title_6').toggleClass('displaynoneForHome')}
)

// for skill development
$('#accordion_item_inf_6').hover(
    function(){ $('.accordion_1').toggleClass('opecity_0'),$('.accordion_2').toggleClass('opecity_0'),$('.accordion_3').toggleClass('opecity_0'),$('.accordion_4').toggleClass('opecity_0'),$('.accordion_5').toggleClass('opecity_0')}
)
$('#accordion_item_inf_6').hover(
    function(){ $('#accordion_title_1').toggleClass('displaynoneForHome'),$('#accordion_title_2').toggleClass('displaynoneForHome'),$('#accordion_title_3').toggleClass('displaynoneForHome'),$('#accordion_title_4').toggleClass('displaynoneForHome'),$('#accordion_title_5').toggleClass('displaynoneForHome')}
)


