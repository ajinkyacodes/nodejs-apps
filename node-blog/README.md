# Node JS Blog System
> It's a simple Blog Website System created using Node JS and Express JS. It contains functionality for creating blogs with blog content, post image, category, and author info.

## Technologies Used
1.  NodeJS
2.  ExpressJS
3.  JadeJS
4.  MongoDB
5.  Monk
6.  Connect-Flash
7.  Multer
8.  Moment

## Prerequisites
- Git
- NodeJS
- CLI
- MongoDB
- NPM

## Installation

##### Clone the latest Repository

```bash
git clone https://github.com/ajinkyacodes/nodejs-apps.git
```

##### Into the project directory

```bash
cd node-blog
```

##### Create MongoDB Database and collections

```bash
`mongodb://localhost:27017/nodeblog` with collections `categories` and `posts`
```

Fields for `categories`
- _id
- name

Fields for `posts`
- _id
- title
- body
- category
- date
- author
- mainimage
- comments

##### Installing NPM dependencies

```bash
npm install
```

##### Then simply start your app

```bash
npm start
```

#### The Server should now be running at http://localhost:3000/ 
