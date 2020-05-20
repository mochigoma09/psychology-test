import seed from "./assets/seed.json"
import _ from 'lodash'

export default {
    methods: {
        /**
         * 改行を<br>に変換します。
         * @param {string} s 変換する文字列
         * @return {string} 変換後の文字列
         */
        nl2br: function (s) {
            return s.replace(/\\n/g, "<br/>");
        },
        getSeedAll: function () {
            return seed;
        },
        getSeedQue: function (i) {
            return _.filter(seed, { id: i })[0]
        },
        getSeedAns: function (queId, ansId) {
            let ans = this.getSeedQue(queId).anser;
            return _.filter(ans, { id: ansId })[0];
        }
    }
}