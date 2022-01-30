import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { gsap } from "gsap";

import { coordenadas } from './app.js';



/**
 * Base
 */
// Debug
// const gui = new dat.GUI()
const gui = new dat.GUI({ closed: true })

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// // LOAD IMAGES




/**
 * LOADERS
 */


/**
 * Texture loader
 */

const textureLoader = new THREE.TextureLoader()




/**
 * Draco Loader
 */

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')


/**
 *  GLTF Loader
 */

 const manager = new THREE.LoadingManager();

 const gltfLoader = new GLTFLoader(manager)
 gltfLoader.setDRACOLoader(dracoLoader)





/**
 * COLORS
 */


const groupColorGreen = [ 0x856F3F, 0xD9C152, 0xD98D26 ]

// const groupColorAqua = [ 0xDAD8D6, 0xA65D60, 0x0E0F1C ]

const groupColorAqua = [ 0xDED8D4, 0xD63651, 0x08102D ]

////
// COLORS
///



const blue1 = [0x8be8cb, 0x392c8e, 0x7ea2aa]
const blue2 = [0x2d82b7, 0x070707, 0xc297b8]
const blue3 = [0xb7d5d4, 0x3852ad, 0x2a7f62]
const blue4 = [0x931f1d, 0x3a405a, 0xf6e8ea]
const blue5 = [0x2660a4, 0xe15554, 0xe1bc29]
const blue6 = [0x48acf0, 0x594236, 0xe3b505]
const blue7 = [0x4D848D, 0x59C3CF, 0xEFD956]
const blue8 = [0x361d2e, 0x2d93ad, 0xffd100]
const blue9 = [0x8fbfe0, 0x1f363d, 0xc2f9bb]


const green1 = [0x856F3F, 0xD9C152, 0xD98D26]
const green2 = [0x38023b, 0x4b8f8c, 0xf19953]
const green3 = [0x395e66, 0x808932, 0x4c2e05]
const green4 = [0x8be8cb, 0x392c8e, 0x7ea2aa]
const green5 = [0xb7d5d4, 0x3852ad, 0x2a7f62]
const green6 = [0xc9c5ba, 0xff3332, 0x97b1a6]
const green7 = [0x087e8b, 0xff5a5f, 0x3c3c3c]
const green8 = [0x8fbfe0, 0x1f363d, 0xc2f9bb]
const green9 = [0xd2cca1, 0x2d93ad, 0xdbd4d3]


const red1 = [0x283C31, 0xED932A, 0x313A54]
const red2 = [0x931f1d, 0x3a405a, 0xf6e8ea]
const red3 = [0xc9c5ba, 0xff3332, 0x97b1a6]
const red4 = [0x856F3F, 0xD9C152, 0xD98D26]
const red5 = [0x38023b, 0x4b8f8c, 0xf19953]
const red6 = [0x395e66, 0x808932, 0x4c2e05]
const red7 = [0xDED8D4, 0xD63651, 0x08102D]
const red8 = [0x2660a4, 0xe15554, 0xe1bc29 ]
const red9 = [0x087e8b, 0xff5a5f, 0x3c3c3c]


const magenta1 = [0xDED8D4, 0xD63651, 0x08102D]
const magenta2 = [0x2660a4, 0xe15554, 0xe1bc29]
const magenta3 = [0x087e8b, 0xff5a5f, 0x3c3c3c]
const magenta4 = [0x2d82b7, 0x070707, 0xc297b8]
const magenta5 = [0x931f1d, 0x3a405a, 0xf6e8ea]
const magenta6 = [0xc9c5ba, 0xff3332, 0x97b1a6]
const magenta7 = [0xd2cca1, 0x2d93ad, 0xdbd4d3]
const magenta8 = [0xff9b71, 0xffe13c, 0x60695c]
const magenta9 = [0x08090a, 0xffe19c, 0xf15946]


const blueClear1 = [0x48acf0, 0x594236, 0xe3b505]
const blueClear2 = [0x8fbfe0, 0x1f363d, 0xc2f9bb]
const blueClear3 = [0xd2cca1, 0x2d93ad, 0xdbd4d3]
const blueClear4 = [0x8be8cb, 0x392c8e, 0x7ea2aa]
const blueClear5 = [0x2d82b7, 0x070707, 0xc297b8]
const blueClear6 = [0x4D848D, 0x59C3CF, 0xEFD956]
const blueClear7 = [0x361d2e, 0x2d93ad, 0xffd100]
const blueClear8 = [0x08090a, 0xffe19c, 0xf15946]
const blueClear9 = [0xc9c5ba, 0xff3332, 0x97b1a6]


