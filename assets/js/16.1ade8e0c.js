(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{297:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"分治算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分治算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 分治算法")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("在计算机科学中，分治法是一种很重要的算法。字面上的解释是“分而治之”，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，再把子问题分成更小的子问题……直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。这个技巧是很多高效算法的基础，如排序算法(快速排序，归并排序)，傅立叶变换(快速傅立叶变换)……")]),t._v(" "),a("p",[t._v("任何一个可以用计算机求解的问题所需的计算时间都与其规模有关。问题的规模越小，越容易直接求解，解题所需的计算时间也越少。例如，对于n个元素的排序问题，当n=1时，不需任何计算。n=2时，只要作一次比较即可排好序。n=3时只要作3次比较即可，…。而当n较大时，问题就不那么容易处理了。要想直接解决一个规模较大的问题，有时是相当困难的。")]),t._v(" "),a("h2",{attrs:{id:"基本思想及策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本思想及策略","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本思想及策略")]),t._v(" "),a("p",[t._v("分治法的设计思想是：将一个难以直接解决的大问题，分割成一些规模较小的相同问题，以便各个击破，分而治之。")]),t._v(" "),a("p",[t._v("分治策略是：对于一个规模为n的问题，若该问题可以容易地解决（比如说规模n较小）则直接解决，否则将其分解为k个规模较小的子问题，这些子问题互相独立且与原问题形式相同，递归地解这些子问题，然后将各子问题的解合并得到原问题的解。这种算法设计策略叫做分治法。")]),t._v(" "),a("p",[t._v("如果原问题可分割成k个子问题，1<k≤n，且这些子问题都可解并可利用这些子问题的解求出原问题的解，那么这种分治法就是可行的。由分治法产生的子问题往往是原问题的较小模式，这就为使用递归技术提供了方便。在这种情况下，反复应用分治手段，可以使子问题与原问题类型一致而其规模却不断缩小，最终使子问题缩小到很容易直接求出其解。这自然导致递归过程的产生。分治与递归像一对孪生兄弟，经常同时应用在算法设计之中，并由此产生许多高效算法。")]),t._v(" "),a("h2",{attrs:{id:"分治法使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分治法使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 分治法使用场景")]),t._v(" "),a("p",[t._v("分治法所能解决的问题一般具有以下几个特征：")]),t._v(" "),a("p",[t._v("1) 该问题的规模缩小到一定的程度就可以容易地解决")]),t._v(" "),a("p",[t._v("2) 该问题可以分解为若干个规模较小的相同问题，即该问题具有最优子结构性质。")]),t._v(" "),a("p",[t._v("3) "),a("strong",[t._v("利用该问题分解出的子问题的解可以合并为该问题的解；")])]),t._v(" "),a("p",[t._v("4) 该问题所分解出的各个子问题是相互独立的，即子问题之间不包含公共的子子问题。")]),t._v(" "),a("p",[t._v("第一条特征是绝大多数问题都可以满足的，因为问题的计算复杂性一般是随着问题规模的增加而增加；")]),t._v(" "),a("p",[t._v("第二条特征是应用分治法的前提它也是大多数问题可以满足的，此特征反映了递归思想的应用；、")]),t._v(" "),a("p",[a("strong",[t._v("第三条特征是关键")]),t._v("，能否利用分治法完全取决于问题是否具有第三条特征，如果具备了第一条和第二条特征，而不具备第三条特征，则可以考虑用贪心法或动态规划法。")]),t._v(" "),a("p",[a("strong",[t._v("第四条特征涉及到分治法的效率")]),t._v("，如果各子问题是不独立的则分治法要做许多不必要的工作，重复地解公共的子问题，此时虽然可用分治法，但一般用动态规划法较好。")]),t._v(" "),a("h2",{attrs:{id:"分治法得基本步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分治法得基本步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 分治法得基本步骤")]),t._v(" "),a("p",[t._v("分治法在每一层递归上都有三个步骤：")]),t._v(" "),a("ul",[a("li",[t._v("step1 分解：将原问题分解为若干个规模较小，相互独立，与原问题形式相同的子问题；")]),t._v(" "),a("li",[t._v("step2 解决：若子问题规模较小而容易被解决则直接解，否则递归地解各个子问题")]),t._v(" "),a("li",[t._v("step3 合并：将各个子问题的解合并为原问题的解。")])]),t._v(" "),a("h2",{attrs:{id:"分治法的复杂性分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分治法的复杂性分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 分治法的复杂性分析")]),t._v(" "),a("p",[t._v("一个分治法将规模为n的问题分成k个规模为n／m的子问题去解。设分解阀值n0=1，且adhoc解规模为1的问题耗费1个单位时间。再设将原问题分解为k个子问题以及用merge将k个子问题的解合并为原问题的解需用f(n)个单位时间。用T(n)表示该分治法解规模为|P|=n的问题所需的计算时间，则有：")]),t._v(" "),a("p",[t._v("T（n）= k T(n/m)+f(n)")]),t._v(" "),a("p",[t._v("通过迭代法求得方程的解：")]),t._v(" "),a("p",[t._v("递归方程及其解只给出n等于m的方幂时T(n)的值，但是如果认为T(n)足够平滑，那么由n等于m的方幂时T(n)的值可以估计T(n)的增长速度。通常假定T(n)是单调上升的，从而当mi≤n<mi+1时，T(mi)≤T(n)<T(mi+1)。")]),t._v(" "),a("h2",{attrs:{id:"可使用分治法求解的一些经典问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可使用分治法求解的一些经典问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 可使用分治法求解的一些经典问题")]),t._v(" "),a("ol",[a("li",[t._v("二分搜索")]),t._v(" "),a("li",[t._v("大整数乘法")]),t._v(" "),a("li",[t._v("Strassen矩阵乘法")]),t._v(" "),a("li",[t._v("棋盘覆盖")]),t._v(" "),a("li",[t._v("合并排序")]),t._v(" "),a("li",[t._v("快速排序")]),t._v(" "),a("li",[t._v("线性时间选择")]),t._v(" "),a("li",[t._v("最接近点对问题")]),t._v(" "),a("li",[t._v("循环赛日程表")]),t._v(" "),a("li",[t._v("汉诺塔")])]),t._v(" "),a("h2",{attrs:{id:"一些经典问题求解代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些经典问题求解代码实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 一些经典问题求解代码实现")]),t._v(" "),a("h3",{attrs:{id:"_1-二分搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-二分搜索","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 二分搜索")]),t._v(" "),a("p",[t._v("二分搜索又叫做二分查找、折半查找，它是一种效率较高得查找方法。")]),t._v(" "),a("p",[t._v("二分搜索得要求：")]),t._v(" "),a("p",[t._v("线性表为有序表，并且要用向量作为表得存储结构。")]),t._v(" "),a("p",[t._v("二分搜索得基本思想：先确定待查找记录所在的范围，然后逐步缩小范围直至找到或找不到该记录位置。")]),t._v(" "),a("p",[t._v("二分查找步骤：")]),t._v(" "),a("p",[t._v("1、先确定中间位置：")]),t._v(" "),a("p",[t._v("middle = (left+right)/2;")]),t._v(" "),a("p",[t._v("2、将待查找得key值与data[middle].key值相比较。若相等，则查找成功并返回该位置，否则须确定新得查找区间，继续二分查找，具体方法如下：")]),t._v(" "),a("ol",[a("li",[t._v("如果data[middle].key大于key，由于data为有序线性表，可知data[middle...right].key均大于key，因此若表中存在关键字等于key得节点，则一定在位置middle左边的子表中。")]),t._v(" "),a("li",[t._v("反之，data[middle].key小于key，因此若表中存在关键字等于key得节点，则一定在位置middle右边的子表中。下一次查找针对新得区域进行查找。")])]),t._v(" "),a("p",[t._v("java代码实现：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bSearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bSearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取中间位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" middle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//比较key值如相等，返回当前位置，否则确认新的查找空间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bSearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" middle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bSearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" middle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h3",{attrs:{id:"_2-求最大子续和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-求最大子续和","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-subarray/",target:"_blank",rel:"noopener noreferrer"}},[t._v("求最大子续和"),a("OutboundLink")],1)])])},[],!1,null,null,null);s.default=e.exports}}]);