# thermometer-UI

温湿度計のためのWebUIです。

温度に合わせてキャラクタがリアクションを取ります。

<iframe width="560" height="315" src="https://www.youtube.com/embed/M7lc1UVf-VE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>


使用されているキャラクタイラストや各プログラムは、すべて私が作成したものです。

# How to use
リポジトリをクローン

```
git clone https://github.com/nullnull-1015/thermometer-UI.git
```

各種パッケージをインストール
（build済UIが利用可能です。動作確認のみの場合はfrontend側のパッケージは不要です。）

```
cd backend
pip install -r requirements.txt
cd ../frontend
npm install
```

実行

```
cd backend
python server.py
```

localhost:8000 にアクセス。

# Contents
## frontend
Reactで書かれたUIです。

温度に合わせてそれぞれキャラクタが以下のようなリアクションを取ります。

0 ℃以下

寒すぎ！
![寒すぎ](/frontend/public/2cold.jpeg)

0 ℃より高く 15 ℃以下

寒い
![寒い](/frontend/public/cold.gif)

15 ℃より高く 30 ℃未満

快適
![快適](/frontend/public/comfort.gif)

30 ℃以上

暑い
![暑い](/frontend/public/hot.gif)

## backend
UI動作確認用のモックサーバです。

温湿度としてランダムな値をクライアントに返します。
以下で動作させることができます。

```
cd backend
python server.py
```