const yellow1 = [0x4D848D, 0x59C3CF, 0xEFD956]
const yellow2 = [0xff9b71,0xffe13c, 0x60695c]
const yellow3 = [0x361d2e, 0x2d93ad, 0xffd100]
const yellow4 = [0x856F3F, 0xD9C152, 0xD98D26]
const yellow5 = [0x38023b, 0x4b8f8c, 0xf19953]
const yellow6 = [0x395e66, 0x808932, 0x4c2e05]
const yellow7 = [0xc9c5ba, 0xff3332, 0x97b1a6]
const yellow8 = [0xDED8D4, 0xD63651, 0x08102D]
const yellow9 = [0x2660a4, 0xe15554, 0xe1bc29]


const black1 = [0x000000, 0x2f1000, 0x621b00 ]
const black2 = [0x08090a, 0xffe19c, 0xf15946]
const black3 = [0x000c00, 0x74121d, 0xbc5f04]
const black4 = [0x2d82b7, 0x070707, 0xc297b8 ]
const black5 = [0x38023b, 0x4b8f8c, 0xf19953 ]
const black6 = [0xDED8D4, 0xD63651, 0x08102D ]
const black7 = [0x087e8b, 0xff5a5f, 0x3c3c3c]
const black8 = [0x8fbfe0, 0x1F363D, 0xc2f9bb]
const black9 = [0xff9b71, 0xffe13c, 0x60695c]



///
// END COLORS
///
const blue = [blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9]
const green = [green1, green2, green3, green4, green5, green6, green7, green8, green9]
const red = [red1, red2, red3, red4, red5, red6, red7, red8, red9]
const magenta = [magenta1, magenta2, magenta3, magenta4, magenta5, magenta6, magenta7, magenta8, magenta9]
const blueClear = [blueClear1, blueClear2, blueClear3, blueClear4, blueClear5, blueClear6, blueClear7, blueClear8, blueClear9]
const yellow = [yellow1, yellow2, yellow3, yellow4, yellow5, yellow6, yellow7, yellow8, yellow9]
const black = [black1, black2, black3, black4, black5, black6, black7, black8, black9]

const allColors = [blue, green, red, magenta, blueClear, green, black, yellow, blueClear]

// const groupColorAqua = [ 0x283C31, 0xED932A, 0x313A54 ]




// const groupColorAqua = [ 0x4D848D, 0x59C3CF, 0xEFD956 ]


// controlsANDFORMS
const size_1 = document.getElementById('size_1')
const size_2 = document.getElementById('size_2')
const size_3 = document.getElementById('size_3')

const individual = document.getElementsByClassName('individual')
const pareja = document.getElementsByClassName('pareja')
const familia = document.getElementsByClassName('familia')


function isOrNot( btn, a, b, c ){
    if (btn.checked == true){
        a[0].style.display = "block";
        b[0].style.display = "none";
        c[0].style.display = "none";

    } else {
        a[0].style.display = "none";
    }
     console.log(a)
}

size_1.addEventListener('click', function(){isOrNot(size_1, individual, pareja, familia)}, false)
size_2.addEventListener('click', function(){isOrNot(size_2, pareja, individual, familia)}, false)
size_3.addEventListener('click', function(){isOrNot(size_3, familia, individual, pareja)}, false)

/**
 * TEXTURES
 */

const matcapTexture = textureLoader.load('matcaps/9.png')
const onClick = textureLoader.load('matcaps/3.png')

const matcapRedTexture = textureLoader.load('matcaps/10.png')

const bakedTexture = textureLoader.load('baked.jpg')
bakedTexture.flipY = false



 /**
  * Materials
  */

 const matcapMaterial = new THREE.MeshMatcapMaterial({matcap: matcapTexture})

 const matcapRedMaterial = new THREE.MeshMatcapMaterial({matcap: matcapRedTexture})


 const backedMaterial = new THREE.MeshBasicMaterial({map: bakedTexture})

 const detonadorMaterialG = new THREE.MeshMatcapMaterial({matcap: matcapTexture, color: 0xffffff})

 const detonadorMaterialN = new THREE.MeshMatcapMaterial({matcap: matcapTexture, color: 0x999999})
 const detonadorMaterialSN = new THREE.MeshMatcapMaterial({matcap: matcapTexture, color: 0x000333})





/**
 * MODELS
 */




const personalGeometry = new THREE.BufferGeometry();


// const positions = [
// 0,   0, 0,    // v1
// 0, 500, 0,   // v2
// 0, 500, 500  // v3
// ];


// const positions = [
//    2, 21,  6,
//    35,  7,  2,
//    14, 30, 17,

//    11, 12, 35, 
//    8,  3,  4,
//    32, 18,  4,

//    25, 26, 19,
//    17,  1, 34,
//    8, 17,  1,

//    32,  2, 2, 
//    1, 32
//  ];







let num = 2.0

let num2 = 2

// //danny
// const personalArray = [
//     3, 1, 8, 9,
//     2, 4, 9, 4,
//     4, 2, 2, 8,
//     8, 2, 4, 8,
//     4, 6, 7, 8,
//     2, 1, 2, 7,
//     2, 1, 1, 6,
//     1, 1, 1, 4
// ]

