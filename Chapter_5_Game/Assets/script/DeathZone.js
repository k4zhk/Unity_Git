﻿#pragma strict

function OnTriggerEnter( col : Collider )
{
	DeathCounter.deathCount++;
	Score.scorePoint--;
	GameObject.DestroyObject( col.gameObject );
}