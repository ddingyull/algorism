import math
import sys
n,m = map(int,sys.stdin.readline().split())
prime = list(range(2,m+1))
for i in prime:
    error = 0
    if i > 1:
        for j in range(2,math.isqrt(i)+1):
            if i%j == 0:
                error = 1
                break
    if error == 0:
        for k in prime:
            if k > n and k != i and k%i == 0:
                prime.remove(k)
for p in prime:
    if p < n:
        prime.remove(p)
print(len(prime))