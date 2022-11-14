import math
List =[]
for i in range(5):
  List.append(int(input()))
  List.sort()
  print(sum(List)//5)
  print(List[math.ceil(len(List)/2)-1])
