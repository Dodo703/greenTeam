$(function() {
				var height = $(window).height() - 49;
				var width = $(window).width() - 200;
				$(".mune").height(height);
				$(".tab").css({ "height": height, "width": width });
				$(".mune").height(height);
				$(".lii").on("click",function(){
					$(this).css({"color":"#FF8C00","background":"#110E11"});
					$(".lll").css({"color":"#BBBBBB","background":"#221D23"});
					$(".ll").css({"color":"#BBBBBB","background":"#221D23"});
				
						$(".ul").animate({"height":0});
						$(".ui").animate({"height":0});
						$(".uii").animate({"height":0});
					
				});
				$(".lll").on("click",function(){
					$(this).css({"color":"#FF8C00","background":"#110E11"});
					$(".lii").css({"color":"#BBBBBB","background":"#221D23"});
					$(".ll").css({"color":"#BBBBBB","background":"#221D23"});
					if($(".ul").height()==0){
						$(".ul").animate({"height":"96px"});
						$(".ui").animate({"height":0});
						$(".uii").animate({"height":0});
						$(".ull").animate({"height":0});
					}
					else{
						$(".ul").animate({"height":0});
					}
					
				});
				$(".ll").on("click",function(){
					$(this).css({"color":"#FF8C00","background":"#110E11"});
					$(".lll").css({"color":"#BBBBBB","background":"#221D23"});
					$(".lii").css({"color":"#BBBBBB","background":"#221D23"});
					if($(".ui").height()==0){
						$(".ui").animate({"height":"96px"});
						$(".uii").animate({"height":0});
						$(".ull").animate({"height":0});
						$(".ul").animate({"height":0});
					}
					else{
						$(".ui").animate({"height":0});
					}
					
				});
				
				
			});

			$(window).resize(function() {
				var height = $(window).height() - 49;
				var width = $(window).width() - 200;
				$(".mune").height(height);
				$(".tab").css({ "height": height, "width": width });
			});