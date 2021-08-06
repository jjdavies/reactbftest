import React, { useEffect, useState, memo, useCallback } from 'react';
import { spine } from '../build/spine-webgl';
import uifx from 'uifx';
// import useSound from 'use-sound'

import helloMP3 from '../media/hello.mp3'
import tiptoeMP3 from '../media/tiptoe.mp3'
import ballbounceMP3 from '../media/ballbounce.mp3'
import mynameisbusyantMP3 from '../media/mynameisbusyant.mp3'
import silenceMP3 from '../media/silence.mp3'

// export default function BusyAnt (props) {
const BusyAnt = React.memo((props) => {
  // export function BusyAnt(props) {

    const [leave, setLeave] = useState(props.leave);

    const tiptoe = new uifx(tiptoeMP3, {volume:0.5});
    const hello = new uifx(helloMP3);
    const ballbounce = new uifx(ballbounceMP3);
    const silence = new uifx(silenceMP3);

    // const [playBallBounce] = useSound(mynameisbusyantMP3);
    // const [playHello] = useSound(helloMP3);

    const mynameis = new uifx(mynameisbusyantMP3)

    var stage = props.stage;

    var canvas;
    var gl;
    var shader;
    var batcher;
    var mvp = new spine.webgl.Matrix4();
    var skeletonRenderer;
    var assetManager;

    var debugRenderer;
    var shapes;

    var lastFrameTime;
    var skeletons = {};
    var activeSkeleton = "skeleton";
    var startGame = false;

    var leaveEvent = new Event('leave')
    var talkAndPointEvent = new Event('talkAndPoint')
    var sayName = new Event('sayName')
    var ballEvent = new Event('ballEvent')

    useEffect(()=>{
        init();
        canvas = document.getElementById("busyAntCanvas");
        canvas.dispatchEvent(sayName)
        // console.log('ue', leave)
        
        // if (leave){
        //   console.log(leave)
        //   setLeave(false);
        //   console.log(leave)
        //   var state = skeletons[activeSkeleton].state;
        //   // var stateData = state.data;
        //   var animationName = "ball-warmup";
        //   state.addAnimation(0, animationName, false);
        // }
    }, [])

    useEffect(()=>{
      canvas = document.getElementById("busyAntCanvas");
      setLeave(props.leave)
      if (props.leave) canvas.dispatchEvent(leaveEvent)
      // setBallCatch(props.ballCatch)
      console.log(props.ballCatch)
      // if (props.ballCatch) {
      //   setTimeout(()=>{
      //     console.log('dispatching')
      //     canvas.dispatchEvent(ballEvent)
      //   }, 1000)
        
      // }


      // if (props.leave){
      //   console.log('trig')
      //     var state = skeletons[activeSkeleton].state;
      //     // var stateData = state.data;
      //     var animationName = "ball-warmup";
      //     state.addAnimation(0, animationName, false);
      // }
    }, [props])
    

    const init = () =>{
        // Setup canvas and WebGL context. We pass alpha: false to canvas.getContext() so we don't use premultiplied alpha when
        // loading textures. That is handled separately by PolygonBatcher.
        canvas = document.getElementById("busyAntCanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var config = { alpha: true };
        gl = canvas.getContext("webgl", config) || canvas.getContext("experimental-webgl", config);
        if (!gl) {
          alert('WebGL is unavailable.');
          return;
        }
    
        // Create a simple shader, mesh, model-view-projection matrix, SkeletonRenderer, and AssetManager.
        shader = spine.webgl.Shader.newTwoColoredTextured(gl);
        batcher = new spine.webgl.PolygonBatcher(gl);
        mvp.ortho2d(0, 0, canvas.width - 1, canvas.height - 1);
        skeletonRenderer = new spine.webgl.SkeletonRenderer(gl);
        assetManager = new spine.webgl.AssetManager(gl);
    
    
        // Create a debug renderer and the ShapeRenderer it needs to render lines.
        debugRenderer = new spine.webgl.SkeletonDebugRenderer(gl);
        debugRenderer.drawRegionAttachments = true;
        debugRenderer.drawBoundingBoxes = true;
        debugRenderer.drawMeshHull = true;
        debugRenderer.drawMeshTriangles = true;
        debugRenderer.drawPaths = true;
        // debugShader = spine.webgl.Shader.newColored(gl);
        shapes = new spine.webgl.ShapeRenderer(gl);
    
    
        // Tell AssetManager to load the resources for each skeleton, including the exported .skel file, the .atlas file and the .png
        // file for the atlas. We then wait until all resources are loaded in the load() method.
        assetManager.loadBinary("assets/skeleton.skel");
        assetManager.loadTextureAtlas("assets/skeleton.atlas");
    
        requestAnimationFrame(load);
    
    }

    const load = () =>{
    // Wait until the AssetManager has loaded all resources, then load the skeletons.
        const playSound = (sound) =>{
              sound.play();
            }
            if (assetManager.isLoadingComplete()) {
            
            if(stage === "intro"){
              skeletons["skeleton"] = loadSkeleton("skeleton", "enter", true);
              // tiptoe.play();
              var state = skeletons[activeSkeleton].state;
              var stateData = state.data;
              var skeleton = skeletons[activeSkeleton].skeleton;
            }
            if(stage === "warmup"){
              skeletons["skeleton"] = loadSkeleton("skeleton", "enter", true);
              // tiptoe.play();
              var state = skeletons[activeSkeleton].state;
              var stateData = state.data;
              var skeleton = skeletons[activeSkeleton].skeleton;
            }
            if(stage === "enterTalkPoint"){
              skeletons["skeleton"] = loadSkeleton("skeleton", "enter", true);
              // tiptoe.play();
              var state = skeletons[activeSkeleton].state;
              var stateData = state.data;
              var skeleton = skeletons[activeSkeleton].skeleton;
            }
            stateData.setMix("idle", "enter", 1);
            // stateData.setMix("idle", "ball-warmup", .25);
            stateData.setMix("enter", "idle", 1);
            state.addAnimation(0, "idle", true, 0);
            if(stage === "intro"){
            }
            if(stage === "enterTalkPoint"){
              state.addAnimation(0, "idle", true, 0);
              state.addAnimation(1, "point", false, 1);
              state.addAnimation(2, "talk", false, 1);
            }
            // if(stage === "warmup"){
            //   state.addAnimation(0, "ball-warmup", true, 0);
            //   playSound(ballbounce);
            //   playSound(mynameis);
            //   state.addAnimation(0, "idle", true, 0);
            // }
            
            

            // skeleton.setToSetupPose();
            
            // console.log(leave)
            
            //set up wave trigger
            canvas.onclick = () =>{
              if (stage === "warmup"){
                state.setAnimation(0, "ball-warmup", true, 0);
                state.addAnimation(0, "idle", true, 0);
                setTimeout(()=>{ballbounce.play()}, 800)
                setTimeout(()=>{ballbounce.play()}, 3500)
                setTimeout(()=>{mynameis.play()}, 1100)
              } else {
                var animationName = "wave-say-hello";
                state.setAnimation(0, animationName, false);
                state.addAnimation(0, "idle", true, 0);
                hello.play();
              }
            }

            canvas.addEventListener('leave', ()=>{
              var animationName = "leave";
              state.setAnimation(0, animationName, false);
              // state.addAnimation(0, "idle", true, 0);
              tiptoe.play();
            }, false)

            // canvas.addEventListener('sayname', ()=>{
            //   mynameis.play();
            // }, false)

            canvas.addEventListener('ballEvent', ()=>{
              state.addAnimation(0, "ball-warmup", true, 0);
              state.addAnimation(0, "idle", true, 0);
              // setTimeout(()=>{mynameis.play()}, 1000)
              // hello.play();
              // ballbounce.play();
              // playBallBounce();
              // mynameis.play();
            }, false)


            
            // setupUI();
            // var intro = document.getElementById('intro')
            // intro.onclick = () =>{
            // var state = skeletons[activeSkeleton].state;
            // var skeleton = skeletons[activeSkeleton].skeleton;
            // var animationName = "wave-say-hello";
            // skeleton.setToSetupPose();
            // state.setAnimation(0, animationName, false);
            // // setIntroClass("introDiv inactive")
            // // startGame = true;
            
            // }

            lastFrameTime = Date.now() / 1000;
            requestAnimationFrame(render); // Loading is done, call render every frame.
        } else {
            requestAnimationFrame(load);
        }
    }

    function render () {
        var now = Date.now() / 1000;
        var delta = now - lastFrameTime;
        lastFrameTime = now;
        
        // Update the MVP matrix to adjust for canvas size changes
        resize();
        
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        
        // Apply the animation state based on the delta time.
        var skeleton = skeletons[activeSkeleton].skeleton;
        var state = skeletons[activeSkeleton].state;
        var bounds = skeletons[activeSkeleton].bounds;
        var premultipliedAlpha = skeletons[activeSkeleton].premultipliedAlpha;
        state.update(delta);
        state.apply(skeleton);
        skeleton.updateWorldTransform();
        
        // Bind the shader and set the texture and model-view-projection matrix.
        shader.bind();
        shader.setUniformi(spine.webgl.Shader.SAMPLER, 0);
        shader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, mvp.values);
        
        // Start the batch and tell the SkeletonRenderer to render the active skeleton.
        batcher.begin(shader);
        
        // var effect = $("#effectList option:selected").text();
        // if (effect == "None") {
        //   skeletonRenderer.vertexEffect = null;
        // } else if (effect == "Swirl") {
        //   swirlTime += delta;
        //   var percent = swirlTime % 2;
        //   if (percent > 1) percent = 1 - (percent -1 );
        //   swirlEffect.angle = 120 * percent - 60;
        //   swirlEffect.centerX = bounds.offset.x + bounds.size.x / 2;
        //   swirlEffect.centerY = bounds.offset.y + bounds.size.y / 2;
        //   swirlEffect.radius = Math.sqrt(bounds.size.x * bounds.size.x + bounds.size.y * bounds.size.y);
        //   skeletonRenderer.vertexEffect = swirlEffect;
        // } else if (effect == "Jitter") {
        //   skeletonRenderer.vertexEffect = jitterEffect;
        // }
        
        skeletonRenderer.premultipliedAlpha = premultipliedAlpha;
        skeletonRenderer.draw(batcher, skeleton);
        batcher.end();
        
        shader.unbind();
        
        // Draw debug information.
        // var debug = $('#debug').is(':checked');
        // if (debug) {
        //   debugShader.bind();
        //   debugShader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, mvp.values);
        //   debugRenderer.premultipliedAlpha = premultipliedAlpha;
        //   shapes.begin(debugShader);
        //   debugRenderer.draw(shapes, skeleton);
        //   shapes.end();
        //   debugShader.unbind();
        // }
        // console.log('leave', leave)
        // if (leave){
          // console.log('trig')
          // var state = skeletons[activeSkeleton].state;
          // // var stateData = state.data;
          // var animationName = "ball-warmup";
          // state.addAnimation(0, animationName, false);
        // }
        
        

        requestAnimationFrame(render);
    }

    function resize () {
        var w = canvas.clientWidth;
        var h = canvas.clientHeight;
        if (canvas.width != w || canvas.height != h) {
            canvas.width = w;
            canvas.height = h;
        }
        
        // Calculations to center the skeleton in the canvas.
        var bounds = skeletons[activeSkeleton].bounds;
        var centerX = bounds.offset.x + bounds.size.x / 2;
        var centerY = bounds.offset.y + bounds.size.y / 2;
        var scaleX = bounds.size.x / canvas.width;
        var scaleY = bounds.size.y / canvas.height;
        var scale = Math.max(scaleX, scaleY) * 1.2;
        if (scale < 1) scale = 1;
        var width = canvas.width// * scale;
        var height = canvas.height// * scale;
        
        mvp.ortho2d(centerX - width / 2, centerY - height / 2, width, height);
        gl.viewport(0, 0, canvas.width, canvas.height);

    }

    const loadSkeleton = (name, initialAnimation, premultipliedAlpha, skin) => {
        if (skin === undefined) skin = "default";
      
        // Load the texture atlas using name.atlas from the AssetManager.
        var atlas = assetManager.get("assets/skeleton.atlas");
      
        // Create a AtlasAttachmentLoader that resolves region, mesh, boundingbox and path attachments
        var atlasLoader = new spine.AtlasAttachmentLoader(atlas);
      
        // Create a SkeletonBinary instance for parsing the .skel file.
        var skeletonBinary = new spine.SkeletonBinary(atlasLoader);
      
        // Set the scale to apply during parsing, parse the file, and create a new skeleton.
        skeletonBinary.scale = 1;
        var skeletonData = skeletonBinary.readSkeletonData(assetManager.get("assets/skeleton.skel"));
        var skeleton = new spine.Skeleton(skeletonData);
        skeleton.setSkinByName(skin);
        var bounds = calculateSetupPoseBounds(skeleton);
      
        // Create an AnimationState, and set the initial animation in looping mode.
        var animationStateData = new spine.AnimationStateData(skeleton.data);
        var animationState = new spine.AnimationState(animationStateData);
        if (name == "spineboy") {
          animationStateData.setMix("walk", "jump", 0.4)
          animationStateData.setMix("jump", "run", 0.4);
          animationState.setAnimation(0, "walk", true);
          var jumpEntry = animationState.addAnimation(0, "jump", false, 3);
          animationState.addAnimation(0, "run", true, 0);
        } else {
          animationState.setAnimation(0, initialAnimation, false);
        }
        animationState.addListener({
          start: function(track) {
            console.log("Animation on track " + track.trackIndex + " started");
          },
          interrupt: function(track) {
            console.log("Animation on track " + track.trackIndex + " interrupted");
          },
          end: function(track) {
            console.log("Animation on track " + track.trackIndex + " ended");
          },
          disposed: function(track) {
            console.log("Animation on track " + track.trackIndex + " disposed");
          },
          complete: function(track) {
            console.log("Animation on track " + track.trackIndex + " completed");
            if(!startGame){
            //   setIntroClass('introDiv active')
            } else{
            //   props.startGame();
            }
          },
          event: function(track, event) {
            console.log("Event on track " + track.trackIndex + ": " + JSON.stringify(event));
          }
        })
      
        // Pack everything up and return to caller.
        return { skeleton: skeleton, state: animationState, bounds: bounds, premultipliedAlpha: premultipliedAlpha };
      }

      const calculateSetupPoseBounds = (skeleton) =>{
        skeleton.setToSetupPose();
        skeleton.updateWorldTransform();
        var offset = new spine.Vector2();
        var size = new spine.Vector2();
        skeleton.getBounds(offset, size, []);
        return { offset: offset, size: size };
      }

    return (
        <div>
            <canvas id="busyAntCanvas"></canvas>
        </div>
    )
})
export default BusyAnt

