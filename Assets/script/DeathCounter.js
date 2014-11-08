﻿#pragma strict

static var deathCount: int;

//
var style : GUIStyle ;

function Start () {
	deathCount = 0;

	style.fontSize= 40 ;
	style.normal.textColor=Color.red;
}

function Update () {
	guiText.text = deathCount.ToString();
}

//
function OnGUI () {
	if( deathCount >= 20 )
	{
	
		GUI.Label( Rect ( Screen.width / 2 -100, 250,
			200, 80), "GAME OVER" , style );
		if( GUI.Button(Rect ( Screen.width / 2 -100,200,
			200,30), "Go title"  ))
		{
			Application.LoadLevel("title");
		}
	}
}