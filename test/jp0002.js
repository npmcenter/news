// 获取当前 URL 的查询参数
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.slice(1); // 去掉问号
    queryString.split("&").forEach(pair => {
        const [key, value] = pair.split("=");
        params[key] = decodeURIComponent(value || "");
    });
    return params;
}

// 检测是否为微信环境
const userAgent = navigator.userAgent.toLowerCase();
const isWeChat = userAgent.includes("micromessenger");

// 获取查询参数
const query = getQueryParams();
const appElement = document.getElementById("app");
appElement.innerHTML = `<img src="https://da850c3uesuem.cloudfront.net/20241212/1733966175965_146.png" class="responsive-img" alt="WeChat Image">`;

// if (!isWeChat) {
//     // 如果不是微信环境，解码 base64 链接并跳转
//     if (query.link) {
//         const decodedLink = atob(query.link);
//         window.location.href = decodedLink;
//     } else {
//         appElement.innerHTML = `<p>Error: No link provided in query parameters.</p>`;
//     }
// } else {
//     // 如果是微信环境，显示指定图片
//     appElement.innerHTML = `<img src="https://da850c3uesuem.cloudfront.net/20241212/1733966175965_146.png" class="responsive-img" alt="WeChat Image">`;
// }
