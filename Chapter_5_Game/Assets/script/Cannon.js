﻿#pragma strict

// ①パラメータ
public var prefab : GameObject;
public var power : float;

function Update () {

	// ②左クリック
	if(Input.GetMouseButtonDown(0))
	{
		Score.scorePoint++;
		var bullet = LoadBullet();
		
		// ④物体を飛ばす
		var ray : Ray =
			Camera.main.ScreenPointToRay(Input.mousePosition);
			
		var dir : Vector3 = ray.direction.normalized;
		
			bullet.rigidbody.velocity = dir * power;	
	}
}

	// ③キャラクターの読み込み
function LoadBullet() : GameObject {
	var bullet = GameObject.Instantiate( prefab ) as GameObject;
	bullet.transform.parent = transform;
	bullet.transform.localPosition = Vector3.zero;
	return bullet;
}