//yo
// const personalArray = [
//     2, 3, 6, 8, 7, 2, 5, 3, 8,
//     2, 3, 8, 8, 3, 4, 5, 9, 4,
//     7, 8, 1, 8, 1, 7, 8, 8, 1,
//     5, 2, 2, 1, 5
// ]


//papa
// const personalArray = [
//     8, 3, 6, 1, 2, 2, 4, 8, 5,
//     2, 3, 8, 2, 3, 8, 4, 4, 4,
//     5, 8, 2, 8, 7, 7, 1, 8, 2,
//     3, 1, 2, 1, 2
// ]

//mama
// const personalArray = [
//     6, 6, 6, 8, 2, 5, 2, 9, 1,
//   3, 2, 8, 8, 4, 2, 2, 8, 7,
//   5, 8, 2, 1, 5, 7, 8, 1, 5,
//   3, 2, 1, 1, 8
// ]


// const personalArray = coordenadas('daniela', 'valderrama', 'kelly', '05071977')

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('paterno')
const apellidoDos = document.getElementById('materno')
const fechaNacimiento = document.getElementById('nacimiento')
const btnCrear = document.getElementById('btnCrear')

let personalArray = []

// const personalArray = coordenadas('daniela', 'valderrama', 'kelly', '05071977')

// function getData(){
//     let dataNombre = nombre.value
//     let dataApellido = apellido.value
//     let dataApellidoDos = apellidoDos.value
//     let dataFechaNacimiento = fechaNacimiento.value

//     personalArray = coordenadas(dataNombre, dataApellido, dataApellidoDos, dataFechaNacimiento)

// }

// btnCrear.addEventListener('click', getData(), false)

console.log('nombre', nombre.value)

let personalObject, personalObject1, personalObject2, personalObject3, personalObject4
let dataNombre = '1'
let dataApellido = '1'
let dataApellidoDos = '1'
let dataFechaNacimiento = '1'
const groupPersonal = new THREE.Group();


