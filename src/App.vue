<template>
  <div>
    第一个组件
    <input v-model="num" @change="fn" />
    {{fieldName.OneBillion}}
    {{fieldName.Billion}}
    {{fieldName.Must}}
    {{fieldName.Million}}
    {{fieldName.HundredThousandBit}}
    {{fieldName.TenThousandBit}}
    {{fieldName.ThousandBit}}
    {{fieldName.HundredBit}}
    {{fieldName.TenPlace}}
    {{fieldName.Bit}}
    {{fieldName.horn}}{{fieldName.branch}}
    {{fieldName.chineseStr}}
    <router-view />
  </div>
</template>
<script>
import { defaultCoreCipherList, defaultCipherList } from "constants";
import {numConversion} from '~/util/util'
export default {
  data() {
      let that = this
      that.numConversion = numConversion
    return {
      num: "",
      str: "",
      fieldName: {
        Bit: "",
        TenPlace: "",
        HundredBit: "",
        ThousandBit: "",
        TenThousandBit: "",
        HundredThousandBit: "",
        Million: "",
        Must: "",
        Billion: "",
        OneBillion: '',
        horn:'',
        branch:'',
        inside:'',
        chineseStr:'',
        millimeter:''
      }
    };
  },
  methods: {
    fn() {
        let obj = this.numConversion(this.num) || {}
        this.fieldName = {...obj}
    //     this.fieldName = {
    //     Bit: "",
    //     TenPlace: "",
    //     HundredBit: "",
    //     ThousandBit: "",
    //     TenThousandBit: "",
    //     HundredThousandBit: "",
    //     Million: "",
    //     Must: "",
    //     Billion: "",
    //     OneBillion:''
    //   };
    //   let num = this.num;
    //   this.numFn(num);
    //   if (!num) return;
    //   if (typeof num !== "number" && +num != num) return;
    //   let numStr = num.toString(),
    //     integer = "",
    //     decimal = "";
    //   if (numStr.indexOf(".") == -1) {
    //     integer = numStr;
    //     decimal = "";
    //   } else {
    //     let parts = numStr.split(".");
    //     integer = parts[0];
    //     decimal = parts[1].substr(0, 2);
    //   }
    //   //整数部分
    //   //最大支持九尾数字
    //   let arrNum = integer.substr(0, 9).split("").reverse()
    //   let keyArr = Object.keys(this.fieldName);
    //   arrNum.forEach((v, i) => {
    //     this.fieldName[keyArr[i]] = v;
    //   });
    //   //小数部分
    //   if (decimal && decimal.split("").length) {
    //     let arr = decimal.split("");
    //     this.fieldName.horn = arr[0] ? arr[0] : 0;
    //     this.fieldName.branch = arr[1] ? arr[1] : 0;
    //   }
    },
    // numFn(money) {
    //   this.str = ""
    //   if (!money) return;
    //   if (typeof money !== "number" && +money != money) return;
    //   //汉字的数字
    //   let cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    //   //基本单位
    //   let cnIntRadice = ["", "拾", "佰", "仟"];
    //   //对应整数部分扩展单位
    //   let cnIntUnits = ["", "万", "亿", "兆"];
    //   //对应小数部分单位
    //   let cnDecUnits = ["角", "分", "毫", "厘"];
    //   //整数金额时后面跟的字符
    //   let cnInteger = "整";
    //   //整型完以后的单位
    //   let cnIntLast = "元";
    //   //最大处理的数字
    //   let maxNum = 999999999999999.9999;
    //   //金额整数部分
    //   let integerNum;
    //   //金额小数部分
    //   let decimalNum;
    //   //输出的中文金额字符串
    //   let chineseStr = "";
    //   //分离金额后用的数组，预定义
    //   let parts;
    //   if (money == "") {
    //     this.str = "";
    //   }
    //   money = parseFloat(money);
    //   if (money >= maxNum) {
    //     //超出最大处理数字
    //     this.str = "";
    //   }
    //   if (money == 0) {
    //     chineseStr = cnNums[0] + cnIntLast + cnInteger;
    //     return chineseStr;
    //   }
    //   //转换为字符串
    //   money = money.toString();
    //   if (money.indexOf(".") == -1) {
    //     integerNum = money;
    //     decimalNum = "";
    //   } else {
    //     parts = money.split(".");
    //     integerNum = parts[0];
    //     decimalNum = parts[1].substr(0, 4);
    //   }
    //   //获取整型部分转换
    //   if (parseInt(integerNum, 10) > 0) {
    //     let zeroCount = 0;
    //     let IntLen = integerNum.length;
    //     for (let i = 0; i < IntLen; i++) {
    //       let n = integerNum.substr(i, 1);
    //       let p = IntLen - i - 1;
    //       let q = p / 4;
    //       let m = p % 4;
    //       if (n == "0") {
    //         zeroCount++;
    //       } else {
    //         if (zeroCount > 0) {
    //           chineseStr += cnNums[0];
    //         }
    //         //归零
    //         zeroCount = 0;
    //         // eslint-disable-next-line
    //         chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
    //       }
    //       if (m == 0 && zeroCount < 4) {
    //         chineseStr += cnIntUnits[q];
    //       }
    //     }
    //     chineseStr += cnIntLast;
    //   }
    //   //小数部分
    //   if (decimalNum != "") {
    //     let decLen = decimalNum.length;
    //     for (let i = 0; i < decLen; i++) {
    //       let n = decimalNum.substr(i, 1);
    //       if (n != "0") {
    //         chineseStr += cnNums[Number(n)] + cnDecUnits[i];
    //       }
    //     }
    //   }
    //   if (chineseStr == "") {
    //     chineseStr += cnNums[0] + cnIntLast + cnInteger;
    //   } else if (decimalNum == "") {
    //     chineseStr += cnInteger;
    //   }
    //   this.str = chineseStr;
    // }
  }
};
</script>