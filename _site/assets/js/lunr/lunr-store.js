var store = [{
        "title": "기술 블로그를 시작하며",
        "excerpt":"Hello World! 안녕하세요 디자인 엔지니어 손범수입니다! 올해 고등학교를 졸업하고 20살이 되었습니다. 하고 싶은 것들은 많고 해야 할 것도 많습니다. 작년 요맘때쯤 웹 프로그래밍을 접하면서 제 많은 것들이 달라졌습니다. 처음으로 html, css, vanila JS를 알게 되었고, 다양한 서비스를 직접 만들어보며 많은 것들을 직접 배워왔습니다. 하지만 가끔씩 사이드 프로젝트로 몇 번씩 코드를...","categories": ["ETC"],
        "tags": ["intro","안녕하세요!"],
        "url": "http://localhost:4000/etc/introducing/",
        "teaser": null
      },{
        "title": "[prismagram] 인스타그램 클론코딩",
        "excerpt":"인스타그램 클론코딩 Nomad Coders에서 제공하는 Prismagram 프로젝트. 인스타그렘을 클론코딩하며 백엔드와 프론트엔드를 직접 구현해보며, 풀스택 개발을 할 수 있다. 풀스택 개발자가 되기 위해 시작하는 첫 번쨰 클론코딩. 10주완성을 목표로 하고, 완료 후에는 바로 사이드프로젝트를 하나 만들어 응용해볼 예정. ## 백엔드 - Prisma, GraphQL을 사용하여 서버구성 - Express와 NodeJS Passport JWT를 사용하여...","categories": ["prismagram"],
        "tags": ["Develop"],
        "url": "http://localhost:4000/prismagram/prismagram-0/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 1. 프로젝트 생성, 셋업하기",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 프로젝트 셋업하기 1. 프로젝트 생성 Github에서 Repository 만들기 .gitignore: Node yarn init 혹은 npm init 한뒤 Git 연동. 2. GraphQL 서버 구축을 위한 라이브러리 설치 graphql-yoga yarn add graphql-yoga nodemon -D (src/server.js에 있는 코드를 실행하는 script를 작성하는데 필요합니다.) yarn add nodemon -D babel-cli -D...","categories": ["prismagram"],
        "tags": ["Develop","Issue"],
        "url": "http://localhost:4000/prismagram/prismagram-1/",
        "teaser": null
      },{
        "title": "[Issue] git fatal: remote origin already exists. 에러 해결법",
        "excerpt":"원인   깃허브에 먼저 레포지토리를 생성 후 기존 로컬에 있던 폴더를 오리진 설정시 생기는 오류입니다.   해결방법   따라서 이때 remote origin을 하기 전 git remote rm origin을 실행한 뒤 다시 git remote origin {link} 하면 해결됩니다.  ","categories": ["Issue"],
        "tags": ["Develop","Issue"],
        "url": "http://localhost:4000/issue/issue-1/",
        "teaser": null
      },{
        "title": "[Engineering] 사다리꼴(TR)나사를 이용한 지그설계",
        "excerpt":"개요 파이프를 고정하면서 단순히 누르기만 하면 구멍이 가공되는 지그를 개발하고있습니다. 드릴가동은 모터를 사용하여 해결하였지만, 드릴에 수직방향의 힘을 균등하게 주는 방법을 생각하고 있었는데 사다리꼴나사를 이용하면 좋을 것 같아 사다리꼴나사를 통한 설계를 해보려고 합니다. 1. 사다리꼴나사란 정의 “사다리꼴나사”(이)란 나사산의 단면이 사다리꼴이고, 나사산 각도가 30˚ 내외인 나사[원통 또는 원기둥의 표면에 나선(螺旋) 모양의 홈을...","categories": ["Engineering"],
        "tags": ["기구설계","사다리꼴 나사"],
        "url": "http://localhost:4000/engineering/jig/",
        "teaser": null
      },{
        "title": "[Issue] shell-init: error retrieving current directory: getcwd: cannot access parent directories: Operation not permitted 에러 해결법",
        "excerpt":"원인   삭제된 디렉토리에서 명령을 실행할 때 생기는 오류입니다.   해결방법   cd ..를 통해 삭제된 디렉토리에서 나간 뒤 다시 접근하면 해결됩니다.  ","categories": ["Issue"],
        "tags": ["Develop","Issue"],
        "url": "http://localhost:4000/issue/Issue-2/",
        "teaser": null
      },{
        "title": "[Issue] react build시 index.html 빈화면이 나오는 이슈",
        "excerpt":"원인   index.html에서의 static/js와 css 경로가 잘못되었기 때문입니다.  chorme에서 개발자도구를 열어보면 콘솔에 다음과 같은 오류가 나옵니다.      해결방법   js와 css경로가 /static/….으로 되어있는데 ./static으로 변경해주시면 문제없이 출력됩니다.   &lt;link href=\"/static/css/main.ab056bcf.chunk.css\" rel=\"stylesheet\"&gt;   &lt;/script&gt;&lt;script src=\"/static/js/2.fc65b5d6.chunk.js\"&gt;&lt;/script&gt;   &lt;script src=\"/static/js/main.6527b855.chunk.js\"&gt;&lt;/script&gt;  저렇게 /경로로 되어있는 코드들을 수정해주셔야 합니다.   &lt;link href=\"./static/css/main.ab056bcf.chunk.css\" rel=\"stylesheet\"&gt;   &lt;/script&gt;&lt;script src=\"./static/js/2.fc65b5d6.chunk.js\"&gt;&lt;/script&gt;   &lt;script src=\"./static/js/main.6527b855.chunk.js\"&gt;&lt;/script&gt;  이렇게 수정해주시면 문제없이 출력됩니다.  ","categories": ["Issue"],
        "tags": ["Develop","Issue"],
        "url": "http://localhost:4000/issue/Issue-3/",
        "teaser": null
      },{
        "title": "[Issue] react start 시 Using target=_blank without rel=noopener noreferrer is a security risk 이슈",
        "excerpt":"원인 Tabnabbing 피싱 공격에 노출될 수 있기 때문입니다. Tabnabbing 피싱 공격이란 target_blank인 태그를 클릭하였을 때 새롭게 열린 탭에서 기존 페이지를 피싱페이지로 바꿔 정보를 탈취하는 피싱공격입니다. 간단한 예시 A페이지에서 사용자가 blank 속성의 테그를 클릭하여 B페이지로 이동 -&gt; 다시 A페이지로 돌아왔을 때는 A페이지 처럼 보이는 피싱사이트로 바뀜. 해결방법 target=”_blank” 와 rel=”noopener noreferrer”을...","categories": ["Issue"],
        "tags": ["Develop","Issue"],
        "url": "http://localhost:4000/issue/Issue-4/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 2. typeDefs, Resolvers 만들기",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 1. morgan 설치하기 logging module인 morgan을 추가합니다. yarn add morgan server.js에 morgan을 추가합니다. import logger from \"morgan\"; server.express.use(logger(\"dev\")); morgan을 추가하면 console에 다음과 같이 실시간으로 포트가 출력됩니다. POST / 200 121.032 ms - 25787 POST / 200 22.315 ms - 25787 GET / 200 0.159...","categories": ["prismagram"],
        "tags": ["Develop","Issue"],
        "url": "http://localhost:4000/prismagram/prismagram-2/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 3. Prisma Datamodel 만들기",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 1. Prisma란? Prisma는 ORM입니다. - Object-relational mapping (객체관계연결) Prisma는 어플리케이션에 필요한 모델을 graphql로 정의할 수 있습니다. Prisma에서 프로젝트를 만든 뒤 로컬 파일과의 연동이 필요합니다. Prisma 설치 prisma init 2. Datamodel 정의하기 datamodel.prisma 파일을 열어 살펴봅시다. type User { Id: ID! @id Name: String! }...","categories": ["prismagram"],
        "tags": ["Develop","Issue"],
        "url": "http://localhost:4000/prismagram/prismagram-3/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 4. Prisma에서 데이터 받아오기",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 1. Prisma client Prisma와 api를 연결하기 위해서는 Prisma client가 필요합니다. 예를들면 영화 api처럼 Prisma에서 정의한 데이터를 쉽게 가져올 수 있도록 합니다. yarn add prisma-client-lib 2. 스크립트 추가 package.json에서 다음과 같은 스크립트를 추가합니다. \"deploy\": \"yarn prisma deploy\", \"generate\": \"yarn prisma generate\", \"do\": \"yarn run deploy...","categories": ["prismagram"],
        "tags": ["Develop","Issue"],
        "url": "http://localhost:4000/prismagram/prismagram-4/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 5. prisma와 graphql의 연결",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 1. graphql 파일 생성하기 prisma와 graphql의 연결을 위해서는 graphql 파일이 필요합니다. api폴더에 models.graphql 파일을 만들어줍니다. datamodel.prisma에 있던 내용을 모두 복사해서 models.graphql파일에 넣습니다. 이때 graphql에서는 @를 인식하지 못하기 때문에 꼭 @id, @unique, @relation을 삭제해주셔야 합니다. 2. $fragment prisma는 무한 query 공격을 막기 위해서 $fragment를 사용합니다....","categories": ["prismagram"],
        "tags": ["Develop"],
        "url": "http://localhost:4000/prismagram/prismagram-5/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 6. Create Account - Part1",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 await, async, _, args 등 JavaScript내용은 따로 정리하겠습니다. 0. 테스트용 계정 만들기 사진업로드, 좋아요, 댓글달기 등 여려 기능을 테스트 할 계정을 prisma 어드민에서 만듭니다. 어드민창에서 + 버튼을 눌러 계정을 하나 생성합니다. api/Image 폴더를 만듭니다. Image/toogleLike라는 폴더를 만들어 이미 좋아요가 되어있으면 취소로 아이콘이 바뀌게끔 하겠습니다....","categories": ["prismagram"],
        "tags": ["Develop"],
        "url": "http://localhost:4000/prismagram/prismagram-6/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 7. Create Account - Part2",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 await, async, _, args 등 JavaScript내용은 따로 정리하겠습니다. 1. 비밀값 요청기능 사용자를 만들었으면 비밀값을 요청하고 확인하는 기능을 구현합니다. 주로 사용하는 비밀값은 형용사+명사를 조합해서 만듭니다. ex) violent tank User 폴더에 requestSecret 폴더를 만듭니다. graphql 파일에 requestSecret Mutation을 추가합니다. 이때 Boolean 타입을 반환합니다. type Mutation {...","categories": ["prismagram"],
        "tags": ["Develop"],
        "url": "http://localhost:4000/prismagram/prismagram-7/",
        "teaser": null
      },{
        "title": "[ETC] 압력용기 수입 인증에 관하여",
        "excerpt":"개요 중국에서 60L에 6Bar 짜리 압력탱크를 수입하여 사용하려고 하는데 관련 법령과 검사기준을 정리하겠습니다. 1. 인증을 받아야 하는 경우 안전 및 검사기준(노동부 고시 제2001-59호) 제2조의 규정에 의하여 화학공정 유체취급용기 및 모든 사업장의 공기 및 질소저장탱크 등으로서 사용압력이 게이지 압력으로 0.2㎏f/㎠ (20 kpa) 이상이 되고, 사용압력 (단위：㎏f/㎠)과 용기 내용적 (단위：㎥) 의 곱의...","categories": ["Trade"],
        "tags": ["인증","무역"],
        "url": "http://localhost:4000/trade/tank/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 8. nodemailer를 활용한 메일보내기 - Part1",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 await, async, _, args 등 JavaScript내용은 따로 정리하겠습니다. 1. nodemailer 설치하기 nodemailer를 활용하여 메일을 보내봅시다. 먼저 nodemailer를 설치합니다. yarn add nodemailer nodemailer를 설치했으면 utils.js에 메일에 들어갈 내용을 작성해줍니다. export const sendMail = email =&gt; null; export const sendSecretMail = (adress, secret) =&gt; { const...","categories": ["prismagram"],
        "tags": ["Develop","Issue"],
        "url": "http://localhost:4000/prismagram/prismagram-8/",
        "teaser": null
      },{
        "title": "[Engineering] 솔리드웍스를 활용한 체적구하기",
        "excerpt":"1. 모델 설계하기 간단하게 내부 체적을 구할 수 있는 그릇을 설계합니다. 2. 물성치 확인하기 평가탭에서 물성치를 클릭하여 확인합니다. 3. 원하는 체적만큼 피처 생성하기 피쳐탭에서 기준면을 생성합니다. 이때 체적이 채워지는 높이까지 면을 생성합니다. 기준면을 생성하였으면 교차기능을 활용하여 내부를 채워줍니다. 이때, 면과 바디를 선택하고 내부영역 작성을 선택합니다. 4. 체적 확인하기 생성된 내부...","categories": ["Engineering"],
        "tags": ["해석","솔리드웍스"],
        "url": "http://localhost:4000/engineering/fusion-1/",
        "teaser": null
      }]