function createEscultura(){

    dataNombre = nombre.value
    dataApellido = apellido.value
    dataApellidoDos = apellidoDos.value
    dataFechaNacimiento = fechaNacimiento.value

    personalArray = coordenadas(dataFechaNacimiento, dataNombre, dataApellido, dataApellidoDos)


    // const pisos = [0, 4, 8, 12, 16, 0, 4, 8, 12, 16, 0, 4, 8, 12, 16, 0, 4, 8, 12, 16, 0, 4, 8, 12, 16]

     const pisos = [0, 3, 7, 12, 16,
                    0, 4, 9, 13, 16,
                    0, 5, 8, 12, 16,
                    0, 3, 6, 10, 16,
                    0, 6, 10, 13, 16]

    // const pisos = [0, 4, 12, 8, 16, 0, 12, 8, 4, 16, 0, 12, 4, 8, 16, 0, 8, 4, 12, 16, 0, 4, 8, 12, 16]


    const positions = [ ];
    let unPlano = [
        // -0.5, 0.5, 0,
        // 0.5, 0.5, 0,
        // -0.5, -0.5, 0,
        // 0.5, -0.5, 0,
    ]
    let array = []

    let escul = []
    const a = 1
    let b = personalArray[6]


    for (let i = 0; i < personalArray.length; i++) {
       if(i % 3){
           num = personalArray[i]
       }
        // num = 5

        if(i % 5){
            num2 = personalArray[i]
        }
        if(i % 4){
            b = personalArray[i]
        }
        unPlano = [  
            [-num,  num2,  pisos[i]*9/2], //y 1!=1
            [-num+a,  num2,  pisos[i]*9/2.02], //y y
            [-num, num2+b/1.5,  pisos[i]*9/2], //x 1!=1
            
            [num, num2+b/1.5,  pisos[i]*9/2], //x 1!=1
            [-num+a, num2+b/1.5,  pisos[i]*9/2.02], //x x
            [num+a,  num2,  pisos[i]*9/2.02], //y y
            // [-num, num+b/2,  pisos[i]*9/2], //x 1!=1
        ]

        positions.push(unPlano)



    }

    

function prosesator(getPosition){
    // getPosition = 20
    for (let i = 0; i < positions.length; i++) {
                array.push(positions[getPosition+0][0]) 

                array.push(positions[getPosition+0][1])
                array.push(positions[getPosition+1][1])

                //
                array.push(positions[getPosition+0][0])
                array.push(positions[getPosition+0][2])
                array.push(positions[getPosition+1][2])

                //
                array.push(positions[getPosition+0][2])
                array.push(positions[getPosition+0][4])
                array.push(positions[getPosition+1][4])

                    //
                array.push(positions[getPosition+0][1])
                array.push(positions[getPosition+0][4])
                array.push(positions[getPosition+1][4])

                ////////
                ///////

                array.push(positions[getPosition+1][0]) 
                array.push(positions[getPosition+1][1])
                array.push(positions[getPosition+0][0])

                //
                array.push(positions[getPosition+1][0])
                array.push(positions[getPosition+1][2])
                array.push(positions[getPosition+0][0])

                //
                array.push(positions[getPosition+1][2])
                array.push(positions[getPosition+1][4])
                array.push(positions[getPosition+0][2])

                    //
                array.push(positions[getPosition+1][1])
                array.push(positions[getPosition+1][4])
                array.push(positions[getPosition+0][1])

                //////////
                //////////
                    /////////
                //////////
                
                
                array.push(positions[getPosition+1][0]) 
                array.push(positions[getPosition+1][1])
                array.push(positions[getPosition+2][1])

                //
                array.push(positions[getPosition+1][0])
                array.push(positions[getPosition+1][2])
                array.push(positions[getPosition+2][2])

                //
                array.push(positions[getPosition+1][2])
                array.push(positions[getPosition+1][4])
                array.push(positions[getPosition+2][4])

                    //
                array.push(positions[getPosition+1][1])
                array.push(positions[getPosition+1][4])
                array.push(positions[getPosition+2][4])

                ////////
                ///////

                array.push(positions[getPosition+2][0]) 
                array.push(positions[getPosition+2][1])
                array.push(positions[getPosition+1][0])

                //
                array.push(positions[getPosition+2][0])
                array.push(positions[getPosition+2][2])
                array.push(positions[getPosition+1][0])

                //
                array.push(positions[getPosition+2][2])
                array.push(positions[getPosition+2][4])
                array.push(positions[getPosition+1][2])

                    //
                array.push(positions[getPosition+2][1])
                array.push(positions[getPosition+2][4])
                array.push(positions[getPosition+1][1])
                


                //////////
                //////////
                    /////////
                //////////
                
                
                array.push(positions[getPosition+2][0]) 
                array.push(positions[getPosition+2][1])
                array.push(positions[getPosition+3][1])

                //
                array.push(positions[getPosition+2][0])
                array.push(positions[getPosition+2][2])
                array.push(positions[getPosition+3][2])

                //
                array.push(positions[getPosition+2][2])
                array.push(positions[getPosition+2][4])
                array.push(positions[getPosition+3][4])

                    //
                array.push(positions[getPosition+2][1])
                array.push(positions[getPosition+2][4])
                array.push(positions[getPosition+3][4])

                ////////
                ///////

                array.push(positions[getPosition+3][0]) 
                array.push(positions[getPosition+3][1])
                array.push(positions[getPosition+2][0])

                //
                array.push(positions[getPosition+3][0])
                array.push(positions[getPosition+3][2])
                array.push(positions[getPosition+2][0])

                //
                array.push(positions[getPosition+3][2])
                array.push(positions[getPosition+3][4])
                array.push(positions[getPosition+2][2])

                    //
                array.push(positions[getPosition+3][1])
                array.push(positions[getPosition+3][4])
                array.push(positions[getPosition+2][1])



                //////////
                //////////
                    /////////
                //////////
                
                
                array.push(positions[getPosition+3][0]) 
                array.push(positions[getPosition+3][1])
                array.push(positions[getPosition+4][1])

                //
                array.push(positions[getPosition+3][0])
                array.push(positions[getPosition+3][2])
                array.push(positions[getPosition+4][2])

                //
                array.push(positions[getPosition+3][2])
                array.push(positions[getPosition+3][4])
                array.push(positions[getPosition+4][4])

                    //
                array.push(positions[getPosition+3][1])
                array.push(positions[getPosition+3][4])
                array.push(positions[getPosition+4][4])

                ////////
                ///////

                array.push(positions[getPosition+4][0]) 
                array.push(positions[getPosition+4][1])
                array.push(positions[getPosition+3][0])

                //
                array.push(positions[getPosition+4][0])
                array.push(positions[getPosition+4][2])
                array.push(positions[getPosition+3][0])

                //
                array.push(positions[getPosition+4][2])
                array.push(positions[getPosition+4][4])
                array.push(positions[getPosition+3][2])

                    //
                array.push(positions[getPosition+4][1])
                array.push(positions[getPosition+4][4])
                array.push(positions[getPosition+3][1])

            
        // }
        
    }

   

}


const numberCopies = 5



// for (let i = 0; i < positions.length; i++) {
    
//     positions[i];
    
// }


prosesator(0)
prosesator(5)
prosesator(10)
prosesator(15)
prosesator(20)


for (let i = 0; i < array.length; i++) {
    for (let d = 0; d < array[i].length; d++) {
        escul.push(array[i][d])
        
    }
}



//#Source https://bit.ly/2neWfJ2 
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );


 let sepScult = chunk(escul, 9216)

