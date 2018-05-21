/**
 * Created with IntelliJ IDEA.<br/>
 * User: lizhichao<br/>
 * Date: 2018-5-15-0015<br/>
 * Time: 11:04:25<br/>
 * Description: <span style="color:#63D3E9"></span><br/>
 */
apiready = function () {
    var searchBar = document.querySelector(".aui-searchbar");
    var searchBarInput = document.querySelector(".aui-searchbar input");
    var searchBarBtn = document.querySelector(".aui-searchbar .aui-searchbar-btn");
    var searchBarClearBtn = document.querySelector(".aui-searchbar .aui-searchbar-clear-btn");
    var scan = document.querySelector(".ic_title_scan");
    if (searchBar) {
        searchBarInput.onclick = function () {
            searchBarBtn.style.marginRight = 0;
            scan.style.display = 'none';
            z_();
        };
        searchBarInput.onblur = function () {
            scan.style.display = 'block';
            searchBarBtn.classList.remove("aui-text-info");
            searchBarBtn.textContent = "取消";
            searchBarBtn.style.marginRight = '-2.2rem';
            searchBarClearBtn.style.display = 'none';
            var keywords = searchBarInput.value;
            api.closeFrame({name:'mask'});
            if (keywords.length) {
                scan.style.display = 'none';
            }
        }
        searchBarInput.onkeydown = function (e) {
            if(e.keyCode == 13){
                searchBarInput.blur();
            }
        }
        searchBarInput.oninput = function () {
            if (this.value.length) {
                searchBarClearBtn.style.display = 'block';
                searchBarBtn.classList.add("aui-text-info");
                searchBarBtn.textContent = "搜索";
            } else {
                searchBarClearBtn.style.display = 'none';
                searchBarBtn.classList.remove("aui-text-info");
                searchBarBtn.textContent = "取消";
            }
        };
    }
    searchBarClearBtn.onclick = function () {
        this.style.display = 'none';
        searchBarInput.value = '';
        searchBarBtn.classList.remove("aui-text-info");
        searchBarBtn.textContent = "取消";
    };
    searchBarBtn.onclick = function () {
        var keywords = searchBarInput.value;
        if (keywords.length) {
            searchBarInput.blur();
            //搜索处理
        } else {
            this.style.marginRight = "-" + this.offsetWidth + "px";
            searchBarInput.value = '';
            searchBarInput.blur();
        }
    };
    openMain();
};

function openMain() {
    var header = $api.byId('header');
    var footerPos = $api.offset($api.byId('footer'));
    var headerPos = $api.offset(header);
    var main = $api.byId('main');
    main.style.height = ($api.offset($api.dom('body')).h - (headerPos.h + footerPos.h)) + 'px';
    var mainPos = $api.offset(main);
    api.openFrame({
        name: 'main',
        url: 'html/main.html',
        bounces: true,
        rect: {
            x: 0,
            y: headerPos.h,
            w: 'auto',
            h: mainPos.h
        }
    });
}


function z_() {
    var header = $api.byId('header');
    var headerPos = $api.offset(header);
    api.openFrame({
        name : 'mask',
        url : 'html/mask.html',
        rect : {
            x : 0,
            y : headerPos.h,
            w : 'auto',
            h : 'auto'
        },
        bounces : false,
        bgColor : 'rgba(0,0,0,0.6)'
    });
}
