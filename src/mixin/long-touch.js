import debounce from '../utils/debounce'
import { mapMutations } from 'vuex'
var longTouch = {
  data() {
    return {
      timerId: 0,
      isLongClick: false,
      isMoved: false,
      startCB: null,
      endCB: null,
    };
  },
  methods: {
    ...mapMutations(["addSong", "setSong", "play", "pause", "removeSong"]),
    // 利用计时器来设置长按，长按只添加入列表而不播放
    start(e) {
      this.timerId = setTimeout(() => {
        this.isLongClick = true;

        // 提交 mutations 添加歌曲
        this.addSong({
          name: e.target.dataset.name,
          author: e.target.dataset.author,
          id: e.target.dataset.id,
          coverurl: e.target.dataset.coverurl,
        });

        console.log("长按500ms", e.target.dataset.id);
      }, 500);
    },
    // 如果是move事件，则取消掉短按长按
    move() {
      clearTimeout(this.timerId);
      this.isMoved = true;
    },
    // 只有当既不是长按也不是移动 才是短按
    end(e) {
      clearTimeout(this.timerId);
      if (!this.isLongClick && !this.isMoved) {
        this.pause();
        let song = {
          name: e.target.dataset.name,
          author: e.target.dataset.author,
          coverurl: e.target.dataset.coverurl,
          id: e.target.dataset.id,
        };
        this.setSong(song);

      }

      this.isLongClick = false;
      this.isMoved = false;
    },
  },

  created() {
    this.startCB = debounce.call(this, this.start, 200);
    this.endCB = debounce.call(this, this.end, 200);
  },
}

export default longTouch