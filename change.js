window.onload = function () {/*window.onload:整个页面加载完才使用这个函数*/
    var item = document.getElementsByClassName("item");
    var it = item[0].getElementsByTagName("div");/*注册点击事件*/
    for (let i = 0; i < it.length; i++) {/*循环排他*/
        it[i].onclick = function () {/*通过鼠标点击触发事件*/
            switch (i) {
                case 0:
                    window.location.href = 'login.html';
                    break;
                case 1:
                    window.location.href = 'register.html';
                    break;
                default:
                    break;
            }

        }
    }
}