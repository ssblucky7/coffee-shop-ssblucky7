new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
                {
                  name: "Devo Ke Dev Mahadev ",
                  artist: "S.S.B Lucky 7",
                  cover: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/har__har_mahadev___-20240308-0001.jpg",
                  source: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/Devo-Ke-Dev-.mp3",
                  url: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/Devo-Ke-Dev-.mp3",
                  favorited: false
        },
        {
          name: "Govind Bolo ",
          artist: "S.S.B Lucky 7",
          cover: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/kalakriti_the_artpreneur-20231230-0001.jpg",
          source: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/GOVIND-BOLO-.mp3",
          url: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/GOVIND-BOLO-.mp3",
          favorited: false
        },
        {
          name: "Ram Siya Ram ",
          artist: "S.S.B Lucky 7",
          cover: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/damardhaval-20231219-0002.jpg",
          source: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/Ram-Siya-Ram.mp3",
          url: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/Ram-Siya-Ram.mp3",
          favorited: true
        },

        {
          name: "Suresh Kumar Mahato",
          artist: "S.S.B Lucky 7",
          cover: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/1.png",
          source: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/Paon-Ki-Jutti.mp3",
          url: "https://ssblucky7.netlify.app/",
          favorited: false
        },

        {
          name: "Sastika Regmi ",
          artist: "S.S.B Lucky 7",
          cover: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/2.png",
          source: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/Gulabi-Sadi.mp3",
          url: "https://www.facebook.com/sastika.regmi.92",
          favorited: false
        },
        {
          name: "Roman Dangol ",
          artist: "S.S.B Lucky 7",
          cover: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/3.png",
          source: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/Husn.mp3",
          url: "https://www.facebook.com/rowmandangol",
          favorited: true
        },
        {
          name: "Nabin Ghimire ",
          artist: "S.S.B Lucky 7",
          cover: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/4.png",
          source: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/O-Maahi.mp3",
          url: "https://www.facebook.com/ng.rock77",
          favorited: false
        },
        {
          name: "Prekshya Joshi",
          artist: "S.S.B Lucky 7",
          cover: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/5.png",
          source: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/Dekhha-Tenu.mp3",
          url: "https://mediumturquoise-quail-576076.hostingersite.com/wp-content/uploads/2024/07/Dekhha-Tenu.mp3",
          favorited: true
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

