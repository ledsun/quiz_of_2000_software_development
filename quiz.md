<style>
span.monta { background-color: #000; color: black }
</style>

# クイズ 2000年代のソフトウェア開発

## 歴史

10年の間にどのような変化が起きたでしょうか？

### 1998年

- [idea] Carlo Strozziが<span class="monta">NoSQL</span>を提唱
- [spec] <span class="monta">J2EE</span>リリース。EJB1.0とServlet2.1が含まれていました

業務システムが時代の最先端です。

### 1999年
- [book] Extreme Programming Explained: Embrace Change 出版
- [spec] SOAP 0.9リリース
- [product] <span class="monta">Tomcat</span>3 公開

Servletに続きアプリケーションサーバが揃い、Webアプリケーションの時代が始まりました。

### 2000年
- [idea] Roy Fieldingが<span class="monta">REST</span>の論文を発表
- [book] Programming <span class="monta">Ruby</span> 出版
- [book] XPエクストリーム・プログラミング入門―ソフトウェア開発の究極の手法 出版
- [product] Apache <span class="monta">Struts</span> 1stリリース

フレームワークが誕生します。

### 2001年
- [idea] Tim Berners-Leeがセマンティック・ウェブを提唱。Web APIの走り、代表はRSS
- [idea] Ward Cunninghamがアジャイルソフトウェア開発宣言を提唱
- [product] <span class="monta">Eclipse</span> OSS化
- [product] iPod発売
- [product] Hibernate 1stリリース
- [product] WindowsXP 発売

JavaとXMLが最先端でした。

### 2002年
- [product] Ruby 1.6.8 リリース
- [product] C# 1.0 リリース。delegateをサポート。関数をファーストオブジェクトとして扱う。
- [service] GoogleとAmazonの<span class="monta">WebAPI</span>が公開される。

### 2003年
- [product] Ruby 1.8.0 リリース
- [product] <span class="monta">Spring</span> 1stリリース
- [product] Memcached 1.0.0
- [event] アジャイルプロセス協議会 発足

### 2004年
- [idea] Googleが<span class="monta">MapReduce</span>の論文を発表
- [product] Spring 1.0 リリース
- [product] <span class="monta">Ruby on Rails</span> 1st リリース
- [product] Seasar2 1st リリース
- [service] GMail 公開
- [service] Google Adsence 公開
- [service] iTunes Store 公開

### 2005年
- [book] Refactoring 出版
- [product] Ruby 1.8.3 リリース
- [product] C# 2.0 リリース
- [product] Rails 1.0.0 リリース
- [product] <span class="monta">Android</span> 1st リリース
- [service] Google <span class="monta">Map</span> 公開

Ajaxに注目が集まります。

### 2006年
- [idea] Eric Emerson Schmidt が<span class="monta">クラウドコンピューティング</span>を提唱
- [book] From Java to Ruby 出版
- [book] Steve Blank 「The Four Steps to the Epiphany」（邦訳「アントレプレナーの教科書」） 出版
- [spec] J2EE 5 リリース。SOAP から REST へ
- [product] Ruby 1.8.5 リリース
- [product] Rails 1.1.0 リリース
- [product] Spring 2.0 リリース。Spring MVC DI から CoC へ
- [product] <span class="monta">Hadoop</span> 1st リリース
- [product] <span class="monta">jQuery</span> 1st リリース
- [service] twiter 公開
- [service] Facebook 公開
- [service] Tumblr 公開
- [service] EC2の限定されたパブリックベータ公開

### 2007年
- [book] JavaからRubyへ 日本で出版
- [product] Ruby 1.8.6 ~ 1.9.0
- [product] C# 3.0 リリース。LINQでコレクション処理をサポート
- [product] Rails 1.2.0 ~ 2.0.0 リリース
- [product] <span class="monta">iPhone</span> リリース
- [product] kindle　リリース

### 2008年 
- [idea] Steave Blank がリーンスタートアップを提唱
- [spec] <span class="monta">HTML5</span> 1st リリース
- [product] Ruby 1.8.7
- [product] Rails 2.2.2
- [product] android T-Mobile G1 発売
- [product] google <span class="monta">chrome</span> 1st リリース
- [product] Apache Cassandra 1st リリース。Hadoopみたいな分散データベース管理システム
- [service] Windows Azure 発表
- [service] github 公開
- [event] twiiter社がScalaを採用。Java VMが見直される。

前縁の iPhone に続き Android OS を搭載した端末が発売。スマートフォンに注目が集まります。

### 2009年
- [product] <span class="monta">node.js</span> 1st リリース
- [product] MongoDB 1st リリース
- [product] <span class="monta">CoffeeScript</span> 1st リリース

日本でもソーシャルゲームが流行し始めました。

### 2010年
- [product] C# 4.0 リリース。dynamic型サポート
- [product] <span class="monta">iPad</span> 1st リリース
- [product] CoffeeScript 1.0.0 リリース

Hadoop勉強会が流行っていました。

# まとめると
## 動的型付け（Dynamic Typing）
2000年代を一言で表すと「動的型付けの時代」です。

Wikipediaより
> 動的型付け（どうてきかたづけ、英: dynamic typing）とは、プログラミング言語で書かれたプログラムにおいて、変数や、サブルーチンの引数や返り値などの値について、その型を、コンパイル時などそのプログラムの実行よりも前にあらかじめ決めるということをせず、実行時の実際の値による、という型システムの性質のことである。

プログラミング言語ではRubyやJavaScriptが有名です。対になる静的型付け言語の代表はJavaやC#です。

動的型付けでは、来たものを信用して動かしてダメだったらどうするか考えます。methodを呼んで無ければ追加します。
静的型付けでは、事前（コンパイル時やキャスト時）に期待した型かチェックしてOKだったら動かします。

この「先にチェックするから、先に実行するへ」の変化はソフトウェア開発のあらゆる層で起きました。

- プログラミング言語では、定義されたインターフェイスからダックタイピングへ
- 通信データ形式は、XMLからJSONへ
- WebAPIでは、型が定義できるSOAPからRESTへ
- WebFrameworkでは、設定ファイルの定義から規約へ
- 永続化層では、型を定義するRDBMSからNoSQLへ
- 開発プロセスでは、ウォーターフォールからアジャイルへ
- 新規事業では、洗練された事業プランから事業を小さく初めて洗練していくスタイルへ

# 2010年代

2010年代はどんな技術が流行るでしょうか？

<script src="./monta.js">
</script>
