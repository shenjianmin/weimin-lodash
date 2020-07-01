(function (window) {
    // 将数组分割成若干个数组
    // array 原数组
    // size 每个数组的长度，不传默认为1
    let chunk = (array, size = 1) => {
        if (size <= 0) {
            return []
        } else {
            let arr = []
            do {
                let arr1 = array.splice(size)
                arr.push(array)
                array = arr1
            } while (array.length)
            return arr
        }
    }
    // 将数组中的false值去除
    let compact = (array) => {
        let arr = []
        for (let i = 0; i < array.length; i++) {
            if (array[i]) {
                arr.push(array[i])
            }
        }
        return arr
    }
    // 将数组与其他数值和数组连接
    let concat = function (array, ...values) {
        for (let i = 0; i < values.length; i++) {
            if (this.isArray(values[i])) {
                for (let j = 0; j < values[i].length; j++) {
                    array.push(values[i][j])
                }
            } else {
                array.push(values[i])
            }
        }
        return array
    }
    // 从原数组中的某个位置开始到末尾，截取出新的数组
    // array 原数组
    // n 截取的起始位置，默认为1
    let drop = (array, n = 1) => {
        let arr = []
        for (let i = n; i < array.length; i++) {
            arr.push(array[i])
        }
        return arr
    }
    // 从原数组中反方向的某个位置开始到起始，截取出新的数组
    // array 原数组
    // n 截取的起始位置，默认为1
    let dropRight = (array, n = 1) => {
        let arr = []
        for (let i = 0; i < (array.length - n); i++) {
            arr.push(array[i])
        }
        return arr
    }
    // 通过迭代器从左往右对每个元素进行判断，当返回false时开始截取
    // array 原数组
    // predicate 迭代器
    let dropWhile = function (array, predicate = this.identity) {
        let arr = []
        let count
        for (let key in array) {
            if (!this.iteratee(predicate)(array[key])) {
                count = key
                break
            }
        }
        for (let i = count; i < array.length; i++) {
            arr.push(array[i])
        }
        return arr
    }
    // 和dropWhile类似，只不过顺序是从右往左
    // array 原数组
    // predicate 迭代器
    let dropRightWhile = function (array, predicate = this.identity) {
        let arr = []
        let count
        for (let i = array.length - 1; i >= 0; i--) {
            if (!this.iteratee(predicate)(array[i])) {
                count = i
                break
            }
        }
        for (let i = 0; i <= count; i++) {
            arr.push(array[i])
        }
        return arr
    }
    // 判断传的参数是否是数组
    let isArray = (value) => {
        return toString.call(value) === "[object Array]"
    }
    // 判断传的参数是否是字符串
    let isString = (value) => {
        return toString.call(value) === "[object String]"
    }
    // 根据指定位置替换数组的成员
    // array 原数组
    // value 要替换成的参数
    // start 所指定的首位置
    // end 所指定的末尾位置
    let fill = function (array, value, start = 0, end = array.length) {
        for (let i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }
    // 对数组的每个成员从左往右顺序进行判断，返回第一次返回true的元素的索引
    // array 原数组
    // predicate 判断函数
    // fromIndex 开始要判断的位置
    let findIndex = function (array, predicate = this.identity, fromIndex = 0) {
        for (let i = fromIndex; i < array.length; i++) {
            if (this.iteratee(predicate)(array[i])) {
                return i
            }
        }
        return -1
    }
    // 与findIndex类似，只不过顺序是从右往左
    // array 原数组
    // predicate 判断函数
    // fromIndex 开始要判断的位置
    let findLastIndex = function (array, predicate = this.identity, fromIndex = array.length - 1) {
        for (let i = fromIndex; i >= 0; i--) {
            if (this.iteratee(predicate)(array[i])) {
                return i
            }
        }
        return -1
    }
    // 将数组降一维
    let flatten = function (array) {
        let arr = []
        for (let i = 0; i < array.length; i++) {
            if (!this.isArray(array[i])) {
                arr.push(array[i])
            } else {
                for (let j = 0; j < array[i].length; j++) {
                    arr.push(array[i][j])
                }
            }
        }
        return arr
    }
    // 将数组降成一维数组
    let flattenDeep = function (array) {
        let arr = this.flatten(array)
        let onOff = true
        for (let i = 0; i < arr.length; i++) {
            if (this.isArray(array[i])) {
                onOff = false
                break
            }
        }
        if (!onOff) {
            arr = this.flattenDeep(arr)
        }
        return arr
    }
    // 将数组降成指定维数的数组
    let flattenDepth = function (array, depth = 1) {
        let arr = array
        for (let i = 0; i < depth; i++) {
            arr = this.flatten(arr)
        }
        return arr
    }
    // 将二维数组转换为对象
    let fromPairs = function (pairs) {
        return pairs.reduce(function (m, n) {
            m[n[0]] = n[1]
            return m
        }, {})
    }
    // 获取数组的首项
    let head = (array) => {
        return array[0]
    }
    // 获取数组中某个成员的位置
    // array 原数组
    // value 所要获取位置的成员
    // fromIndex 搜寻的起始位置，默认为0
    let indexOf = (array, value, fromIndex = 0) => {
        if (fromIndex >= 0) {
            for (let i = fromIndex; i < array.length; i++) {
                if (array[i] === value) {
                    return i
                }
            }
        } else {
            for (let i = array.length + fromIndex; i >= 0; i--) {
                if (array[i] === value) {
                    return i
                }
            }
        }
        return -1
    }
    // 从原数组中剔除最后一项
    let initial = (array) => {
        let arr = []
        for (let i = 0; i < array.length - 1; i++) {
            arr.push(array[i])
        }
        return arr
    }
    // 通过迭代器，返回其他数组都包含的原数组成员
    let intersectionBy = function (...arrays) {
        let iteratee
        if (this.isArray(arrays[arrays.length - 1])) {
            iteratee = this.identity
        } else {
            iteratee = arrays.pop()
        }
        let arr = this.drop(arrays)
        let that = this
        return this.reduce(arrays[0], function (m, n) {
            let onOff = that.reduce(arr, function (p, q) {
                let temp = that.map(q, function (it) {
                    return that.iteratee(iteratee)(it)
                })
                if (!that.includes(temp, that.iteratee(iteratee)(n))) {
                    p = false
                }
                return p
            }, true)
            if (onOff) {
                m.push(n)
            }
            return m
        }, [])
    }
    // 返回其他数组都包含的原数组成员
    let intersection = function (...arrays) {
        return this.intersectionBy(...arrays)
    }
    // 与intersection类似，比较方式可以自定义
    let intersectionWith = function (...arrays) {
        let iteratee = arrays.pop()
        let that = this
        let arr = this.drop(arrays)
        return this.reduce(arrays[0], function (m, n) {
            let onOff = that.reduce(arr, function (p, q) {
                for (let key in q) {
                    if (iteratee.call(that, n, q[key])) {
                        p = true
                    }
                }
                return p
            }, false)
            if (onOff) {
                m.push(n)
            }
            return m
        }, [])
    }
    // 将数组中的所有元素转换为分隔符分隔的字符串
    // array 要转换的数组
    // separator 分隔符
    let join = function (array, separator = ',') {
        return this.reduce(array, function (m, n, index, arr) {
            if (index == arr.length - 1) {
                m += n
            } else {
                m += n + separator
            }
            return m
        }, '')
    }
    // 获取数组中的最后一项
    let last = (array) => {
        let arr = array[array.length - 1]
        return arr
    }
    // 从右往左搜索数组，找到第一个与给定参数相同的位置
    // array 原数组
    // value 所要检索的给定值
    // fromIndex 所要检索的初始位置
    let lastIndexOf = (array, value, fromIndex = array.length - 1) => {
        for (let i = fromIndex; i >= 0; i--) {
            if (array[i] === value) {
                return i
            }
        }
        return -1
    }
    // 获取某一指定位置的成员
    let nth = (array, n = 0) => {
        let str
        if (n >= 0) {
            str = array[n]
        } else {
            str = array[array.length + n]
        }
        return str
    }
    // 通过迭代器从给定数组中剔除所有指定的值
    // array 要修改的数组 
    // values 要移除的值
    // iteratee 迭代器
    let pullAllBy = function (array, values, iteratee = this.identity) {
        let that = this
        this.forEach(values, function (a) {
            for (let i = 0; i < array.length; i++) {
                if (that.isEqual(that.iteratee(iteratee)(a), that.iteratee(iteratee)(array[i]))) {
                    array.splice(i, 1)
                    i--
                }
            }
        })
        return array
    }
    // 从给定数组中剔除所有指定的值
    // array 要修改的数组 
    // values 要移除的值
    let pull = function (array, ...values) {
        return this.pullAllBy(array, values)
    }
    // 从给定数组中剔除指定数组中的所有值
    // array 要修改的数组 
    // values 要移除的值
    let pullAll = function (array, values) {
        return this.pullAllBy(array, values)
    }
    // 和pullAllBy类似，但是自定义比较函数
    // array 要修改的数组 
    // values 要移除的值
    // comparator 比较函数
    let pullAllWith = function (array, values, comparator) {
        let that = this
        this.forEach(values, function (a) {
            for (let i = 0; i < array.length; i++) {
                if (comparator.call(that, a, array[i])) {
                    array.splice(i, 1)
                    i--
                }
            }
        })
        return array
    }
    // 从数组中移除对应于索引的元素，并返回移除元素数组
    // array 要修改的数组 
    // indexes 索引
    let pullAt = function (array, ...indexes) {
        let arr = []
        let index = this.flatten(indexes)
        for (let i in index) {
            arr.push(array[index[i]])
        }
        index = index.sort((a, b) => {
            return b - a
        })
        for (let i in index) {
            array.splice(index[i], 1)
        }
        return arr
    }
    // 返回接收的第一个参数
    let identity = (...theArgs) => {
        return theArgs[0]
    }
    // 通过方法返回的结果，来移除数组里的部分成员
    let remove = function (array, predicate = this.identity) {
        let arr = []
        for (let i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
                arr.push(array[i])
                array.splice(i, 1)
                i--
            }
        }
        return arr
    }
    // 反转数组，使第一个元素成为最后一个元素，第二个元素变成第二个元素，等等
    let reverse = (array) => {
        let arr = []
        for (let i = array.length - 1; i >= 0; i--) {
            arr.push(array[i])
        }
        return arr
    }
    // 通过首尾位置从原数组中创造出新的数组
    // array 原数组
    // start 首位置，默认为0
    // end 末尾位置，默认为原数组的长度
    let slice = (array, start = 0, end = array.length) => {
        let arr = []
        for (let i = start; i < end; i++) {
            arr.push(array[i])
        }
        return arr
    }
    // 通过迭代检索，在最低索引出插入指定值能使原数组的顺序保存不变则返回这个索引值
    // array 被检索的数组
    // value 指定的值
    // iteratee 迭代器
    let sortedIndexBy = function (array, value, iteratee = this.identity) {
        let i = 0
        for (; i < array.length; i++) {
            if (this.iteratee(iteratee)(value) <= this.iteratee(iteratee)(array[i])) {
                break
            }
        }
        return i
    }
    // 在最低索引出插入指定值能使原数组的顺序保存不变则返回这个索引值
    // array 被检索的数组
    // value 指定的值
    let sortedIndex = function (array, value) {
        return this.sortedIndexBy(array, value)
    }
    // 返回第一个匹配到指定值的索引
    // array 被检索的数组
    // value 指定的值
    let sortedIndexOf = function (array, value) {
        let i = 0
        for (; i < array.length; i++) {
            if (value == array[i]) {
                break
            }
        }
        return i
    }
    // 与sortedIndexBy类似，但检索顺序是从右往左
    // array 被检索的数组
    // value 指定的值
    // iteratee 迭代器
    let = sortedLastIndexBy = function (array, value, iteratee = this.identity) {
        let i = array.length - 1
        for (; i >= 0; i--) {
            if (this.iteratee(iteratee)(value) >= this.iteratee(iteratee)(array[i])) {
                break
            }
        }
        return i + 1
    }
    // 与sortedIndex类似，但检索顺序是从右往左
    // array 被检索的数组
    // value 指定的值
    let sortedLastIndex = function (array, value) {
        return this.sortedLastIndexBy(array, value)
    }
    // 与sortedIndexOf类似，但检索顺序是从右往左
    // array 被检索的数组
    // value 指定的值
    let sortedLastIndexOf = function (array, value) {
        let i = array.length - 1
        for (; i >= 0; i--) {
            if (value == array[i]) {
                break
            }
        }
        return i
    }
    // 剔除数组的第一项
    let tail = (array) => {
        let arr = []
        for (let i = 1; i < array.length; i++) {
            arr.push(array[i])
        }
        return arr
    }
    // 从第一项开始按顺序获取一定数量的成员
    // array 原数组
    // n 获取的数量，默认为1
    let take = (array, n = 1) => {
        let arr = []
        for (let i = 0; i < n; i++) {
            if (array[i]) {
                arr.push(array[i])
            } else {
                break
            }
        }
        return arr
    }
    // 从最后一项开始按顺序获取一定数量的成员
    // array 原数组
    // n 获取的数量，默认为1
    let takeRight = (array, n = 1) => {
        let arr = []
        if (array.length <= n) {
            arr = array
        } else {
            for (let i = array.length - n; i < array.length; i++) {
                arr.push(array[i])
            }
        }
        return arr
    }
    // 通过迭代器按顺序获取数据，如果判断结果为false立即返回数组
    // array 原数组
    // predicate 迭代器
    let takeWhile = function (array, predicate = this.identity) {
        let arr = []
        for (let i in array) {
            if (this.iteratee(predicate)(array[i], i, array) === false) {
                return arr
            }
            arr.push(array[i])
        }
        return arr
    }
    // 与takeWhile类似，但迭代顺序是从右往左
    // array 原数组
    // predicate 迭代器
    let takeRightWhile = function (array, predicate = this.identity) {
        let arr = []
        for (let i = array.length - 1; i >= 0; i--) {
            if (this.iteratee(predicate)(array[i], i, array) === false) {
                return arr
            }
            arr.unshift(array[i])
        }
        return arr
    }
    // 将所传的数组合并，并且去重
    let union = function (...theArgs) {
        let that = this
        let arr = Array.from(new Set(that.flatten(theArgs)))
        return arr
    }
    // 将所传的数组合并，并用迭代器迭代，最后去重返回数组
    // arrays 原数组
    // iteratee 迭代器
    let unionBy = function (...arrays) {
        let iteratee
        if (this.isArray(arrays[arrays.length - 1])) {
            iteratee = this.identity
        } else {
            iteratee = arrays.pop()
        }
        let that = this
        let arr = this.flatten(arrays)
        return arr.map(function (it) {
            return that.iteratee(iteratee)(it)
        }).reduce(function (m, n, i) {
            let onOff = that.reduce(m, function (p, q) {
                if (that.isEqual(that.iteratee(iteratee)(q), n)) {
                    p = false
                }
                return p
            }, true)
            if (onOff) {
                m.push(arr[i])
            }
            return m
        }, [])
    }
    // 与unionBy类似，但自定义比较函数
    let unionWith = function (...arrays) {
        let comparator = arrays.pop()
        let arr = this.flatten(arrays)
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (comparator.call(this, arr[i], arr[j])) {
                    arr.splice(j, 1)
                }
            }
        }
        return arr
    }
    // 对数组进行去重
    let uniq = (array) => {
        return Array.from(new Set(array))
    }
    // 通过迭代器返回的结果对数组进行去重
    // array 原数组
    // iteratee 迭代器
    let uniqBy = function (array, iteratee = this.identity) {
        let that = this
        return this.reduce(array, function (m, n) {
            for (let i in m) {
                if (that.isEqual(that.iteratee(iteratee)(n), that.iteratee(iteratee)(m[i]))) {
                    return m
                }
            }
            m.push(n)
            return m
        }, [])
    }
    // 与uniqBy类似，但是自定义比较函数
    // array 原数组
    // comparator 比较函数
    let uniqWith = function (array, comparator) {
        let that = this
        return this.reduce(array, function (m, n) {
            for (let i in m) {
                if (comparator.call(that, n, m[i])) {
                    return m
                }
            }
            m.push(n)
            return m
        }, [])
    }
    // 对各个数组进行分组，比如各个数组的第一项都归为第一个新建数组里
    let zip = (...theArgs) => {
        let arr = []
        let longest = theArgs[0].length
        for (let l = 0; l < theArgs.length; l++) {
            if (theArgs[l].length > longest) {
                longest = theArgs[l].length
            }
        }
        for (let i = 0; i < longest; i++) {
            arr.push([theArgs[0][i]])
        }
        for (let j = 1; j < theArgs.length; j++) {
            for (let k = 0; k < longest; k++) {
                arr[k].push(theArgs[j][k])
            }
        }
        return arr
    }
    // 类似zip，只是相对于将已经经过zip的数组回复到之前的状态，但是都放在一个数组里
    let unzip = function (array) {
        return this.zip(...array)
    }
    // 通过迭代器来解压数组
    let unzipWith = function (array, iteratee = this.identity) {
        let arr = this.zip(...array)
        return this.map(arr, (it) => this.iteratee(iteratee)(...it))
    }
    // 将数组内与所给定的相同的值删掉
    let without = function (array, ...values) {
        let that = this
        return this.reduce(values, function (m, n) {
            for (let i = 0; i < m.length; i++) {
                if (that.isEqual(m[i], n)) {
                    m.splice(i, 1)
                    i--
                }
            }
            return m
        }, array)
    }
    // 创建一个数组，数组中的成员只能出现一次
    let xor = function (...arrays) {
        let arr = this.flatten(arrays)
        let onOff = false
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1)
                    j--
                    onOff = true
                }
                if (onOff && j === arr.length - 1) {
                    arr.splice(i, 1)
                    i--
                    onOff = false
                }
            }
        }
        return arr
    }
    // 与xor类似，只不过先要用迭代器迭代再判断
    let xorBy = function (...arrays) {
        let iteratee = arrays.pop()
        let arr = this.flatten(arrays)
        let onOff = false
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (this.iteratee(iteratee)(arr[i]) === this.iteratee(iteratee)(arr[j])) {
                    arr.splice(j, 1)
                    j--
                    onOff = true
                }
                if (onOff && j === arr.length - 1) {
                    arr.splice(i, 1)
                    i--
                    onOff = false
                }
            }
        }
        return arr
    }
    // 与xor类似，只不过自定义判断函数
    let xorWith = function (...arrays) {
        let comparator = arrays.pop()
        let arr = this.flatten(arrays)
        let onOff = false
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (comparator.call(this, arr[i], arr[j])) {
                    arr.splice(j, 1)
                    j--
                    onOff = true
                }
                if (onOff && j === arr.length - 1) {
                    arr.splice(i, 1)
                    i--
                    onOff = false
                }
            }
        }
        return arr
    }
    // 将参数压缩成对象
    // props 键
    // values 值
    let zipObject = function (props, values) {
        return this.reduce(props, function (m, n, i) {
            m[n] = values[i]
            return m
        }, {})
    }
    // 根据路径，将参赛压缩成对象
    // props 路径
    // values 值
    let zipObjectDeep = function (props = [], values = []) {
        let that = this
        let route = this.map(props, it => it.match(/\w+/g))
        let result = {}
        for (let i in route) {
            handle(route[i], result, values[i])
        }
        return result
        function handle(path, obj, value) {
            let key = path.shift()
            if (path.length === 0) {
                obj[key] = value
                return obj
            }
            if (obj[key]) {
                handle(path, obj[key], value)
            } else if (that.isNaN(+path[0])) {
                obj[key] = {}
                handle(path, obj[key], value)
            } else {
                obj[key] = []
                handle(path, obj[key], value)
            }
            return obj
        }
    }
    // 根据迭代器压缩数组
    let zipWith = function (...arrays) {
        let iteratee
        if (this.isArray(arrays[arrays.length - 1])) {
            iteratee = this.identity
        } else {
            iteratee = arrays.pop()
        }
        let arr = this.zip(...arrays)
        return this.map(arr, it => iteratee(...it))
    }
    // 返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数
    let now = () => {
        return Date.now()
    }
    // 约束一个函数在调用n次后才开始执行
    // n 调用的次数
    // func 最后要调用的函数
    let after = (n, func) => {
        let count = 0
        return function (...theArgs) {
            count++
            if (count >= n) {
                return func(...theArgs)
            }
        }
    }
    // 限制要调用的函数的参数的数量
    // func 要调用的函数
    // n 要限制的数量
    let ary = (func, n = func.length) => {
        return function (...theArgs) {
            theArgs.length = n
            return func(...theArgs)
        }
    }
    // 限制一个函数要调用的次数
    // n 要限制的次数
    // func 要调用的函数
    let before = (n, func) => {
        let count = 0
        let result
        return function (...theArgs) {
            count++
            if (count <= n) {
                result = func(...theArgs)
            }
            return result
        }
    }
    // 绑定this和部分参数给被调用函数
    // func 被绑定的函数
    // thisArg 要绑定到的环境
    // partials 被绑定的参数
    let bind = function (func, thisArg, ...partials) {
        let that = this
        return function (...args) {
            partials = that.map(partials, function (it) {
                if (it === _) {
                    it = args.shift()
                }
                return it
            })
            return func.call(thisArg, ...partials, ...args)
        }
    }
    // 返回一个函数，调用对象的方法
    // object 原对象
    // key 方法名
    // partials 被绑定的参数
    let bindKey = function (object, key, ...partials) {
        let that = this
        return function (...args) {
            partials = that.map(partials, function (it) {
                if (it === _) {
                    it = args.shift()
                }
                return it
            })
            return object[key](...partials, ...args)
        }
    }
    // 将参数绑定
    // func 要绑定到的函数
    // partials 要绑定的参数
    let partial = function (func, ...partials) {
        let that = this
        return function (...args) {
            partials = that.map(partials, function (it) {
                if (it === _) {
                    return args.shift()
                } else {
                    return it
                }
            })
            return func.call(that, ...partials, ...args)
        }
    }
    // 将参数反向绑定
    // func 要绑定到的函数
    // partials 要绑定的参数
    let partialRight = function (func, ...partials) {
        let that = this
        return function (...args) {
            partials = that.map(partials, function (it) {
                if (it === _) {
                    return args.shift()
                } else {
                    return it
                }
            })
            return func.call(that, ...args, ...partials)
        }
    }
    // 柯里化函数
    // func 需要柯里化的函数
    // arity 所指定的参数
    let curry = function (func, arity = func.length) {
        let that = this
        return function cu(...args) {
            let count = 0
            for (let i = 0; i < args.length; i++) {
                if (args[i] === _) {
                    continue
                }
                count++
            }
            if (count < arity) {
                return that.partial(cu, ...args)
            } else {
                return func(...args)
            }
        }
    }
    // 反向柯里化
    // func 需要柯里化的函数
    // arity 所指定的参数
    let curryRight = function (func, arity = func.length) {
        let that = this
        return function cu(...args) {
            let count = 0
            for (let i = 0; i < args.length; i++) {
                if (args[i] === _) {
                    continue
                }
                count++
            }
            if (count < arity) {
                return that.partialRight(cu, ...args)
            } else {
                return func(...args)
            }
        }
    }
    // 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法
    // func 要防抖动的函数
    // wait  需要延迟的毫秒数
    // leading 指定在延迟开始前调用
    // maxWait 设置 func 允许被延迟的最大值
    // trailing 指定在延迟结束后调用
    let debounce = function (func, wait = 0, {
        leading = false,
        maxWait = 0,
        trailing = true
    } = {}) {
        let timer1, timer2, timeLast
        let firstInvoke = true
        return function (...args) {
            let timeNow = +new Date()
            clearTimeout(timer1)
            clearTimeout(timer2)
            if (!timeLast) {
                timeLast = timeNow
            }
            timer1 = setTimeout(function () {
                firstInvoke = true
            }, wait)
            if (leading && firstInvoke) {
                firstInvoke = false
                func(...args)
                timeLast = timeNow
                return
            }
            if (trailing) {
                timer2 = setTimeout(function () {
                    func(...args)
                    timeLast = timeNow
                    return
                }, wait)
            }
            let timeDiff = timeNow - timeLast
            if (maxWait !== 0) {
                if (maxWait > wait && timeDiff >= maxWait) {
                    func(...args)
                    timeLast = timeNow
                    return
                } else if (maxWait <= wait && timeDiff >= wait) {
                    func(...args)
                    timeLast = timeNow
                    return
                }
            }
        }
    }
    // 推迟调用函数直到当前调用栈已清除，并可以给该函数传参
    // func 要调用的函数
    // args 要传入的参数
    let defer = function (func, ...args) {
        return setTimeout(func.bind(this, ...args), 0)
    }
    // 延时调用函数
    // func 要调用的函数
    // wait 要延长的时间
    // args 要传入的参数
    let delay = function (func, wait, ...args) {
        return setTimeout(func.bind(this, ...args), wait)
    }
    // 返回一个函数，将传入的参数按相反的方向调用
    let flip = function (func) {
        let that = this
        return function (...args) {
            return func(...that.reverse(args))
        }
    }
    // 将对象的可枚举自有属性放入数组中返回
    let values = (object) => {
        let arr = []
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                arr.push(object[key])
            }
        }
        return arr
    }
    // 将对象的可枚举属性放入数组中返回
    let valuesIn = (object) => {
        let arr = []
        for (let key in object) {
            arr.push(object[key])
        }
        return arr
    }
    // 缓存结果，调用方法两次以上，直接返回缓存中的结果
    // func 要被缓存的函数
    // resolver 要缓存键名的方法
    let memoize = function (func, resolver) {
        let cache = new Map()
        let that = this
        return function memo(...args) {
            memo.cache = cache
            let key = (resolver ? resolver.call(that, ...args) : args[0])
            if (cache.has(key)) {
                return cache.get(key)
            } else {
                cache.set(key, func.call(that, ...args))
                return cache.get(key)
            }
        }
    }
    // 创建一个否定func结果的函数
    let negate = (predicate) => {
        return function (...args) {
            return !predicate(...args)
        }
    }
    // 创建一个仅限于调用func一次的函数，对函数的重复调用返回第一次调用的值
    let once = function (func) {
        return this.before(1, func)
    }
    // 创建一个函数，将参数按顺序依次调用transforms里的函数，再将结果调用到函数里执行
    // func 需要改变参数的函数
    // transforms 被参数调用的函数
    let overArgs = function (func, ...transforms) {
        let that = this
        return function (...args) {
            transforms = that.flatten(transforms)
            args.length = transforms.length
            transforms.map(function (it) {
                return transforms || that.identity
            })
            return func(...args.map(function (a, i) {
                return transforms[i](a)
            }))
        }
    }
    // 根据所传的indexes，重新对参数进行排序
    // func 用于重新排列参数的函数
    // indexes 排列的参数索引
    let rearg = function (func, ...indexes) {
        indexes = this.flatten(indexes)
        let that = this
        return function (...args) {
            let arr = indexes.map(function (it) {
                return args[it]
            })
            return func(...arr)
        }
    }
    // 创建一个函数，调用func时，this绑定到创建的新函数，并且start之后的参数作为数组传入
    // func 要应用的函数
    // start  rest参数的开始位置
    let rest = function (func, start = func.length - 1) {
        return function (...args) {
            let restArg = args.splice(start, args.length - start)
            return func(...args, restArg)
        }
    }
    // 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数
    // func 要节流的函数
    // wait 需要节流的毫秒
    // leading 指定在延迟开始前调用
    // trailing 指定在延迟结束后调用
    let throttle = function (func, wait = 0, {
        leading = true,
        trailing = true
    } = {}) {
        return this.debounce(func, wait, {
            leading,
            maxWait: wait,
            trailing
        })
    }
    // 创建一个函数，接受最多一个参数，忽略任何附加参数
    let unary = function (func) {
        return this.ary(func, 1)
    }
    // 为封装的函数提供封装后的结果
    // value 给封装函数所传的结果
    // wrapper 封装函数
    let wrap = function (value, wrapper = this.identity) {
        return this.bind(wrapper, this, value)
    }
    // 如果传入的值不是数组，则将该值转化为数组
    let castArray = function (value) {
        let arr = []
        if (this.isArray(value)) {
            return value
        } else if (arguments.length === 0) {
            return []
        } else {
            arr.push(value)
            return arr
        }
    }
    // 通过传入的方法来检测object的属性是否符合条件
    // object 要被检测的对象
    // source 检测的方法
    let conformsTo = function (object, source) {
        for (let key in source) {
            if (source[key](object[key])) {
                return true
            }
        }
        return false
    }
    // 判断一个值是否是NaN，除数字类型以为都返回false
    let isNaN = (value) => {
        if ((typeof value === 'number' || value instanceof Number) && +value !== +value) {
            return true
        }
        return false
    }
    // 创建一个浅层次的复制
    let clone = function (value) {
        let result
        if (this.isDate(value)) {
            return new Date(value.toString())
        } else if (this.isRegExp(value)) {
            return new RegExp(value)
        } else if (this.isSymbol(value) || this.isString(value) || this.isBoolean(value) || this.isNumber(value)) {
            return value
        } else if (this.isArray(value)) {
            result = new Array()
        } else if (this.isArrayBuffer(value)) {
            result = new ArrayBuffer()
        } else if (this.isMap(value)) {
            result = new Map()
        } else if (this.isPlainObject(value)) {
            result = new Object()
        } else if (this.isSet(value)) {
            result = new Set()
        } else {
            return {}
        }
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                result[key] = value[key]
            }
        }
        return result
    }
    // 这个方法类似_.clone，除了它会递归拷贝 value
    let cloneDeep = function (value) {
        let result
        if (this.isDate(value)) {
            return new Date(value.toString())
        } else if (this.isRegExp(value)) {
            return new RegExp(value)
        } else if (this.isSymbol(value) || this.isString(value) || this.isBoolean(value) || this.isNumber(value)) {
            return value
        } else if (this.isArray(value)) {
            result = new Array()
        } else if (this.isArrayBuffer(value)) {
            result = new ArrayBuffer()
        } else if (this.isMap(value)) {
            result = new Map()
        } else if (this.isPlainObject(value)) {
            result = new Object()
        } else if (this.isSet(value)) {
            result = new Set()
        } else {
            return {}
        }
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                result[key] = this.cloneDeep(value[key])
            }
        }
        return result
    }
    // 判断两个值是否相等
    let eq = function (value, other) {
        if (this.isNaN(value) && this.isNaN(other)) {
            return true
        }
        return value === other
    }
    // 判断一个值是否大于另一个值
    let gt = (value, other) => {
        return value > other
    }
    // 判断一个值是否大于等于另一个值
    let gte = (value, other) => {
        return value >= other
    }
    // 判断所传的值是否是Arguments对象
    let isArguments = (value) => {
        return toString.call(value) === '[object Arguments]'
    }
    // 判断所传的值是否是ArrayBuffer对象
    let isArrayBuffer = (value) => {
        return toString.call(value) === '[object ArrayBuffer]'
    }
    // 判断所传的值是否是类数组对象
    let isArrayLike = (value) => {
        return (typeof value === "object" || typeof value === "string") &&
            isFinite(value.length) &&
            Number.isFinite(value.length) &&
            value.length >= 0 &&
            value.length <= Number.MAX_SAFE_INTEGER
    }
    // 判断所传的值是否是类数组对象，不包括String
    let isArrayLikeObject = (value) => {
        return typeof value === "object" &&
            isFinite(value.length) &&
            Number.isFinite(value.length) &&
            value.length >= 0 &&
            value.length <= Number.MAX_SAFE_INTEGER
    }
    // 判断所传的值是否是布尔值
    let isBoolean = (value) => {
        return toString.call(value) === '[object Boolean]'
    }
    // 判断所传的值是否为Buffer
    let isBuffer = (value) => {
        return toString.call(value) === '[object Uint8Array]'
    }
    // 判断所传的值是否为日期对象
    let isDate = (value) => {
        return toString.call(value) === '[object Date]'
    }
    // 判断所传的值是否为DOM元素
    let isElement = (value) => {
        return /Element\]$/.test(toString.call(value))
    }
    // 判断所传的值是否为空对象
    let isEmpty = (value) => {
        if (value === null) {
            return true
        }
        if (value.length && value.length === 0) {
            return true
        } else if (Object.keys(value) && Object.keys(value).length === 0) {
            return true
        }
        return false
    }
    // 判断所传的值是否为error对象
    let isError = (value) => {
        return toString.call(value) === '[object Error]'
    }
    // 判断所传的值是否为有限数
    let isFinite = (value) => {
        return Number.isFinite(value)
    }
    // 判断所传的值是否为函数对象
    let isFunction = (value) => {
        return toString.call(value) === '[object Function]'
    }
    // 判断所传的值是否为整数
    let isInteger = (value) => {
        return Number.isInteger(value)
    }
    // 判断所传的值是否有length的属性值
    let isLength = function (value) {
        return this.isInteger(value) && 0 <= value && 4294967295 >= value
    }
    // 判断所传的值是否是Map对象
    let isMap = (value) => {
        return toString.call(value) === '[object Map]'
    }
    // 与isMatch类似，自定义比较函数
    // object 要检查的对象
    // source 匹配的对象
    // customizer 比较对象
    let isMatchWith = function (object, source, customizer = this.isEqual) {
        let that = this
        let arr = Object.entries(source)
        return arr.every(function (it) {
            return customizer.call(that, object[it[0]], it[1])
        })
    }
    // 将原对象和要匹配的对象进行部分比较，以确定原对象是否有等值
    // object 要检查的对象
    // source 匹配的对象
    let isMatch = function (object, source) {
        return this.isMatchWith(object, source)
    }
    // 判断所传的值是否为null
    let isNull = (value) => {
        return toString.call(value) === '[object Null]'
    }
    // 判断所传的值是否为undefined
    let isUndefined = (value) => {
        return toString.call(value) === '[object Undefined]'
    }
    // 判断所传的值是否为null或undefined
    let isNil = function (value) {
        return this.isNull(value) || this.isUndefined(value)
    }
    // 判断所传的值是否为数字类型
    let isNumber = (value) => {
        return toString.call(value) === '[object Number]'
    }
    // 判断所传的值是否为对象
    let isObject = (value) => {
        return value instanceof Object
    }
    // 判断所传的值是否为类数组对象
    let isObjectLike = function (value) {
        return typeof value === 'object' ? (!this.isNull(value)) ? true : false : false
    }
    // 判断所传的值是否是纯对象
    let isPlainObject = (value) => {
        return value.constructor === Object || Object.getPrototypeOf(value) === null
    }
    // 判断所传的值是否是正则表达式
    let isRegExp = (value) => {
        return toString.call(value) === '[object RegExp]'
    }
    // 判断所传的值是否是安全整数
    let isSafeInteger = (value) => {
        return Number.isSafeInteger(value)
    }
    // 判断所传的值是否是set对象
    let isSet = (value) => {
        return toString.call(value) === '[object Set]'
    }
    // 判断所传的值是否是Symbol对象
    let isSymbol = (value) => {
        return toString.call(value) === '[object Symbol]'
    }
    // 判断所传的值是否是类型数组
    let isTypedArray = (value) => {
        return toString.call(value) === '[object Uint8Array]'
    }
    // 判断所传的值是否是WeakMap对象
    let isWeakMap = function (value) {
        return toString.call(value) === '[object WeakMap]'
    }
    // 判断所传的值是否是弱类型集合
    let isWeakSet = function (value) {
        return toString.call(value) === '[object WeakSet]'
    }
    // 判断一个值是否小于另一个值
    // value 要检查的值
    // other 要被比较的值
    let lt = (value, other) => {
        return value < other
    }
    // 判断一个值是否小于等于另一个值
    // value 要检查的值
    // other 要被比较的值
    let lte = (value, other) => {
        return value <= other
    }
    // 将所传的值转化为数组
    let toArray = (value) => {
        let arr = []
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                arr.push(value[key])
            }
        }
        return arr
    }
    // 将所传的值转化为有限数
    let toFinite = (value) => {
        return value < -Number.MAX_VALUE ? -Number.MAX_VALUE : value > Number.MAX_VALUE ? Number.MAX_VALUE : Number.isNaN(value) ? 0 : +value
    }
    // 将所传的值转化为整数
    let toInteger = function (value) {
        return parseInt(this.toFinite(value))
    }
    // 将所传的值转化为长度
    let toLength = function (value) {
        let length = this.toInteger(value)
        return length > 4294967295 ? 4294967295 : length < 0 ? 0 : length
    }
    // 将所传的值转化为数字
    let toNumber = (value) => {
        return +value
    }
    // 将所传的值转化为纯对象
    let toPlainObject = (value) => {
        let obi = {}
        for (let key in value) {
            obi[key] = value[key]
        }
        return obi
    }
    // 将所传的值转化为安全整数
    let toSafeInteger = (value) => {
        let result = +value
        return Number.isNaN(result) ? 0 : result > 9007199254740991 ? 9007199254740991 : result < -9007199254740991 ? -9007199254740991 : ~~result
    }
    // 将所传的两个数字相加
    let add = (augend, addend) => {
        let result = augend + addend
        return result
    }
    // 将所传的数字根据所传的位置向上进一
    // number 所传的数字
    // precision 要被进一的位置，默认为0
    let ceil = (number, precision = 0) => {
        let result
        let pow
        let pos
        if (precision === 0) {
            result = Math.ceil(number)
        } else if (precision > 0) {
            pow = Math.pow(10, precision)
            result = Math.ceil(number * pow) / pow
        } else if (precision < 0) {
            pos = -precision
            pow = Math.pow(10, pos)
            result = Math.ceil(number / pow) * pow
        }
        return result
    }
    // 将两个数相除
    let divide = (dividend, divisor) => {
        let result = dividend / divisor
        return result
    }
    // 将所传的数字根据所传的位置使之后的数字清零或去除
    // number 所传的数字
    // precision 所传的位置，默认为0
    let floor = (number, precision = 0) => {
        let result, pow, pos
        if (precision === 0) {
            result = Math.floor(number)
        } else if (precision > 0) {
            pow = Math.pow(10, precision)
            result = Math.floor(number * pow) / pow
        } else if (precision < 0) {
            pos = -precision
            pow = Math.pow(10, pos)
            result = Math.floor(number / pow) * pow
        }
        return result
    }
    // 计算数组中的最大值
    let max = function (array) {
        if (this.isEmpty(array) || !array) {
            return undefined
        }
        let max
        for (let i in array) {
            if (i === '0') {
                max = array[i]
            }
            if (array[i] > max) {
                max = array[i]
            }
        }
        return max
    }
    // 通过迭代返回的结果，再选择出数组内的最大项
    // array 要进行迭代比较的数组
    // iteratee 迭代器
    let maxBy = function (array, iteratee = this.identity) {
        let that = this
        return this.reduce(array, function (m, n) {
            return that.iteratee(iteratee)(m) > that.iteratee(iteratee)(n) ? m : n
        })
    }
    // 计算数组总和
    let sum = (array) => {
        let result = 0
        for (let i in array) {
            result += array[i]
        }
        return result
    }
    // 通过迭代结果计算总和
    // array 原数组
    // iteratee 迭代器
    let sumBy = function (array, iteratee = this.identity) {
        let that = this
        return this.reduce(array, function (m, n) {
            return m + that.iteratee(iteratee)(n)
        }, 0)
    }
    // 计算数组总和的平均值
    let mean = function (array) {
        let sum = this.sum(array)
        let result = sum / array.length
        return result
    }
    // 通过迭代结果求平均数
    // array 原数组
    // iteratee 迭代器
    let meanBy = function (array, iteratee = this.identity) {
        return this.sumBy(array, iteratee) / array.length
    }
    // 计算数组中的最小值
    let min = function (array) {
        if (this.isEmpty(array) || !array) {
            return undefined
        }
        let min
        for (let i in array) {
            if (i === '0') {
                min = array[i]
            }
            if (array[i] < min) {
                min = array[i]
            }
        }
        return min
    }
    // 通过迭代求得数组的最小值
    // array 原数组
    // iteratee 迭代器
    let minBy = function (array, iteratee = this.identity) {
        let that = this
        return this.reduce(array, function (m, n) {
            return that.iteratee(iteratee)(m) < that.iteratee(iteratee)(n) ? m : n
        })
    }
    // 将两个数相乘
    let multiply = (multiplier, multiplicand) => {
        let result = multiplier * multiplicand
        return result
    }
    // 根据所传的位置对数字进行四舍五入
    // number 所传的数字
    // precision 所传的位置，默认为0
    let round = (number, precision = 0) => {
        let result, pow, pos
        if (precision === 0) {
            result = Math.round(number)
        } else if (precision > 0) {
            pow = Math.pow(10, precision)
            result = Math.round(number * pow) / pow
        } else if (precision < 0) {
            pos = -precision
            pow = Math.pow(10, pos)
            result = Math.round(number / pow) * pow
        }
        return result
    }
    // 将两个数相减
    let subtract = (minuend, subtrahend) => {
        let result = minuend - subtrahend
        return result
    }
    // 使所传的数字限制在所传的上限和下限之间
    // number 所传的数字
    // lower 下限数字
    // upper 上限数字
    let clamp = (number, ...theArgs) => {
        if (theArgs.length === 1) {
            return number > theArgs[0] ? theArgs[0] : number
        } else {
            return number < theArgs[0] ? theArgs[0] : number > theArgs[1] ? theArgs[1] : number
        }
        return number
    }
    // 判断所传的数字是否在所给的范围之内
    // number 所传的数字
    // start 上限
    // end 下限
    let inRange = (number, start, end) => {
        if (end === undefined) {
            end = start
            start = 0
        }
        if (start > end) {
            [start, end] = [end, start]
        }
        return number < start ? false : number >= end ? false : true
    }
    // 在所给的范围之内产生随机数
    // lower 下限
    // upper 上限
    // floating 布尔值，决定所产生的数字是否是浮点数
    let random = function (...theArgs) {
        let lower, upper, floating
        if (theArgs.length === 1) {
            lower = 0
            upper = theArgs[0]
            if (this.isInteger(upper)) {
                floating = false
            } else {
                floating = true
            }
        } else if (theArgs.length === 2) {
            if (this.isBoolean(theArgs[1])) {
                lower = 0
                upper = theArgs[0]
                if (this.isInteger(upper)) {
                    floating = theArgs[1]
                } else {
                    floating = true
                }
            } else {
                lower = theArgs[0]
                upper = theArgs[1]
                if (this.isInteger(lower) && this.isInteger(upper)) {
                    floating = false
                } else {
                    floating = true
                }
            }
        } else {
            lower = theArgs[0]
            upper = theArgs[1]
            if (this.isInteger(lower) && this.isInteger(upper)) {
                floating = theArgs[2]
            } else {
                floating = true
            }
        }
        let result = Math.random() * (upper - lower) + lower
        return floating ? result : parseInt(result)
    }
    // 将所传的字符串改为驼峰式
    let camelCase = (string) => {
        let result = []
        let str = string.toLowerCase()
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                if (str.charCodeAt(i - 1) < 97 || str.charCodeAt(i - 1) > 122) {
                    result.push(str[i].toUpperCase())
                    continue
                }
                result.push(str[i])
            }
        }
        let first = result[0].toLowerCase()
        result.shift()
        result.unshift(first)
        result = result.join("")
        return result
    }
    // 将字符串的第一个字符转换为大写字母，其余字符转换为小写字母
    let capitalize = (string) => {
        let str = string.toLowerCase()
        let arr = str.split('')
        let first = arr[0].toUpperCase()
        arr.shift()
        arr.unshift(first)
        let result = arr.join('')
        return result
    }
    // 检查字符串是否以给定的目标字符串结束。
    // string 原字符串，不传默认为空字符串
    // target 所给定的目标字符串
    // position 所要查询的位置，不传默认为原字符串的长度
    let endsWith = (string = '', target, position = string.length) => {
        let arr = string.split('')
        let array = arr.slice(0, position)
        if (target.length > array.length) {
            return false
        }
        for (let i = 0; i < target.length; i++) {
            if (target[target.length - 1 - i] !== array[array.length - 1 - i]) {
                return false
            }
        }
        return true
    }
    // 将字符串中的"&"、"<"、">"、"'"、'"'转换为相应的HTML实体
    let escape = (string) => {
        let result = string.split('').map(function (str) {
            switch (str) {
                case '&':
                    return '&amp;'
                    break
                case '<':
                    return '&lt;'
                    break
                case '>':
                    return '&gt;'
                    break
                case '"':
                    return '&quot;'
                    break
                case "'":
                    return '&apos;'
                    break
                default:
                    return str
            }
        })
        result = result.join("")
        return result
    }
    // 转义正则表达式中的特殊字符"^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}","|"
    let escapeRegExp = (string) => {
        let result = string.split('').map(function (str) {
            switch (str) {
                case '^':
                    return '\\^'
                    break
                case '$':
                    return '\\$'
                    break
                case '.':
                    return '\\.'
                    break
                case '*':
                    return '\\*'
                    break
                case '+':
                    return '\\+'
                    break
                case '?':
                    return '\\?'
                    break
                case '(':
                    return '\\('
                    break
                case ')':
                    return '\\)'
                    break
                case '[':
                    return '\\['
                    break
                case ']':
                    return '\\]'
                    break
                case '{':
                    return '\\{'
                    break
                case '}':
                    return '\\}'
                    break
                case '|':
                    return '\\|'
                    break
                default:
                    return str
            }
        })
        result = result.join('')
        return result
    }
    // 去除空格，下划线等
    let getWords = function (str) {
        let result = str.match(/[A-Za-z0-9]+/g)
        return result
    }
    // 转换字符串string为kebab case
    let kebabCase = function (string) {
        return this.lowerCase(string).replace(/ /g, '-')
    }
    // 转换字符串string以空格分开单词，并转换为小写
    let lowerCase = function (string) {
        let arr = this.getWords(string)
        let filterString = arr.join(' ')
        let result = filterString.replace(/[a-z][A-Z]/g, s => (s.slice(0, 1) + ' ' + s.slice(1))).toLowerCase()
        return result
    }
    // 将字符串的第一个字符转换为小写
    let lowerFirst = (string) => {
        let arr = string.split("")
        let first = arr[0].toLowerCase()
        arr.shift()
        arr.unshift(first)
        let result = arr.join("")
        return result
    }
    // 将字符串平均填充在原字符串左右两侧，如果不能均匀分配，则截断字符串，如果原字符串长度不及所传的长度，则无需分配
    // string 原字符串，不传默认空字符串
    // length 给定的长度，不传默认为0
    // chars 被填充的字符串，不传默认为空格
    let pad = (string = '', length = 0, chars = ' ') => {
        if (string.length >= length) {
            return string
        }
        let arr = chars.split('')
        let len = length - string.length
        let integerL
        let integerR
        let strL = ''
        let strR = ''
        if (len % 2 === 0) {
            integerL = len / 2
            for (let i = 0; strL.length < integerL; i++) {
                if (i === arr.length) {
                    i = 0
                }
                strL += arr[i]
                strR += arr[i]
            }
            let result = strL + string + strR
            return result
        } else {
            integerR = Math.ceil(len / 2)
            for (let i = 0; strR.length < integerR; i++) {
                if (i === arr.length) {
                    i = 0
                }
                if (strL.length === integerR - 1) {
                    strR += arr[i]
                    break
                } else {
                    strL += arr[i]
                    strR += arr[i]
                }
            }
            let result = strL + string + strR
            return result
        }
    }
    // 将字符串填充到原字符串右侧，如果填充字符超过了长度，则截断字符
    // string 原字符串，不传默认空字符串
    // length 给定的长度，不传默认为0
    // chars 被填充的字符串，不传默认为空格
    let padEnd = (string = '', length = 0, chars = ' ') => {
        if (string.length >= length) {
            return string
        }
        let arr = chars.split('')
        let len = length - string.length
        let str = ''
        for (let i = 0; str.length < len; i++) {
            if (i === arr.length) {
                i = 0
            }
            str += arr[i]
        }
        let result = string + str
        return result
    }
    // 将字符串填充到原字符串左侧，如果填充字符超过了长度，则截断字符
    // string 原字符串，不传默认空字符串
    // length 给定的长度，不传默认为0
    // chars 被填充的字符串，不传默认为空格
    let padStart = (string = '', length = 0, chars = ' ') => {
        if (string.length >= length) {
            return string
        }
        let arr = chars.split('')
        let len = length - string.length
        let str = ''
        for (let i = 0; str.length < len; i++) {
            if (i === arr.length) {
                i = 0
            }
            str += arr[i]
        }
        let result = str + string
        return result
    }
    // 重复所给定的字符串
    // string 所给定的字符串
    // n 所重复的次数
    let repeat = (string = '', n = 1) => {
        let str = string
        if (n == 0) {
            return ''
        } else {
            for (let i = 0; i < n - 1; i++) {
                str += string
            }
        }
        return str
    }
    // 用所给定的字符串替换原字符串中所选定的字符串
    // string 原字符串
    // pattern 要被替换掉的字符串
    // replacement 替换所要用的字符串
    let replace = (string = '', pattern, replacement) => {
        let result = ''
        let str
        let arr = []
        if (pattern === '') {
            result = replacement + string
            return result
        }
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] === ' ') {
                return string
            }
        }
        for (let i = 0; i < string.length; i++) {
            if (string[i] === pattern[0]) {
                str = string.slice(i, i + pattern.length)
                if (str === pattern) {
                    result = string.slice(0, i) + replacement + string.slice(i + 1 + pattern.length, string.length)
                    return result
                } else {
                    return string
                }
            }
        }
    }
    // 转换字符串string为snake case
    let snakeCase = function (string) {
        return this.lowerCase(string).replace(/ /g, '_')
    }
    // 根据分隔符将原字符串拆分，并变成数组
    // string 原字符串
    // separator 分隔符
    // limit 限制结果的长度
    let split = (string = '', separator, limit) => {
        let len
        let arr = []
        let start = 0
        if (!limit) {
            len = string.length
        } else {
            len = limit
        }
        if (separator == undefined) {
            arr.push(string)
            return arr
        } else if (separator === '') {
            for (let i = 0; i < string.length; i++) {
                arr.push(string[i])
            }
            return arr
        }
        for (let i = 0; i < string.length; i++) {
            if (string[i] === separator[0]) {
                if (string.slice(i, i + separator.length) === separator) {
                    arr.push(string.slice(start, i))
                    i = i + separator.length - 1
                    start = i + 1
                } else {
                    arr.push(string)
                    return arr
                }
            }
            if (arr.length >= len) {
                return arr
            }
        }
        arr.push(string.slice(start, string.length))
        return arr
    }
    // 检查字符串是否从给定的目标字符串开始
    // string 原字符串
    // target 目标字符串
    // position 所给定的位置，默认为0
    let startsWith = (string, target, position = 0) => {
        return string.slice(position, position + target.length) === target
    }
    // 将原字符串转化为小写
    let toLower = (string) => {
        return string.toLowerCase()
    }
    // 将原字符串转化为大写
    let toUpper = (string) => {
        return string.toUpperCase()
    }
    // 从字符串中移除前导和尾随的空白字符或指定字符
    // string 原字符串
    // chars 指定字符，默认为空白字符
    let trim = (string, chars) => {
        if (chars === undefined) {
            chars = ' '
        }
        let arr = string.split('')
        for (let i = 0; i < arr.length; i++) {
            if (chars.indexOf(arr[i]) >= 0) {
                arr.splice(i, 1)
                i--
            } else {
                break
            }
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            if (chars.indexOf(arr[i]) >= 0) {
                arr.splice(i, 1)
            } else {
                break
            }
        }
        let str = arr.join('')
        return str
    }
    // 从字符串中移除尾随空白或指定字符
    // string 原字符串
    // chars 指定字符，默认为空白字符
    let trimEnd = (string, chars) => {
        if (chars === undefined) {
            chars = ' '
        }
        let arr = string.split('')
        for (let i = arr.length - 1; i >= 0; i--) {
            if (chars.indexOf(arr[i]) >= 0) {
                arr.splice(i, 1)
            } else {
                break
            }
        }
        let str = arr.join('')
        return str
    }
    // 从字符串中移除前导空白或指定字符
    // string 原字符串
    // chars 指定字符，默认为空白字符
    let trimStart = (string, chars) => {
        if (chars === undefined) {
            chars = ' '
        }
        let arr = string.split('')
        for (let i = 0; i < arr.length; i++) {
            if (chars.indexOf(arr[i]) >= 0) {
                arr.splice(i, 1)
                i--
            } else {
                break
            }
        }
        let str = arr.join('')
        return str
    }
    // 该方法将HTML实体&amp;&lt;&gt;&quot;转化为对应的字符
    let unescape = (string) => {
        let arr = string.split('')
        for (let i = 0, j = 0; i < string.length; i++, j++) {
            if (string[i] === '&') {
                do {
                    j++
                    if (string[j] === ';') {
                        let str = string.slice(i, j + 1)
                        arr.splice(i, j - i + 1, change(str))
                        i = j
                        break
                    }
                } while (j < string.length)
            }
        }
        function change(a) {
            switch (a) {
                case '&amp;':
                    return '&'
                    break
                case '&lt;':
                    return '<'
                    break
                case '&gt;':
                    return '>'
                    break
                case '&quot;':
                    return '"'
                    break
                case '&apos;':
                    return "'"
                    break
                default:
                    return a
            }
        }
        let result = arr.join('')
        return result
    }
    // 将字符串的第一个字符转换为大写字母
    let upperFirst = (string, pattern) => {
        let str = string[0].toUpperCase()
        let result = str + string.substr(1)
        return result
    }
    // 将字符串拆分成单词数组
    // string 原字符串
    // pattern 匹配模式
    let words = (string, pattern) => {
        let arr = []
        if (pattern === undefined) {
            for (let i = 0, j = 0; i < string.length; i++, j++) {
                if (('A'.charCodeAt() <= string[i].charCodeAt() && string[i].charCodeAt() <= 'Z'.charCodeAt()) || ('a'.charCodeAt() <= string[i].charCodeAt() && string[i].charCodeAt() <= 'z'.charCodeAt())) {
                    do {
                        j++
                        if (j === string.length || !(('A'.charCodeAt() <= string[j].charCodeAt() && string[j].charCodeAt() <= 'Z'.charCodeAt()) || ('a'.charCodeAt() <= string[j].charCodeAt() && string[j].charCodeAt() <= 'z'.charCodeAt()))) {
                            let str = string.slice(i, j)
                            arr.push(str)
                            j--
                            i = j
                            break
                        }
                    } while (j < string.length)
                }
            }
        } else {
            return string.match(pattern)
        }
        return arr
    }
    // 将另一个对象的方法调用到对象本身上
    // object 绑定和分配绑定方法的对象
    // methodNames 要绑定的对象方法名称
    let bindAll = (object, methodNames) => {
        let arr = []
        if (typeof methodNames === 'string') {
            arr.push(methodNames)
        } else {
            arr = methodNames
        }
        for (let i = 0; i < arr.length; i++) {
            object[arr[i]].bind(object)
        }
    }
    // 创建一个返回值的函数
    let constant = (value) => {
        return function () {
            return value
        }
    }
    // 通过判断原有值来决定是否返回默认值
    // value 原有值
    // defaultValue 默认值
    let defaultTo = (value, defaultValue) => {
        if (value === NaN || value === null || value === undefined) {
            return defaultValue
        } else {
            return value
        }
    }
    // 将集合减少到一个值，该值是在集合遍历集合中运行每个元素的累积结果，其中每个连续调用都提供了先前的返回值。如果未给出累加器，则使用第一集合元素作为初始值。用四个参数调用迭代器
    // collection 被迭代的集合
    // iteratee 迭代器
    // accumulator 初始值
    let reduce = function (collection, iteratee = this.identity, accumulator) {
        let key = Object.keys(collection)
        let result = accumulator === undefined ? collection[key[0]] : accumulator
        for (let i = accumulator === undefined ? 1 : 0; i < key.length; i++) {
            result = iteratee(result, collection[key[i]], key[i], collection)
        }
        return result
    }
    // 与reduce类似，只不过是从右往左迭代
    // collection 被迭代的集合
    // iteratee 迭代器
    // accumulator 初始值
    let reduceRight = function (collection, iteratee = this.identity, accumulator) {
        let key = Object.keys(collection)
        let result = accumulator === undefined ? collection[key[key.length - 1]] : accumulator
        for (let i = accumulator === undefined ? key.length - 2 : key.length - 1; i >= 0; i--) {
            result = iteratee(result, collection[key[i]], key[i], collection)
        }
        return result
    }
    // 将两个值进行深度比较，来确定他们是否相等
    // value 被比较的值
    // other 要比较的值
    let isEqual = function (value, other) {
        if (value === other) {
            return true
        }
        if (this.isString(value) && this.isString(other)) {
            return '' + value === '' + other
        }
        if (this.isBoolean(value) && this.isBoolean(other)) {
            return !!value === !!other
        }
        if (this.isNumber(value) && this.isNumber(other)) {
            return +value === +other
        }
        if (this.isRegExp(value) && this.isRegExp(other)) {
            return '' + value === '' + other
        }
        if (this.isDate(value) && this.isDate(other)) {
            return '' + value === '' + other
        }
        if (this.isError(value) && this.isError(other)) {
            return value.message === other.message
        }
        if (this.isSymbol(value) && this.isSymbol(other)) {
            return value.name === other.name
        }
        if (this.isFunction(value) && this.isFunction(other)) {
            return value === other
        }
        if (this.isElement(value) && this.isElement(other)) {
            return value === other
        }
        if ((this.isArray(value) && this.isArray(other)) ||
            (this.isArrayBuffer(value) && this.isArrayBuffer(other)) ||
            (this.isMap(value) && this.isMap(other)) ||
            (this.isPlainObject(value) && this.isPlainObject(other)) ||
            (this.isSet(value) && this.isSet(other)) ||
            (this.isArrayLike(value) && this.isArrayLike(other)) ||
            (this.isArrayLikeObject(value) && this.isArrayLikeObject(other)) ||
            (this.isBuffer(value) && this.isBuffer(other))) {
            let size = Object.keys(value)
            if (size.length === 0 && Object.keys(other).length === 0) {
                return true
            }
            if (size.length === Object.keys(other).length) {
                for (let i = 0; i < size.length; i++) {
                    if (!this.isEqual(value[size[i]], other[size[i]])) {
                        return false
                    }
                }
                return true
            }
        }
        return false
    }
    // 创建一个函数，该函数在给定的对象和源之间执行部分深度比较，如果给定的对象具有相等的属性值，则返回true，否则为false。
    // source 需要对比的属性对象
    // Function 要返回的函数
    let matches = function (source) {
        let that = this
        return function (a) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    if (!that.isEqual(source[key], a[key])) {
                        return false
                    }
                }
            }
            return true
        }
    }
    // 创建一个函数，根据指定路径的值与所传的值进行深度比较，如果等值则返回true
    // path 用来比较的路径
    // srcValue 用于被比较的值
    let matchesProperty = function (path, srcValue) {
        let arr
        if (this.isString(path)) {
            arr = path.match(/\w+/g)
        }
        if (this.isArray(path)) {
            arr = path
        }
        let that = this
        return function (a) {
            return that.isEqual(that.reduce(arr, function (m, n) {
                return m = m[n]
            }, a), srcValue)
        }
    }
    // 创建一个函数，该函数在给定对象的路径上调用该方法
    let method = function (path) {
        let that = this
        return function (a) {
            return that.property(path)(a)()
        }
    }
    // 与method相反的方法；该方法创建一个函数，该函数在给定的对象路径调用该方法
    let methodOf = function (object) {
        let that = this
        return function (a) {
            return that.property(a)(object)()
        }
    }
    // 创建一个函数，该函数在给定对象的路径返回值
    let property = function (path) {
        let arr
        if (this.isString(path)) {
            arr = path.match(/\w+/g)
        }
        if (this.isArray(path)) {
            arr = path
        }
        let that = this
        return function (a) {
            return that.reduce(arr, function (m, n) {
                return m = m[n]
            }, a)
        }
    }
    // 与property相反，通过对象返回一个函数，函数通过参数返回结果
    let propertyOf = function (object) {
        let that = this
        return function (path) {
            let arr
            if (that.isString(path)) {
                arr = path.match(/\w+/g)
            }
            if (that.isArray(path)) {
                arr = path
            }
            return that.reduce(arr, function (m, n) {
                return m = m[n]
            }, object)
        }
    }
    // 根据参数判断，如果参数是字符串形式的属性名，则返回能返回指定路径属性值的函数
    // 如果参数数组或对象，则返回通过深度比较返回布尔值的函数
    // 如果参数是函数，则返回原函数
    let iteratee = function (func = this.identity) {
        if (this.isString(func)) {
            return this.property(func)
        }
        if (this.isArray(func)) {
            return this.matchesProperty(func[0], func[1])
        }
        if (this.isPlainObject(func)) {
            return this.matches(func)
        }
        if (this.isFunction(func)) {
            return func
        }
    }
    // 这个方法返回undefined
    let noop = () => {
        return undefined
    }
    // 创建一个在索引n中获取参数的函数。如果n是负的，则返回从末尾的第n个参数
    let nthArg = (n = 0) => {
        return function (...theArgs) {
            if (n >= 0) {
                return theArgs[n]
            } else {
                n = theArgs.length + n
                return theArgs[n]
            }
        }
    }
    // 创建一个函数，用它接收的参数调用迭代器并返回结果
    let over = (iteratees) => {
        return function (...theArgs) {
            let arr = []
            for (let i in iteratees) {
                arr.push(iteratees[i](...theArgs))
            }
            return arr
        }
    }
    // 创建一个函数，该函数检查所有所传方法在接受参数是是否返回true
    let overEvery = (predicates) => {
        return function (a) {
            for (let i in predicates) {
                if (!predicates[i](a)) {
                    return false
                }
            }
            return true
        }
    }
    // 创建一个函数，该函数检查是否有方法在接受参数是否返回true
    let overSome = (predicates) => {
        return function (a) {
            for (let i in predicates) {
                if (predicates[i](a)) {
                    return true
                }
            }
            return false
        }
    }
    // 创建一个包含从start到end，但不包含end本身范围数字的数组。如果start是负数，而end和step没有指定，那么step从-1为开始。如果 end 没有指定，start 设置为 0。如果 end 小于 start ，会创建一个空数组，除非指定了 step。
    // start 开始的范围，默认为0
    // end 结束的范围
    // step 范围的增量或减量，默认为1
    let range = (start = 0, end, step = 1) => {
        var result = []
        if (start < 0 && end === undefined) {
            step = -1
        }
        if (end === undefined) {
            end = start
            start = 0
        }
        let count = 0
        if (end >= start) {
            for (let i = start; i < end && count < end - start; i += step) {
                result.push(i)
                count++
            }
        } else {
            for (let i = start; i > end && count < start - end; i += step) {
                result.push(i)
                count++
            }
        }
        return result
    }
    // 这个方法类型于range，只是此方法是以降序生成值
    // start 开始的范围，默认为0
    // end 结束的范围
    // step 范围的增量或减量，默认为1
    let rangeRight = (start = 0, end, step = 1) => {
        var result = []
        if (start < 0 && end === undefined) {
            step = -1
        }
        if (end === undefined) {
            end = start
            start = 0
        }
        let count = 0
        if (end >= start) {
            for (let i = start; i < end && count < end - start; i += step) {
                result.unshift(i)
                count++
            }
        } else {
            for (let i = start; i > end && count < start - end; i += step) {
                result.unshift(i)
                count++
            }
        }
        return result
    }
    // 此方法返回一个新的空数组。
    let stubArray = () => {
        return []
    }
    // 此方法返回false
    let stubFalse = () => {
        return false
    }
    // 此方法返回新的空对象
    let stubObject = () => {
        return {}
    }
    // 此方法返回空字符串
    let stubString = () => {
        return ''
    }
    // 此方法返回true
    let stubTrue = () => {
        return true
    }
    // 调用迭代器n次，并将调用的结果以数组的形式返回
    // n 调用的次数
    // iteratee 要调用的迭代器
    let times = function (n, iteratee = this.identity) {
        let arr = []
        for (let i = 0; i < n; i++) {
            arr.push(iteratee(i))
        }
        return arr
    }
    // 将值转换为属性路径数组
    let toPath = function (value) {
        if (this.isString(value)) {
            value = value.match(/\w+/g)
        }
        return value
    }
    // 生成唯一的ID，如果有前缀，则附上前缀
    // prefix 要附在ID的前缀
    let uniqueId = (function () {
        let idCount = 0
        return function (prefix = '') {
            idCount++
            return prefix + idCount
        }
    })()
    // 创建一个对象，将每个元素的迭代结果作为该对象的键名，该结果出现的次数，作为该对象的键值
    // collection 所传的集合
    // iteratee 迭代函数
    let countBy = function (collection, iteratee = this.identity) {
        let that = this
        return this.reduce(collection, function (m, n) {
            let key = that.iteratee(iteratee)(n)
            if (key in m) {
                m[key]++
            } else {
                m[key] = 1
            }
            return m
        }, {})
    }
    // 对集合元素进行迭代，用三个参数调用迭代器，迭代函数可以通过显式返回false来提前退出迭代
    // collection 被迭代的集合
    // iteratee 迭代器
    let forEach = function (collection, iteratee = this.identity) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (iteratee(collection[key], key, collection) === false) {
                    return collection
                }
            }
        }
        return collection
    }
    // 与foreach类似，但是反向遍历
    // collection 被迭代的集合
    // iteratee 迭代器
    let forEachRight = function (collection, iteratee = this.identity) {
        let keys = Object.keys(collection)
        for (let i = keys.length - 1; i >= 0; i--) {
            if (iteratee(collection[keys[i]], keys[i], collection) === false) {
                return collection
            }
        }
        return collection
    }
    // 对集合进行迭代，当所有迭代结果都为true时，则返回true
    // collection 被迭代的集合
    // iteratee 迭代器
    let every = function (collection, predicate = this.identity) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (this.iteratee(predicate)(collection[key], key, collection) === false) {
                    return false
                }
            }
        }
        return true
    }
    // 对集合元素进行迭代，返回判断结果为true的元素所组成的数组
    // collection 被迭代的集合
    // predicate 所用于判断集合元素的迭代器
    let filter = function (collection, predicate) {
        let arr = []
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (this.iteratee(predicate)(collection[key], key, collection)) {
                    arr.push(collection[key])
                }
            }
        }
        return arr
    }
    // 对集合元素进行迭代，返回第一个返回true的元素
    // collection 被迭代的集合
    // predicate 所用于判断集合元素的迭代器
    // fromIndex 判断起始的位置
    let find = function (collection, predicate = this.identity, fromIndex = 0) {
        let keys = Object.keys(collection)
        for (let key in keys) {
            if (key < fromIndex) {
                continue
            }
            if (collection.hasOwnProperty(keys[key])) {
                if (this.iteratee(predicate)(collection[keys[key]], keys[key], collection)) {
                    return collection[keys[key]]
                }
            }
        }
    }
    // 以从右往左的顺序，对集合元素进行迭代，返回第一个返回true的元素
    // collection 被迭代的集合
    // predicate 所用于判断集合元素的迭代器
    // fromIndex 判断起始的位置
    let findLast = function (collection, predicate = this.identity, fromIndex) {
        let keys = Object.keys(collection)
        if (fromIndex === undefined) {
            fromIndex = keys.length - 1
        }
        for (let i = keys.length - 1; i >= 0; i--) {
            if (i > fromIndex) {
                continue
            }
            if (collection.hasOwnProperty(keys[i])) {
                if (this.iteratee(predicate)(collection[keys[i]], keys[i], collection)) {
                    return collection[keys[i]]
                }
            }
        }
    }
    // 对集合元素进行迭代，通过迭代器返回一个新的数组
    // collection 被迭代的集合
    // iteratee 迭代器
    let map = function (collection, iteratee = this.identity) {
        let result = []
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(this.iteratee(iteratee)(collection[key], key, collection))
            }
        }
        return result
    }
    // 对集合元素进行迭代，通过迭代器返回一个新的数组，并降一维
    // collection 被迭代的集合
    // iteratee 迭代器
    let flatMap = function (collection, iteratee = this.identity) {
        return this.flatten(this.map(collection, iteratee))
    }
    // 对集合元素进行迭代，通过迭代器返回一个新的数组，并降成一维
    // collection 被迭代的集合
    // iteratee 迭代器
    let flatMapDeep = function (collection, iteratee = this.identity) {
        return this.flattenDeep(this.map(collection, iteratee))
    }
    // 对集合元素进行迭代，通过迭代器返回一个新的数组，并降成自定义的维度
    // collection 被迭代的集合
    // iteratee 迭代器
    let flatMapDepth = function (collection, iteratee = this.identity, depth = 1) {
        return this.flattenDepth(this.map(collection, iteratee), depth)
    }
    // 对集合元素进行迭代，将迭代出来的结果作为键名，被迭代的成员作为键值
    // collection 被迭代的集合
    // iteratee 迭代器
    let groupBy = function (collection, iteratee = this.identity) {
        let that = this
        return this.reduce(collection, function (m, n) {
            let result = that.iteratee(iteratee)(n)
            if (result in m) {
                m[result].push(n)
            } else {
                m[result] = [n]
            }
            return m
        }, {})
    }
    // 通过位置判断一个值是否在集合当中
    // collection 要检查的集合
    // value 检查的值
    // fromIndex 查找的索引
    let includes = function (collection, value, fromIndex = 0) {
        let count = 0
        if (this.isString(collection) && this.isString(value)) {
            for (let i = fromIndex; i < collection.length; i++) {
                if (collection[i] === value[0]) {
                    if (collection.slice(i, i + value.length) === value) {
                        return true
                    } else {
                        return false
                    }
                }
            }
            return false
        }
        for (let key in collection) {
            if (count < fromIndex) {
                count++
                continue
            }
            if (collection.hasOwnProperty(key)) {
                if (this.isEqual(collection[key], value)) {
                    return true
                }
            }
        }
        return false
    }
    // 对集合中每一个元素都调用所传的方法，并返回数组
    // collection 被调用的集合
    // path 调用方法的路径或者要调用的方法
    // args 调用方法时所要传的参数
    let invokeMap = function (collection, path, ...args) {
        let that = this
        return this.map(collection, function (it) {
            if (that.isFunction(path)) {
                return path.call(it, ...args)
            } else {
                return that.propertyOf(it)(path).call(it, ...args)
            }
        })
    }
    // 创建一个对象，键名是每个元素进行迭代后的结果，键值是被迭代的元素
    // collection 被迭代的集合
    // iteratee 迭代器
    let keyBy = function (collection, iteratee = this.identity) {
        let that = this
        return this.reduce(collection, function (m, n) {
            m[that.iteratee(iteratee)(n)] = n
            return m
        }, {})
    }
    // 此方法类似于_.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序
    // collection 被排序的集合
    // iteratee 迭代器 iteratee = [this.identity]
    // orders 顺序指令 orders = ['asc']
    let orderBy = function (collection, iteratee = [this.identity], orders = ['asc']) {
        let that = this
        let result = this.clone(collection)
        for (let i = iteratee.length - 1; i >= 0; i--) {
            result.sort(function (a, b) {
                if (!orders[i]) orders[i] = 'asc';
                if (that.iteratee(iteratee[i])(a) > that.iteratee(iteratee[i])(b)) {
                    return orders[i] === 'asc' ? 1 : -1
                }
                if (that.iteratee(iteratee[i])(a) < that.iteratee(iteratee[i])(b)) {
                    return orders[i] === 'asc' ? -1 : 1
                }
                return 0
            })
        }
        return result
    }
    // 创建一个数组，并在其中分成两个组，并通过迭代器返回结果为true放到第一组，结果为false放到第二组
    // collection 被迭代的集合
    // predicate 迭代器
    let partition = function (collection, predicate = this.identity) {
        let that = this
        let result = [
            [],
            []
        ]
        return this.reduce(collection, function (m, n) {
            that.iteratee(predicate)(n) ? result[0].push(n) : result[1].push(n)
            return result
        }, result)
    }
    // 对集合元素进行迭代，返回判断结果为false的元素所组成的数组
    // collection 被迭代的集合
    // predicate 所用于判断集合元素的迭代器
    let reject = function (collection, predicate = this.identity) {
        let arr = []
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (!this.iteratee(predicate)(collection[key], key, collection)) {
                    arr.push(collection[key])
                }
            }
        }
        return arr
    }
    // 从一个集合中，随机返回一个元素
    let sample = (collection) => {
        let key = Object.keys(collection)
        let size = key.length
        return collection[key[Math.floor(Math.random() * size)]]
    }
    // 从一个集合中，随机返回一组元素
    // collection 所传的集合
    // n 所选取成员的个数
    let sampleSize = (collection, n = 1) => {
        let arr = []
        let key = Object.keys(collection)
        let size = key.length
        n = n >= size ? size : n
        let i
        while (n) {
            i = Math.floor(Math.random() * size)
            arr.push(collection[key.splice(i, 1)[0]])
            size--
            n--
        }
        return arr
    }
    // 创建一个被打乱值的集合
    // collection 要打乱的集合
    let shuffle = function (collection) {
        let arr = Object.keys(collection)
        let len = arr.length
        let index
        arr.forEach(function (value, i, array) {
            index = Math.floor(Math.random() * (len - i)) + i
            array.splice(i, 1, array[index])
            array.splice(index, 1, value)
        })
        return this.map(arr, i => collection[i])
    }
    // 返回集合的大小
    let size = (collection) => {
        let count = 0
        for (let i in collection) {
            if (collection.hasOwnProperty(i)) {
                count++
            }
        }
        return count
    }
    // 对集合进行迭代，一旦迭代结果满足条件，就返回true，否则返回false
    // collection 所传的集合
    // predicate 迭代器
    let some = function (collection, predicate = this.identity) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (this.iteratee(predicate)(collection[key], key, collection)) {
                    return true
                }
            }
        }
        return false
    }
    // 遍历对象的可枚举自有属性，可以通过返回false来退出迭代
    // object 被迭代的对象
    // iteratee 每次迭代所调用的函数
    let forOwn = (object, iteratee = this.identity) => {
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                if (iteratee(object[key], key, object) === false) {
                    break
                }
            }
        }
        return object
    }
    // 与forOwn类似，但是迭代顺序相反
    // object 被迭代的对象
    // iteratee 每次迭代所调用的函数
    let forOwnRight = function (object, iteratee = this.identity) {
        let keys = Object.keys(object)
        for (let i = keys.length - 1; i >= 0; i--) {
            if (iteratee(object[keys[i]], keys[i], object) === false) {
                break
            }
        }
        return object
    }
    // 将对象本身的可枚举属性分配给目标对象，分配的属性会覆盖目标对象身上的同名属性
    // object 目标对象
    // sources 被分配的对象
    let assign = function (object, ...sources) {
        let that = this
        this.forEach(sources, function (i) {
            that.forOwn(i, function (value, key) {
                object[key] = value
            })
        })
        return object
    }
    // 与assign类似，但也继承可枚举属性
    // object 目标对象
    // sources 被分配的对象
    let assignIn = function (object, ...sources) {
        this.forEach(sources, function (i) {
            for (let key in i) {
                object[key] = i[key]
            }
        })
        return object
    }
    // 与assignIn类似，但是自定义判断函数
    // object 目标对象
    // sources 被分配的对象
    // customizer 自定义的判断函数
    let assignInWith = function (object, ...args) {
        let customizer = args.pop()
        this.forEach(args, function (it) {
            for (let key in it) {
                object[key] = customizer(object[key], it[key])
            }
        })
        return object
    }
    // 与assign类似，但是自定义判断函数
    // object 目标对象
    // sources 被分配的对象
    // customizer 自定义的判断函数
    let assignWith = function (object, ...args) {
        let customizer = args.pop()
        this.forEach(args, function (it) {
            for (let key in it) {
                if (it.hasOwnProperty(key)) {
                    object[key] = customizer(object[key], it[key])
                }
            }
        })
        return object
    }
    // 创建对应于对象路径的值数组
    // object 原对象
    // paths 路径
    let at = function (object, ...path) {
        let that = this
        let arr
        path = this.flatten(path)
        return this.reduce(path, function (m, n) {
            arr = n.split(/[\[\]\.]/).filter(function (it) {
                return it !== ''
            })
            m.push(that.reduce(arr, function (m, n) {
                m = m[n]
                return m
            }, object))
            return m
        }, [])
    }
    // 创建一个从原型继承的对象，它自己的可枚举属性将被分配给创建的对象
    // prototype 继承的对象
    // properties 要分配给对象的属性
    let create = (prototype, properties) => {
        let obj = new Object()
        Object.setPrototypeOf(obj, prototype)
        if (properties) {
            for (let key in properties) {
                if (properties.hasOwnProperty(key)) {
                    obj[key] = properties[key]
                }
            }
        }
        return obj
    }
    // 将原对象的可枚举自由属性分配给目标对象，一旦设置了属性，就忽略相同属性的值
    // object 目标对象
    // sources 源对象
    let defaults = (object, ...sources) => {
        sources.forEach(function (it) {
            for (let key in it) {
                if (it.hasOwnProperty(key) && !(key in object)) {
                    object[key] = it[key]
                }
            }
        })
        return object
    }
    // 与defaults类似，但可以递归分配属性
    // object 目标对象
    // sources 源对象
    let defaultsDeep = (object, ...sources) => {
        sources.forEach(function (it) {
            for (let key in it) {
                if (typeof object[key] === 'object' && typeof it[key] === 'object') {
                    defaultsDeep(object[key], it[key])
                } else if (it.hasOwnProperty(key) && !(key in object)) {
                    object[key] = it[key]
                }
            }
        })
        return object
    }
    // 创建一个可枚举的键值对（不包括原型属性）数组
    let toPairs = (object) => {
        let array = []
        let count = 0
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                array.push([key])
                array[count].push(object[key])
                count++
            }
        }
        return array
    }
    // 创建一个可枚举的键值对数组
    let toPairsIn = (object) => {
        let array = []
        let count = 0
        for (let key in object) {
            array.push([key])
            array[count].push(object[key])
            count++
        }
        return array
    }
    // 与find类似，但是返回的是键名
    // object 原集合
    // predicate 迭代器
    let findKey = function (object, predicate = this.identity) {
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                if (this.iteratee(predicate)(object[key], key, object)) {
                    return key
                }
            }
        }
    }
    // 与findKey类似，但是迭代顺序是从右往左
    // object 原集合
    // predicate 迭代器
    let findLastKey = function (object, predicate = this.identity) {
        let keys = Object.keys(object)
        for (let i = keys.length - 1; i >= 0; i--) {
            if (this.iteratee(predicate)(object[keys[i]], keys[i], object)) {
                return keys[i]
            }
        }
    }
    // 通过iteratee迭代对象的可枚举属性
    // object 被迭代的对象
    // iteratee 迭代器
    let forIn = function (object, iteratee = this.identity) {
        for (let key in object) {
            iteratee(object[key], key, object)
        }
        return object
    }
    // 与forIn类似，但是迭代顺序是反向的
    // object 被迭代的对象
    // iteratee 迭代器
    let forInRight = function (object, iteratee = this.identity) {
        let keys = []
        for (let key in object) {
            keys.push(key)
        }
        for (let i = keys.length - 1; i >= 0; i--) {
            iteratee(object[keys[i]], keys[i], object)
        }
        return object
    }
    // 从对象中的可枚举自有属性名来创建数组
    let functions = (object) => {
        let array = []
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                array.push(key)
            }
        }
        return array
    }
    // 从对象中的可枚举属性名来创建数组
    let functionsIn = (object) => {
        let array = []
        for (let key in object) {
            array.push(key)
        }
        return array
    }
    // 通过路径获取对象上的值
    // object 原对象
    // path 路径
    // defaultValue 如果结果是undefined，返回该值
    let get = function (object, path, defaultValue) {
        if (this.isString(path)) {
            path = path.split(/[\[\]\.]/).filter(function (it) {
                return it !== ''
            })
        }
        let result = this.reduce(path, function (m, n) {
            return m === undefined ? m : m[n]
        }, object)
        return result === undefined ? defaultValue : result
    }
    // 判断所给的路径是否在对象上存在，且是自有属性
    // object 要查询的对象
    // path 所给的路径
    let has = function (object, path) {
        if (this.isString(path)) {
            path = path.match(/\w+/g)
        }
        for (let key in path) {
            if (object.hasOwnProperty(path[key])) {
                object = object[path[key]]
            } else {
                return false
            }
        }
        return true
    }
    // 与has类似，但是判断属性包括继承属性
    // object 要查询的对象
    // path 所给的路径
    let hasIn = function (object, path) {
        if (this.isString(path)) {
            path = path.match(/\w+/g)
        }
        let result = this.reduce(path, function (m, n) {
            return m === undefined ? m : m[n]
        }, object)
        return result === undefined ? false : true
    }
    // 创建一个键值倒置后的对象，如果属性重复，则后续值覆盖掉之前的值
    let invert = (object) => {
        let obj = {}
        for (let key in object) {
            obj[object[key]] = key
        }
        return obj
    }
    // 与invert类似，但要通过迭代函数来迭代，而对象上的值为数组
    // object 要处理的对象
    // iteratee 迭代器
    let invertBy = function (object, iteratee = this.identity) {
        let obj = {}
        let temp
        for (let key in object) {
            temp = iteratee(object[key], key, object)
            if (obj[temp] === undefined) {
                obj[temp] = [key]
            } else {
                obj[temp].push(key)
            }
        }
        return obj
    }
    // 调用object对象path上的方法
    // object 要检索的对象
    // path 用来调用的方法路径
    // args 调用的方法的参数
    let invoke = function (object, path, ...args) {
        let path = this.toPath(path)
        return path.reduce((m, n) => {
            if (typeof (m) === "undefined") {
                return undefined
            } else if (typeof (m[n]) === 'function') {
                return m[n](...args)
            } else {
                return m[n]
            }
        }, object)
    }
    // 创建对象的自身可枚举属性名的数组
    let keys = (object) => {
        let arr = []
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                arr.push(key)
            }
        }
        return arr
    }
    // 创建对象的自身和继承的可枚举属性名称的数组
    let keysIn = (object) => {
        let arr = []
        for (let key in object) {
            arr.push(key)
        }
        return arr
    }
    // 该方法创建一个对象，该对象的值和原对象的值相同，属性名要通过迭代方法来迭代
    // object 原对象
    // iteratee 迭代器
    let mapKeys = function (object, iteratee = this.identity) {
        let obj = {}
        let temp
        for (let key in object) {
            temp = this.iteratee(iteratee)(object[key], key, object)
            obj[temp] = object[key]
        }
        return obj
    }
    // 该方法创建一个对象，该对象的键与原对象
    // object 原对象
    // iteratee 迭代器
    let mapValues = function (object, iteratee = this.identity) {
        let obj = {}
        let temp
        for (let key in object) {
            temp = this.iteratee(iteratee)(object[key], key, object)
            obj[key] = temp
        }
        return obj
    }
    // 该方法类似_.assign，除了它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性
    // object 目标对象
    // sources 来源对象
    let merge = (object, ...sources) => {
        sources.forEach(function (it) {
            for (let key in it) {
                if (typeof object[key] === 'object' && typeof it[key] === 'object') {
                    merge(object[key], it[key])
                } else {
                    object[key] = it[key]
                }
            }
        })
        return object
    }
    // 与merge类似，但是自定义处理函数
    // object 目标对象
    // sources 来源对象
    // customizer 处理函数
    let mergeWith = (object, ...sources) => {
        let customizer = sources.pop()
        sources.forEach(function (it) {
            for (let key in it) {
                if (typeof object[key] === 'object' && typeof it[key] === 'object') {
                    object[key] = customizer(object[key], it[key])
                }
            }
        })
        return object
    }
    // 与pick相反，使去掉所传的路径的属性
    // object 原对象
    // path 所传的路径
    let omit = function (object, path) {
        let obj = {}
        if (this.isString(path)) {
            path = path.match(/\w+/g)
        }
        let keys = Object.keys(object)
        for (let a in path) {
            for (let b in keys) {
                if (path[a] === keys[b]) {
                    keys.splice(b, 1)
                }
            }
        }
        for (let c in keys) {
            obj[keys[c]] = object[keys[c]]
        }
        return obj
    }
    // 与omit类似，但是通过自定义判断函数来筛选对象
    // object 原对象
    // predicate 判断函数
    let omitBy = function (object, predicate = this.identity) {
        let obj = {}
        for (let key in object) {
            if (!predicate(object[key], key)) {
                obj[key] = object[key]
            }
        }
        return obj
    }
    // 与omit相反，去掉所传的路径不包含的属性
    // object 原对象
    // path 所传的路径
    let pick = function (object, path) {
        let obj = {}
        if (this.isString(path)) {
            path = path.match(/\w+/g)
        }
        for (let key in path) {
            obj[path[key]] = object[path[key]]
        }
        return obj
    }
    // 与pick类似，但是通过自定义判断函数来筛选对象
    // object 原对象
    // predicate 判断函数
    let pickBy = function (object, predicate = this.identity) {
        let obj = {}
        for (let key in object) {
            if (predicate(object[key], key)) {
                obj[key] = object[key]
            }
        }
        return obj
    }
    // 与get类似，但如果值是函数，则返回调用的结果
    // object 查询的对象
    // path 所传的路径
    // defaultValue 替代返回值是undefined的值
    let result = function (object, path, defaultValue) {
        let result = this.iteratee(path)(object)
        result = result === undefined ? defaultValue : result
        if (this.isFunction(result)) {
            return result.call(this)
        }
        return result
    }
    // 在对象的路径上设置值
    // object 要处理的对象
    // path 路径
    // value 要设置的值
    let set = function (object, path, value) {
        if (_.isString(path)) {
            path = path.match(/\w+/g)
        }
        if (path.length === 0) {
            return object
        } else {
            let key = path.shift()
            if (path.length) {
                if (parseFloat(path[0]).toString() == "NaN") {
                    object[key] = {}
                } else {
                    object[key] = []
                }
            } else {
                object[key] = value
            }
            set(object[key], path, value)
        }
        return object
    }
    // 在对象的路径上设置值，但要通过自定义函数来设置路径
    // object 要处理的对象
    // path 路径
    // value 要设置的值
    // customizer  自定义函数
    let setWith = function (object, path, value, customizer) {
        if (_.isString(path)) {
            path = path.match(/\w+/g)
        }
        if (path.length === 0) {
            return object
        } else {
            let key = path.shift()
            if (path.length) {
                object[key] = customizer()
            } else {
                object[key] = value
            }
            set(object[key], path, value, customizer)
        }
        return object
    }
    // 类似reduce，此方法将原对象转化为一个新的对象，结果来自迭代方法处理的可枚举属性
    // object 要迭代处理的对象
    // iteratee 迭代方法
    // accumulator 累加的值
    let transform = function (object, iteratee = this.identity, accumulator) {
        if (accumulator === undefined) {
            if (Array.isArray(object)) {
                accumulator = []
            } else {
                accumulator = {}
            }
        }
        let keys = Object.keys(object)
        for (let i in keys) {
            if (iteratee(accumulator, object[keys[i]], keys[i], object) === false) {
                break
            }
        }
        return accumulator
    }
    // 从原对象中移除路径上的属性
    // object 要处理的原对象
    // path 所传的路径
    let unset = function (object, path) {
        if (_.isString(path)) {
            path = path.match(/\w+/g)
        }
        if (path.length === 0) {
            return true
        } else {
            let key = path.shift()
            if (object[key]) {
                if (path.length > 1) {
                    unset(object[key], path)
                } else {
                    if (parseFloat(path[0]).toString() == 'NaN') {
                        object[key] = {}
                    } else {
                        object[key] = []
                    }
                    return true
                }
            } else {
                return true
            }
        }
        return true
    }
    // 与set类似，但是要通过处理函数来生成新的值
    // object 要处理的对象
    // path 所传的路径
    // updater 处理函数
    let update = function (object, path, updater) {
        if (_.isString(path)) {
            path = path.match(/\w+/g)
        }
        if (path.length === 0) {
            return object
        } else {
            let key = path.shift()
            if (path.length) {
                if (!object[key]) {
                    if (parseFloat(path[0]).toString() == "NaN") {
                        object[key] = {}
                    } else {
                        object[key] = []
                    }
                }
            } else {
                object[key] = updater(object[key])
            }
            update(object[key], path, updater)
        }
        return object
    }
    // 与update类似，但要通过自定义函数来设置路径
    // object 要处理的对象
    // path 路径
    // updater 处理函数
    // customizer 自定义赋值函数
    let updateWith = function (object, path, updater, customizer) {
        if (_.isString(path)) {
            path = path.match(/\w+/g)
        }
        if (path.length === 0) {
            return object
        } else {
            let key = path.shift()
            if (path.length) {
                if (!object[key]) {
                    object[key] = customizer()
                }
            } else {
                object[key] = updater(object[key])
            }
            update(object[key], path, updater, customizer)
        }
        return object
    }
    // 将元素集合进行迭代，然后按照升序排序放入到数组中返回
    // collection 所要迭代的集合
    // iteratee 排序所要用的迭代器
    let sortBy = function (collection, iteratee = [this.identity]) {
        let that = this
        if (this.isFunction(iteratee[0])) {
            collection.sort(function (a, b) {
                return that.iteratee(iteratee[0])(a) > that.iteratee(iteratee[0])(b)
            })
        } else {
            for (let i = 0; i < iteratee.length; i++) {
                collection.sort(function (a, b) {
                    return that.iteratee(iteratee[i])(a) > that.iteratee(iteratee[i])(b)
                })
            }
        }
        return collection
    }
    // 将原数组与所传的几个数组的成员通过迭代器进行比较，将不相等的成员放入到新数组中返回
    // array 原数组
    // ...values 要进行比较的数组和迭代器
    let differenceBy = function (array, ...values) {
        let iteratee
        let that = this
        if (this.isArray(values[values.length - 1])) {
            iteratee = this.identity
        } else {
            iteratee = values.pop()
        }
        let other = this.map(this.flatten(values), function (it) {
            return that.iteratee(iteratee)(it)
        })
        return this.reduce(array, function (m, n) {
            if (!that.includes(other, that.iteratee(iteratee)(n))) {
                m.push(n)
            }
            return m
        }, [])
    }
    // 将原数组与所传的几个数组的成员进行比较，将不相等的成员放入到新数组中返回
    // array 原数组
    // ...values 要进行比较的数组
    let difference = function (array, ...values) {
        return this.differenceBy(array, ...values)
    }
    // 类似于difference，通过自定义比较方法进行比较
    // array 原数组
    // ...values 要进行比较的数组和自定义的比较方法
    let differenceWith = function (array, ...values) {
        let comparator = values.pop()
        let that = this
        let other = this.flatten(values)
        return this.reduce(array, function (m, n) {
            that.forEach(other, function (it) {
                if (!comparator.call(that, it, n)) {
                    m.push(n)
                }
            })
            return m
        }, [])
    }
    window._ = {
        chunk: chunk,
        compact: compact,
        concat: concat,
        drop: drop,
        dropRight: dropRight,
        dropWhile: dropWhile,
        dropRightWhile: dropRightWhile,
        isArray: isArray,
        isString: isString,
        fill: fill,
        findIndex: findIndex,
        findLastIndex: findLastIndex,
        flatten: flatten,
        flattenDeep: flattenDeep,
        flattenDepth: flattenDepth,
        fromPairs: fromPairs,
        head: head,
        indexOf: indexOf,
        initial: initial,
        intersectionBy: intersectionBy,
        intersection: intersection,
        intersectionWith: intersectionWith,
        join: join,
        last: last,
        lastIndexOf: lastIndexOf,
        nth: nth,
        pullAllBy: pullAllBy,
        pull: pull,
        pullAll: pullAll,
        pullAllWith: pullAllWith,
        pullAt: pullAt,
        identity: identity,
        remove: remove,
        reverse: reverse,
        slice: slice,
        sortedIndexBy: sortedIndexBy,
        sortedIndex: sortedIndex,
        sortedIndexOf: sortedIndexOf,
        sortedLastIndexBy: sortedLastIndexBy,
        sortedLastIndex: sortedLastIndex,
        sortedLastIndexOf: sortedLastIndexOf,
        tail: tail,
        take: take,
        takeRight: takeRight,
        takeWhile: takeWhile,
        takeRightWhile: takeRightWhile,
        union: union,
        unionBy: unionBy,
        unionWith: unionWith,
        uniq: uniq,
        uniqBy: uniqBy,
        uniqWith: uniqWith,
        zip: zip,
        unzip: unzip,
        unzipWith: unzipWith,
        without: without,
        xor: xor,
        xorBy: xorBy,
        xorWith: xorWith,
        zipObject: zipObject,
        zipObjectDeep: zipObjectDeep,
        zipWith: zipWith,
        now: now,
        after: after,
        ary: ary,
        before: before,
        bind: bind,
        bindKey: bindKey,
        partial: partial,
        partialRight: partialRight,
        curry: curry,
        curryRight: curryRight,
        debounce: debounce,
        defer: defer,
        delay: delay,
        flip: flip,
        values: values,
        valuesIn: valuesIn,
        memoize: memoize,
        negate: negate,
        once: once,
        overArgs: overArgs,
        rearg: rearg,
        rest: rest,
        throttle: throttle,
        unary: unary,
        wrap: wrap,
        castArray: castArray,
        conformsTo: conformsTo,
        isNaN: isNaN,
        clone: clone,
        cloneDeep: cloneDeep,
        eq: eq,
        gt: gt,
        gte: gte,
        isArguments: isArguments,
        isArrayBuffer: isArrayBuffer,
        isArrayLike: isArrayLike,
        isArrayLikeObject: isArrayLikeObject,
        isBoolean: isBoolean,
        isBuffer: isBuffer,
        isDate: isDate,
        isElement: isElement,
        isEmpty: isEmpty,
        isError: isError,
        isFinite: isFinite,
        isFunction: isFunction,
        isInteger: isInteger,
        isLength: isLength,
        isMap: isMap,
        isMatchWith: isMatchWith,
        isMatch: isMatch,
        isNull: isNull,
        isUndefined: isUndefined,
        isNil: isNil,
        isNumber: isNumber,
        isObject: isObject,
        isObjectLike: isObjectLike,
        isPlainObject: isPlainObject,
        isRegExp: isRegExp,
        isSafeInteger: isSafeInteger,
        isSet: isSet,
        isSymbol: isSymbol,
        isTypedArray: isTypedArray,
        isWeakMap: isWeakMap,
        isWeakSet: isWeakSet,
        lt: lt,
        lte: lte,
        toArray: toArray,
        toFinite: toFinite,
        toInteger: toInteger,
        toLength: toLength,
        toNumber: toNumber,
        toPlainObject: toPlainObject,
        toSafeInteger: toSafeInteger,
        toString: toString,
        add: add,
        ceil: ceil,
        divide: divide,
        floor: floor,
        max: max,
        maxBy: maxBy,
        sum: sum,
        sumBy: sumBy,
        mean: mean,
        meanBy: meanBy,
        min: min,
        minBy: minBy,
        multiply: multiply,
        round: round,
        subtract: subtract,
        clamp: clamp,
        inRange: inRange,
        random: random,
        camelCase: camelCase,
        capitalize: capitalize,
        endsWith: endsWith,
        escape: escape,
        escapeRegExp: escapeRegExp,
        getWords: getWords,
        kebabCase: kebabCase,
        lowerCase: lowerCase,
        lowerFirst: lowerFirst,
        pad: pad,
        padEnd: padEnd,
        padStart: padStart,
        repeat: repeat,
        replace: replace,
        snakeCase: snakeCase,
        split: split,
        startsWith: startsWith,
        toLower: toLower,
        toUpper: toUpper,
        trim: trim,
        trimEnd: trimEnd,
        trimStart: trimStart,
        unescape: unescape,
        upperFirst: upperFirst,
        words: words,
        bindAll: bindAll,
        constant: constant,
        defaultTo: defaultTo,
        reduce: reduce,
        reduceRight: reduceRight,
        isEqual: isEqual,
        matches: matches,
        matchesProperty: matchesProperty,
        method: method,
        methodOf: methodOf,
        property: property,
        propertyOf: propertyOf,
        iteratee: iteratee,
        noop: noop,
        nthArg: nthArg,
        over: over,
        overEvery: overEvery,
        overSome: overSome,
        range: range,
        rangeRight: rangeRight,
        stubArray: stubArray,
        stubFalse: stubFalse,
        stubObject: stubObject,
        stubString: stubString,
        stubTrue: stubTrue,
        times: times,
        toPath: toPath,
        uniqueId: uniqueId,
        countBy: countBy,
        forEach: forEach,
        forEachRight: forEachRight,
        every: every,
        filter: filter,
        find: find,
        findLast: findLast,
        map: map,
        flatMap: flatMap,
        flatMapDeep: flatMapDeep,
        flatMapDepth: flatMapDepth,
        groupBy: groupBy,
        includes: includes,
        invokeMap: invokeMap,
        keyBy: keyBy,
        orderBy: orderBy,
        partition: partition,
        reject: reject,
        sample: sample,
        sampleSize: sampleSize,
        shuffle: shuffle,
        size: size,
        some: some,
        forOwn: forOwn,
        forOwnRight: forOwnRight,
        assign: assign,
        assignIn: assignIn,
        assignInWith: assignInWith,
        assignWith: assignWith,
        at: at,
        create: create,
        defaults: defaults,
        defaultsDeep: defaultsDeep,
        toPairs: toPairs,
        toPairsIn: toPairsIn,
        findKey: findKey,
        findLastKey: findLastKey,
        forIn: forIn,
        forInRight: forInRight,
        functions: functions,
        functionsIn: functionsIn,
        get: get,
        has: has,
        hasIn: hasIn,
        invert: invert,
        invertBy: invertBy,
        invoke: invoke,
        keys: keys,
        keysIn: keysIn,
        mapKeys: mapKeys,
        mapValues: mapValues,
        merge: merge,
        mergeWith: mergeWith,
        omit: omit,
        omitBy: omitBy,
        pick: pick,
        pickBy: pickBy,
        result: result,
        set: set,
        setWith: setWith,
        transform: transform,
        unset: unset,
        update: update,
        updateWith: updateWith,
        sortBy: sortBy,
        differenceBy: differenceBy,
        difference: difference,
        differenceWith: differenceWith
    }
})(window)