console.log('CHIUNK', chunk(escul, 9216));



    personalGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[0], 3 ) );


    
    let plane = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0 )
    // let plane = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )


    let pcolor = []

    // pcolor = groupColorAqua

    
    pcolor = allColors[dataFechaNacimiento[7]][dataFechaNacimiento[1]]





    personalGeometry.computeVertexNormals()
    personalObject = new THREE.Mesh( personalGeometry, new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: pcolor[0], 
        shininess: 0,
        specular: 0x222222,
        clippingPlanes: [ plane ],
        clipShadows: true}
        ) );
    
       

        gsap.to(personalObject.material.clippingPlanes[0], {constant: 3, duration: 2.0, delay: 1})
        // clipping

    // const stencilGroup = createPlaneStencilGroup( personalObject, plane, 1 );
    
    // scene.add(plane)

    groupPersonal.add(personalObject);

    const pOZ = 0.30
    const pOY = 0.85


    personalObject.scale.set(.1, .1, .1)
    personalObject.position.set( 0.15, -0.94+pOY, pOZ )
    // personalObject.rotation.set(-0.0, -0.0, 0.15 + 1)


    let plane1 = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0  )
    // let plane1 = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )

    
    const personalGeometry1 = new THREE.BufferGeometry();
    
    
    personalGeometry1.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[1], 3 ) );
    
    let pcolor1 = 0xD9C152 
    personalGeometry1.computeVertexNormals()

    personalObject1 = new THREE.Mesh( personalGeometry1, new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: pcolor[0], 
        shininess: 0,
        specular: 0x222222,
        clippingPlanes: [ plane1 ],
        clipShadows: true}) );

        gsap.to(personalObject1.material.clippingPlanes[0], {constant: 3, duration: 2.0, delay: 1.55})

    personalObject1.castShadow = true; //default is false
    personalObject1.receiveShadow = true; //default
    groupPersonal.add(personalObject1);
    
    personalObject1.scale.set(.1, .1, .1)
    personalObject1.position.set(0.58, -0.72+pOY, pOZ )
    personalObject1.rotation.set(-0.0, -0.0, 0.15 + 1)




    // let plane2 = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )
    let plane2 = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0  )


    const personalGeometry2 = new THREE.BufferGeometry();
    
    
    personalGeometry2.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[2], 3 ) );
    // personalGeometry.computeVertexNormals();
    let pcolor2 = 0x856F3F 
    personalGeometry2.computeVertexNormals()

    personalObject2 = new THREE.Mesh( personalGeometry2, new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: pcolor[1], 
        shininess: 0,
        specular: 0x222222,
        clippingPlanes: [ plane2 ],
        clipShadows: true
    }) );
    gsap.to(personalObject2.material.clippingPlanes[0], {constant: 3, duration: 2.0, delay: 2})
    personalObject2.castShadow = true; //default is false
    personalObject2.receiveShadow = true; //default
    groupPersonal.add(personalObject2);
    
    personalObject2.scale.set(.1, .1, .1)
    personalObject2.position.set(0.0, 0.15+pOY, pOZ )
    personalObject2.rotation.set(-0.0, -0.0, 0.15 + 2)

    let plane3 = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0 )
    // let plane3 = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )



    const personalGeometry3 = new THREE.BufferGeometry();
    

    personalGeometry3.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[3], 3 ) );
    // personalGeometry.computeVertexNormals();
    let pcolor3 = 0xD9C152 
    personalGeometry3.computeVertexNormals()
    
    personalObject3 = new THREE.Mesh( personalGeometry3, new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: pcolor[2], 
        shininess: 0,
        specular: 0x222222,
        clippingPlanes: [ plane3 ],
        clipShadows: true
    }) );
    gsap.to(personalObject3.material.clippingPlanes[0], {constant: 3, duration: 2, delay: 2.5})
    personalObject3.castShadow = true; //default is false
    personalObject3.receiveShadow = true; //default
    groupPersonal.add(personalObject3);
    
    personalObject3.scale.set(.1, .1, .1)
    personalObject3.position.set(-0.29, -0.29+pOY, pOZ )
    personalObject3.rotation.set(-0.00, -0.00, 0.15 + 3)

    let plane4 = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0  )
    // let plane4 = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )


    const personalGeometry4 = new THREE.BufferGeometry();


    personalGeometry4.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[4], 3 ) );
    
    let pcolor4 = 0xD98D26

    personalGeometry4.computeVertexNormals()
    personalObject4 = new THREE.Mesh( personalGeometry4, new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: pcolor[2], 
        shininess: 0,
        specular: 0x222222,
        clippingPlanes: [ plane4 ],
        clipShadows: true
    }) );
    gsap.to(personalObject4.material.clippingPlanes[0], {constant: 3, duration: 2, delay: 3})

    console.log( 'PERSONALOBJECT', personalObject4)

    personalObject4.castShadow = true; //default is false
    personalObject4.receiveShadow = true; //default
    groupPersonal.add(personalObject4);
    
    personalObject4.scale.set(.1, .1, .1)
    personalObject4.position.set(-0.94, -0.5+pOY, pOZ )
    personalObject4.rotation.set(-0.0, -0.0, 0.15 + 4)
    // console.log('PERSONAL OBJECT', personaObject)

    
    
    scene.add(groupPersonal)

    const helpgroupPersonal = new THREE.BoxHelper( groupPersonal, 0xffff00 );
    // scene.add(helpgroupPersonal)


    groupPersonal.rotation.set(-1.59, -0.0, 0)
    groupPersonal.position.set(0.15, -1.25, 0.15 )
    groupPersonal.scale.set(.5, .5, .5)





}

