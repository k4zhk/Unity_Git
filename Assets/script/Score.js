﻿#pragma strict

static var scorePoint : int;

function Start () {
	scorePoint = 0;
}

function Update () {
	guiText.text = scorePoint.ToString();
}