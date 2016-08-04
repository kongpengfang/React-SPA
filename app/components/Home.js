import React from 'react'

export default React.createClass({
  render() {
    return (
        <div>
            <div className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="img/index_banner.png" alt=""/></div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="top-nav clearfix">
                    <div>
                        <a href="">
                            <i className="icon iconfont">&#xe600;</i>
                            在线挂号
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i className="icon iconfont">&#xe607;</i>
                            爱心地图
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <i className="icon iconfont">&#xe60e;</i>
                            公交出行
                        </a>
                    </div>
                </div>
            </div>

            <div className="menu clearfix">
                <div className="col3">
                    <a href="policy.html">
                        <img src="img/menu_policy.png" alt=""/>
                            政策解读
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_guide.png" alt=""/>
                            办证指南
                    </a>
                </div>
                <div className="col3">
                    <a href="edu.html">
                        <img src="img/menu_edu.png" alt=""/>
                            教育助学
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_server.png" alt=""/>
                            康复服务
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_train.png" alt=""/>
                            社会保障
                    </a>
                </div>
                <div className="col3">
                    <a href="labour-dir.html">
                        <img src="img/menu_labour.png" alt=""/>
                            劳动就业
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_train.png" alt=""/>
                            培训信息
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_suggestion.png" alt=""/>
                            建议咨询
                    </a>
                </div>
                <div className="col3">
                    <a href="">
                        <img src="img/menu_more.png" alt=""/>
                            更多
                    </a>
                </div>
            </div>
        </div>

        
    )
  }
})