// function getData(){
//     let dataNombre = nombre.value
//     let dataApellido = apellido.value
//     let dataApellidoDos = apellidoDos.value
//     let dataFechaNacimiento = fechaNacimiento.value

//     personalArray = coordenadas(dataNombre, dataApellido, dataApellidoDos, dataFechaNacimiento)

// }

function test(){
    console.log('TEST')
}

// createEscultura()

// btnCrear.addEventListener('click', test, true)
btnCrear.addEventListener('click', createEscultura, false)



// personalGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( escul, 3 ) );
// personalGeometry.computeVertexNormals();

// const personalObject = new THREE.Mesh( personalGeometry, new THREE.MeshNormalMaterial({side: THREE.DoubleSide}) );
// personalObject.scale.set(.1, .1, .1)
// // personalObject.position.set(0.58, -2.82, 0 )
// personalObject.rotation.set(-1.33, 0.06, 0.23)


// // console.log('PERSONAL OBJECT', personalObject)

// scene.add(personalObject);




// END OF PERSONAL OBJECT




manager.onStart = function ( url, itemsLoaded, itemsTotal ) { console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' ); };
// manager.onLoad = function ( ) { console.log( 'Loading Complete!'); };
manager.onProgress = function ( url, itemsLoaded, itemsTotal ) { console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' ); };
manager.onError = function ( url ) { console.log( 'There was an error loading ' + url ); };




/**
 * Sizes
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputEncoding = THREE.sRGBEncoding;
})



/**
 * Renderer
 */
 const renderer = new THREE.WebGLRenderer({
    canvas: canvas, antialias: true,
})
renderer.localClippingEnabled = true
renderer.toneMapping = THREE.ReinhardToneMapping
renderer.toneMappingExposure = 1.3
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))




/**
 * GLT loader
 */

  
// TEST
// ESCULTURA

const esculturaMaterial = new THREE.MeshBasicMaterial({color: 0x999999})
let escultura = []
let influences = []

let anim = []
let mixer 


var pt = 0




/**
 * INTERACTION
 */


const click = document.getElementById('clic')

const close = document.getElementById('close')

close.style.display = 'none'

click.addEventListener('click', () => {
    

    // rayZero.position.z = 0
    // gsap.to(
    //     rayZero.position, {z: -5, duration: 0.3}
    // )


    // ANIMACION RAYOS



})//end CLICK


close.addEventListener('click', () => {
   
    projects.style.display = 'none'
    
})



/**
 * BACKGROUND
 */

//  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
 const backgroundShaderMaterial = new THREE.ShaderMaterial({
     uniforms:{
         time: {value: 0}
     },
    vertexShader: `
      varying vec2 vUv;
      uniform float time;
      void main() {
          vec3 newposition = position;
          float PI = 3.1415925;
          vUv = uv;
          newposition.z += 0.1*sin((newposition.x + 0.25 + time)*2.*PI);

          gl_Position =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float time;

       
      void main() {
        gl_FragColor = vec4( vUv.y * sin(time/12.*0.000105)/4.0, vUv.y * sin(time/12.*0.000105)/4.0, vUv.y * sin(time/12.0*0.000105)/4.0, 0.4 );
        
      } 
    `
  });



  const backgroundShaderMaterialFirst = new THREE.ShaderMaterial({
    uniforms:{
        time: {value: 0}
    },
   vertexShader: `
     varying vec2 vUv;
     uniform float time;
     void main() {
         vec3 newposition = position;
         float PI = 3.1415925;
         vUv = uv;
         newposition.z += 0.1*sin((newposition.x + 0.25 + time)*2.*PI);

         gl_Position =  projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
     }
   `,
   fragmentShader: `
     varying vec2 vUv;
     uniform float time;

      
     void main() {
       gl_FragColor = vec4(vec3((vUv.y*2.0) * sin(time•112.)), 1. );
       
     } 
   `
 });



  
    const backgroundGeometry = new THREE.BoxGeometry( 1, 1, 1 );

    const backgroundMaterial = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide, 
        color: 0xaaaaaa,
        shininess: 0,
        specular: 0x222222
    })

    const pisoMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, color: 0xeeeeee, shininess: 0,
        specular: 0x222222})   

    const baseSculptMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, color: 0xffffff, shininess: 0,
        specular: 0x333333})
  
    const backgroundFirst = new THREE.Mesh( backgroundGeometry, baseSculptMaterial );

    const baseSculpt = new THREE.Mesh( backgroundGeometry, backgroundMaterial );

    const piso = new THREE.Mesh( backgroundGeometry, pisoMaterial );

