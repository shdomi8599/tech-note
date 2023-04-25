export const IMPOTANCE: string[] = [
  "별없음 : 중요 X, 자주 X",
  "★ : 상대적 중요 O, 자주 X",
  "★★ : 중요 O, 자주 X",
  "★★★ : 중요 O, 자주 O",
];

type StarRating = "" | "★" | "★★" | "★★★";
export type Category = {
  [key: string]: CategoryData;
};
export type CategoryData = {
  [key: string]: Content;
};
export type Content = {
  star: StarRating;
  content: string;
};

export const COOKAPPS: Category[] = [
  {
    기술면접: {
      "일반적으로 JavaScript를 불러오기위해<script>요소를 <body>요소가 끝나기 직전에 배치합니다. 이유가 무엇인가요?":
        {
          star: "",
          content:
            "일반적으로 <body> 요소가 끝나기 전에 <script> 요소를 작성을 하는 이유는 HTML이 다 파싱되고 난 후에 JavaScript을 적용하기 위해서입니다. HTML이 다 불러와지지 않고, JavaScript를 실행(execute)하기 시작하면 JavaScript 프로그램에서 의도했던 바와 다르게 DOM에서 원하는 HTML 요소를 불러오지 못할 수 있습니다. 이를 방지하기 위해서 JavaScript를 불러오기 위한 <script> 요소는 <body> 요소가 끝나기 직전에 작성합니다.",
        },
      "<li>요소는왜<ul>요소의 자식요소여야만하나요?": {
        star: "",
        content:
          "화면 상으로는 아무런 문제가 없더라도 이렇게 각 요소의 의미에 맞게(시맨틱하게) HTML을 작성하는 것이 어떤 개발자가 와서 보더라도 쉽게 이해할 수 있기 때문에 중요하다고 생각합니다.",
      },
      "id속성과 class속성의 차이에 대해서 설명해주세요.": {
        star: "",
        content:
          "id 속성과 class 속성의 차이는 고유성에 있습니다. id는 고유한 하나의 요소를 정하는데 사용하고, class는 여러 요소들에 사용할 수 있습니다. 하나의 HTML 요소에 적용된 id의 값은 다른 요소에는 적용되어선 안됩니다. 어떤 요소에 id 속성을 부여한다는 것은 그 HTML 요소가 유일함을 확인할 수 있는 수단이기 때문입니다. ",
      },
      "CSSboxmodel에 대해서 설명해주세요.": {
        star: "",
        content:
          "CSS box model에 따르면, Box는 총 4가지 요소(margin, border, padding, content)로 구성됩니다. content는 HTML 태그 사이에 담기는 내용을 표현하고, padding은 content와 border사이의 공간을 의미합니다. border는 Box의 경계를 표시하는 역할을 합니다. margin은 다른 박스와의 간격을 의미합니다.",
      },
      "스코프에 대해서 설명해주세요.": {
        star: "",
        content:
          "스코프는 변수 접근 규칙에 따른 유효 범위를 의미합니다. 안쪽 스코프에서 바깥쪽 스코프로는 접근할 수 있지만, 반대는 불가능하고, 중첩이 가능하다는 규칙이 있습니다. 이 규칙이 있어서 함수 body(중괄호) 내에서 전역 혹은 외부 스코프의 변수에 접근할 수 있습니다",
      },
      "배열, 객체를 const로 선언했는데 요소나 속성을 추가할 수 있는 이유에 대해서 설명해주세요.":
        {
          star: "",
          content:
            "배열과 객체는 참조 자료형입니다. 참조 자료형의 경우에는 변수에 값 자체가 아닌 주소를 할당합니다. 따라서 const 키워드로 선언 및 할당을 하더라도, 해당 변수에는 주소만 담겨있기 때문에 요소나 속성을 추가할 수 있습니다.",
        },
      "원시자료형과 참조자료형에 대해서 설명해주세요.": {
        star: "",
        content:
          "원시 자료형은 변수에 할당할 때 값 자체가 할당이 되고, 참조 자료형은 변수에 할당할 때 주소가 할당됩니다. 원시 자료형은 숫자, 문자열, 불린등 주로 하나의 값을 의미하는 타입이고, 참조 자료형은 배열, 객체와 같은 여러 개의 데이터를 가지는 타입이 있습니다. ",
      },
      "얕은복사와 깊은복사에 대해서 설명해주세요.": {
        star: "",
        content:
          "자바스크립트에서의 얕은 복사(shallow copy)는 객체를 복사할 떄, 객체의 속성 중 값이 참조 자료형인 경우 해당 주소만 카피하는 것을 의미하고, 깊은 복사는 주소만 카피하지 않고, 값을 모두 복사하는 것을 의미합니다.",
      },
      "preventDefalut 메소드는 무엇인가요?": {
        star: "",
        content:
          "preventDefalut는 해당 이벤트에 기본적으로 설정된 기본 액션을 동작하지 않게 만드는 메서드입니다.",
      },
      "innerHTML메서드와 textContent메서드의 차이에 대해서 설명해주세요.": {
        star: "",
        content:
          "innerHTML은 HTML 태그를 인식하여 DOM 조작하는 것 처럼 화면에 HTML 요소로 적용하여 넣어주는 반면에 textContent는 HTML 태그를 일반 텍스트 노드로 인식하여 HTML 요소로 적용하여 넣어주지 못합니다.",
      },
      "Promise의 기능과 필요한 이유에 대해서 설명해 주세요.": {
        star: "",
        content:
          "Promise는 비동기 작업을 처리하고, 작업이 완료되면 결과값이나 에러를 처리할 수 있는 콜백 함수를 등록할 수 있는 객체입니다. Promise를 사용하면 콜백 지옥(callback hell)을 해결하고, 코드의 가독성과 유지보수성을 높일 수 있습니다.",
      },
      "순수함수란 무엇인가요? 불변성과 사이드 이펙트와 연결하여 설명해 주세요.":
        {
          star: "",
          content:
            "순수 함수는 입력값에 대한 결과값이 항상 동일하며, 함수 외부의 상태를 변경하지 않는 함수이며, 이를 통해 불변성을 지키고 사이드 이펙트를 방지합니다.",
        },
      "React의 state와 props에 대해서 설명해 주세요.": {
        star: "",
        content:
          "React에서 state는 컴포넌트 내에서 관리되는 상태 데이터이며, props는 부모 컴포넌트로부터 전달받은 속성 값입니다. state는 내부에서 변경 가능하고, 변경 시 컴포넌트를 다시 렌더링하며, props는 변경 불가능하고 자식 컴포넌트에서 참조하여 사용할 수 있습니다.",
      },
      "React 컴포넌트의 key 속성에 대해서 설명해 주세요.": {
        star: "",
        content:
          "React에서 컴포넌트의 key는 각각의 컴포넌트를 고유하게 식별하는 속성입니다. key는 컴포넌트 배열을 렌더링할 때 성능을 최적화하는 데에도 사용됩니다. key가 제대로 설정되지 않으면 컴포넌트 배열의 재배치가 발생하여 성능 저하 및 예상치 못한 동작이 발생할 수 있습니다.",
      },
      "useEffect의 dependency array에 대해서 설명해 주세요.": {
        star: "",
        content:
          "React의 useEffect 훅에서 dependency array는 해당 효과(effect)가 의존하는 상태(state)나 props의 값의 배열입니다. dependency array를 설정하면 해당 값들이 변경될 때만 useEffect 효과가 실행됩니다. 만약 dependency array를 빈 배열로 설정하면, 컴포넌트가 마운트될 때 한 번만 useEffect 효과가 실행됩니다.",
      },
      "CSR과 SSR의 차이점에 대해서 설명해 주세요.": {
        star: "",
        content:
          "CSR(Client-Side Rendering)은 웹 애플리케이션의 초기 로딩 시 클라이언트 측에서 JavaScript를 사용하여 화면을 동적으로 생성하는 방식입니다. 반면, SSR(Server-Side Rendering)은 서버 측에서 초기 HTML을 생성하여 클라이언트에 전송하고, 이후 JavaScript를 사용하여 애플리케이션을 동적으로 렌더링하는 방식입니다. CSR은 초기 로딩 속도가 빠르고 사용자 경험이 좋지만, 검색 엔진 최적화(SEO)에 불리하다는 단점이 있습니다. 반면, SSR은 초기 로딩 속도가 느리고 서버에 부하가 발생하지만, SEO에 유리하다는 장점이 있습니다.",
      },
      "GET 메서드와 POST 메서드의 차이점에 대해 설명해 주세요.": {
        star: "",
        content:
          "HTTP의 GET 메서드는 서버에서 데이터를 조회할 때 사용하는 요청 방식입니다. URL의 쿼리스트링으로 데이터를 전달하며, 요청의 본문(body)이 없습니다. 반면 POST 메서드는 서버에 데이터를 전송할 때 사용하는 요청 방식입니다. 요청 본문에 데이터를 담아 전송하며, 데이터의 크기에 제한이 없습니다. GET은 캐싱 가능하고, 브라우저 기록에 남을 수 있습니다. POST는 캐싱되지 않으며, 브라우저 기록에 남지 않습니다. 따라서, GET은 조회할 때 사용하고, POST는 데이터를 생성하거나 수정, 삭제할 때 사용합니다.",
      },
      "HTTP 메시지 구조에 대해 설명해 주세요.": {
        star: "",
        content:
          "HTTP 메시지는 시작줄, 헤더, 본문 세 부분으로 구성됩니다. 시작줄은 요청 메시지와 응답 메시지 모두에 포함되며, 요청의 경우는 요청 라인, 응답의 경우는 상태 라인이 포함됩니다. 헤더는 시작줄 다음에 위치하며, 여러 개의 필드로 구성되어 메시지의 부가 정보를 담고 있습니다. 본문은 필수적이지 않으며, 메시지에 포함될 수 있는 엔티티(자원)의 실제 데이터를 담고 있습니다. 이러한 구조를 이용하여 HTTP 메시지는 클라이언트와 서버 간의 통신에 사용됩니다.",
      },
      "Same-Origin Policy에 대해서 설명해 주세요.": {
        star: "",
        content:
          "Same-Origin Policy는 브라우저 보안을 위해 적용되는 정책으로, 스키마, 호스트, 포트가 동일한 출처(origin)끼리만 서로 자원을 공유할 수 있도록 제한하는 것입니다. 이는 다른 출처에서 요청한 리소스로 인한 보안 문제를 방지하기 위해 사용됩니다.",
      },
      "CORS에 대해서 설명해 주세요.": {
        star: "",
        content:
          "CORS(Cross-Origin Resource Sharing)는 Same-Origin Policy를 우회하기 위한 방법 중 하나로, 서로 다른 출처 간의 자원 공유를 허용하는 메커니즘입니다. CORS는 브라우저에서 처리되며, 서버에서 허용할 출처, 메서드, 헤더 등을 명시적으로 설정하여, 요청을 허용하도록 설정할 수 있습니다. 이를 통해 보안성을 유지하면서 다른 출처에서 요청한 자원에 대한 접근을 허용할 수 있습니다.",
      },
      "재귀가 무엇이고, 활용하기 좋은 상황은 언제인지 예시를 들어 설명해 주세요.":
        {
          star: "",
          content:
            "재귀는 함수가 자기 자신을 호출하는 것을 말하며, 팩토리얼 계산이나 피보나치 수열 등의 작업을 할 때 재귀를 사용하여 간단하고 직관적으로 해결할 수 있습니다.",
        },
      "UI, UX의 개념과 두 개념의 관계에 대해서 설명해 주세요.": {
        star: "",
        content:
          "UI(사용자 인터페이스)는 사용자가 어떻게 상호작용할 수 있는지를 결정하는 것으로, 디자인적인 측면에 중점을 둡니다. 반면, UX(사용자 경험)는 사용자가 제품 또는 서비스를 사용하는 과정에서 느끼는 전반적인 경험을 의미하며, 사용자가 불편한 경험을 하지 않도록 기능과 디자인, 플로우 등을 설계하는 것에 중점을 둡니다. 두 개념의 관계는 UI가 UX의 일부분으로, 좋은 UI를 가진 제품이 좋은 UX를 제공하는 것이라고 할 수 있습니다. UI가 사용자가 어떻게 상호작용할 수 있는지를 결정하므로, UI가 편리하고 직관적이고 시각적으로 매력적이면 사용자가 더욱 편안하게 제품을 사용할 수 있으며, 이는 결과적으로 좋은 UX를 제공합니다.",
      },
      "useRef가 필요한 상황을 예시를 들어 설명해 주세요.": {
        star: "",
        content:
          "useRef는 DOM 요소나 변수를 기억하고 다시 사용할 수 있게 해주는 Hook입니다. 예를 들어, 특정 input 요소에 대한 포커싱을 설정하거나, 이전 값과 새 값의 변경 여부를 추적하는 등의 작업에서 useRef가 유용하게 사용될 수 있습니다.",
      },
      "상태관리 라이브러리의 필요성에 대해서 설명해 주세요.": {
        star: "",
        content:
          "상태관리 라이브러리는 대규모 애플리케이션에서 발생하는 복잡한 상태 관리를 쉽게 하기 위한 라이브러리입니다. 컴포넌트 간의 데이터 흐름을 더욱 간편하게 관리하고, 코드의 유지 보수성과 확장성을 향상시키는 데 도움이 됩니다.",
      },
      "Semantic HTML의 필요성을 예시를 들어 설명해 주세요.": {
        star: "",
        content:
          "Semantic HTML은 마크업 언어에서 의미론적인 태그를 사용하여 웹 페이지의 구조와 콘텐츠를 설명하는 것을 말합니다. 이는 웹 접근성, 검색 엔진 최적화, 유지보수 및 코드 가독성을 향상시키는 데 도움이 됩니다. 예를 들어, <nav>, <header>, <footer>와 같은 태그는 해당 콘텐츠의 역할을 명확하게 나타내어 웹 페이지의 구조를 이해하기 쉽게 만들어줍니다.",
      },
      "IP 프로토콜의 한계에 대해서 설명해 주세요.": {
        star: "",
        content:
          "IP 프로토콜의 한계는 크게 두 가지로 나눌 수 있습니다. 첫 번째는 유한한 IP 주소 공간으로 인해 IP 주소 고갈이 발생할 수 있다는 점입니다. 두 번째는 IP 프로토콜이 패킷 전송 과정에서 데이터 무결성, 기밀성, 인증 등의 보안적인 측면에서의 한계가 있어서 추가적인 보안 프로토콜이 필요하다는 점입니다. 이러한 한계를 극복하기 위해 IPv6와 같은 새로운 프로토콜이 개발되었고, 추가적인 보안 프로토콜들도 함께 사용되고 있습니다.",
      },
      "HTTP 프로토콜의 특징에 대해 설명해 주세요.": {
        star: "",
        content:
          "HTTP 프로토콜은 클라이언트와 서버 간의 통신을 위해 사용되는 애플리케이션 레벨 프로토콜이며, TCP/IP 위에서 동작합니다. HTTP는 요청-응답 방식으로 동작하며, 클라이언트가 서버에 요청(Request)을 보내면, 서버는 해당 요청을 처리한 뒤 클라이언트에 응답(Response)을 보냅니다. 또한, HTTP는 상태를 유지하지 않는 Stateless 프로토콜이며, 기본적으로 암호화되지 않은 평문 텍스트로 통신합니다. 최근에는 HTTPS 프로토콜을 통해 보안적인 측면에서 보완이 이루어지고 있습니다.",
      },
      "Cookie의 MaxAge, Expires 옵션이 무엇인지, 설정하지 않으면 어떻게 되는지 설명해 주세요.":
        {
          star: "",
          content:
            "Cookie의 MaxAge와 Expires는 둘 다 쿠키의 만료 시간을 설정하는 옵션입니다. MaxAge는 쿠키가 생성된 후 몇 초 동안 유지될지를 설정하며, Expires는 쿠키의 만료일자를 설정합니다. 이 두 옵션 중 하나를 지정해주어야만 쿠키가 삭제되는 시간이 설정됩니다. 만약 MaxAge나 Expires 옵션을 지정하지 않으면, 브라우저를 닫을 때 쿠키가 삭제됩니다. 이는 세션 쿠키라고 부르며, 유저가 웹사이트를 이용하는 동안에만 유지되는 일시적인 쿠키입니다.",
        },
      "Hoisting과 Temporal Dead Zone이 어떻게 연관되어 있는지 설명하세요.": {
        star: "",
        content:
          "Hoisting은 JavaScript에서 변수와 함수 선언을 현재 스코프의 최상위로 끌어올리는 것을 말합니다. Temporal Dead Zone은 let과 const로 선언된 변수가 실제로 선언되기 전에는 사용할 수 없는 현상을 말합니다. 이 둘은 서로 연관되어 있습니다. 변수가 선언되기 전에 해당 변수를 사용하려고 하면, 해당 변수는 TDZ에 있기 때문에 참조 오류가 발생합니다. 그러나 변수가 선언되기 전에 변수를 선언하면 변수가 호이스팅되어 해당 변수에 대한 참조를 만들 수 있습니다. 따라서 변수를 선언하기 전에 변수를 참조해도 에러가 발생하지 않습니다.",
      },
      "브라우저 렌더링 방식에 대해 설명하세요.": {
        star: "",
        content:
          "브라우저는 HTML, CSS, JavaScript 등의 웹 페이지 자원을 가져와 파싱한 후 렌더링 엔진을 사용하여 화면에 표시합니다. 렌더링 엔진은 DOM 트리와 CSSOM 트리를 만들어 레이아웃을 계산하고 최종적으로 픽셀 단위로 화면에 그립니다. 이 과정에서 브라우저는 네트워크, 캐싱, 스크립팅 등 다양한 기술을 사용하여 페이지 로딩 속도를 최적화합니다.",
      },
      "리플로우와 리페인트에 대해 설명하세요.": {
        star: "",
        content:
          "리플로우(Reflow)는 웹 페이지의 렌더링 과정 중 CSS나 DOM 요소의 변경 등으로 인해 레이아웃을 다시 계산하는 과정을 의미합니다. 리페인트(Repaint)는 레이아웃이 변경되지 않은 경우에도 색상, 투명도 등의 스타일 속성이 변경될 때 발생하는 화면 갱신 과정을 의미합니다.",
      },
      "반응형 웹은 무엇이고 장단점에 대해 설명하세요.": {
        star: "",
        content:
          "반응형 웹(Responsive Web)은 디바이스의 크기와 해상도에 따라 웹 페이지의 레이아웃과 디자인을 자동으로 조정하여 최적화된 화면을 제공하는 기술입니다. 장점은 사용자의 디바이스 크기나 해상도에 상관없이 적절한 화면을 제공할 수 있어 접근성이 높습니다. 단점으로는 초기 구현에 시간이 오래 걸리며, 모든 디바이스에서 완벽한 화면을 보장하지는 않습니다. 또한, 모바일 디바이스에서 불필요한 리소스를 다운로드하는 등 성능 이슈가 발생할 수 있습니다.",
      },
      "자바스크립트 엔진의 콜 스택이 무엇인지 설명할 수 있나요?": {
        star: "",
        content:
          "자바스크립트 엔진의 콜 스택(Call Stack)은 현재 실행 중인 함수의 정보를 저장하는 스택(Stack) 자료구조입니다. 함수가 실행되면 해당 함수의 정보(변수, 매개변수, 실행 위치 등)가 스택의 맨 위에 추가됩니다. 함수가 실행을 마치면 스택에서 해당 정보가 제거됩니다. 이렇게 스택에 정보를 추가하고 제거함으로써, 자바스크립트 엔진은 실행 중인 코드의 실행 위치와 실행 컨텍스트를 추적하고 관리할 수 있습니다. 스택이 가득 차면 스택 오버플로우(Stack Overflow)가 발생합니다.",
      },
      "번들링은 왜 필요한가요?": {
        star: "",
        content:
          "번들링은 여러 개의 파일을 하나의 파일로 묶어서 웹 애플리케이션의 성능을 향상시키기 위해 필요합니다. 번들링을 통해 로드해야 하는 파일 수를 줄이고, HTTP 요청 수를 최소화할 수 있습니다. 이는 웹 페이지 로딩 속도를 높이고, 대역폭을 절약할 수 있게 해줍니다. 또한, 번들링을 통해 파일 간의 의존성 문제를 해결할 수 있으며, 모듈화된 코드를 사용할 수 있게 됩니다.",
      },
      "Virtual DOM이 무엇이고, Virtual DOM이 어떤 면에서 좋은가요?": {
        star: "",
        content:
          "Virtual DOM은 실제 DOM(Document Object Model)을 추상화한 가상 객체입니다. 기존에는 상태 변화가 일어날 때마다 전체 DOM을 다시 그려야 하는 번거로움이 있었는데, Virtual DOM은 상태 변화 시 변경된 부분만 가상 DOM에 적용하고 이전 상태와 새로운 상태를 비교하여 실제 DOM에 최소한의 변경만 적용하게 됩니다. 이렇게 하면 불필요한 DOM 조작을 최소화할 수 있고, 빠른 업데이트 속도와 성능 개선을 이룰 수 있습니다. 또한, 프로그래머는 Virtual DOM을 조작함으로써 직접적인 DOM 조작을 하지 않아도 되어 코드 작성이 간결해지고 유지보수가 용이해집니다.",
      },
      "React Hook의 사용 규칙에 대해 설명하세요.": {
        star: "",
        content: "",
      },
      "Node.js는 싱글 스레드인가요?": {
        star: "",
        content: "",
      },
      "JavaScript는 싱글 스레드입니다. 어떻게 싱글 스레드 방식으로 비동기 호출을 할 수 있는지에 대해 설명할 수 있나요?":
        {
          star: "",
          content: "",
        },
      "Event Loop에 대해 설명할 수 있나요?": {
        star: "",
        content: "",
      },
      "가비지 컬렉션이란 무엇이며, 가비지 컬렉션을 가진 언어에는 무엇이 있나요?":
        {
          star: "",
          content: "",
        },
      "Stack과 Queue의 차이점은 무엇인가요?": {
        star: "",
        content: "",
      },
      "Tree와 Graph의 차이점은 무엇인가요?": {
        star: "",
        content: "",
      },
      "이진 탐색 방법에 대해 설명할 수 있나요?": {
        star: "",
        content: "",
      },
    },
  },
];

export const CATEGORIES = COOKAPPS.map((data) => Object.keys(data)[0]);
