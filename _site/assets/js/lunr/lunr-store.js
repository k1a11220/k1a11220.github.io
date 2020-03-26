var store = [{
        "title": "기술 블로그를 시작하며",
        "excerpt":"Hello World! 안녕하세요 디자인 엔지니어 손범수입니다! 올해 고등학교를 졸업하고 20살이 되었습니다. 하고 싶은 것들은 많고 해야 할 것도 많습니다. 작년 요맘때쯤 웹 프로그래밍을 접하면서 제 많은 것들이 달라졌습니다. 처음으로 html, css, vanila JS를 알게 되었고, 다양한 서비스를 직접 만들어보며 많은 것들을 직접 배워왔습니다. 하지만 가끔씩 사이드 프로젝트로 몇 번씩 코드를...","categories": ["ETC"],
        "tags": ["intro","안녕하세요!"],
        "url": "http://k1a11220.github.io/etc/introducing/",
        "teaser": null
      },{
        "title": "[prismagram] 인스타그램 클론코딩",
        "excerpt":"인스타그램 클론코딩 Nomad Coders에서 제공하는 Prismagram 프로젝트. 인스타그렘을 클론코딩하며 백엔드와 프론트엔드를 직접 구현해보며, 풀스택 개발을 할 수 있다. 풀스택 개발자가 되기 위해 시작하는 첫 번쨰 클론코딩. 10주완성을 목표로 하고, 완료 후에는 바로 사이드프로젝트를 하나 만들어 응용해볼 예정. ## 백엔드 - Prisma, GraphQL을 사용하여 서버구성 - Express와 NodeJS Passport JWT를 사용하여...","categories": ["prismagram"],
        "tags": ["Develop"],
        "url": "http://k1a11220.github.io/prismagram/prismagram-0/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 1. 프로젝트 생성, 셋업하기",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 프로젝트 셋업하기 1. 프로젝트 생성 Github에서 Repository 만들기 .gitignore: Node yarn init 혹은 npm init 한뒤 Git 연동. 2. GraphQL 서버 구축을 위한 라이브러리 설치 graphql-yoga yarn add graphql-yoga nodemon -D (src/server.js에 있는 코드를 실행하는 script를 작성하는데 필요합니다.) yarn add nodemon -D babel-cli -D...","categories": ["prismagram"],
        "tags": ["Develop","Issue"],
        "url": "http://k1a11220.github.io/prismagram/prismagram-1/",
        "teaser": null
      },{
        "title": "[Issue] git fatal: remote origin already exists. 에러 해결법",
        "excerpt":"원인   깃허브에 먼저 레포지토리를 생성 후 기존 로컬에 있던 폴더를 오리진 설정시 생기는 오류입니다.   해결방법   따라서 이때 remote origin을 하기 전 git remote rm origin을 실행한 뒤 다시 git remote origin {link} 하면 해결됩니다.  ","categories": ["Issue"],
        "tags": ["Develop","Issue"],
        "url": "http://k1a11220.github.io/issue/issue-1/",
        "teaser": null
      },{
        "title": "[Engineering] 1. 사다리꼴(TR)나사를 이용한 지그설계",
        "excerpt":"개요 파이프를 고정하면서 단순히 누르기만 하면 구멍이 가공되는 지그를 개발하고있습니다. 드릴가동은 모터를 사용하여 해결하였지만, 드릴에 수직방향의 힘을 균등하게 주는 방법을 생각하고 있었는데 사다리꼴나사를 이용하면 좋을 것 같아 사다리꼴나사를 통한 설계를 해보려고 합니다. 1. 사다리꼴나사란 정의 “사다리꼴나사”(이)란 나사산의 단면이 사다리꼴이고, 나사산 각도가 30˚ 내외인 나사[원통 또는 원기둥의 표면에 나선(螺旋) 모양의 홈을...","categories": ["Engineering"],
        "tags": ["기구설계","사다리꼴 나사"],
        "url": "http://k1a11220.github.io/engineering/jig/",
        "teaser": null
      },{
        "title": "[Issue] shell-init: error retrieving current directory: getcwd: cannot access parent directories: Operation not permitted 에러 해결법",
        "excerpt":"원인   삭제된 디렉토리에서 명령을 실행할 때 생기는 오류입니다.   해결방법   cd ..를 통해 삭제된 디렉토리에서 나간 뒤 다시 접근하면 해결됩니다.  ","categories": ["Issue"],
        "tags": ["Develop","Issue"],
        "url": "http://k1a11220.github.io/issue/Issue-2/",
        "teaser": null
      },{
        "title": "[Issue] react build시 index.html 빈화면이 나오는 이슈",
        "excerpt":"원인   index.html에서의 static/js와 css 경로가 잘못되었기 때문입니다.  chorme에서 개발자도구를 열어보면 콘솔에 다음과 같은 오류가 나옵니다.      해결방법   js와 css경로가 /static/….으로 되어있는데 ./static으로 변경해주시면 문제없이 출력됩니다.   &lt;link href=\"/static/css/main.ab056bcf.chunk.css\" rel=\"stylesheet\"&gt;   &lt;/script&gt;&lt;script src=\"/static/js/2.fc65b5d6.chunk.js\"&gt;&lt;/script&gt;   &lt;script src=\"/static/js/main.6527b855.chunk.js\"&gt;&lt;/script&gt;  저렇게 /경로로 되어있는 코드들을 수정해주셔야 합니다.   &lt;link href=\"./static/css/main.ab056bcf.chunk.css\" rel=\"stylesheet\"&gt;   &lt;/script&gt;&lt;script src=\"./static/js/2.fc65b5d6.chunk.js\"&gt;&lt;/script&gt;   &lt;script src=\"./static/js/main.6527b855.chunk.js\"&gt;&lt;/script&gt;  이렇게 수정해주시면 문제없이 출력됩니다.  ","categories": ["Issue"],
        "tags": ["Develop","Issue"],
        "url": "http://k1a11220.github.io/issue/Issue-3/",
        "teaser": null
      },{
        "title": "[Issue] react start 시 Using target=_blank without rel=noopener noreferrer is a security risk 이슈",
        "excerpt":"원인 Tabnabbing 피싱 공격에 노출될 수 있기 때문입니다. Tabnabbing 피싱 공격이란 target_blank인 태그를 클릭하였을 때 새롭게 열린 탭에서 기존 페이지를 피싱페이지로 바꿔 정보를 탈취하는 피싱공격입니다. 간단한 예시 A페이지에서 사용자가 blank 속성의 테그를 클릭하여 B페이지로 이동 -&gt; 다시 A페이지로 돌아왔을 때는 A페이지 처럼 보이는 피싱사이트로 바뀜. 해결방법 target=”_blank” 와 rel=”noopener noreferrer”을...","categories": ["Issue"],
        "tags": ["Develop","Issue"],
        "url": "http://k1a11220.github.io/issue/Issue-4/",
        "teaser": null
      },{
        "title": "[prismagram] [BackEnd] 2. typeDefs, Resolvers 만들기",
        "excerpt":"모든 내용은 MacOS Catalina 기준으로 작성되었습니다 1. morgan 설치하기 logging module인 morgan을 추가합니다. yarn add morgan server.js에 morgan을 추가합니다. import logger from \"morgan\"; server.express.use(logger(\"dev\")); morgan을 추가하면 console에 다음과 같이 실시간으로 포트가 출력됩니다. POST / 200 121.032 ms - 25787 POST / 200 22.315 ms - 25787 GET / 200 0.159...","categories": ["prismagram"],
        "tags": ["Develop","Issue"],
        "url": "http://k1a11220.github.io/prismagram/prismagram-2/",
        "teaser": null
      }]
