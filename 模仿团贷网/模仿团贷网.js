// JavaScript Document

//������
$(document).ready(function(){
	
    showScroll();
    function showScroll() {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            scrollValue > 1000 ? $('div[class=scroll]').fadeIn() : $('div[class=scroll]').fadeOut();
        });
        $('.scroll').click(function () {
            $("html,body").animate({ scrollTop: 0 }, 2000);
        });
    }
	turnTop();
	function turnTop(){
	
	$('.button').click(function () {
            $("html,body").animate({ scrollTop: "500" }, 1000);
        });			
		}
	 $(".danbox li").mouseenter(function () {
                if (!$(this).find(".p2-egg").hasClass("move_egg_click")) {
                    $(".p2-chui").hide();
                    $(".p2-ps").hide();
                    $(".p2-egg").removeClass("p2-egg-hover");
                    $(this).find(".p2-egg").addClass("p2-egg-hover");
                    $(this).find(".p2-chui").show();
                    $(this).find(".p2-ps").show();
                }
            });	
	//����𵰱���
            $(".danbox li").click(function () {
                if (!$(this).find(".p2-egg").hasClass("move_egg_click")) {
                    $(".p2-egg").removeClass("p2-egg-hover");
                    $(this).find(".p2-chui").hide();
                    $(this).find(".p2-ps").hide();
                    $(this).find(".p2-egg").addClass("move_egg_click");
                    $(this).find(".normal").hide();					
					$(this).find(".game-over").show();	
					$this=$(this);
					 var math=Math.random()	
                     if (math< 0.3 ) {
                    $(this).find(".game-over1").show();
					
                     } else if (math >0.6) {
                     $(this).find(".game-over2").show();
					
                      } else {
                      $(this).find(".game-over3").show();
                      }
				 $("#addwenzi").text("��ϲ��డ !!!");
				 };
				 
				});
		
			
	//������
				$(".danbox li").click(function () {
				leftcount();
				;
		   function leftcount(){ 
				 span= document.getElementById("leftcount").innerHTML   
				   if(span<1){return;}
				 span=span-1;
				  document.getElementById("leftcount").innerHTML=span;
				   }
		   });					   
	
//�Զ���������������	
	
	$(window).load(function(){
							
//	$("#visiable-ul").mouseenter(function(){clearInterval(timerscroll)  }).mouseleave(function(){setInterval(autoScroll,1500)	})								
	 // var timerscroll=
	 var length=38
	  setInterval(autoScroll,1000);
	  
	function autoScroll(){	
	
	if(length>800){length=38;$("#autoscroll").fadeOut(100).animate({top:0},100)}
	
	$("#autoscroll").fadeIn(100).animate({top:"-"+length+"px"},1500);
	 length=length+38;
//	 x=$("#autoscroll").position()
    var Num=parseInt(document.getElementById("addnum").innerHTML);
	Num=Num+37;
	document.getElementById("addnum").innerHTML=Num;
	}
	//�����͹رյ���
	$(".close").click(function(){
	$("#fixedPic").css("display","none")
	})
	$("#onClick").click(function(){
	$("#fixedPic").css("display","block")
	})
	
	
});
		  
		
	
});					   
						   
				
	/*	 $(".p2-2").getElementByClassName("value")[0].innerHTML=getValue3()	
			
			���valueֵ
			function getValue1()
			{
			return value="800Ԫ������"��
				}
				function getValue2()
			{
			return value="���518�����+2888Ԫ�����"��
				}
				function getValue3()
			{
			return value="лл����"��
				}		
			
					   */

   				 			
