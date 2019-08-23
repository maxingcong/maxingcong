export const chineseCharactersFn = function (money, length) {
    if (!money) return;
    if (typeof money !== "number" && +money != money) return;
    //汉字的数字
    let cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    //基本单位
    let cnIntRadice = ["", "拾", "佰", "仟"];
    //对应整数部分扩展单位
    let cnIntUnits = ["", "万", "亿", "兆"];
    //对应小数部分单位
    let cnDecUnits = ["角", "分", "毫", "厘"];
    //整数金额时后面跟的字符
    let cnInteger = "整";
    //整型完以后的单位
    let cnIntLast = "元";
    //最大处理的数字
    let maxNum = 999999999999999.9999;
    //金额整数部分
    let integerNum;
    //金额小数部分
    let decimalNum;
    //输出的中文金额字符串
    let chineseStr = "";
    //分离金额后用的数组，预定义
    let parts;
    if (money == "") {
        return "";
    }
    money = parseFloat(money);
    if (money >= maxNum) {
        //超出最大处理数字
        return "";
    }
    if (money == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf(".") == -1) {
        integerNum = money;
        decimalNum = "";
    } else {
        parts = money.split(".");
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
        let zeroCount = 0;
        let IntLen = integerNum.length;
        for (let i = 0; i < IntLen; i++) {
            let n = integerNum.substr(i, 1);
            let p = IntLen - i - 1;
            let q = p / 4;
            let m = p % 4;
            if (n == "0") {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                //归零
                zeroCount = 0;
                // eslint-disable-next-line
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
        chineseStr += cnIntLast;
    }
    //小数部分
    if (decimalNum != "") {
        let decLen = decimalNum.length;
        for (let i = 0; i < decLen; i++) {
            let n = decimalNum.substr(i, 1);
            if (n != "0") {
                chineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
        }
    }
    if (chineseStr == "") {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == "") {
        chineseStr += cnInteger;
    }
    return chineseStr;
}

/***
 *  @param {Object} data 需要转换对象 * 
 *  @param {Number} data 需要转换的数字 * 
 *  @returns {Object} 
 *  Bit 个
    TenPlace 十
    HundredBit 百
    ThousandBit 千
    TenThousandBit 万
    HundredThousandBit 十万
    Million 百万
    Must:  千万
    Billion  亿
    OneBillion  十亿
    horn 角
    branch 分
    inside 里
    millimeter 毫
    chineseStr 中文数字
 * 
 * 
 *  */
export const numConversion = function (data) {
    debugger
    data = {
        Bit: 1,
        TenPlace: 2,
        HundredBit: 3,
        ThousandBit: 4,
        TenThousandBit: 5,
        HundredThousandBit: 6,
        Million: 7,
        Must: 8,
        Billion: 9,
        OneBillion: 0,
        horn: 1,
        branch: 2
    }
    //整数部分字段
    let fieldName = {
        Bit: "",
        TenPlace: "",
        HundredBit: "",
        ThousandBit: "",
        TenThousandBit: "",
        HundredThousandBit: "",
        Million: "",
        Must: "",
        Billion: "",
        OneBillion: ''
    },
        num = '',
        chineseStr = ''
    if (!data) return;
    if (typeof data == 'object' && data && Object.keys(data).length) {
        let fieldkeyList = Object.keys(fieldName).reverse(),
            ObjectStr = ''
        fieldkeyList.forEach((v) => {
            ObjectStr += '' + data[v]
        })
        ObjectStr += ('.' + (data['horn'] ? data['horn'] : 0))
        ObjectStr += data['branch'] ? data['branch'] : 0
        num = +ObjectStr
    } else {
        num = data || ''
    }

    chineseStr = chineseCharactersFn(num);

    if (typeof num !== "number" && +num != num) {
        return
    }
    let numStr = num.toString(),
        integer = "",
        decimal = "";
    if (numStr.indexOf(".") == -1) {
        integer = numStr;
        decimal = "";
    } else {
        let parts = numStr.split(".");
        integer = parts[0];
        decimal = parts[1].substr(0, 2);
    }
    //整数部分
    //最大支持 99 9999 9999.9999
    let arrNum = integer.split("").reverse().slice(0, 10)
    let keyArr = Object.keys(fieldName);
    arrNum.forEach((v, i) => {
        fieldName[keyArr[i]] = v;
    });
    //小数部分
    if (decimal && decimal.split("").length) {
        let arr = decimal.split("");
        fieldName.horn = arr[0] ? arr[0] : '';
        fieldName.branch = arr[1] ? arr[1] : '';
        fieldName.inside = arr[2] ? arr[2] : '';
        fieldName.millimeter = arr[3] ? arr[3] : '';
    }
    fieldName.chineseStr = chineseStr || ''
    return Object.assign({}, fieldName)
}