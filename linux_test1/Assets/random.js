#pragma strict

var onoff : boolean;
function Start () {
onoff = Random.value >= 0.5;
}

function Update () {
	//onoff = Random.value >= 0.5;
    /*if (toggle == true)
        gameObject.active = true;
    if (toggle == false)
        gameObject.active = false;
	*/
	gameObject.SetActive(onoff);
}