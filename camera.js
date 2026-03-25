if (typeof spider === 'undefined') { var spider = {}; }
spider.windowTheme = "flat";
spider.gadgetTheme = "flat";
var _S1="myStatusbar";
if("undefined"==typeof Spider)var Spider={};spider.systembase={localFiles:null,getLocalFile:function(a){for(var b=0;b<this.localFiles.length;b++)if(1==spider.systembase.localFilesType){if(this.localFiles[b][google.picker.Document.ID]===a)return this.localFiles[b]}else if(this.localFiles[b].name===a)return this.localFiles[b];return null}};function spider_BankerRound(a){var b=0<=a?1:-1,c=b*Math.round(b*a);return 0.5===Math.abs(a)%1&&0!==c%2?c-b:c}
function spider_CastByte(a){a&=255;return 127<a?-(256-a):a}function spider_CastCharacter(a){return a&65535}function spider_CastAscii(a){return a&255}function spider_CastUnicode(a){return a&65535}function spider_CastWord(a){a&=65535;return 32767<a?-(65536-a):a}function spider_CastLong(a){a&=4294967295;return 2147483647<a?-(4294967296-a):a}function spider_CastQuad(a){return 0<=a?Math.floor(a):Math.ceil(a)}function spider_XOr(a,b){return(a||b)&&!(a&&b)}
function spider_AssignFixedString(a,b){return b<a.length?a.substring(0,b):a}function spider_SysArray(){this.structure=null;this.nbDimensions=0;this.type=this.dimensions=null}function spider_SysList(){this.type=this.current=this.last=this.first=null;this.index=0;this.isIndexInvalid=!1;this.field="";this.nbElements=0;this.isNative=!1}function spider_SysMap(){this.map={};this.current=null;this.currentIndex=-1;this.type=this.keys=this.currentKey=null;this.isNative=!1};

