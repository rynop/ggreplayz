// 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player1;
    var player2;
    var player1Loaded=false;
    var player2Loaded=false;
    function onYouTubePlayerAPIReady() {  	
      player1 = new YT.Player('vid1', {
        events: {
          'onReady': onPlayerReady1
        }
      });
      
      player2 = new YT.Player('vid2', {
          events: {
            'onReady': onPlayerReady2
          }
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady1(event) { 
    	player1.cuePlaylist(player1Vids);	//player1Vids defined in view.ctp
    	player1Loaded = true;
    	enableActions();
    }
    function onPlayerReady2(event) {
    	player2.cuePlaylist(player2Vids);
    	player2Loaded = true;
    	enableActions();
    }
    function enableActions() {
    	if(player1Loaded && player2Loaded){
    		$('#actions .btn').show();
    		$('#loading').hide();
    	}
    	else {
    		setTimeout(enableActions, 1000);
    	}
    }
    
$(function() {    
	
	$('#playVideos').click(function(e) {
		e.preventDefault();
		player1.playVideo();
		player2.playVideo();
		hideDock();
	});
	
	$('#stopVideos').click(function(e) {
		e.preventDefault();
		player1.stopVideo();
		player2.stopVideo();
	});
	
	$('#pauseVideos').click(function(e) {
		e.preventDefault();
		player1.pauseVideo();
		player2.pauseVideo();
	});
	
	$('#startOverVideos').click(function(e) {
		e.preventDefault();
		player1.seekTo(0,false);
		player2.seekTo(0,false);
	});
	
	$('#smallVideos').click(function(e) {
		e.preventDefault();
		$('#vid1').width(640).height(385);
		$('#vid2').width(640).height(385);
	});
	
	$('#largeVideos').click(function(e) {
		e.preventDefault();
		$('#vid1').width(853).height(505);
		$('#vid2').width(853).height(505);
	});
	
	$("#dock").hover(
			function () {
				$('#showDock').hide();
				$(this).removeClass('small').addClass('large');
				$('#dockDetails').show();				
			}
			, 
			function () {
				hideDock();
			}
	);
	
	$('#ggBut').click(function(e) {
		e.preventDefault();
		doVote(1,$(this));		
	});
	
	$('#cheeseBut').click(function(e) {
		e.preventDefault();
		doVote(2,$(this));		
	});
	
	var wh = $(window).height();
	$("#dock").css('height',wh);
	$('#dockDetails').css('height',wh-100);
    $(window).resize(function(){
    	var wh = $(window).height();
    	$("#dock").css('height',wh);
    	$('#dockDetails').css('height',wh-100);
    });
	
//	$('#hideDock').click(function(e) {
//		hideDock();
//	});

});

function hideDock() {
	$('#dockDetails').hide();
	$('#dock').removeClass('large').addClass('small');
	$('#showDock').show();
}

function doVote(type,clickedBut) {
	$.get('/replays/vote/' + replayUUID + '/' + type);	//replayUUID from view global JS
	
	var curCount = parseInt(clickedBut.attr('rel'));
	curCount = curCount + 1;

	clickedBut.next('.twipsy').children('.twipsy-inner').html(curCount);
}