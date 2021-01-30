# Table Header 고정 커스튬

React UI framework material-ui를 이용하여 Table을 생성합니다.

## Sticky

Material-ui Table 속성 Sticky를 이용하면 헤더 고정하는것은 끝

### 그럼 헤더 행 두개도 고정 되나????

첫번째 행만 고정되구 두 번째 행은 TableHeader 태그 속에 있어도 고정이 안되요ㅠㅠ
그래서 방법을 찾고 안잊어버리려고 정리하는 포스트!!

### top을 이용하여 강제로 고정

헤더 첫 번째 행의 높이만큼 두 번째 행에 top을 주어 첫번째 행 밑에 고정되게 함