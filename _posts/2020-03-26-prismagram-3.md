---
title: "[prismagram] [BackEnd] 3. Prisma Datamodel 만들기"
date: 2020-03-26
categories:
 - prismagram
tags: 
- Develop
- Issue
last_modified_at: 2020-03-26
---

_모든 내용은 MacOS Catalina 기준으로 작성되었습니다_

## 1. Prisma란?

Prisma는 ORM입니다. - Object-relational mapping (객체관계연결)  
Prisma는 어플리케이션에 필요한 모델을 graphql로 정의할 수 있습니다.  
Prisma에서 프로젝트를 만든 뒤 로컬 파일과의 연동이 필요합니다.

#### Prisma 설치

~~~
prisma init
~~~

## 2. Datamodel 정의하기

datamodel.prisma 파일을 열어 살펴봅시다.

~~~ js
type User {
    Id: ID! @id
    Name: String!
}
~~~

이처럼 Prisma의 Datamodel은 만들기 편하게 되어있습니다.

## 이슈

아래처럼 Datamodel 작성시 type마다 id를 부여하지 않아서 에러가 발생합니다.

~~~ graphql
type User {
    Id: ID! @id
    Name: String!
}

type Comment {
    user : User!
    text : String!
    post : Post!
}
~~~

따라서 모든 type에 id를 추가하여 에러를 해결할 수 있습니다.

~~~ graphql
type User {
    Id: ID! @id
    Name: String!
}

type Comment {
    Id: ID! @id
    user : User!
    text : String!
    post : Post!
}
~~~