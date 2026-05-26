const questions = [

  {
    id: 1,
    category: "오차론",
    question: "측량에서 측정값의 대푯값은 참값을 대표하므로 측량의 신뢰도는 정밀도보다는 정확도로 측정한 상대오차로 평가한다.",
    answer: false,
    explanation: "신뢰도는 일반적으로 정확도보다 정밀도(반복성)에 의해 평가한다."
  },

  {
    id: 2,
    category: "거리측량",
    question: "강철테이프가 표준온도보다 높은 기온에서는 측량결과의 거리는 실제거리보다 길다.",
    answer: false,
    explanation: "온도가 높아지면 테이프가 늘어나므로 실제보다 짧게 측정된다."
  },

  {
    id: 3,
    category: "수준측량",
    question: "수준측량에서 기계의 정준이나 표척면읽기에서 발생하는 오차는 일반적으로 허용오차 범위 내이다.",
    answer: true,
    explanation: "일반적인 수준측량에서는 허용오차 범위 내로 관리된다."
  },

  {
    id: 4,
    category: "삼각측량",
    question: "유심삼각망은 넓은 지역의 측량에 주로 적용되고, 단열삼각망보다는 상대적으로 정확도가 낮은 삼각망이다.",
    answer: false,
    explanation: "유심삼각망은 단열삼각망보다 정확도가 높다."
  },

  {
    id: 5,
    category: "삼각측량",
    question: "평면삼각측량의 경우 위도, 경도 등의 계산에서 지구의 곡률을 고려할 필요가 없다.",
    answer: true,
    explanation: "평면삼각측량은 좁은 지역을 평면으로 가정한다."
  },

  {
    id: 6,
    category: "GPS",
    question: "GPS측량에서 GPS의 위치를 계산하려면 이론 상 최소 3개의 위성 신호가 필요하나, 실제는 시간오차를 고려하기 위해 4개 이상의 위성 신호를 이용한다.",
    answer: true,
    explanation: "실제 GPS 위치결정에서는 수신기 시계오차 보정을 위해 4개 이상의 위성이 필요하다."
  },

  {
    id: 7,
    category: "노선측량",
    question: "노선측량의 확폭(Widening) 또는 확도(Slack)는 곡선 구간의 차폭을 조정하기 위한 값을 말한다.",
    answer: true,
    explanation: "곡선부에서 차량 주행 안전을 위해 차폭을 넓히는 개념이다."
  },

  {
    id: 8,
    category: "터널측량",
    question: "터널 측량은 기술적으로 어려운 조건에서 이뤄지는 경우가 많아, 정확도가 낮은 간이 측량이 대부분이다.",
    answer: false,
    explanation: "터널측량은 높은 정확도가 요구되는 정밀측량이다."
  },

  {
    id: 9,
    category: "원격탐사",
    question: "인공위성을 이용한 원격탐사는 태양 복사가 지표면에 반사되어 나가는 빛을 관측하기 때문에 구름에 가려지거나 빛이 약한 야간에는 적용이 불가능하다.",
    answer: false,
    explanation: "레이더 원격탐사 등은 야간이나 구름 상태에서도 가능하다."
  },

  {
    id: 10,
    category: "사진측량",
    question: "사진측량에서 우리나라는 횡중복보다 종중복을 크게 하는 것이 일반적이다.",
    answer: true,
    explanation: "일반적으로 종중복 약 60%, 횡중복 약 30%를 사용한다."
  },

  {
    id: 11,
    category: "기초측량",
    question: "측량에서 야장(Field note)은 현장의 상황이나 측정값을 기록한 것으로 수정의 편의를 위해 연필로 작성하는 것이 원칙이다.",
    answer: false,
    explanation: "야장은 영구 기록물이므로 잉크 작성이 원칙이다."
  },

  {
    id: 12,
    category: "측지측량",
    question: "측지측량은 지구의 곡률을 고려하지 않고 평면으로 가정한다.",
    answer: false,
    explanation: "측지측량은 지구 곡률을 고려한다."
  },

  {
    id: 13,
    category: "삼각측량",
    question: "어떤 한 각을 측정할 때 4배각법으로 측정하면, 단각을 4회 측정하여 평균한 각도의 오차보다 항상 크다.",
    answer: false,
    explanation: "배각법은 일반적으로 오차를 줄이는 효과가 있다."
  },

  {
    id: 14,
    category: "삼각측량",
    question: "삼각측량의 변 방정식이란 변의 길이를 보정하기 위하여 적용하는 관계식을 말한다.",
    answer: false,
    explanation: "변방정식은 여러 경로로 계산한 변 길이가 같아야 한다는 조건식이다."
  },

  {
    id: 15,
    category: "하천측량",
    question: "하천에서 유속은 일반적으로 수표면에서 가장 빠르다.",
    answer: true,
    explanation: "하상 마찰의 영향이 적은 수표면 부근의 유속이 가장 빠르다."
  },

  {
    id: 16,
    category: "오차론",
    question: "유효자리가 서로 다른 측정값들을 연산할 때 항상 가장 큰 유효숫자로 각 측정치를 반올림한 후 연산하는 것이 바람직하다.",
    answer: false,
    explanation: "가장 작은 유효숫자 기준으로 계산해야 한다."
  },

  {
    id: 17,
    category: "거리측량",
    question: "EDM은 전자파의 전파속도와 전파가 이동하는데 걸린 시간을 측정하여 정밀도가 높게 거리를 측정할 수 있는 장비이다.",
    answer: true,
    explanation: "전자파의 이동시간 또는 위상차를 이용해 거리를 측정한다."
  },

  {
    id: 18,
    category: "삼각측량",
    question: "어떤 한 각을 측정할 때 6배각법으로 측정하면, 단각을 6회 측정하여 평균한 각도의 오차보다 항상 크다.",
    answer: false,
    explanation: "배각법은 오차 감소 효과가 있다."
  },

  {
    id: 19,
    category: "오차론",
    question: "측량에서 측정값의 참값을 알 수 없는 경우가 많기 때문에 이를 대신해 대푯값을 사용하는데 산술평균이 가장 널리 이용된다.",
    answer: true,
    explanation: "산술평균은 대표값으로 가장 널리 사용된다."
  },

  {
    id: 20,
    category: "하천측량",
    question: "하천 측량은 하천의 단면 형상이나 구배를 측정하여 종/횡단면도를 작성하는 것이 목적으로 수심이나 유속, 유량 등은 측정 대상이 아니다.",
    answer: false,
    explanation: "하천측량에는 수심, 유속, 유량 측정도 포함된다."
  },

  {
    id: 21,
    category: "평판측량",
    question: "평판측량에서 시오삼각형의 문제는 3점의 미지점에서 기지점을 시준할 때(후방교회) 그 방향선이 한 지점에서 만나지 않기 때문에 발생한다.",
    answer: true,
    explanation: "후방교회법에서 방향선이 한 점에 만나지 않아 시오삼각형이 발생한다."
  },

  {
    id: 22,
    category: "사진측량",
    question: "우리나라는 사진측량에서 종중복도보다 횡중복도가 크다.",
    answer: false,
    explanation: "우리나라는 종중복도가 더 크다."
  },

  {
    id: 23,
    category: "기초측량",
    question: "측량은 고대 토지 경계 결정을 위해 시작되었고, 지도/해도의 필요성 때문에 비약적으로 발전하였으며, 최근에는 항공/인공/GPS 측량을 통해 얻은 많은 정보를 처리하는 기술을 포함한다.",
    answer: true,
    explanation: "현대 측량은 공간정보 처리 기술까지 포함한다."
  },

  {
    id: 24,
    category: "하천측량",
    question: "하천의 흐름은 수심에 따라 다른데 표면유속이 일반적으로 가장 크다.",
    answer: true,
    explanation: "마찰 영향이 적은 표면부의 유속이 가장 빠르다."
  },

  {
    id: 25,
    category: "사진측량",
    question: "사진측량에서 축척은 측정고도 H와 초점거리 f에 의하여 결정된다.",
    answer: true,
    explanation: "사진축척은 일반적으로 f/H 관계를 따른다."
  },

  {
    id: 26,
    category: "GPS",
    question: "GPS측량에서 관측 순간의 GPS의 위치를 계산하기 위해 최소 3개 이상의 위성 관측이 필요하다.",
    answer: false,
    explanation: "실제 GPS 위치결정에는 수신기 시계오차 보정을 위해 최소 4개 이상의 위성이 필요하다."
  },

  {
    id: 27,
    category: "평판측량",
    question: "평판측량에서 시오삼각형은 측선의 교점이 한 점에서 만나지 않아서 생기는 오차삼각형으로 후방교회법에서 발생하는 문제이다.",
    answer: true,
    explanation: "후방교회법에서 대표적으로 발생하는 문제이다."
  },

  {
    id: 28,
    category: "측량계산",
    question: "거리가 L인 선분의 위거는 그 방위의 각도 크기로부터 L×sin(방위각)으로 정의된다.",
    answer: false,
    explanation: "일반적으로 위거 = L cosθ, 경거 = L sinθ 로 정의한다."
  },

  {
    id: 29,
    category: "오차론",
    question: "측정치는 확정치와 불확실치로 구성된다.",
    answer: true,
    explanation: "모든 측정값에는 불확실성이 존재한다."
  },

  {
    id: 30,
    category: "삼각측량",
    question: "유심삼각망은 넓은 지역의 측량에 주로 적용되고, 단열 삼각망보다는 상대적으로 정확도가 가장 높은 삼각망이다.",
    answer: false,
    explanation: "가장 정확한 삼각망은 일반적으로 사변형망이다."
  },

  {
    id: 31,
    category: "하천측량",
    question: "하천의 유속분포는 일반적으로 하천 바닥에서 가장 빠르다.",
    answer: false,
    explanation: "하상 마찰 때문에 표면부 유속이 더 빠르다."
  },

  {
    id: 32,
    category: "체적계산",
    question: "체적계산법 중 각주공식이 가장 정확한 값을 나타낸다.",
    answer: true,
    explanation: "각주공식은 체적 계산법 중 일반적으로 가장 정확하다."
  },

  {
    id: 33,
    category: "GPS",
    question: "GPS측량을 위해선 관측 순간의 GPS의 위치를 결정하기 위해 최소 3개 이상의 위성 관측이 필요하다.",
    answer: false,
    explanation: "실제 위치결정에는 최소 4개 이상의 위성이 필요하다."
  },

  {
    id: 34,
    category: "오차론",
    question: "123.4×23.1의 값을 유효숫자를 고려하여 정확하게 표시하면 2850.5이다.",
    answer: false,
    explanation: "유효숫자를 고려하면 적절한 값은 2851이다."
  },

  {
    id: 35,
    category: "거리측량",
    question: "보측에 의한 거리 측량은 간접측량으로 분류한다.",
    answer: false,
    explanation: "보측은 직접 거리측량이다."
  },

  {
    id: 36,
    category: "수준측량",
    question: "수준측량의 시준거리 100m에 대한 구차는 기차보다 크다.",
    answer: true,
    explanation: "100m 시준거리에서 구차는 기차보다 더 크게 나타난다."
  },

  {
    id: 37,
    category: "트래버스측량",
    question: "폐합트래버스의 조건은 편각의 합이 360°를 만족해야한다.",
    answer: false,
    explanation: "폐합트래버스의 기본 조건은 내각합 조건이다."
  },

  {
    id: 38,
    category: "측량계산",
    question: "한 선분의 경거는 그 방위의 각도 크기 a, 거리 L로부터 L×sin(a)로 정의된다.",
    answer: true,
    explanation: "일반적으로 경거 = L sinθ 로 정의한다."
  },

  {
    id: 39,
    category: "공사측량",
    question: "공사측량의 내용에는 중심선 설치, 경계말뚝 설치, 공사 중 검사 측량 등을 포함한다.",
    answer: true,
    explanation: "대표적인 공사측량 작업이다."
  },

  {
    id: 40,
    category: "노선측량",
    question: "노선측량의 칸트(cant)는 곡선 구간 중 차폭을 조정하기 위한 값을 말한다.",
    answer: false,
    explanation: "칸트는 곡선부의 편경사를 의미한다."
  },

  {
    id: 41,
    category: "사진측량",
    question: "사진측량은 측량 정도의 균일성이 높다.",
    answer: true,
    explanation: "동일 촬영조건으로 균일한 품질 확보가 가능하다."
  },

  {
    id: 42,
    category: "사진측량",
    question: "사진측량은 정성적 측정을 할 수 없다.",
    answer: false,
    explanation: "사진 판독을 통한 정성적 분석도 가능하다."
  },

  {
    id: 43,
    category: "사진측량",
    question: "사진측량은 접근하기 어려운 대상물의 측정도 가능하다.",
    answer: true,
    explanation: "항공 및 위성 촬영으로 접근 곤란 지역도 측량 가능하다."
  },

  {
    id: 44,
    category: "사진측량",
    question: "사진측량은 넓은 지역을 측량할 때 경제적이며, 축척의 변경이 어렵다.",
    answer: false,
    explanation: "사진측량은 축척 변경이 비교적 용이하다."
  },

  {
    id: 45,
    category: "사진측량",
    question: "사진측량은 일기에 영향을 받으며, 시야가 차단되는 곳은 측량할 수 없다.",
    answer: true,
    explanation: "구름, 안개, 수목 등에 의해 영향을 받는다."
  },

  {
    id: 46,
    category: "사진측량",
    question: "사진측량은 피사물과 관련 없이 식별성이 매우 높다.",
    answer: false,
    explanation: "식별성은 대상물 특성과 해상도 등에 따라 달라진다."
  },

  {
    id: 47,
    category: "사진측량",
    question: "사진측량의 축척은 측정고도 H와 초점거리 f에 의하여 결정된다.",
    answer: true,
    explanation: "사진축척은 일반적으로 f/H 관계를 따른다."
  }

];

window.questions = questions;