function melissomenu$f_aufbau() {
melissomenu$f_createneu(_S1);
return 0;
}
function melissomenu$f_takepicture() {
return 0;
};function melissomenu$f_createappstatusbar1(v_id) {
var v_content="";

        var contentarea = document.createElement("div");
        contentarea.style.cssText = "font-size: 16px; font-family: Arial; text-align: center;";
        document.getElementsByTagName('body')[0].appendChild(contentarea);
        var video = document.createElement("video");
        video.style.cssText = "background-color: #CCCCCC;border: 1px solid black; width: 75%; height: 75%; float: center;";
        var bar = document.createElement("button");
        bar.id = v_id;
        bar.style.cssText = "width: 75%;background-color: #FF6666; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;";
        bar.innerText = "Button";
        document.getElementsByTagName('div')[0].appendChild(bar);
        document.getElementsByTagName('div')[0].appendChild(video);
if (1) return 1;
return 0;
}
function melissomenu$f_createneu(v_id) {
var v_content="";

        const el = (sel, par) => (par || document).querySelector(sel);
        const els = (sel, par) => (par || document).querySelectorAll(sel);
        const elNew = (tag, prop) => Object.assign(document.createElement(tag), prop);
        const attr = (el, attr) => Object.entries(attr).ForEach(([k, v]) => el.setAttribute(k, v)); //siehe Example 1
        const css = (el, styles) => Object.assign(el.style, styles);
        //
        // DIV und Main ANFANG
        const elContentDiv = elNew("div", {
            type: "div",
            className: "contentarea",
            style: 'font-size: 16px; font-family: Arial; text-align: center;'
        });
        const elMain = elNew("Main", {
            type: "Main",
            id: "m1",
            style: 'background-color: #05ACFF; min-height: 80vh; flex-grow: 1; display: inline-block;'
        });
        // DIV und Main ENDE
        //
        //ButtonBlock ANFANG
        const elButtonDEV = elNew("div", {
            type: "div",
            id: "buttonDIV"
        });
        const elBtnDownload = elNew("button", {
            type: "button",
            id: "bdownload",
            innerHTML: 'Download [Client]',
            style: `width: 75%; background-color: #FF6666; /* Green */ border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px`
        });
        const elBtnSnapshot = elNew("button", {
            type: "button",
            id: "bmake",
            innerHTML: 'Snapshot [Schnappschuss]',
            style: `width: 75%; background-color: #ABA01D; /* Green */ border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;`,
            onclick: function () {alert('Button1')}
        });
        const elBtnCamera = elNew("button", {
            type: "button",
            id: "bcamera",
            innerHTML: 'Camera setting [Kameraeinstellung]',
            style: `width: 75%; background-color: #04AA6D; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;`
        });
        // Buttonblock ENDE
        //
        // Camera-SelektBlock ANFANG
        const elCustomDiv = elNew("div", {
            className: "customsDiv",
            style: 'min-width: 350px; position: relative;'
        });
        const CustomSelekt = document.createElement("SELECT");
        CustomSelekt.setAttribute("id", "select");
        CustomSelekt.setAttribute("style", " width: 75%; font-size: 1.15rem; padding: 0.675em 6em 0.675em 1em; background-color: #fff; border: 1px solid #caced1; border-radius: 0.25rem; color: #000; cursor: pointer;");
        const elOption1 = elNew("option", {
            type: "option"
        });
        // Camera-SelektBlock ENDE
        //
        // Camera-Pixel ANFANG
        const PixelSelekt = document.createElement("SELECT");
        PixelSelekt.setAttribute("id", "pixel");
        PixelSelekt.setAttribute("style", "width: 75%; font-size: 1.15rem; padding: 0.675em 6em 0.675em 1em; background-color: #fff; border: 1px solid #caced1; border-radius: 0.25rem; color: #000; cursor: pointer;");
        const elOp1 = elNew("option", {
            type: "option",
            value: "3840",
            innerHTML: '2160p [4K]'
        });
        const elOp2 = elNew("option", {
            type: "option",
            value: "1920",
            innerHTML: '1080p [2K->Full-HD]'
        });
        const elOp3 = elNew("option", {
            type: "option",
            value: "1280",
            innerHTML: '720p [HD ready]'
        });
        const elOp4 = elNew("option", {
            type: "option",
            value: "800",
            innerHTML: '800'
        });
        const elOp5 = elNew("option", {
            type: "option",
            value: "600",
            innerHTML: '600'
        });
        // Camera-Pixel ENDE
        //
        // Video ANFANG
        const shvideo = document.createElement("VIDEO");
        shvideo.setAttribute("id", "video");
        //shvideo.setAttribute("style", "background-color: #CCCCCC; border: 1px solid black; width: 75%; height: 75%; float: center;");
        shvideo.style.cssText = "background-color: #CCCCCC; border: 1px solid black; width: 75%; height: 75%; float: center;";
        shvideo.setAttribute("autoplay", "");
        shvideo.setAttribute("playsinline", "");
        // Video ENDE
        //
        // Canvas ANFANG
        const hidcanvas = document.createElement("canvas");
        hidcanvas.setAttribute("id", "canvas");
        hidcanvas.setAttribute("style", "background-color: #CCCCCC; border: 1px solid black; width: 75%; height: 75%; float: center;");
        //hidcanvas.setAttribute("hidden", "hidden");
        hidcanvas.hidden = true;
        // Canvas ENDE
        // Aufbau der HTML-Seite
        el("body").append(elContentDiv);
        el(".contentarea").append(elMain);
        el("Main").append(elButtonDEV);
        el("#buttonDIV").append(elBtnDownload);
        el("#buttonDIV").append(elBtnSnapshot);
        el("#buttonDIV").append(elBtnCamera);
        el("Main").append(elCustomDiv)
        document.querySelector('.customsDiv').appendChild(CustomSelekt);
        el("#select").append(elOption1)
        document.querySelector('#m1').appendChild(PixelSelekt);
        el("#pixel").append(elOp1);
        el("#pixel").append(elOp2);
        el("#pixel").append(elOp3);
        el("#pixel").append(elOp4);
        el("#pixel").append(elOp5);
        document.querySelector('#m1').appendChild(shvideo);
        //document.getElementsByTagName('main')[0].appendChild(shvideo); // auch ok
        document.querySelector('#m1').appendChild(hidcanvas);
        //document.getElementById('m1').appendChild(hidcanvas); //auch ok
        //----------------------------------
            var width = 1280;
            var height = 0;
            var streaming = false;
            const video = document.getElementById('video');
            const bcamera = document.getElementById('bcamera');
            const bmake = document.getElementById('bmake');
            const select = document.getElementById('select');
            let currentStream;
            function downloadImage() {
                    let timestamp = Date.now();
                    let canvas = document.getElementById("canvas");
                    var dataURL = canvas.toDataURL("image/png");
                    var a = document.createElement('a');
                    a.href = dataURL
                    a.download = timestamp + '.png';
                    a.click();
            }
            function aufloesung() {
                //width = pixel.value;
               switch (pixel.value) {
                  case '3840' :
                     width  = 3840;
                     height = 2160;
                     break;
                  case '1920' :
                     width  = 1920;
                     height = 1440;
                     break;
                  case '1280' :
                     width  = 1280;
                     height = 720;
                     break;
                  case '800' :
                     width  = 800;
                     height = 600;
                     break;
                  case '640' :
                     width  = 640;
                     height = 480;
                     break;
                  default:
                     width  = 1280;
                     height = 720;
               }
            }
            function prepareImg() {
                    var canvas = document.getElementById('canvas');
                    document.getElementById('inp_img').value = canvas.toDataURL();
            }
            function stopMediaTracks(stream) {
                    stream.getTracks().forEach(track => {
                    track.stop();
                    });
            }
            function gotDevices(mediaDevices) {
                    select.innerHTML = '';
                    select.appendChild(document.createElement('option'));
                    let count = 1;
                    mediaDevices.forEach(mediaDevice => {
                            if (mediaDevice.kind === 'videoinput') {
                                    const option = document.createElement('option');
                                    option.value = mediaDevice.deviceId;
                                    const label = mediaDevice.label || `Camera ${count++}`;
                                    const textNode = document.createTextNode(label);
                                    option.appendChild(textNode);
                                    select.appendChild(option);
                            }
                    });
            }
            function takepicture() {
                    var context = canvas.getContext('2d');
                    if (width && height) {
                            canvas.width = width;
                            canvas.height = height;
                            context.drawImage(video, 0, 0, width, height);
                            var data = canvas.toDataURL('image/jpeg');
                            photo.setAttribute('src', data);
                    } else {
                            //clearphoto();
                        }
            }
            bcamera.addEventListener('click', event => {
                if (typeof currentStream !== 'undefined') {
                    stopMediaTracks(currentStream);
                }
                const videoConstraints = {};
                if (select.value === '') {
                    videoConstraints.facingMode = 'environment';
                } else {
                    videoConstraints.deviceId = { exact: select.value };
                    //alert(select.value);
                }
                const constraints = {
                    video: videoConstraints,
                    audio: false
                };
                navigator.mediaDevices
                    .getUserMedia(constraints)
                    .then(stream => {
                        currentStream = stream;
                        video.srcObject = stream;
                        video.play();
                        return navigator.mediaDevices.enumerateDevices();
                    })
                    .then(gotDevices)
                    .catch(error => {
                        console.error(error);
                    });
                    video.addEventListener('canplay', function(ev) {
                            if (!streaming) {
                                    height = video.videoHeight / (video.videoWidth / width);
                                    if (isNaN(height)) {
                                            height = width / (4 / 3);
                                    }
                                    video.setAttribute('width', width);
                                    video.setAttribute('height', height);
                                    canvas.setAttribute('width', width);
                                    canvas.setAttribute('height', height);
                                    streaming = true;
                            }
                    }, false);
            });
            bmake.addEventListener('click', function(ev) {
                    takepicture();
                    ev.preventDefault();
            }, false);
            pixel.addEventListener('click', function(ev) {
                    aufloesung();
                    ev.preventDefault();
            }, false);
            let download = document.getElementById('bdownload');
            download.addEventListener('click', downloadImage);
            navigator.mediaDevices.enumerateDevices().then(gotDevices);
        navigator.mediaDevices.enumerateDevices().then(gotDevices); 
        //----------------------------------
if (1) return 1;
return 0;
};SpiderLaunch = function() {
 spider_InitFunctions();
melissomenu$f_aufbau();

}


function spider_InitFunctions() {
}


spider.nbLoadedModules++
