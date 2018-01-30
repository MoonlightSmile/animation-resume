import "./css/default.css";
const Prism = require("prismjs");
const marked = require('marked');



const writeCss = (prefix, result, duration, callBack) => {
  let n = 0;
  const pre = document.querySelector("#code")
  const style = document.querySelector(`#styleTag`)
  setTimeout(function delayed() {
    n += 1
    if (n <= result.length) {
      style.innerHTML = prefix + result.substring(0, n)
      pre.innerHTML = Prism.highlight(prefix + result.substring(0, n), Prism.languages.css);
      pre.scrollTop = pre.scrollHeight
      setTimeout(delayed, duration)
    } else {
      callBack && callBack()
    }
  }, duration)
}
const writeMarkdown = (result, duration, callBack) => {
  let n = 0;
  const pre = document.querySelector(".resume")
  setTimeout(function delayed() {
    n += 1
    if (n <= result.length) {
      pre.innerHTML = result.substring(0, n)
      pre.scrollTop = pre.scrollHeight
      setTimeout(delayed, duration)
    } else {
      callBack && callBack()
    }
  }, duration)
}

const createPaper = () => {
  const paperWrap = document.createElement("div")
  const resume = document.createElement("pre")
  paperWrap.classList.add("wrap-paper")
  resume.classList.add("resume")
  paperWrap.append(resume)
  document.body.append(paperWrap)

}

const MarkdownToHtml = () => {
  const paperWrap = document.querySelector(".wrap-paper")
  paperWrap.removeChild(document.querySelector(".resume"))
  const markedDiv = document.createElement("div")
  markedDiv.classList.add("resume")
  const html = marked(markdown)
  markedDiv.innerHTML = html
  console.log(html)
  paperWrap.append(markedDiv)

}

const css1 = `/*
 * 面试官你好，我是蔡逍侠
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
/*首先为了显得不太突兀，先给所有过度效果添加动画*/
*{
  transition: all 1s;
}
html{
  background: #eee;
}
.wrap-code {
  position: fixed;
  left: 0;
  width:100%;
  padding: 16px;
}
#code {
  width: 100%;
  overflow: scroll;
  border: 1px solid #aaa;
  border-radius: 5px;

}

/* 我需要一点代码高亮 */

.token.selector{ color: #690; }
.token.property{ color: #905; }

/* 加一个呼吸效果 */

#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 现在正式开始 */

.wrap-code {

  width: 40%;
}

/* 我需要一张白纸
* 先给白纸一点样式
*/
.wrap-paper {
  position: fixed;
  width: 60%;
  height: 100%;
  display: flex;
  padding: 16px;
  right: 0;
}
.wrap-paper .resume {
  border: 1px solid #aaa;
  border-radius: 5px;
  width: 100%;
}
/* 于是我就可以在白纸上写字了，请看右边 */

`
const css2 = `/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */






`
const css3 = `/*
 * 再给它加点样式
 */
 .resume {
  color: #333333;
  background: #fff;
  font-family: "Hanzipen SC"
 }
  hr {
    border:none;
    border-top: 1px solid rgba(0,0,0,0.1);
  }
  li {
    padding: 2px;
  }
  a {
    color: #5082BF;
    text-decoration: none;
    border-bottom: 1px solid ;
    font-family: "Hanzipen SC";
    transition: all .1s;
  }
  a:hover {
    opacity: 0.6;
  }
 /*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

const markdown = `# 自我介绍
----
我叫蔡逍侠


1994 年 12 月出生


宁波电视大学毕业


自学前端半年


希望应聘前端开发岗位



# 技能介绍
----
- 熟悉 JavaScript CSS HTML
- 熟悉 \`yarn\`，\`npm\`，\`parcel\`, \`git\`
- 熟悉 \`css3\`, \`HTML5\`


# 项目介绍
----
- [苹果风轮播](https://moonlightsmile.github.io/appleStyle/index.html)
- [在线简历](https://moonlightsmile.github.io/resume/index.html)
- [canvas画板](https://moonlightsmile.github.io/draw/)
- [豆瓣 Top250](https://moonlightsmile.github.io/DoubanTop250/index.html)
- [导航首页](https://moonlightsmile.github.io/nav/index.html)
- [留言板](https://moonlightsmile.github.io/postMessage/index.html)

# 联系方式
----
- QQ 362652565
- Email [AmoonlightSmile@gmail.com]()
- 手机 13116657989

`
writeCss("", css1, 1, () => {
  createPaper()
  writeMarkdown(markdown, 1, () => {
    writeCss(css1, css2, 1, () => {
      MarkdownToHtml()
      writeCss(css1 + css2, css3, 1)
    })
  })
})