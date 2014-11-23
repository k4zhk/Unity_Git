using UnityEngine;
using System.Collections;

public class GameControl : MonoBehaviour {
	public GameObject bear;
	
	void Start () {
		for (int i = 0; i < 9; i++) {
			Instantiate(bear);
		}
	}
	
	void Update () {
	}
}
