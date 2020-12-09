import React , {Component} from 'react'

class Main2 extends Component{
    render(){
        
        return(
         <>
         <div id="main2">
            <div id="main2_left">
                <div id="login">
                    <h2>インターネットバンキング</h2>
                    <div>せらく銀行インターネットバンキング</div>
                    <div><button className="login_button login">ログインサービス</button></div>
                    <div><button className="login_button login_first">初めてログインする方</button></div>
                   <div><a href="#">＞パスワード忘れた方はこちら</a></div>
                </div>
                <div id="service_guide">
                    <h2>サービスのご案内</h2>
                    <ul>
                        <li>店舗<br></br>・<br></br>ATM検索</li>
                        <li>資料請求</li>
                        <li>金利一覧</li>
                        <li>手数料</li>
                        <li>よくある<br></br>ご質問</li>
                        <li>投資信託基準<br></br>価格一覧</li>
                    </ul>

                </div>

                <div id="guide1">
                    <ul>
                        <li>口座開設のご案内</li>
                        <li>金融経済ニュース</li>
                        <li>詐欺に注意！！</li>
                    </ul>
                </div>

                <div id="guide2">
                    <ul>
                        <li>テレビCM・動画のご紹介</li>
                        <li>今から考える教育ローン</li>
                    </ul>
                </div>
                <div id="guide3">
                   <div><img src="./images/caution.png"></img></div>
                </div>

            </div>
            <div id="main2_right">
                <div id="main2_right_top">
                <div className="main2-col">
                    <ul>
                        <h2>個人のお客様</h2>

                        <li>＞口座をひらく</li>
                        <li>＞住宅ローン</li>
                        <li>＞投資信託</li>
                        <li>＞外貨預金</li>
                        <li>＞バンクイック</li>
                        <li>＞キャンペーン一覧</li>
                    </ul>
                </div>

                <div className="main2-col">
                    <ul>
                        <h2>法人のお客様</h2>

                        <li>＞口座をひらく</li>
                        <li>＞でんさい</li>
                        <li>＞CSRの取り組み</li>
                        <li>＞地球環境問題への対応</li>
                        <li>＞CSRの取り組み</li>
                        <li>＞Global Website</li>
                    </ul>
                </div>

                <div className="main2-col">
                    <ul>
                        <h2>株主・投資家の皆様</h2>

                        <li>＞決算広告</li>
                        <li>＞社債情報</li>
                    </ul>
                </div>

                <div className="main2-col">
                    <ul>
                        <h2>採用情報</h2>

                        <li>＞新卒採用</li>
                        <li>＞中途採用</li>
                        <li>＞海外現地採用</li>
                    </ul>
                </div>
                </div>
                <div id="main2_right_bottom">
                  <div id="tab">
                        <ul>
                            <li>新着情報</li>
                            <li>ニュースリリース</li>
                            <li>キャンペーン</li>
                            <li>お知らせ</li>
                        </ul>
                    </div>



                    {(() => {
                            var json = require('./colum.json');
                            var json_1 = []
                            for (let i = 0; i < 5; i++) {
                                json_1.push(<div id="colum"><div className="time">{json[i].time}</div>
                                <div className="category">{json[i].category}</div></div>);
                            }
                        return{json_1}
                           
                            })()}
                            
                    

                </div>



            </div>
         </div>
         
        
         </>
        )
    }
 
}
export default Main2