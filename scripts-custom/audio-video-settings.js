var audioVideo = new AudioVideo([
  {
    // Autoplay
    //autoPlay: true,

    // path of playing track
    path: [
      'http://apps.ua/mp3/music.mp3'
    ],
 
    // event is triggered at playing track
    loadProgress: function (value) {
      document.getElementsByClassName('load-progress')[0]
        .style.width = value + '%';
    },
 
    // after stop track
    end: function (val) {
      console.log(val);
    },
 
    // if browser not supporting then display error
    error: function (infoError) {
      console.error(infoError);
    },
 
    // controls elements for player
    controls: {
 
      // Default volume 
      valueVolume: 50,
 
      // Default progress
      valueProgress: 0,
 
      // control of vertical element for the volume
      //verticalVolume: true,
 
      // classes of elements for player
      play: 'new-play',
      pause: 'new-pause',
      stop: 'new-stop',
      progress: 'progress',
      volume: 'new-volume',
 
      // class for element of start timer
      tagStartTime: 'new-startTime',
 
      // class for element of end timer
      tagEndTime: 'new-endTime'
    }
  },
 
  {
    //autoPlay: true,
 
    // activation of video
    video: true,
 
    // element video with id 'video'
    element: 'video',

    // paths of playing tracks
    // formats files for different browsers (ogv, mp4)
    path: [
      'http://www.cantinanegrar.it/asset/video/amarone.ogv',
      'http://www.cantinanegrar.it/asset/video/amarone.mp4'
    ],
    loadProgress: function (value) {
      document.getElementsByClassName('load-progress')[1]
        .style.width = value + '%';
    },
    end: function (val) {
      console.log(val);
    },
    error: function (infoError) {
      console.log(infoError);
    },
    controls: {
      valueVolume: 10,
      //valueProgress: 50,
      //verticalVolume: true,
      play: 'new-play',
      pause: 'new-pause',
      stop: 'new-stop',
      progress: 'progress',
      volume: 'new-volume',
      tagStartTime: 'new-startTime',
      tagEndTime: 'new-endTime'
    }
  }
]);