backgroundFirst.scale.set(2.6, 3, 2.6)
backgroundFirst.rotation.set(1.6, 0, 0)
backgroundFirst.position.set (-0.29, 0.36, -0.90)

// baseSculpt.position.y = -0.98
baseSculpt.scale.set(1.8, .55, 1.8)
baseSculpt.rotation.set(1.6, 1.6, 0)
baseSculpt.position.set(-0.3, 0.3, 0.45)

piso.scale.set(200, 0.12, 200)
// piso.rotation.set(1.6, 1.6, 0)
piso.position.y = -2.24

piso.castShadow = true; //default is false
piso.receiveShadow = true; //default


backgroundFirst.castShadow = true; //default is false
backgroundFirst.receiveShadow = true; //default

baseSculpt.castShadow = true; //default is false
baseSculpt.receiveShadow = true; //default

// scene.add(backgroundFirst)
// scene.add(baseSculpt)
groupPersonal.add(backgroundFirst);

groupPersonal.add(baseSculpt);

scene.add(piso)

scene.background = new THREE.Color(0xa39992)

// scene.background = new THREE.CubeTextureLoader()
//     // .setPath('skybox/urban-skyboxes/UnionSquare/')
//     // .setPath('skybox/urban-skyboxes/CNTower/')
//     // .setPath('skybox/urban-skyboxes/Medborgarplatsen/')
//     // .setPath('skybox/urban-skyboxes/SaintLazarusChurch/')
//     .setPath('skybox/urban-skyboxes/Sodermalmsallen/')
//     // .setPath('skybox/urban-skyboxes/ForbiddenCity/')

//     .load([
//         'posx.jpg',
//         'negx.jpg',
//         'posy.jpg',
//         'negy.jpg',
//         'posz.jpg',
//         'negz.jpg',
        
//     ])

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1011)
// ambientLight.castShadow = true
// scene.add(ambientLight)

let hemiLight = new THREE.HemisphereLight(0xd8d8d8, 0x080820, 1)

scene.add(hemiLight)

const directionalLight = new THREE.SpotLight(0xff8888, 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.near = 8

// directionalLight.shadow.camera.left = - 7
// directionalLight.shadow.camera.top = 7
// directionalLight.shadow.camera.right = 7
// directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(8, 10, 5)  
scene.add(directionalLight)


const dirLight = new THREE.DirectionalLight( 0x8888ff );
dirLight.position.set( 3, 12, 17 );
dirLight.castShadow = true;
dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 500;
dirLight.shadow.camera.right = 17;
dirLight.shadow.camera.left = - 17;
dirLight.shadow.camera.top	= 17;
dirLight.shadow.camera.bottom = - 17;
dirLight.shadow.mapSize.width = 512;
dirLight.shadow.mapSize.height = 512;
dirLight.shadow.radius = 4;
dirLight.shadow.bias = - 0.0005;
// scene.add(dirLight)

const spotLight = new THREE.SpotLight(0xffa95c, 4)
spotLight.castShadow = true
spotLight.shadow.bias = -0.0001
spotLight.shadow.mapSize.width = 1024*4
spotLight.shadow.mapSize.height = 1024*4

scene.add(spotLight)

// scene.add( new THREE.CameraHelper( directionalLight.shadow.camera ) );

// scene.add( new THREE.AxesHelper(500))



/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 0.1, 100)

// const camera = new THREE.PerspectiveCamera(118, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 5)

// camera.lookAt( personalObject )
scene.add(camera)







/***
 * ANIMATION
 * 
 */



/**
 * Mouse
 */
 const mouse = new THREE.Vector2()

 window.addEventListener('mousemove', (event) =>
 {
     mouse.x = event.clientX / sizes.width * 2 - 1
     mouse.y = - (event.clientY / sizes.height) * 2 + 1
 
   })

 let objectsToTest = []

 manager.onLoad = function ( ) {


  console.log('murioEscultura')
     
};








// Controls
const controls = new OrbitControls(camera, canvas)
// controls.target.set(0, 0.75, 0)
// controls.autoRotate = true
controls.autoRotateSpeed = 0.15
controls.enableDamping = true

// controls.reset()





//MOUSECONTROL

