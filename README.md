# Symfony React 勉強会

## 準備

* Composer インストール

以下の URL より composer.phar を取得する。

https://getcomposer.org/

```
$ php composer.phar install
```

* サーバー起動

```
$ bin/console server:start
```

http://localhost:8000/

* MySQL

```
CREATE DATABASE sr_example CHARACTER SET utf8;
CREATE USER sr_example@'%' IDENTIFIED BY 'sr_example';
GRANT ALL ON sr_example.* TO sr_example@'%';
```

* .envの準備

```
cp .env.dist .env
```

DATABASE_URLのユーザー、パスワード、データベースを書き換える。

## ユーザーエンティティの追加

```
bin/console make:entity
```

class name: User
fields:
  * name type: string length: 255 nullable: no
  * tel type string length: 255 nullable: yes
  * address type string length: 255 nullable: yes

## Userテーブルの作成

```
bin/console doctrine:schema:update --dump-sql
bin/console doctrine:schema:update --force
```

## ユーザーCRUDの追加

```
bin/console make:crud
```

class name: User

## フロントエンドの準備

Node.js, Yarn は事前にインストールしておく。

```
$ php composer.phar require webpack-encore
$ yarn install
```

JavaScriptやCSSの変更を即座に反映できるように監視スクリプトを起動する。

```
$ yarn ecnore --dev --watch
```

ReactとAxiasをインストールする。

```
$ yarn add --dev babel-preset-react babel-polyfill
$ yarn add react react-dom prop-types
$ yarn add axios
```
