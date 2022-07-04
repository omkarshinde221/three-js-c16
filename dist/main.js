import * as THREE from 'https://cdn.skypack.dev/three';

const scene = new THREE.Scene();

import {OrbitControls} from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);

renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(120);

renderer.render(scene, camera)

const geometry = new THREE.BoxGeometry( 40, 40, 40, 100 );

const geometry1 = new THREE.BoxGeometry( 40, 40, 40, 100 );

const geometry2 = new THREE.BoxGeometry( 40, 40, 40, 100 );

const geometry3 = new THREE.BoxGeometry( 40, 40, 40, 100 );



//Cube1
var canvas = document.createElement('canvas');
canvas.width = canvas.height = 256;
var context = canvas.getContext("2d");
context.fillStyle='white';
context.fillRect(3, 3, 256, 256);
context.fillStyle='black';
context.font = "450 14px muli extralight";
context.fillText("{ ", 6, 20);
context.fillText("Block Number:0 ", 13, 40);
context.fillText("Block created by : nsndcn23782njhnjcdf", 13, 60);
context.fillText("Difficulty: '5'", 13, 80);
context.fillText("Block Size: 2", 13, 100);
context.fillText("TimeStamp:'Wed May 8 08:58:32 2022'  ", 13, 120);
context.fillText("Total Size: '10'  ", 13, 140);
context.fillText("Transactions:  [ ", 13, 160);
context.fillText("{ kns98293bhjbjsdhc7823h }", 53, 180);
context.fillText(" ] ", 53, 200);
context.fillText("Current Hash: omkad93bhjbjsdhc7823h ", 13, 220);
context.fillText("Previous Hash: 000000000000000  ", 13, 240);
context.fillText("} ", 6, 250);

let canvasTexture = new THREE.CanvasTexture( canvas );

const material = new THREE.MeshBasicMaterial( {color: 0x26a9e1 , map: canvasTexture} );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.x = -80;

//Line1
const Linematerial = new THREE.LineBasicMaterial({
	color: 0xffffff, linewidth: 500
});

