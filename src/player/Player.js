import PlayerControls from "./PlayerControls.js";
import PlayerProgress from "./PlayerProgress.js";
export default class Player extends lng.Component {
 
    static _template() {
        return {
            // ProgressBar: {
            //     // player control
            //     // Text:{text:{text:'Progress Bar'}}
            // },
            // Play: {
            //     // player control
            // },
            // Stop: {
            //     // player control
            // }

            //code begins
            Gradient: {
                x: 0,
                y: 1080,
                h: 300,
                w: 1920,
                mountY: 1,
                colorTop: 0x00101010,
                colorBottom: 0xE6101010,
                rect: true
            },
            Controls: {
                x: 99,
                y: 890,
                type: this.PlayerControls,
                signals: {pressPlay: true, pressPrevious: true, pressNext: "_pressNext"}
            },
            Progress: {x: 99, y: 970, type: this.PlayerProgress}
            //code ends
        }
    }
    //NewCode Begins
    // events = ['timeupdate',
    // 'error',
    // 'ended',
    // 'loadeddata',
    // 'canplay',
    // 'play',
    // 'playing',
    // 'pause',
    // 'loadstart',
    // 'seeking',
    // 'seeked',
    // 'encrypted']
    _init(){
        console.log("Init from Player.js")
    }
    $mediaplayerProgress({ currentTime, duration }) {
        console.log("$mediaplayerProgress")
    }
 
    // this will be invoked when the video ends
    $mediaplayerEnded() {
        console.log("$mediaplayerEnded")
    }
 
    // this will be invoked when the video starts playing
    $mediaplayerPlay() {
        console.log("mediaplayerPlay")
    }
 
    // this will be invoked when the video pauses
    $mediaplayerPause() {
        console.log("$mediaplayerPause")
    }
 
    // this will be invoked when the video stops
    $mediaplayerStop() {
        console.log("$mediaplayerStop")
    }
 
    // this will be invoked when the video raises an error
    $mediaplayerError() {
        console.log("$mediaplayerError")
    }

    //NewCode Ends

    // getMediaplayerSettings can return an object
    // the mediaplayer expects an object with a stream property
    // this method will be invoked on every focus path change or you can force it
    // via: this.application.updateFocusSettings()

    getMediaplayerSettings() {
        console.log("inside getMediaplayerSettings")
        return {
            stream: { src: "video.mp4" }
        }
    }

    
}