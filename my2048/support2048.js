documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92*documentWidth;
cellSideLength = 0.18*documentWidth;
cellSpace = 0.04*documentWidth;

function getPosTop(i,j){
	return cellSpace + i*(cellSpace+cellSideLength);
}


function getPosLeft(i,j){
	return cellSpace + j*(cellSpace+cellSideLength);
}


function getNumberBackgroundColor(randNumber){
	switch(randNumber){
		case 2 :return "#6A4EE6";break;
		case 4 :return "#601BCF";break;
		case 8 :return "#1F4DB8";break;
		case 16 :return "#1574A3";break;
		case 32 :return "#0C1E96";break;
		case 64 :return "#4843A3";break;
		case 128 :return "#7E44CF";break;
		case 256 :return "#571169";break;
		case 512 :return "#494699";break;
		case 1024 :return "#B74BBF";break;
		case 2048 :return "#CA3AE0";break;
		case 4096 :return "#8D29FF";break;
		case 8192 :return "#BF29FF";break;
	}
	return "black";
}


function getNumberColor(number){
	if(number<=4)
		return "#84CAF5";

	return "white";
}


function nospace(board){
	for(var i=0; i<4; i++)
		for(var j=0; j<4; j++)
			if(board[i][j]==0)
				return false;
		
	return true;

}


function nomove(){
	if( canMoveLeft(board) || 
		canMoveRight(board)||
		canMoveUp(board) ||
		canMoveDown(board))
		return false;

	return true;	
}



/*--------------------------------------------------------------*/

function canMoveLeft(board){
	for(var i=0; i<4; i++)
		for(var j=1; j<4; j++)
			if(board[i][j] != 0)
				if(board[i][j-1] == 0 || board[i][j-1] == board[i][j])
					return true;

	return false;	
}


function canMoveRight(board){
	for(var i=0; i<4; i++)
		for(var j=0; j<3; j++)
			if(board[i][j] != 0)
				if(board[i][j+1] == 0 || board[i][j+1] == board[i][j])
					return true;

	return false;	
}


function canMoveUp(board){
	for(var i=1; i<4; i++)
		for(var j=0; j<4; j++)
			if(board[i][j] != 0)
				if(board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
					return true;
	return false;
}


function canMoveDown(board){
	for(var i=0; i<3; i++)
		for(var j=0; j<4; j++)
			if(board[i][j] != 0)
				if(board[i+1][j] == 0 || board[i+1][j] == board[i][j])
					return true;

	return false;	
}

/*--------------------------------------------------------------*/

function noBlockHorizontal(row, col1, col2, board){
	for(var a=col1+1; a<col2; a++)
		if (board[row][a] != 0)
			return false;
	return true;
}



function noBlockVertical(col, row1, row2, board){
	for(var a=row1+1; a<row2; a++)
		if (board[a][col] != 0)
			return false;
	return true;
}


/*兼容移动端*/
function prepareForMobile(){

	if(documentWidth>500){
		gridContainerWidth = 500;
		cellSpace = 20;
		cellSideLength = 100;
	}

	$('#grid-container').css('width',gridContainerWidth-2*cellSpace);
	$('#grid-container').css('height',gridContainerWidth-2*cellSpace);
	$('#grid-container').css('padding',cellSpace);
	$('#grid-container').css('border-radius',0.02*gridContainerWidth);

	$('.grid-cell').css('width',cellSideLength);
	$('.grid-cell').css('height',cellSideLength);
	// $('.grid-cell').css('border-radius',0.04*cellSideLength);

/*触摸操作*/

	$(document).swipe({
	swipe:function(event, direction, distance, duration, fingerCount) {
		if(direction == "left"){
			if(moveLeft()){
					setTimeout('generateOneNumber()',220);
					setTimeout('isgameover()',300);
			}
		}

		if(direction == "up"){
			if(moveUp()){
				setTimeout("generateOneNumber()",220);
				setTimeout("isgameover()",300);
			}
		}

		if(direction == "right"){
			if(moveRight()){
				setTimeout("generateOneNumber()",220);
				setTimeout("isgameover()",300);
			}
		}

		if(direction == "down"){
			if(moveDown()){
				setTimeout("generateOneNumber()",220);
				setTimeout("isgameover()",300);
			}	
		}

		}
	})
	
}
