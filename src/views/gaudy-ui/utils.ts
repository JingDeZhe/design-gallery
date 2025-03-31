/**
 * 将数字转换为大写中文（非金额，纯数字）
 * @param num 要转换的数字（支持整数和小数，最多两位小数）
 * @returns 大写中文表示
 */
export const numberToChinese = (num: number | string) => {
  num = Number(num)
  if (isNaN(num)) {
    return '非数字'
  }

  // 中文数字字符
  const digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const units = ['', '拾', '佰', '仟']
  const bigUnits = ['', '万', '亿', '兆']

  // 处理负数
  let isNegative = false
  if (num < 0) {
    isNegative = true
    num = -num
  }

  // 分离整数和小数部分
  const integerPart = Math.floor(num)
  const decimalPart = Math.round((num - integerPart) * 100)

  // 处理整数部分
  let integerStr = ''
  if (integerPart === 0) {
    integerStr = '零'
  } else {
    let tempStr = ''
    let zeroFlag = false
    let bigUnitIndex = 0

    let remaining = integerPart
    while (remaining > 0) {
      const section = remaining % 10000
      remaining = Math.floor(remaining / 10000)

      let sectionStr = ''
      if (section === 0) {
        zeroFlag = true
      } else {
        if (zeroFlag) {
          sectionStr = '零' + sectionStr
          zeroFlag = false
        }

        let secRemaining = section
        for (let i = 0; i < 4 && secRemaining > 0; i++) {
          const digit = secRemaining % 10
          secRemaining = Math.floor(secRemaining / 10)
          if (digit === 0) {
            if (!sectionStr.startsWith('零')) {
              sectionStr = '零' + sectionStr
            }
          } else {
            sectionStr = digits[digit] + units[i] + sectionStr
          }
        }

        sectionStr += bigUnits[bigUnitIndex]
      }

      tempStr = sectionStr + tempStr
      bigUnitIndex++
    }

    integerStr = tempStr
  }

  // 处理小数部分（纯数字，不添加"角"、"分"单位）
  let decimalStr = ''
  if (decimalPart > 0) {
    decimalStr = '点'
    const jiao = Math.floor(decimalPart / 10)
    const fen = decimalPart % 10

    if (jiao > 0) {
      decimalStr += digits[jiao]
    }
    if (fen > 0) {
      decimalStr += digits[fen]
    }
  }

  // 组合结果
  let result = ''
  if (isNegative) {
    result += '负'
  }
  result += integerStr
  result += decimalStr

  // 处理连续的零
  result = result.replace(/零+/g, '零')
  if (result.length > 1) result = result.replace(/零$/, '') // 去除末尾的零

  return result
}