const points = [];
points.push( new THREE.Vector3( - 105, 1, 0 ) );
points.push( new THREE.Vector3( 80, 1, -5 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

const Linegeometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( Linegeometry, Linematerial );
scene.add( line );

//Cube2
var canvas1 = document.createElement('canvas');
canvas1.width = canvas1.height = 256;
var context1 = canvas1.getContext("2d");
context1.fillStyle='white';
context1.fillRect(3, 3, 256, 256);
context1.fillStyle='black';
context1.font = "450 14px muli extralight";
context1.fillText("{ ", 6, 20);
context1.fillText("Block Number:1 ", 13, 40);
context1.fillText("Block created by : nsndcn23782njhnjcdf", 13, 60);
context1.fillText("Difficulty: '6'", 13, 80);
context1.fillText("Block Size: 2", 13, 100);
context1.fillText("TimeStamp:'Wed May 8 09:02:32 2022'  ", 13, 120);
context1.fillText("Total Size: '10'  ", 13, 140);
context1.fillText("Transactions:  [ ", 13, 160);
context1.fillText("{ mahdijoe3bhjbjsdhc7823h }", 53, 180);
context1.fillText(" ] ", 53, 200);
context1.fillText("Current Hash: Nknknncsnw77983jh ", 13, 220);
context1.fillText("Previous Hash: omkad93bhjbjsdhc7823h  ", 13, 240);
context1.fillText("} ", 6, 250);

let canvasTexture1 = new THREE.CanvasTexture( canvas1 );

const material1 = new THREE.MeshBasicMaterial( {color: 0x26a9e1 , map: canvasTexture1} );


const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );
cube1.position.x = -30;



const queryString = window.location.href;
var url = new URL(queryString);
var transaction = url.searchParams.get("transaction");

var creator = url.searchParams.get("creator");
var time = url.searchParams.get("time");
var ttime = url.searchParams.get("ttime");
var size = url.searchParams.get("size");
var difficulty = url.searchParams.get("difficulty");
var tsize = url.searchParams.get("tsize");
var phash = url.searchParams.get("phash");
var chash = url.searchParams.get("chash");

// console.log("Value is:" + pair[1]);




//Cube3
console.log("**")
var canvas2 = document.createElement('canvas');
canvas2.width = canvas2.height = 400;
var context2 = canvas2.getContext("2d");
context2.fillStyle='white';
context2.fillRect(3, 3, 400, 400);
context2.fillStyle='black';
context2.font = "450 20px muli extralight";
context2.fillText("[ { ", 6, 20);
context2.fillText("Block Number:2 ", 13, 50);
context2.fillText("Block created by : ", 13, 80);
context2.fillText(creator, 13, 100);
context2.fillText("Block size : ", 13, 125);
context2.fillText(size, 113, 125);
context2.fillText("Timestamp : ", 13, 150);
context2.fillText(time, 113, 150);
context2.fillText("Total size : ", 13, 170);
context2.fillText(tsize, 113, 170);
context2.fillText("Difficulty : ", 13, 195);
context2.fillText(tsize, 113, 195);
context2.fillText("Transactions:  [ ", 13, 215);

context2.fillText(transaction, 13, 240);

context2.fillText("] ", 13, 260);
context2.fillText("Previous Hash : ", 13, 280);
context2.fillText(phash, 13, 300);
context2.fillText("Current Hash : ", 13, 330);
context2.fillText(phash, 13, 360);
context2.fillText("} ", 43, 380);
context2.fillText(" ]", 63, 400);

let canvasTexture2 = new THREE.CanvasTexture( canvas2 );

const material2 = new THREE.MeshBasicMaterial( {color: 0x26a9e1 , map: canvasTexture2} );

const cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );
cube2.position.x = 20;




//Cube4
console.log("**")
var canvas3 = document.createElement('canvas');
canvas3.width = canvas3.height = 400;
var context3 = canvas3.getContext("2d");
context3.fillStyle='white';
context3.fillRect(3, 3, 400, 400);
context3.fillStyle='black';
context3.font = "450 20px muli extralight";
context3.fillText("[ { ", 6, 20);
context3.fillText("Block Number:3 ", 13, 50);
context3.fillText("Block created by : ", 13, 80);
context3.fillText(creator, 13, 100);
context3.fillText("Block size : ", 13, 125);
context3.fillText(size, 113, 125);
context3.fillText("Timestamp : ", 13, 150);
context3.fillText(time, 113, 150);
context3.fillText("Total size : ", 13, 170);
context3.fillText(tsize, 113, 170);
context3.fillText("Difficulty : ", 13, 195);
context3.fillText(tsize, 113, 195);
context3.fillText("Transactions:  [ ", 13, 215);

context3.fillText(transaction, 13, 240);

context3.fillText("] ", 13, 260);
context3.fillText("Previous Hash : ", 13, 280);
context3.fillText(phash, 13, 300);
context3.fillText("Current Hash : ", 13, 330);
context3.fillText(phash, 13, 360);
context3.fillText("} ", 43, 380);
context3.fillText(" ]", 63, 400);

let canvasTexture3 = new THREE.CanvasTexture( canvas3 );

const material3 = new THREE.MeshBasicMaterial( {color: 0x26a9e1 , map: canvasTexture3} );

const cube3 = new THREE.Mesh( geometry3, material3 );
scene.add( cube3 );
cube3.position.x = 70;
























const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight,ambientLight)

function addStar() {
  const geometry = new THREE.SphereGeometry(1, 54, 54);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(100).fill().forEach(addStar);

const controls = new OrbitControls(camera, renderer.domElement)


function animate(){
  requestAnimationFrame(animate);


  controls.update()

  renderer.render(scene,camera)
}


animate()
