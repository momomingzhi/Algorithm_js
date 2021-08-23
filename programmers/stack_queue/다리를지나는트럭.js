/*
트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

큐 이용한 풀이
큐를 다리길이만큼 선언하여 0으로 초기화하는 거 생각 못함
*/
function solution(bridge_length, weight, truck_weights) {
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let time = 0;
  while (bridge.length) {
    bridge.shift();
    time += 1;
    if (truck_weights.length) {
      let sum = bridge.reduce(function add(sum, curValue) {
        return sum + curValue;
      });

      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }
  return time;
}
