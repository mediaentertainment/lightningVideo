// import Player from "./player/Player.js";
import Player from "./tools/player/Player.js";
export default class App extends ux.App {

    // static getFonts() {
    //     return [
    //     ]
    // }

    // static _template() {
    //     return {
    //         Text:{text:{text:'Prakhar'}}
    //     };
    // }
    static _template() {
        return {
            Home: {
                // page
            },
            Settings: {
                // page
            },
            Player: {
               type: Player,
            },
            //newBegins
            Message:{
                Text:{text:{text:'Stopped'}},alpha:0
            }
            //newEnds
        }
    }
 
    // to make the example more real-life im going add a Playing state
    _init() {
        console.log("inside init function")
        this._setState("Playing")
    }
 
    // this method gets invoked everytime the focuspath is being re-calculated
    // and it holds a 'global' settings object. The mediaplayer needs to know
    // which component is the consumer (responsible for handing over streams
    // and accepting events from the mediaplayer)
    _setFocusSettings(settings) {
        //console.log('inside _setFocusSettings',this.tag("Player"));
        //console.log(555,settings.mediaplayer.consumer)
        if(this.state === "Playing") {
            settings.mediaplayer.consumer = this.tag("Player")
        }
    }
 
    static _states() {
        return [
            class Playing extends this{
                // delegate focuspath to the player
                _getFocused() {
                    return this.tag("Player")
                }
            },
        ]
    }


}