const raycaster = new THREE.Raycaster()
let currentIntersect = null

var mouseTolerance = 0.0005;

// document.onmousemove = function (e) {
//   var centerX = (window.innerWidth / 2) * 1.1 ;
//   var centerY = (window.innerWidth / 2) * 1.5;

//   camera.position.x = (e.clientX + centerX) * mouseTolerance;
//   camera.position.y = (e.clientY + centerY) * mouseTolerance;
// };



//GUI

var params = {
    morphTarget: 0
};


// gui
//     .add(params, 'morphTarget')
//     .min(0)
//     .max(1)
//     .step(0.01).onChange(function(value) {
//         escultura.morphTargetInfluences[16] = value
//         // pt = value
//         })
//     .name('pt')

// personalObject
//     .add(params, 'morphTarget')
//     .min(0)
//     .max(1)
//     .step(0.01).onChange(function(value) {
//         escultura.morphTargetInfluences[17] = value
//         // pt = value
//         })
//     .name('pt')


// gui
//     .add(params, 'morphTarget')
//     .min(0)
//     .max(1)
//     .step(0.01).onChange(function(value) {
//         escultura.morphTargetInfluences[18] = value
//         // pt = value
//         })
//     .name('pt')



// gui
//     .add(params, 'morphTarget')
//     .min(0)
//     .max(1)
//     .step(0.01).onChange(function(value) {
//         escultura.morphTargetInfluences[19] = value
//         // pt = value
//         })
//     .name('pt')


// gui
//     .add(params, 'morphTarget')
//     .min(0)
//     .max(1)
//     .step(0.01).onChange(function(value) {
//         escultura.morphTargetInfluences[20] = value
//         // pt = value
//         })
//     .name('pt')

// gui
//     .add(params, 'morphTarget')
//     .min(0)
//     .max(1)
//     .step(0.01).onChange(function(value) {
//         escultura.morphTargetInfluences[21] = value
//         // pt = value
//         })
//     .name('pt')  

// gui
//     .add(params, 'morphTarget')
//     .min(0)
//     .max(1)
//     .step(0.01).onChange(function(value) {
//         escultura.morphTargetInfluences[22] = value
//         // pt = value
//         })
//     .name('pt')   
    
// gui
//     .add(params, 'morphTarget')
//     .min(0)
//     .max(1)
//     .step(0.01).onChange(function(value) {
//         escultura.morphTargetInfluences[23] = value
//         // pt = value
//         })
//     .name('pt')       
    
// gui
//     .add(params, 'morphTarget')
//     .min(0)
//     .max(1)
//     .step(0.01).onChange(function(value) {
//         escultura.morphTargetInfluences[24] = value
//         // pt = value
//         })
//     .name('pt')   


gui
    .add(groupPersonal.position, 'x')
    .min(- 10)
    .max(10)
    .step(0.01)
    .name('X')   

gui
    .add(groupPersonal.position, 'y')
    .min(- 10)
    .max(10)
    .step(0.01)
    .name('Y')

gui
    .add(groupPersonal.position, 'z')
    .min(- 10)
    .max(10)
    .step(0.01)
    .name('Z')



gui
    .add(groupPersonal.rotation, 'x')
    .min(- 4)
    .max(4)
    .step(0.01)
    .name('RX') 

gui
    .add(groupPersonal.rotation, 'y')
    .min(- 4)
    .max(4)
    .step(0.01)
    .name('RY')

gui
    .add(groupPersonal.rotation, 'z')
    .min(- 4)
    .max(4)
    .step(0.01)
    .name('RZ')

gui
    .add(groupPersonal.scale, 'x')
    .min(0)
    .max(4)
    .step(0.01)
    .name('SX') 

gui
    .add(groupPersonal.scale, 'y')
    .min(0)
    .max(4)
    .step(0.01)
    .name('SY')

gui
    .add(groupPersonal.scale, 'z')
    .min(0)
    .max(4)
    .step(0.01)
    .name('SZ')    





/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0


const tick = () =>
{

    
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    if(mixer)  mixer.update( deltaTime )


    raycaster.setFromCamera(mouse, camera)

 
    const intersects = raycaster.intersectObjects(objectsToTest)
   
    if(intersects.length)
        {
            if(!currentIntersect)
            {
                console.log('mouse enter')
            }

            currentIntersect = intersects[0]
        }
        else
        {
            if(currentIntersect)
            {
                console.log('mouse leave')
            }

            currentIntersect = null
        }


        // light
        spotLight.position.set(
            camera.position.x + 10,
            camera.position.y + 10,
            camera.position.z + 10,

        )
        groupPersonal.rotation.z += 0.0051
    // Update controls
    // mouseTolerance.update()
    controls.update()
    backgroundShaderMaterial.uniforms.time.value += previousTime
    backgroundShaderMaterialFirst.uniforms.time.value += previousTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()