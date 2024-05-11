const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmpt0m3/",
            name: "ssmpt0m3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmpt0m3/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "课程答疑微信小程序"
        } 
    }
}
export default base
